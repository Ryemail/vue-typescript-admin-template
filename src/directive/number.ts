import Vue from 'vue';

//  整数指令
Vue.directive('number', {
    inserted: function(el) {
        const reg = /^\d*\.?\d+$/,
            dom = el as HTMLElement,
            input = dom.querySelector('input') as HTMLInputElement;
        input.oninput = function() {
            input.value = input.value.replace(/[^\d.]/g, ''); //清除"数字"和"."以外的字符
            input.value = input.value.replace(/^\./g, ''); //验证第一个字符是数字
            input.value = input.value.replace(/\.{2,}/g, ''); //只保留第一个, 清除多余的
            input.value = input.value
                .replace('.', '$#$')
                .replace(/\./g, '')
                .replace('$#$', '.');
            input.value = input.value.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
        };
    },
});

// 数字指令
Vue.directive('digit', {
    inserted: function(el) {
        const dom = el as HTMLElement,
            input = dom.querySelector('input') as HTMLInputElement;
        input.oninput = function() {
            input.value = input.value.replace(/^(0+)|[^\d]+/g, '');
        };
    },
});
