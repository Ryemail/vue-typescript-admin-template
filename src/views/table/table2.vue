<template>
    <section class="table">
        <dom-form
            ref="form"
            :config="queryConfig"
            :label-width="0"
            :form="table.query"
            :inline="true"
            @event="formEvent"
        />
        <dom-table ref="table" :props="table">
            <template #photo="{ row }">
                <el-image style="height: 40px;width:40px" :src="row.image_uri" :preview-src-list="[row.image_uri]" />
            </template>
            <template #content="{ row }">
                <div v-html="row.content"></div>
            </template>
            <template #tool="{}">
                <dom-icon name="el-icon-share" to="/table/detail" disabled text="详情" />
            </template>
        </dom-table>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DomTableProps, DomTable } from '@/types/components/table';
import { DomFormConfig, lazyLoadParams } from '@/types/components/form';

@Component
export default class Table extends Vue {
    queryConfig: (DomFormConfig | DomFormConfig[])[] = [
        { type: 'input', prop: 'name', placeholder: '请输入姓名' },
        {
            type: 'select',
            prop: 'region',
            placeholder: '请选择活动',
            lazyLoad(resolve) {
                resolve([
                    { id: 1, name: '阮垚' },
                    { id: 2, name: '陈涛' },
                ]);
            },
        },
        [
            {
                type: 'select',
                prop: 'province',
                placeholder: '请选择省',
                lazyLoad(resolve) {
                    resolve([
                        { id: 1, name: '阮垚' },
                        { id: 2, name: '陈涛' },
                    ]);
                },
            },
            {
                type: 'select',
                prop: 'city',
                placeholder: '请选择市',
                lazyLoad(resolve, params?: lazyLoadParams) {
                    console.log(params, 'lazyLoadParams');
                    resolve([
                        { id: 1, name: '阮垚' },
                        { id: 2, name: '陈涛' },
                    ]);
                },
            },
            {
                type: 'select',
                prop: 'county',
                placeholder: '请选择县',
                lazyLoad(resolve) {
                    resolve([
                        { id: 1, name: '阮垚' },
                        { id: 2, name: '陈涛' },
                    ]);
                },
            },
        ],
        { type: 'date', prop: 'date', placeholder: '请选择日期' },
        { type: 'time', prop: 'time', placeholder: '请选择时间' },
        { type: 'button-primary', prop: 'submit', placeholder: '搜索' },
        { type: 'button', prop: 'reset', placeholder: '重置' },
    ];

    table: DomTableProps = {
        url: '/vue-element-admin/article/list',
        query: {
            name: '',
            region: '',
            date: '',
            time: '',
            province: '',
            city: '',
            county: '',
        },
        column: [
            { prop: 'author', label: '作者', fixed: 'left' },
            {
                prop: 'type',
                label: '类型',
                // formatter(row: any) {
                //     return row.type;
                // },
            },
            { slot: 'content', prop: 'content', label: '发布内容', width: 200, showOverflowTooltip: true },
            { slot: 'content', prop: 'content', label: '发布内容', width: 200, showOverflowTooltip: true },
            { slot: 'content', prop: 'content', label: '发布内容', width: 200, showOverflowTooltip: true },
            { slot: 'content', prop: 'content', label: '发布内容', width: 200, showOverflowTooltip: true },
            { prop: 'title', label: '标题', showOverflowTooltip: true },
            { slot: 'photo', prop: 'image_uri', label: '头像' },
            { slot: 'tool', prop: 'status', label: '操作', fixed: 'right' },
        ],
    };

    formEvent(params: DomFormConfig) {
        console.log(params);
        // if (params.prop === 'reset') {
        //
        // }

        // if (params.prop === 'submit') {
        //
        // }
        this.reload();
    }

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
