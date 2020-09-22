import Vue from 'vue';
import { ElMessageBoxOptions, MessageBoxData } from 'element-ui/types/message-box';
import { G } from './types';

declare module 'vue/types/vue' {
    interface Vue {
        // $refs:;
        $not: any;
        $result: (options: G.ApiData & { onClase?: Function }) => void;
        $modal: (options: ElMessageBoxOptions) => Promise<MessageBoxData>;
    }
}
