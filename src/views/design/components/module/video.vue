<template>
    <section class="dom-video clear design-item">
        <img src="@/assets/image/gril.png" />
        <div class="del" v-if="data.data.active" @click="del">删除</div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { DesignEditor } from '@/types/design';

@Component
export default class DomVideo extends Vue {
    @Prop({ type: Object, default: () => ({}) })
    data!: DesignEditor<{ title: string }>;

    get params() {
        return this.data.data.params;
    }

    private del() {
        this.$emit('del', this.data['$index']);
    }
}
</script>

<style lang="less"></style>
