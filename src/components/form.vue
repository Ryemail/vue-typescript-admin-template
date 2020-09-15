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
            <template v-for="(item, key) in conf">
                <el-form-item
                    v-if="item.length === undefined"
                    :key="key"
                    :label="item.label"
                    :prop="setFormProp(item)"
                    :label-width="setLabelWidth(item)"
                >
                    <el-input v-if="item.type === 'input'" :placeholder="item.placeholder" v-model="form[item.prop]" />

                    <!-- select -->
                    <el-select v-if="item.type === 'select'" v-model="form[item.prop]" :placeholder="item.placeholder">
                        <el-option
                            v-for="(value, key) in item.option"
                            :key="key"
                            :label="value.name"
                            :value="value.id || value.name"
                        />
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
                        <el-checkbox v-for="(value, key) in item.option" :key="key" :label="value.id">
                            {{ value.name }}
                        </el-checkbox>
                    </el-checkbox-group>

                    <!-- radio -->
                    <el-radio-group v-if="item.type === 'radio'" v-model="form[item.prop]">
                        <el-radio v-for="(value, key) in item.option" :key="key" :label="value.id">
                            {{ value.name }}
                        </el-radio>
                    </el-radio-group>

                    <!-- textarea -->
                    <el-input
                        v-if="item.type === 'textarea'"
                        type="textarea"
                        :placeholder="item.placeholder"
                        v-model="form[item.prop]"
                    />
                </el-form-item>

                <!-- 联级选择 start -->
                <template v-else>
                    <el-form-item
                        v-for="(value, index) in item"
                        :key="value.prop"
                        :label="value.label"
                        :prop="setFormProp(value)"
                        :label-width="setLabelWidth(value)"
                    >
                        <el-select
                            v-model="form[value.prop]"
                            :placeholder="value.placeholder"
                            @change="onSelectChange(item, index)"
                        >
                            <el-option
                                v-for="(opt, key) in value.option"
                                :key="key"
                                :label="opt.name"
                                :value="opt.id || opt.name"
                            />
                        </el-select>
                    </el-form-item>
                </template>
                <!-- 联级选择 end  -->
            </template>
        </div>
        <el-form-item v-if="buttonColums.length">
            <el-button
                v-for="(item, key) in buttonColums"
                :key="key"
                :type="setButtonType(item.type)"
                @click="onEvent(item)"
            >
                {{ item.placeholder }}
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { ElForm } from 'element-ui/types/form';
import { DomFormConfig } from '@/types/components/form';

@Component
export default class DomForm extends Vue {
    @Prop({ type: String, default: 'reform' }) reform!: string;

    @Prop({ type: Boolean, default: true }) inline!: boolean; // 是否行内表单

    @Prop({ type: Boolean, default: false }) showMessage!: boolean; // 是否显示校验信息

    @Prop({ type: Boolean, default: false }) hideRequiredAsterisk!: boolean; // 是否显示必填星号

    @Prop({ type: Number, default: 80 }) labelWidth!: boolean; // label 宽度

    @Prop({ type: Array, default: () => [] }) config!: (DomFormConfig | DomFormConfig[])[]; // 配置

    @Prop({ type: Object, default: () => ({}) }) form!: { [key: string]: any }; // 表单数据

    @Prop({ type: Object, default: () => ({}) }) rules!: object; // 校验规则

    conf = this.config;

    buttonColums: DomFormConfig[] = [];

    get classObj() {
        return {
            'flex-1': this.inline,
        };
    }

    @Watch('config', { deep: true, immediate: true })
    onChange(value: DomFormConfig[]) {
        this.conf = value;
        this.lazyLoad();
    }

    setLabelWidth(item: DomFormConfig) {
        const labelWidth = item.labelWidth ? item.labelWidth : this.labelWidth;
        return `${labelWidth}px`;
    }

    setButtonType(type: string) {
        return type.includes('-') ? type.split('-')[1] : type;
    }

    setFormProp(item: DomFormConfig) {
        return /button/g.test(item.type) ? '' : item.prop;
    }

    lazyLoad() {
        const type = ['select', 'radio', 'checkbox'];

        const setOpt = (item: DomFormConfig) => {
            if (type.includes(item.type)) {
                item.lazyLoad && item.lazyLoad(data => (item.option = data), { ...item, row: this.form });
            }
        };

        this.conf.forEach((item, index) => {
            if (Array.isArray(item)) return setOpt(item[0]);

            if (item.type.includes('button')) {
                this.buttonColums.push(item);
                this.conf.splice(index, 1);
            }

            setOpt(item);
        });
    }

    //联级选择
    onSelectChange(item: DomFormConfig[], index: number) {
        const key = index + 1,
            len = item.length,
            nextOpt = item[key],
            form = this.$refs[this.reform] as ElForm,
            prop = item.map(it => it.prop);

        for (let i = key; i < len; i++) {
            this.form[item[i].prop] = '';
            item[i].option = [];
        }

        nextOpt &&
            nextOpt.lazyLoad &&
            nextOpt.lazyLoad(data => (nextOpt.option = data), { ...nextOpt, row: this.form });

        form.clearValidate(prop);
    }

    // 表单事件
    onEvent(item: DomFormConfig) {
        if (item.prop === 'submit') {
            const form = this.$refs[this.reform] as ElForm;

            const valider = (valid: boolean) => valid && this.$emit('event', { ...item, row: this.form });

            return form.validate(valider);
        }

        if (item.prop === 'reset') this.onReset();

        this.$emit('event', { ...item, row: this.form });
    }

    // 提交
    onSubmit() {
        const form = this.$refs[this.reform] as ElForm;

        let flag = false;

        form.validate(valid => (flag = valid));

        return new Promise((resolve, reject) => {
            if (flag) resolve(this.form);

            reject(null);
        });
    }

    // 重置表单
    onReset() {
        const form = this.$refs[this.reform] as ElForm;
        form.resetFields();
    }
}
</script>

<style lang="less" scoped>
.dom-form-inline {
    display: flex;
}
</style>
