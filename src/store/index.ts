import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: null,
        token: '',
    },
    mutations: {},
    actions: {},
    modules: {},
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
            reducer(val) {
                return {
                    userInfo: val.userInfo,
                };
            },
        }),
    ],
});
