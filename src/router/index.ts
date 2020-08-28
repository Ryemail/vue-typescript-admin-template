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
    tableRoutes,
    {
        path: '/',
        redirect: '/home',
        component: Layout,
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/home.vue'),
            },
        ],
    },

    {
        path: '/clipboard',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'clipboard',
                component: () => import('../views/clipboard.vue'),
                meta: {},
            },
        ],
    },

    {
        path: '/form',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'form',
                component: () => import('../views/form.vue'),
                meta: {},
            },
        ],
    },

    {
        path: '/tree',

        component: Layout,
        children: [
            {
                path: 'index',
                name: 'tree',
                component: () => import('../views/tree.vue'),
                meta: {},
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
