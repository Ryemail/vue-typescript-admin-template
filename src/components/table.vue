<style lang="less"></style>

<template>
    <div class="rt-table">
        <el-table
            :data="data"
            style="width: 100%"
            @selection-change="handleSelectionChange"
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
            :page-size="props.pagesize"
            layout="total, prev, pager, next, jumper"
            :total="total"
        >
        </el-pagination>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RyTable extends Vue {}
</script>
