<template>
    <section class="home">home</section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { util } from '@/utils';

@Component
export default class Home extends Vue {
    created() {
        console.log(util.format('yyyy-MM-dd'));
    }
}
</script>

<style lang="less" scoped>
img {
    width: 200px;
}
</style>
