import { Vue, Watch, Component } from 'vue-property-decorator';
import { storeApp } from '@/store/modules/app';

const { body } = document;
const WIDTH = 992;

@Component
export default class ResizeHandler extends Vue {
    @Watch('$route')
    onRouteChange() {
        if (storeApp.device === 'mobile' && storeApp.sidebar.opened) {
            storeApp.closeSideBar({ withoutAnimation: false });
        }
    }

    beforeMount() {
        window.addEventListener('resize', this._resizeHandler);
    }

    beforeDestroy() {
        window.removeEventListener('resize', this._resizeHandler);
    }

    mounted() {
        const isMobile = this._isMobile();
        if (isMobile) {
            storeApp.toggleDevice('mobile');
            storeApp.closeSideBar({ withoutAnimation: true });
        }
    }

    _isMobile() {
        const rect = body.getBoundingClientRect();
        return rect.width - 1 < WIDTH;
    }

    _resizeHandler() {
        if (!document.hidden) {
            const isMobile = this._isMobile();
            storeApp.toggleDevice(isMobile ? 'mobile' : 'desktop');

            if (isMobile) {
                storeApp.closeSideBar({ withoutAnimation: true });
            }
        }
    }
}
