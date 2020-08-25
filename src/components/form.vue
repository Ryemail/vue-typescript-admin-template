<template>
    <el-form
        :ref="reform"
        :model="form"
        :label-width="`${labelWidth}px`"
        :inline="inline"
        :rules="rules"
        :show-message="showMessage"
        :hide-required-asterisk="hideRequiredAsterisk"
        :class="[inline ? 'dom-form-inline' : 'dom-form-block']"
    >
        <div :class="classObj">
            <el-form-item
                v-for="(item, key) in config"
                :key="key"
                :label="item.label"
                :prop="item.prop"
                :label-width="setLabelWidth(item)"
            >
                <!-- input -->
                <el-input v-if="item.type === 'input'" :placeholder="item.placeholder" v-model="form[item.prop]" />

                <!-- select -->
                <el-select v-if="item.type === 'select'" v-model="form[item.prop]" :placeholder="item.placeholder">
                    <el-option
                        v-for="(value, key) in item.option"
                        :key="key"
                        label="区域一"
                        value="shanghai"
                    ></el-option>
                </el-select>

                <!-- date-picker -->
                <el-date-picker
                    v-if="item.type === 'date'"
                    type="date"
                    :placeholder="item.placeholder"
                    v-model="form[item.prop]"
                    style="width: 100%;"
                />

                <!-- time-picker -->
                <el-time-picker
                    v-if="item.type === 'time'"
                    :placeholder="item.placeholder"
                    v-model="form[item.prop]"
                    style="width: 100%;"
                />

                <!-- switch -->
                <el-switch v-if="item.type === 'switch'" v-model="form[item.prop]"></el-switch>

                <!-- checkbox -->
                <el-checkbox-group v-if="item.type === 'checkbox'" v-model="form[item.prop]">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>

                <!-- radio -->
                <el-radio-group v-if="item.type === 'radio'" v-model="form[item.prop]">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>

                <!-- textarea -->
                <el-input v-if="item.type === 'textarea'" type="textarea" v-model="form[item.prop]"></el-input>
            </el-form-item>
        </div>
        <el-form-item v-if="footer">
            <el-button type="primary" @click="onSubmit">确定</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ElForm } from 'element-ui/types/form';
import { DomForm as F } from '@/types';

@Component
export default class DomForm extends Vue {
    @Prop({ type: String, default: 'reform' }) reform!: string;

    @Prop({ type: Boolean, default: true }) inline!: boolean; // 是否行内表单

    @Prop({ type: Boolean, default: false }) showMessage!: boolean; // 是否显示校验信息

    @Prop({ type: Boolean, default: false }) hideRequiredAsterisk!: boolean; // 是否显示必填星号

    @Prop({ type: Boolean, default: true }) footer!: boolean; // 是否显示footer

    @Prop({ type: Number, default: 80 }) labelWidth!: boolean; // label 宽度

    @Prop({ type: Array, default: () => [] }) config!: F.Config[]; // 配置

    @Prop({ type: Object, default: () => ({}) }) form!: object; // 表单数据

    @Prop({ type: Object, default: () => ({}) }) rules!: object; // 校验规则

    conf = this.config;

    get classObj() {
        return {
            'flex-1': this.inline,
        };
    }

    created() {
        this.lazyLoad();
    }

    setLabelWidth(item: F.Config) {
        const labelWidth = item.labelWidth ? item.labelWidth : this.labelWidth;
        return `${labelWidth}px`;
    }

    lazyLoad() {
        const type = ['select', 'radio', 'checkbox'];

        this.conf.forEach(item => {
            if (type.includes(item.type)) {
                item.lazyLoad &&
                    item.lazyLoad(data => {
                        item.option = data;
                    });
            }
        });
        console.log(this.conf, 'config');
    }

    // 提交
    onSubmit() {
        const form = this.$refs[this.reform] as ElForm;

        let flag = false;

        form.validate(valid => {
            flag = valid;
            if (flag) this.$emit('onSubmit');
        });

        return new Promise((resolve, reject) => {
            if (flag) resolve(flag);

            reject(flag);
        })
            .then(() => {
                //
            })
            .catch(() => {
                //
            });
    }
}
</script>

<style lang="less" scoped>
.dom-form-inline {
    display: flex;
}
</style>
