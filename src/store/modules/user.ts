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
            name: 'table',
            path: '/table',
            icon: '',
            children: [
                { name: 'table1', path: 'table1', icon: '' },
                { name: 'table2', path: 'table2', icon: '' },
            ],
        },
        {
            name: 'tree',
            path: 'tree',
            icon: '',
        },
        { name: 'form', path: 'form', icon: '' },
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
