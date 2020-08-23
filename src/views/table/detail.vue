<template>
    <section class="detail">
        <el-page-header @back="$router.back()" content="详情页面"> </el-page-header>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Detail extends Vue {}
</script>

<style lang="less"></style>
