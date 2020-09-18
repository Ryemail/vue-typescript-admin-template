<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DomTree extends Vue {
    render() {
        return <div>{this.setTreeItem()}</div>;
    }

    setTreeItem() {
        return <div>6666</div>;
    }
}
</script>

<style lang="less"></style>
