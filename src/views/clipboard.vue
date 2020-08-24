<template>
    <section class="dom-clipboard">
        <el-row :gutter="10">
            <el-col :span="10">
                <el-input id="input" v-model="value" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="6">
                <el-button class="tag" data-clipboard-target="#input" @click="onClipboard">复制</el-button>
            </el-col>
        </el-row>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ClipboardJS from 'clipboard';

@Component
export default class extends Vue {
    value = '';

    private onClipboard() {
        const clipboard = new ClipboardJS('.tag'),
            that = this;

        clipboard.on('success', function(e) {
            that.$message.success('复制成功');
            e.clearSelection();
            clipboard.destroy();
        });

        clipboard.on('error', function() {
            that.$message.error('复制失败');
            clipboard.destroy();
            // console.error('Trigger:', e.trigger);
        });
    }
}
</script>

<style lang="less"></style>
