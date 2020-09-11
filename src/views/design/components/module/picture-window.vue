<template>
    <section class="picture-window" :style="{ background: params.background }">
        <div class="clear window-list" :style="{ paddingBottom: params.marginY + 'px' }">
            <template v-if="params.layout !== 'showcase'">
                <a
                    v-for="(item, key) in params.list"
                    :href="item.url ? item.url : 'javascript:;'"
                    :key="key"
                    :class="['dom-a-link dom-a-window', params.layout]"
                    :style="{ padding: `${params.marginY}px ${params.marginX}px 0` }"
                >
                    <img :src="item.img" class="desing-module-img" />
                </a>
            </template>
            <div v-else :class="[params.layout, 'clear']">
                <a
                    :href="params.list[0].url ? params.list[0].url : 'javascript:;'"
                    :class="['dom-a-link dom-a-window', 'showcase-left']"
                    :style="{ padding: `${params.marginY}px ${params.marginX}px 0` }"
                >
                    <img :src="params.list[0].img" class="desing-module-img" />
                </a>
                <div class="showcase-right clear">
                    <a
                        :href="params.list[1].url ? params.list[1].url : 'javascript:;'"
                        :class="['dom-a-link dom-a-window', 'showcase-right-top']"
                        :style="{ padding: `${params.marginY}px ${params.marginX}px 0` }"
                    >
                        <img :src="params.list[1].img" class="desing-module-img" />
                    </a>
                    <div class="showcase-right-bottom">
                        <a
                            v-for="(item, key) in params.list.slice(2)"
                            :href="item.url ? item.url : 'javascript:;'"
                            :key="key"
                            :class="['dom-a-link dom-a-window']"
                            :style="{ padding: `${params.marginY}px ${params.marginX}px 0` }"
                        >
                            <img :src="item.img" class="desing-module-img" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="del" v-if="data.data.active" @click="del">删除</div>
        <!-- {{ params }} -->
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { DesignEditor, PictureWindowProps } from '@/types/design';

@Component
export default class DomPictureWindow extends Vue {
    @Prop({ type: Object, default: () => ({}) }) data!: DesignEditor<PictureWindowProps>;

    get params() {
        return this.data.data.params;
    }

    private del() {
        this.$emit('del', this.data['$index']);
    }
}
</script>

<style lang="less" scoped>
.window-list {
    .dom-a-window {
        float: left;
        box-sizing: border-box;
        &.column-2 {
            width: 50%;
        }
        &.column-3 {
            width: 33.333%;
        }
        &.column-4 {
            width: 25%;
        }
    }
}
.showcase {
    position: relative;
    height: 0;
    padding-bottom: 50%;
    img {
        height: 100%;
    }
    .showcase-right {
        display: flex;
        flex-direction: column;
        > a,
        > div {
            flex: 1;
        }
        .showcase-right-bottom {
            display: flex;
            .dom-a-window {
                flex: 1;
            }
        }
    }
    .showcase-left,
    .showcase-right {
        position: absolute;
        width: 50%;
        left: 0;
        height: 100%;
    }
    .showcase-right {
        left: 50%;
    }
}
</style>
