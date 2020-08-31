<style lang="less">
.dom-table {
    .el-pagination {
        margin-top: 10px;
    }

    .el-table--scrollable-x .el-table__body-wrapper {
        overflow-x: hidden;
    }
    .ps__rail-x {
        background: transparent !important;
        opacity: 0.6;
        height: 6px;
        &.ps--clicking .ps__thumb-x {
            height: 6px !important;
        }
        &:hover > .ps__thumb-x {
            height: 6px !important;
        }
    }
    .el-table__fixed-right {
        height: 100% !important;
    }
    .el-table__fixed {
        height: 100% !important;
    }
}
</style>

<template>
    <div class="dom-table">
        <el-table
            :data="data"
            ref="table"
            v-scroll-bar
            v-if="repaint"
            v-loading="loading"
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
import { DomTableProps } from '@/types/components/table';
import { ElTable } from 'element-ui/types/table';

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

    repaint = false; // 重绘

    loading = true;

    created() {
        this.fetchTableList();
    }

    async fetchTableList() {
        const { data, code } = await fetchTableList(this.props.url, { ...this.form });

        if (code === 200) {
            this.data = data.data;
            this.total = data.total;
            this.$emit('onData', data);
            this.repaint = false;
            this.$nextTick(() => {
                const ele = this.$refs.table as ElTable;
                this.repaint = true;
                // ele.doLayout();
            });
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
