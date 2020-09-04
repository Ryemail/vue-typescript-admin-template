<template>
    <section class="design">
        <div class="design-phone">
            <div class="design-phone-title">页面设计</div>
            <el-scrollbar class="design-phone-wrap">
                <div class="drag-wrap" ref="drag">
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
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const dragula = require('dragula');

@Component
export default class Design extends Vue {
    mounted() {
        dragula([this.$refs.drag], {
            moves(el: HTMLElement) {
                console.log(el.className);
                // if (!el.className.includes('selected')) el.className += ' selected';
                const parent = el.parentNode;
                if (parent) {
                    const children = parent.childNodes;

                    console.log(children);

                    children.forEach(ele => {
                        console.log(ele.className, 'ele');
                        console.log(el === ele);
                        if (el === ele) {
                            if (!ele.className.includes('selected')) ele.className += ' selected';
                        } else {
                            ele.className = ele.className.replace('selected', '');
                        }
                    });
                }
                return true;
            },
        })
            .on('drag', function(el: HTMLElement) {
                console.log(el, 'drag');
                el.className = el.className.replace('selected', '');
            })
            .on('drop', function(el: HTMLElement) {
                // el.className += ' ex-moved';
                console.log(el, 'drop');
            })
            .on('over', function(el: HTMLElement) {
                console.log(el, 'over');
            })
            .on('out', function(el: HTMLElement) {
                console.log(el, 'out');
                // container.className = container.className.replace('ex-over', '');
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
}
</style>
