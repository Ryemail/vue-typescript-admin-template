<template>
    <div>
        <el-input v-bind="$attrs" v-model="value" v-on="$listeners"></el-input>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DomInputp extends Vue {
    value = '';
    hInput() {
        this.$emit('input', this.value); // 在组件A中传递过来的事件
    }
}
</script>

<style lang="less"></style>
