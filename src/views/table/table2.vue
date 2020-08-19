<template>
    <section class="table">
        <ry-table :props="table"></ry-table>
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
            { prop: 'image_uri', label: '头像' },
        ],
    };
}
</script>

<style lang="less"></style>
