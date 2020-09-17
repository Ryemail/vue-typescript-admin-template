<template>
    <div>
        <el-input v-bind="$attrs" v-model="value" v-on="$listeners"></el-input>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Input } from 'element-ui';

@Component
export default class DomInputp extends Vue {
    value = '';
    hInput() {
        this.$emit('input', this.value); // 在组件A中传递过来的事件
    }
}
// export default {
//     extends: Input,
// };
</script>

<style lang="less"></style>
