<template>
    <section class="design">
        <div class="design-nav">
            <div class="design-title">组件库</div>
            <div></div>
        </div>
        <div class="design-phone">
            <div class="design-phone-title">页面设计</div>
            <el-scrollbar ref="scorll" class="design-phone-wrap">
                <div class="drag-wrap" ref="drag">
                    <div class="drag-item">
                        <img class="drag-item-gril" src="@/assets/image/gril.png" />
                    </div>
                    <div class="drag-item">
                        <img class="drag-item-gril" src="@/assets/image/gril.png" />
                    </div>
                    <div class="drag-item">
                        <img class="drag-item-item" src="@/assets/image/item.png" />
                        <img class="drag-item-item" src="@/assets/image/item.png" />
                        <img class="drag-item-item" src="@/assets/image/item.png" />
                        <img class="drag-item-item" src="@/assets/image/item.png" />
                    </div>
                    <div class="drag-item">
                        <img class="drag-item-title" src="@/assets/image/title.png" />
                    </div>
                </div>
            </el-scrollbar>
        </div>
        <div class="design-editor">
            <div class="design-title">组件库</div>
        </div>
        <!-- <div class="box">拖拽</div> -->
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
const dragula = require('dragula');

@Component
export default class Design extends Vue {
    mounted() {
        const that = this;
        dragula([this.$refs.drag], {
            moves(el: HTMLElement, source: HTMLElement) {
                console.log(el.offsetTop, 'el', el.offsetTop - 580);

                // source.childNodes.forEach(ele => {});
                // if (!el.className.includes('selected')) el.className += ' selected';
                return true;
            },
        })
            // .on('drag', function(el: HTMLElement) {
            //     console.log(el, 'drag');
            //     el.className = el.className.replace('selected', '');
            // })
            // .on('drop', function(el: HTMLElement) {
            //     console.log(el, 'drop');
            // })
            // .on('over', function(el: HTMLElement, wrap: HTMLElement) {
            //     console.log(el, 'over', el.offsetTop);
            // })
            // .on('out', function(el: HTMLElement) {
            //     console.log(el, 'out');
            //     // container.className = container.className.replace('ex-over', '');
            // })
            // .on('shadow', function(el: HTMLElement) {
            //     console.log(el, 'shadow');
            //     return true;
            // })
            .on('dragging', function(el: HTMLElement) {
                console.log(el, 'dragging');
                return true;
            });
    }
}
</script>

<style lang="less">
.gu-mirror {
    position: fixed !important;
    margin: 0 !important;
    z-index: 9999 !important;
    opacity: 0.8;
    filter: alpha(opacity=80);
}
.gu-hide {
    display: none !important;
}
.gu-unselectable {
    user-select: none !important;
}
.gu-transit {
    opacity: 0.2;
    filter: alpha(opacity=20);
}
.design {
    display: flex;
    justify-content: space-between;
    .design-phone {
        width: 377px;
        border-radius: 3px;
        box-shadow: 0 3px 10px #dcdcdc;
        border: 1px solid #ddd;
        margin: 0 auto;
        .design-phone-title {
            height: 66px;
            line-height: 88px;
            font-size: 14px;
            white-space: nowrap;
            text-align: center;
            background: url('~@/assets/image/phone-top-black.png') center center / contain no-repeat rgb(255, 255, 255);
        }
        .design-phone-wrap {
            height: 580px;
            .el-scrollbar__wrap {
                overflow-x: hidden;
            }
        }
    }
    .drag-wrap {
        div {
            overflow: hidden;
            position: relative;
            cursor: move;
            background-color: rgba(0, 0, 0, 0.2);
            transition: opacity 0.4s ease-in-out;
            user-select: none !important;
            &:hover:before,
            &.selected:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border: 2px dashed #00a0e9;
                cursor: move;
            }
        }
    }

    .design-nav {
        width: 285px;
        height: auto;
        background: #fdfdfd;
        border: 1px solid #ddd;
        padding: 15px 10px;
        transition: all 0.3s;
        user-select: none;
        margin-right: 15px;
    }
    .design-editor {
        width: 400px;
        height: auto;
        min-height: 100px;
        padding: 15px 10px;
        border: 1px solid #ddd;
        margin-left: 15px;
    }

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
            background: #00aeff;
            top: 8px;
            left: 9px;
        }
    }
}
</style>
