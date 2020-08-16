<template>
    <section class="tree">home</section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { util } from '@/utils';
import { storeUser } from '@/store/modules/user';

@Component
export default class Tree extends Vue {
    created() {
        console.log(util.format('yyyy-MM-dd'));
        storeUser['setName']('阮垚');
    }
}
</script>

<style lang="less" scoped></style>
