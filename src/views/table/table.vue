<template>
    <section class="table">
        <router-link to="/table/detail">details</router-link>
        <el-button v-download="{ url: '/', query: { id: 2 } }">下载</el-button>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Table extends Vue {}
</script>

<style lang="less"></style>
