<template>
    <section class="home">
        home
        <dom-inputp placeholder="8888" v-model="value" />
        <dom-input placeholder="请输入内容" v-model="domValue" />
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';
import { _reg, _types } from '@/utils';

function h() {
    return {
        render() {},
    };
}

@Component
export default class Home extends Vue {
    value = '';
    domValue = '';
    created() {
        //
        console.log(_.add(0.1, 0.2));
        console.log(_.intersection([1, 3], [3, 4, 5])); // 数组求交集

        const objects = [
            { x: 1, y: 2 },
            { x: 2, y: 1 },
        ];
        console.log(_reg.hideValue('123456789012345678', 3, 4), '身份');
        console.log(_reg.hideValue('13125137937', 3, 4), '手机');
        console.log(_reg.hideValue('手机', 0, 1), '手机');
        console.log(_types.isDefined({}), 'ssssssssssssss');

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

        // const promise1 = Promise.resolve('Good!');
        // const promise2 = Promise.reject(Error('No good, sorry!'));

        // Promise.allSettled([promise1, promise2])
        //     .then(results => console.log(results))
        //     .catch(error => console.error(error))
        //     .finally(() => console.log('Always runs!'));

        async function toUppercase(string: string) {
            if (typeof string !== 'string') {
                throw TypeError('Wrong type given, expected a string');
            }

            return string.toUpperCase();
        }

        toUppercase('abc')
            .then(result => console.log(result))
            .catch(error => console.error(error.message, '55'))
            .finally(() => console.log('Always runs!'));
    }
}
</script>

<style lang="less" scoped></style>
