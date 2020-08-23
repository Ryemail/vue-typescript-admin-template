import axios, { Method, AxiosRequestConfig } from 'axios';

declare module 'axios' {
    export interface AxiosResponse<T = any> extends Promise<T> {
        code: number;
    }
}
interface PendingType {
    url?: string;
    method?: Method;
    params: any;
    data: any;
    cancel: Function;
}
// 取消重复请求
const pending: Array<PendingType> = [];
const CancelToken = axios.CancelToken;

const request = axios.create({
    baseURL: process.env.VUE_APP_API, // api的base_url
    timeout: 5000, // 请求超时时间
});

// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
    for (const key in pending) {
        const item: number = +key;
        const list: PendingType = pending[key];
        // 当前请求在数组中存在时执行函数体
        if (
            list.url === config.url &&
            list.method === config.method &&
            JSON.stringify(list.params) === JSON.stringify(config.params) &&
            JSON.stringify(list.data) === JSON.stringify(config.data)
        ) {
            // 执行取消操作
            list.cancel('操作太频繁，请稍后再试');
            // 从数组中移除记录
            pending.splice(item, 1);
        }
    }
};

request.interceptors.request.use(
    config => {
        console.log(config);
        removePending(config);

        config.cancelToken = new CancelToken(c => {
            pending.push({
                url: config.url,
                method: config.method,
                params: config.params,
                data: config.data,
                cancel: c,
            });
        });
        return config;
    },
    err => {
        console.log(err);
    }
);
//添加一个响应拦截器
request.interceptors.response.use(
    res => {
        const { data } = res;

        return data;
    },
    err => {
        console.log(err);
        alert('服务器异常');
    }
);

export default request;
