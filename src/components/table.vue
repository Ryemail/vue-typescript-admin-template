<style lang="less"></style>

<template>
    <div class="rt-table">
        <el-table
            :data="data"
            style="width: 100%"
            @selection-change="selectionChange"
            border
            header-row-class-name="table-header"
            :header-cell-style="{ background: '#ebebf3', color: '#333', fontSize: '14px' }"
        >
            <template v-for="(item, key) in props.column">
                <slot v-if="item.type === 'slot'" :name="item.prop"></slot>
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
                </el-table-column>
            </template>
        </el-table>
        <el-pagination
            hide-on-single-page
            @size-change="reload"
            @current-change="reload"
            :current-page="page"
            :total="total"
            layout="total, prev, pager, next, jumper"
        >
        </el-pagination>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { fetchTableList } from '@/api/global';
import { _Components } from '@/types';

@Component
export default class RyTable extends Vue {
    @Prop({
        type: Object,
        default: () => ({
            url: '',
            column: [],
            pagesize: [10],
        }),
    })
    props!: _Components.TableProps;

    data = [];

    total = 0;

    limit = this.props.limit || 10;

    page = this.props.page || 1;

    created() {
        this.fetchTableList();
    }

    async fetchTableList() {
        const query = { page: this.page, limit: this.limit };

        const { data, code } = await fetchTableList(this.props.url, query);

        console.log(data);

        if (code === 200) {
            this.data = data.data;
            this.total = data.total;
            this.$emit('onData', data);
        }
    }

    // 全选
    private selectionChange(data: object[]) {
        this.$emit('selectionChange', data);
    }

    // 分页
    private reload(page?: number) {
        this.page = page ? page : 1;
        this.fetchTableList();
    }
}
</script>
