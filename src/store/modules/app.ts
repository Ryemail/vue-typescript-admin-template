import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators';
import Cookies from 'js-cookie';

import store from '@/store';
export interface AppState {
    sidebar: {
        opened: boolean;
    };
    device: string;

    withoutAnimation: boolean;
}

@Module({ dynamic: true, store, namespaced: true, name: 'app' })
class VuexApp extends VuexModule implements AppState {
    sidebar = {
        opened: Cookies.get('sidebarStatus') ? !!Number(Cookies.get('sidebarStatus')) : true,
    };

    withoutAnimation = false;

    device = 'desktop';

    @Mutation
    private TOGGLE_SIDEBAR() {
        this.sidebar.opened = !this.sidebar.opened;
        this.withoutAnimation = false;
        if (this.sidebar.opened) {
            Cookies.set('sidebarStatus', '1');
        } else {
            Cookies.set('sidebarStatus', '0');
        }
    }
    @Mutation
    CLOSE_SIDEBAR(withoutAnimation: boolean) {
        Cookies.set('sidebarStatus', '0');
        this.sidebar.opened = false;
        this.withoutAnimation = withoutAnimation;
    }

    @Mutation
    TOGGLE_DEVICE(device: string) {
        this.device = device;
    }

    @Action
    public toggleSideBar() {
        this.TOGGLE_SIDEBAR();
    }

    @Action
    public closeSideBar({ withoutAnimation }: { withoutAnimation: boolean }) {
        this.CLOSE_SIDEBAR(withoutAnimation);
    }

    @Action
    public toggleDevice(device: string) {
        this.TOGGLE_DEVICE(device);
    }

    @Action
    public async getInfo() {
        // const{} = await ()
    }
}

export const storeApp = getModule(VuexApp);
