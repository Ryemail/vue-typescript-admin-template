import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators';
import Cookies from 'js-cookie';

import store from '@/store';
export interface AppState {
    sidebar: {
        opened: boolean;
    };
    device: string;
}

@Module({ dynamic: true, store, namespaced: true, name: 'app' })
class App extends VuexModule implements AppState {
    sidebar = {
        opened: Cookies.get('sidebarStatus') ? !!Number(Cookies.get('sidebarStatus')) : true,
    };

    device = 'desktop';

    @Mutation
    private toggleSideBar() {
        this.sidebar.opened = !this.sidebar.opened;
        if (this.sidebar.opened) {
            Cookies.set('sidebarStatus', '1');
        } else {
            Cookies.set('sidebarStatus', '0');
        }
    }

    @Action
    public async getInfo() {
        // const{} = await ()
    }
}

export const storeApp = getModule(App);
