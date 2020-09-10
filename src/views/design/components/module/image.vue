<template>
    <section
        class="design-image clear design-item"
        :style="{ paddingBottom: params.marginY + 'px', background: params.background }"
    >
        <template v-for="(item, key) in params.list">
            <a
                :href="item.url ? item.url : 'javascript:;'"
                :key="key"
                class="dom-a-link"
                :style="{ padding: `${params.marginY}px ${params.marginX}px 0` }"
            >
                <img :src="item.img" class="desing-module-img" />
            </a>
        </template>

        <div class="del" v-if="data.data.active" @click="del">删除</div>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { DesignEditor, ImageProps } from '@/types/design';

@Component
export default class DomImage extends Vue {
    @Prop({ type: Object, default: () => ({}) }) data!: DesignEditor<ImageProps>;

    get params() {
        return this.data.data.params;
    }

    private del() {
        this.$emit('del', this.data['$index']);
    }
}
</script>

<style lang="less" scoped>
.dom-a-link {
    display: block;
}
.desing-module-img {
    object-fit: cover;
}
</style>
