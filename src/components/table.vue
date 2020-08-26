<style lang="less">
.dom-table {
    .el-pagination {
        margin-top: 10px;
    }
}
</style>

<template>
    <div class="dom-table">
        <el-table
            :data="data"
            v-loading="loading"
            style="width: 100%"
            @selection-change="selectionChange"
            border
            header-row-class-name="table-header"
            :header-cell-style="{ background: '#ebebf3', color: '#333', fontSize: '14px' }"
        >
            <template v-for="(item, key) in props.column">
                <el-table-column
                    v-if="!item.slot"
                    :key="key"
                    :prop="item.prop"
                    :type="item.type"
                    :label="item.label"
                    :width="item.width"
                    :align="item.align"
                    :fixed="item.fixed"
                    :show-overflow-tooltip="item.showOverflowTooltip"
                    :min-width="item.minWidth"
                />
                <el-table-column
                    v-else
                    :key="key"
                    :prop="item.prop"
                    :type="item.type"
                    :label="item.label"
                    :width="item.width"
                    :align="item.align"
                    :fixed="item.fixed"
                    :show-overflow-tooltip="item.showOverflowTooltip"
                    :min-width="item.minWidth"
                >
                    <template slot-scope="{ row, $index }">
                        <slot v-if="item.slot" :name="item.slot" :row="row" :index="$index" />
                    </template>
                </el-table-column>
            </template>
        </el-table>
        <el-pagination
            hide-on-single-page
            @size-change="pageChange"
            @current-change="pageChange"
            :current-page="form.page"
            :total="total"
            layout="total, prev, pager, next, jumper"
        >
        </el-pagination>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { fetchTableList } from '@/api/global';
import { DomTableColumn, DomTableProps } from '@/types/components/table';

@Component
export default class DomTable extends Vue {
    @Prop({
        type: Object,
        default: () => ({
            url: '',
            column: [],
        }),
    })
    props!: DomTableProps;

    @Prop({ type: Number, default: 10 }) limit!: number;

    @Prop({ type: Number, default: 1 }) page!: number;

    data: object[] = [];

    total = 0;

    form = {
        limit: this.limit,
        page: this.page,
    };

    loading = true;

    created() {
        this.fetchTableList();
    }

    async fetchTableList() {
        const { data, code } = await fetchTableList(this.props.url, { ...this.form });

        console.log(data);

        if (code === 200) {
            this.data = data.data;
            this.total = data.total;
            this.$emit('onData', data);
        }
        this.loading = false;
    }

    // 全选
    private selectionChange(data: object[]) {
        this.$emit('selectionChange', data);
    }

    // 分页
    private pageChange(page?: number) {
        this.loading = true;
        this.form.page = page ? page : 1;
        this.fetchTableList();
    }

    // 刷新
    private reload() {
        this.pageChange(1);
    }
}
</script>
