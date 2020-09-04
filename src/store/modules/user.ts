import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { getToken } from '@/utils/auth';

export interface UserState {
    token: string;
    name: string;
}

@Module({ dynamic: true, store, namespaced: true, name: 'user' })
class User extends VuexModule implements UserState {
    public token = getToken() || '';

    public name = '';

    public routes = [
        {
            path: '/home',
            name: 'home',
            title: '首页',
            icon: '',
        },
        {
            path: '/table',
            name: 'table',
            title: 'table',
            icon: '',
            children: [
                { path: '/table/table1', name: 'table1', title: 'table1', icon: '' },
                { path: '/table/table2', name: 'table2', title: 'table2', icon: '' },
            ],
        },
        {
            path: '/tree/index',
            name: 'tree',
            title: 'Tree',
            icon: '',
        },
        {
            path: '/clipboard/index',
            name: 'clipboard',
            title: '复制',
            icon: '',
        },
        {
            path: '/design/index',
            name: 'design',
            title: '页面设计',
            icon: '',
        },
        { path: '/form/index', name: 'form', title: 'form', icon: '' },
    ];

    @Mutation
    private setToken(token: string) {
        this.token = token;
    }

    @Mutation
    private setName(name: string) {
        this.name = name;
    }

    @Action
    public async getInfo() {
        // const{} = await ()
    }
}

export const storeUser = getModule(User);
