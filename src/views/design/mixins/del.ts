import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DelMixin extends Vue {
    @Prop({ type: Object, default: () => ({}) }) data!: any;

    private del() {
        this.$emit('del', this.data['$index']);
    }
}
