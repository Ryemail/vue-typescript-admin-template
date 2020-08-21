<template>
    <section class="table">
        <el-button type="primary" @click="reload">刷新</el-button>
        <dom-table ref="table" :props="table">
            <template #photo="{ row }">
                <el-image style="height: 40px;width:40px" :src="row.image_uri" :preview-src-list="[row.image_uri]" />
            </template>
            <template #content="{ row }">
                <div v-html="row.content"></div>
            </template>
        </dom-table>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DomTable } from '@/types/components/table';

@Component
export default class Table extends Vue {
    table: DomTable.Props = {
        url: '/vue-element-admin/article/list',
        column: [
            { prop: 'author', label: '作者' },
            { prop: 'type', label: '类型' },
            // { slot: 'content', prop: 'content', label: '发布内容', showOverflowTooltip: true },
            { prop: 'title', label: '标题', showOverflowTooltip: true },
            { slot: 'photo', prop: 'image_uri', label: '头像' },
        ],
    };
    reload() {
        const ref = this.$refs.table as any;
        console.log(this.$refs.table);
        ref.reload();
    }
}
</script>

<style lang="less"></style>
