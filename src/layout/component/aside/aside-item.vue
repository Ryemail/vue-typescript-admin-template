<template>
    <div>
        <el-menu-item v-if="!item.children" :index="item.name" :route="{ path: item.path }">
            <i class="el-icon-menu sub-icon"></i>
            <span slot="title">{{ item.title }}</span>
        </el-menu-item>

        <el-submenu v-else :index="item.path" popper-append-to-body>
            <template slot="title">
                <i class="el-icon-location sub-icon"></i>
                <span slot="title">{{ item.title }}</span>
            </template>
            <dom-aside-item v-for="child in item.children" :key="child.path" :item="child" />
        </el-submenu>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({ name: 'DomAsideItem' })
export default class extends Vue {
    @Prop({ type: Object, required: true, default: () => ({}) }) item!: object;
}
</script>
