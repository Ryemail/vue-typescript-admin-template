import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { UserState } from './modules/user';
import { AppState } from './modules/app';

Vue.use(Vuex);

interface RootState {
    user: UserState;
    app: AppState;
}
export default new Vuex.Store<RootState>({
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
            reducer(val) {
                console.log(val, 'ddd');
                return {
                    token: val.user.token,
                    name: val.user.name,
                };
            },
        }),
    ],
});
