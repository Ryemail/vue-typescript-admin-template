<template>
    <section class="table">
        <el-button type="primary" @click="reload">刷新</el-button>
        <ry-table :props="table" ref="table">
            <template #photo="{ row }">
                <el-image style="height: 100px" :src="row.image_uri" :preview-src-list="[row.image_uri]" />
            </template>
        </ry-table>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { _Components } from '@/types';

@Component
export default class Table extends Vue {
    table: _Components.TableProps = {
        url: '/vue-element-admin/article/list',
        column: [
            { prop: 'author', label: '作者' },
            { prop: 'content', label: '发布内容' },
            { prop: 'title', label: '标题' },
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
