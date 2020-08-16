<style lang="less"></style>

<template>
    <div>
        <el-menu-item v-if="!item.children" :index="item.path">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.name }}</span>
        </el-menu-item>

        <el-submenu v-else :index="item.path" popper-append-to-body>
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.name }}</span>
            </template>
            <ry-aside-item v-for="child in item.children" :key="child.path" :item="child" />
        </el-submenu>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({ name: 'RyAsideItem' })
export default class extends Vue {
    @Prop({ type: Object, required: true, default: () => ({}) }) item!: object;
}
</script>
