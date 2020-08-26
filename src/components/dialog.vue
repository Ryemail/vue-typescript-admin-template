<style lang="less">
.dom-dialog-style {
    max-height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .el-dialog__body {
        padding: 0;
        flex: 1;
        position: relative;
        overflow: hidden;
    }
    .el-scrollbar {
        position: absolute;
        top: 0;
        bottom: 0;
    }
    .el-scrollbar .el-scrollbar__wrap {
        overflow-x: hidden;
        margin-bottom: 0 !important;
    }
    .el-scrollbar__bar.is-horizontal {
        display: none;
    }
    .dialog-padding {
        padding: 30px;
    }
}
</style>
<template>
    <el-dialog
        custom-class="dom-dialog-style"
        ref="dialog"
        top="10vh"
        :title="title"
        :visible.sync="visible"
        :width="`${width}`"
        @closed="close"
    >
        <el-scrollbar :style="{ height: height }">
            <div class="dialog-padding"><slot /></div>
        </el-scrollbar>

        <div slot="footer" class="dialog-footer">
            <el-button size="medium" @click="close">取 消</el-button>
            <el-button type="primary" v-if="showConfirm" size="medium" @click="confirm">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { ElDialog } from 'element-ui/types/dialog';

@Component
export default class DomDialog extends Vue {
    @Prop({ type: [String], default: '40%' }) width!: string; // 弹窗宽度

    @Prop({ type: String, default: '' }) title!: string; // 标题

    @Prop({ type: Boolean, default: false }) show!: boolean; // 是否显示

    @Prop({ type: Boolean, default: true }) showConfirm!: boolean; // 是否确定按钮

    private visible = this.show;

    height = '100%';

    // 监听 show
    @Watch('show')
    onShowChanged(val: boolean) {
        this.visible = val;
        // val &&
        //     this.$nextTick(() => {
        //         const bodyHeight = document.body.clientHeight || document.documentElement.clientHeight;

        //         const dialog = this.$refs.dialog as ElDialog,
        //             el = dialog.$el.firstChild as Element;

        //         const first = el.firstChild as Element,
        //             last = el.lastChild as Element;
        //         this.height = `${el.clientHeight - first.clientHeight - last.clientHeight}px`;

        //         console.log(this.height);
        //     });
    }

    // 弹窗关闭事件
    private close() {
        this.$emit('update:show', false);
        this.$emit('cancel');
    }

    // 确定
    private confirm() {
        this.$emit('update:show', false);
        this.$emit('confirm');
    }
}
</script>
