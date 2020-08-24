<template>
    <el-form
        :ref="reform"
        :model="form"
        label-width="80px"
        :inline="inline"
        :class="[inline ? 'dom-form-inline' : 'dom-form-block']"
    >
        <div :class="classObj">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="11">
                    <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="form.date1"
                        style="width: 100%;"
                    ></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
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

@Component
export default class DomForm extends Vue {
    @Prop({ type: String, default: 'reform' }) reform!: string;

    @Prop({ type: Boolean, default: true }) inline!: boolean; // 是否行内表单

    @Prop({ type: Boolean, default: true }) footer!: boolean; // 是否显示footer

    @Prop({ type: Boolean, default: true }) buttonText!: boolean; // 是否自带button

    form = {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
    };
    get classObj() {
        return {
            'flex-1': this.inline,
        };
    }

    // 提交
    onSubmit() {
        const form = this.$refs[this.reform] as ElForm;

        let flag = false;

        form.validate(valid => (flag = valid));

        if (flag) return Promise.resolve(true);

        return Promise.reject(false);
    }
}
</script>

<style lang="less" scoped>
.dom-form-inline {
    display: flex;
}
</style>