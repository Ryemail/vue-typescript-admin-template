<template>
    <section class="dom-editor-carousel">
        <div class="flex flex-start flex-item-center font-14">
            <label class="label margin-r-20">指示点形状</label>
        </div>
    </section>
</template>

<script lang="ts">
import { storeDesign } from '@/store/modules/design';
import { DesignParams } from '@/types/design';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class DomEditorHeadline extends Vue {
    @Prop({
        type: Object,
        default: () => ({}),
    })
    data!: DesignParams;

    @Watch('data', { deep: true })
    onForm(value: object) {
        storeDesign.updateCompoent(this.data);
    }
}
</script>

<style lang="less"></style>
