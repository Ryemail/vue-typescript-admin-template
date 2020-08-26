<template>
    <router-link
        :to="to"
        @click.native="onClick"
        :class="['dom-icon', disabled ? 'icon-disabled' : '']"
        :style="{ color, fontSize: size + 'px' }"
    >
        <i :class="name"></i>
        {{ text }}
    </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Location } from 'vue-router';

@Component
export default class DomIcon extends Vue {
    @Prop({ type: String, default: '' }) name!: string;

    @Prop({ type: String, default: '' }) text!: string;

    @Prop({ type: String, default: '' }) color!: string;

    @Prop({ type: Number, default: 14 }) size!: number;

    @Prop({ type: Boolean, default: false }) disabled!: boolean;

    @Prop({ type: [String, Object], default: '' }) to!: string | Location;

    private onClick() {
        !this.to && this.$emit('onClick');
    }
}
</script>

<style lang="less">
.dom-icon {
    transition: all 0.3s;
    .icon-disabled {
        cursor: not-allowed;
        color: #666 !important;
    }
    &:hover {
        opacity: 0.6;
    }
}
</style>
