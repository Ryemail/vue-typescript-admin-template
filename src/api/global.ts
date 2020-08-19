import request from '@/utils/request';

// 获取用户信息
export const getUserInfo = () => request.get('/api/getUserInfo');

// table list
export const fetchTableList = (url: string, params: object) => request.get(url, { params });
