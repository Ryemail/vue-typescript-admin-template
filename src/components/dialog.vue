<template>
    <el-dialog
        custom-class="dom-dialog-style"
        ref="dialog"
        top="10vh"
        :destroy-on-close="true"
        :title="title"
        :visible.sync="visible"
        :width="`${width}`"
        @closed="close"
    >
        <el-scrollbar>
            <div class="dialog-content">
                <slot />
            </div>
        </el-scrollbar>

        <template slot="footer" class="dialog-footer">
            <el-button size="medium" @click="close">取 消</el-button>
            <el-button type="primary" v-if="showConfirm" size="medium" @click="confirm">确 定</el-button>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { ElDialog } from 'element-ui/types/dialog';

@Component({})
export default class DomDialog extends Vue {
    @Prop({ type: [String], default: '40%' }) width!: string; // 弹窗宽度

    @Prop({ type: String, default: '' }) title!: string; // 标题

    @Prop({ type: Boolean, default: false }) show!: boolean; // 是否显示

    @Prop({ type: Boolean, default: true }) showConfirm!: boolean; // 是否确定按钮

    private visible = this.show;

    private oDialogHeight = 60;

    // 监听 show
    @Watch('show')
    onShowChanged(val: boolean) {
        this.visible = val;
        if (val) this.setDialogBody();
    }

    setDialogBody() {
        this.$nextTick(() => {
            const dialog = this.$refs.dialog as ElDialog;

            const oBody = dialog.$el.querySelector('.el-dialog__body') as HTMLElement,
                { offsetHeight = 60 } = oBody;

            this.oDialogHeight = offsetHeight;

            oBody.style.height = offsetHeight + 'px';
        });
    }

    // 弹窗关闭事件
    private close() {
        this.$emit('update:show', false);
        this.$emit('cancel');
    }

    // 确定
    private confirm() {
        // this.$emit('update:show', false);
        this.$emit('confirm');
    }
}
</script>

<style lang="less">
.dom-dialog-style {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 80%;

    .dialog-content {
        padding: 30px 20px;
    }

    .el-dialog__body {
        flex: 1;
        padding: 0;
        overflow: hidden;
    }

    .el-scrollbar {
        height: 100%;
    }

    .el-scrollbar__wrap {
        overflow-x: hidden;
        margin-bottom: 0 !important;
    }

    .el-scrollbar__bar.is-horizontal {
        height: 0;
    }
}
</style>
