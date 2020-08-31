// @ts-nocheck
import Vue from 'vue';

import 'classlist-polyfill';

import PerfectScrollbar from 'perfect-scrollbar';

import 'perfect-scrollbar/css/perfect-scrollbar.css';

const scrollBar = el => {
    //在元素上加点私货，名字随便取，确保不会和已有属性重复即可，我取名叫做_ps_
    if (el._ps_ instanceof PerfectScrollbar) {
        el._ps_.update();
    } else {
        //el上挂一份属性
        el._ps_ = new PerfectScrollbar(el, { suppressScrollY: true });
    }

    // const ele = this.$refs.table as ElTable;
};

Vue.directive('scroll-bar', {
    inserted(el) {
        const ele = el.querySelector('.el-table__body-wrapper');
        if (!ele) {
            return console.warn('未发现className为el-table__body-wrapper的dom');
        }
        // console.log(el.doLayout);
        const rules = ['fixed', 'absolute', 'relative'];

        if (!rules.includes(window.getComputedStyle(ele, null).position)) {
            console.error(`perfect-scrollbar所在的容器的position属性必须是以下之一：${rules.join('、')}`);
        }

        scrollBar(ele);
    },

    componentUpdated(el, binding, vnode) {
        const ele = el.querySelector('.el-table__body-wrapper');

        if (!ele) {
            return console.warn('未发现className为el-table__body-wrapper的dom');
        }

        vnode.context.$nextTick(() => {
            try {
                scrollBar(ele);
            } catch (error) {
                console.error(error);
            }
        });
    },
});
