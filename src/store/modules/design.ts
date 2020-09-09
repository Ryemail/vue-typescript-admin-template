import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { DesginComponent } from '@/types/design';

export interface DesignState {
    components: DesginComponent[];
}

@Module({ dynamic: true, store, namespaced: true, name: 'design' })
class Design extends VuexModule implements DesignState {
    components: DesginComponent[] = [
        {
            name: 'DomTitle',
            title: '页面设计',
            editor: 'DomEditorTitle',
            params: { title: '页面设计' },
        },
    ]; // 组件列表

    @Mutation
    public updateCompoent(params: any) {
        const { $index, data } = params;
        this.components[$index].params = data;

        console.log(this.components, '6666');
    }

    @Action
    public async getInfo() {
        // const{} = await ()
    }
}

export const storeDesign = getModule(Design);
