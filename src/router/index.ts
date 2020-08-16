import Vue from 'vue';
import VueRouter, { RouteConfig, Location } from 'vue-router';
import Layout from '@/layout/index.vue';

import tableRoutes from './modules/table';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location: Location) {
    return (originalPush.call(this, location) as any).catch((err: Error) => err);
};

const routes: Array<RouteConfig> = [
    {
        path: '/form',
        name: 'form',
        component: Layout,
        meta: { active: 'form' },
        children: [
            {
                path: 'index',
                component: () => import('../views/form.vue'),
                meta: {},
            },
        ],
    },
    {
        path: '/tree',
        name: 'tree',
        meta: { active: 'tree' },
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('../views/tree.vue'),
            },
        ],
    },
    // tableRoutes,
    {
        path: '/',
        component: Layout,
        name: 'table',
        meta: { title: 'table', icon: 'el-icon-s-help' },
        children: [
            {
                path: 'table1',
                name: 'table1',
                component: () => import('@/views/table/table.vue'),
                meta: { active: 'table1' },
            },
            {
                path: 'table2',
                name: 'table2',
                component: () => import('@/views/table/table2.vue'),
                meta: { active: 'table2' },
            },
            {
                path: 'detail',
                name: 'detail',
                component: () => import('@/views/table/detail.vue'),
                meta: { active: 'table1' },
            },
        ],
    },
    {
        path: 'login',
        name: 'login',
        component: () => import('../views/login.vue'),
    },

    { path: '*', name: '404', component: () => import('@/views/404.vue') },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
