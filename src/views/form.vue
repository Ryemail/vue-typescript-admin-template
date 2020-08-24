<style lang="less"></style>

<template>
    <div class="form">
        <dom-form ref="form" />

        <dom-dialog :show.sync="show" title="编辑" @confirm="editConfirm">
            <dom-form ref="form" :footer="false" />
        </dom-dialog>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
    show = true;

    private onSubmit() {
        console.log('onSubmit');
    }

    // 编辑确定
    private editConfirm() {
        const form = this.$refs['form'] as HTMLFormElement;

        form.onSubmit().then(() => {
            console.log('fomr');
        });
    }
}
</script>
