import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { UserState } from './modules/user';

Vue.use(Vuex);

interface RootState {
    user: UserState;
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
