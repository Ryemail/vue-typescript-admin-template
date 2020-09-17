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
        path: '/design',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'design',
                component: () => import('../views/design/index.vue'),
                meta: {},
            },
        ],
    },
    {
        path: '/error',
        name: 'error',
        component: Layout,
        children: [
            {
                path: '404',
                name: '404',
                component: () => import('@/views/404.vue'),
            },
        ],
    },
    { path: '*', name: '*', redirect: '/error/404' },

    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue'),
    },
];

const createRouter = () =>
    new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes,
    });
const router = createRouter();

// export function resetRouter() {
//     const newRouter = createRouter();
//     router.matcher = newRouter.matcher; // reset router
// }

export default router;
