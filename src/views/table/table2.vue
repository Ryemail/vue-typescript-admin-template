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
            <template #tool="{}">
                <dom-icon name="el-icon-share" to="/table/detail" disabled text="详情" />
                <!-- <el-button type="text" icon="" size="mini" @click="$router.push('/table/detail')"></el-button> -->
            </template>
        </dom-table>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DomTableProps, DomTable } from '@/types/components/table';

@Component
export default class Table extends Vue {
    table: DomTableProps = {
        url: '/vue-element-admin/article/list',
        query: {
            id: 1,
            name: '阮垚',
        },
        column: [
            { prop: 'author', label: '作者', fixed: 'left' },
            { prop: 'type', label: '类型' },
            { slot: 'content', prop: 'content', label: '发布内容', width: 200, showOverflowTooltip: true },
            { slot: 'content', prop: 'content', label: '发布内容', width: 200, showOverflowTooltip: true },
            { slot: 'content', prop: 'content', label: '发布内容', width: 200, showOverflowTooltip: true },
            { slot: 'content', prop: 'content', label: '发布内容', width: 200, showOverflowTooltip: true },
            { prop: 'title', label: '标题', showOverflowTooltip: true },
            { slot: 'photo', prop: 'image_uri', label: '头像' },
            { slot: 'tool', prop: 'status', label: '操作', fixed: 'right' },
        ],
    };
    reload() {
        (this.$refs.table as DomTable).reload();
    }
}
</script>

<style lang="less">
img {
    width: 40px;
}
</style>
