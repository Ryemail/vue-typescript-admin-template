import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { DesginComponent } from '@/types/design';

interface DesignProps extends DesginComponent {
    $index: number;
}

@Component
export default class DelMixin extends Vue {
    @Prop({ type: Object, default: () => ({}) }) data!: DesignProps;

    private del() {
        this.$emit('del', this.data['$index']);
    }

    @Watch('data', { deep: true })
    onData(val: DesignProps) {
        console.log(val, 'val');
    }
}
