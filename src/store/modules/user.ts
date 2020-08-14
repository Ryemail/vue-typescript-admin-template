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
