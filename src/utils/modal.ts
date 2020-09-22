import Vue from 'vue';
import { ElMessageBoxOptions } from 'element-ui/types/message-box';

const defaultOptions: ElMessageBoxOptions = {
    type: 'info',
    title: '',
    message: '',
    showClose: false,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    distinguishCancelAndClose: true,
    dangerouslyUseHTMLString: true,
    customClass: 'dom-message-box',
};

export const modal = (options: ElMessageBoxOptions) => {
    options = { ...defaultOptions, ...options };

    const modalOptions = { ...options };

    delete modalOptions.title;
    delete modalOptions.message;

    let html = `<div class="dom-modal-title">${options.title}</div>`;

    html += `<div class="dom-modal-message">${options.message}</div>`;

    const type = options.type === 'info' ? 'question' : options.type;

    return Vue.prototype.$confirm(html, '', {
        ...modalOptions,
        iconClass: `el-icon-${type}`,
    });
};
