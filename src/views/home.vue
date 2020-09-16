<template>
    <section class="home">home</section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';

@Component
export default class Home extends Vue {
    created() {
        //
        console.log(_.add(0.1, 0.2));
        console.log(_.intersection([1, 3], [3, 4, 5])); // 数组求交集

        const objects = [
            { x: 1, y: 2 },
            { x: 2, y: 1 },
        ];
        const others = [
            { x: 1, y: 1 },
            { x: 1, y: 2 },
        ];

        console.log(_.intersectionWith(objects, others, _.isEqual));

        const users = [
            { user: 'barney', active: false },
            { user: 'fred', active: false },
            { user: 'pebbles', active: true },
        ];

        console.log(_.last([1, 2, 34]));

        console.log(_.subtract(0.1, 0.3));

        console.log(_.nth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -10));
    }
}
</script>

<style lang="less" scoped></style>
