import Vue from 'vue';
import { G } from '@/types';

export const result = (options: G.ApiData & { onClase?: Function }) => {
    const { code, message } = options;

    const type = code === 200 ? 'success' : 'wraning';

    const title = code === 200 ? '操作成功' : '操作失败';

    const onClose = () => {
        if (code === 200) {
            //
            options.onClase && options.onClase();
        }
    };

    Vue.prototype.$notify({
        type,
        title,
        message,
        duration: 3000,
        showClose: false,
        onClose,
    });
};
