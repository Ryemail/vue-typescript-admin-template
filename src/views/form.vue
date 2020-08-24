<style lang="less"></style>

<template>
    <div class="form">
        <el-checkbox-group v-model="checkedCities">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
    checkedCities = [];
    cities = ['上海', '北京', '广州', '深圳'];
}
</script>
