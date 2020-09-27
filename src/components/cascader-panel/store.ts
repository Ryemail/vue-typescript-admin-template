import { CascaderOption } from '@/types/components/cascader-panel';

export default class Store {
    constructor(data: CascaderOption[]) {
        this.initNodes(data);
    }

    nodes: CascaderOption[] = [];

    initNodes(data: CascaderOption[]) {
        this.nodes = data;
    }

    getNodes() {
        return this.nodes;
    }
}
