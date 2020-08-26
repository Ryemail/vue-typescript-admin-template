<style lang="less">
.dom-dialog-style {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 80%;

    .el-dialog__body {
        flex: 1;
        overflow-y: auto;
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
        :destroy-on-close="false"
        :width="`${width}`"
        @closed="close"
    >
        <slot />

        <div slot="footer" class="dialog-footer">
            <el-button size="medium" @click="close">取 消</el-button>
            <el-button type="primary" v-if="showConfirm" size="medium" @click="confirm">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';

@Component
export default class DomDialog extends Vue {
    @Prop({ type: [String], default: '40%' }) width!: string; // 弹窗宽度

    @Prop({ type: String, default: '' }) title!: string; // 标题

    @Prop({ type: Boolean, default: false }) show!: boolean; // 是否显示

    @Prop({ type: Boolean, default: true }) showConfirm!: boolean; // 是否确定按钮

    private visible = this.show;

    // 监听 show
    @Watch('show')
    onShowChanged(val: boolean) {
        this.visible = val;
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
