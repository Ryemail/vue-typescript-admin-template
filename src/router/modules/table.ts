import Layout from '@/layout/index.vue';

export default {
    path: '/table',
    component: Layout,
    name: 'table',
    meta: { title: 'table', icon: 'el-icon-s-help' },
    children: [
        {
            path: 'table1',
            name: 'table1',
            component: () => import('@/views/table/table.vue'),
        },
        {
            path: 'detail',
            name: 'detail',
            component: () => import('@/views/table/detail.vue'),
            meta: { name: 'table1' },
        },
        {
            path: 'table2',
            name: 'table2',
            component: () => import('@/views/table/table2.vue'),
            meta: {},
        },
    ],
};
