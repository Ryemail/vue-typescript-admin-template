import router from './router';
import store from './store';
import { Message } from 'element-ui';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getToken, setToken } from '@/utils/auth'; // get token from cookie

NProgress.configure({ showSpinner: false });

const whiteList = ['/login']; // no redirect whitelist

setToken('6666');

router.beforeEach(async (to, from, next) => {
    // start progress bar
    NProgress.start();
    // determine whether the user has logged in
    const hasToken = getToken();

    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' });

            NProgress.done();
        } else {
            const hasRoles = store.getters.roles && store.getters.roles.length > 0;
            if (hasRoles) {
                next();
            } else {
                try {
                    // const { roles } = await store.dispatch('user/getInfo');

                    // const accessRoutes = await store.dispatch('permission/generateRoutes', roles);

                    // router.addRoutes(accessRoutes);

                    next({ replace: true });
                } catch (error) {
                    // remove token and go to login page to re-login
                    await store.dispatch('user/resetToken');

                    Message.error(error || 'Has Error');

                    next(`/login?redirect=${to.path}`);

                    NProgress.done();
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
            NProgress.done();
        }
    }

    console.log(to, 'beforeEach');
});

router.afterEach(() => {
    // finish progress bar
    NProgress.done();
});
