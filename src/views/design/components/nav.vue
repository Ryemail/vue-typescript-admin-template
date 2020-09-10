<template>
    <div class="design-nav">
        <div class="design-title">组件库</div>
        <div class="navs">
            <!-- 媒体组 -->
            <div class="title">{{ media.title }}</div>
            <ul class="navs-group">
                <li v-for="(item, key) in media.list" :key="key" class="navs-item" @click="toggleNav(item)">
                    <p><i class="iconfont" :class="item.icon"></i></p>
                    <p>{{ item.title }}</p>
                </li>
            </ul>

            <!-- 商品组 -->
            <div class="title">{{ shop.title }}</div>
            <ul class="navs-group">
                <li v-for="(item, key) in shop.list" :key="key" class="navs-item" @click="toggleNav(item)">
                    <p><i class="iconfont" :class="item.icon"></i></p>
                    <p>{{ item.title }}</p>
                </li>
            </ul>

            <div class="save-page">
                <el-button type="primary" size="small">保存页面</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DesginNavs, DesignNavItem } from '@/types/design';
import _ from 'lodash';

import defaultImg from '@/assets/image/default.png';

@Component
export default class DesignNav extends Vue {
    media: DesginNavs = {
        title: '媒体组件',
        list: [
            {
                title: '图片轮播',
                name: 'DomCarousel',
                editor: 'DomEditorCarousel',
                icon: 'icon-tupian',
                params: {
                    list: [
                        { img: defaultImg, url: '' },
                        { img: defaultImg, url: '' },
                    ],
                    interval: 2000, //  切换时间
                    color: '#fff', // 指示点颜色
                    shape: 'round', // 指示点形状
                    position: '', // 指示位置
                },
            },
            {
                title: '单图组',
                name: 'DomImage',
                editor: 'DomEditorImage',
                icon: 'icon-tupian1',
                params: {
                    list: [
                        { img: defaultImg, url: '' },
                        { img: defaultImg, url: '' },
                    ],
                    marginX: 0,
                    marginY: 0,
                    background: '#fff', // 背景颜色
                },
            },
            {
                title: '图片橱窗',
                name: 'DomPictureWindow',
                editor: 'DomEditorPictureWindow',
                icon: 'icon-buju',
                params: {
                    list: [
                        { img: defaultImg, url: '' },
                        { img: defaultImg, url: '' },
                        { img: defaultImg, url: '' },
                        { img: defaultImg, url: '' },
                    ],
                    marginX: 0,
                    marginY: 0,
                    layout: 'column-2', // 布局方式
                    background: '#fff', // 指示点颜色
                },
            },
            {
                title: '视频组',
                name: 'DomVideo',
                editor: 'DomEditorVideo',
                icon: 'icon-24',
                params: {
                    url: '', // 视频地址
                    poster: '', // 视频封面
                    height: 150,
                    marginY: 0,
                    auto: 1, // 是否自动播放
                },
            },
        ],
    };

    shop: DesginNavs = {
        title: '商城组件',
        list: [
            {
                title: '搜索框',
                name: 'DomSearch',
                editor: 'DomEditorSearch',
                icon: 'icon-search',
                params: {
                    keywords: '',
                    style: 'square', // 样式 square radius arc
                    align: 'left', // 文字对齐
                },
            },
            {
                title: '公告组',
                name: 'DomAnnouncement',
                editor: 'DomEditorAnnouncement',
                icon: 'icon-gonggao',
                params: {
                    marginY: 6, // 上下边距
                    background: '', // 背景颜色
                    color: '', // 文字颜色
                    icon: '', // 公告图标
                    text: '', // 公告内容
                },
            },
            { title: '导航组', name: 'DomNavigation', editor: 'DomEditorNavigation', icon: 'icon-daohang' },
            { title: '商品组', name: 'DomGoods', editor: 'DomEditorGoods', icon: 'icon-shangpinguanli' },
            { title: '优惠券组', name: 'DomCoupon', editor: 'DomEditorCoupon', icon: 'icon-youhuiquan' },
            { title: '拼团商品', name: 'DomPieceTogether', editor: 'DomEditorTogether', icon: 'icon-pintuan' },
            { title: '砍价商品', name: 'DomBargaining', editor: 'DomEditorBargaining', icon: 'icon-kanjia' },
            { title: '秒杀商品', name: 'DomSeckill', editor: 'DomEditorSeckill', icon: 'icon-miaosha' },
            { title: '线下门店', name: 'DomOfflineStores', editor: 'DomEditorOfflineStores', icon: 'icon-store_icon' },
        ],
    };

    private toggleNav(item: DesignNavItem) {
        this.$emit('toggle', _.cloneDeep(item));
    }
}
</script>

<style lang="less" scoped>
.design-nav {
    width: 265px;
    min-width: 265px;
    height: auto;
    background: #fdfdfd;
    border: 1px solid #ddd;
    padding: 15px 10px;
    transition: all 0.3s;
    user-select: none;
    margin-right: 15px;
    .design-title {
        position: relative;
        padding: 0 22px;
        height: 30px;
        line-height: 30px;
        padding-bottom: 4px;
        border-bottom: 1px solid #eef1f5;
        &::before {
            content: '';
            position: absolute;
            width: 4px;
            height: 14px;
            background: #61c5c1;
            top: 8px;
            left: 9px;
        }
    }
    .title {
        font-size: 14px;
        color: #999;
        margin: 10px 0;
    }
    .navs {
        padding: 10px 5px;
    }
    .navs-group {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        .navs-item {
            width: 28.4%;
            padding: 6px 0 4px;
            margin: 5px;
            border: 1px solid #dddddd;
            text-align: center;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            background: #f4f4f4;
            color: #424242;
            &:hover {
                background: #fff;
                border-color: #61c5c1;
            }
            i {
                font-size: 18px;
                line-height: 24px;
            }
        }
    }
    .save-page {
        margin-top: 15px;
        text-align: right;
        border-top: 1px dotted #eef1f5;
        padding-top: 15px;
    }
}
</style>
