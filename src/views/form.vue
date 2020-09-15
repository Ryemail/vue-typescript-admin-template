<template>
    <div class="form">
        <dom-form ref="form" :config="queryConfig" :label-width="0" :form="query" :inline="false" @event="formEvent" />

        <dom-dialog :show.sync="show" title="编辑" @cancel="onCancel" @confirm="editConfirm">
            <dom-form
                ref="form"
                :label-width="0"
                :config="queryConfig"
                :inline="false"
                :rules="queryRules"
                :form="query"
            />
        </dom-dialog>

        <el-button @click="dialog1">dialog1</el-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DomFormConfig, DomForm, lazyLoadParams } from '@/types/components/form';

@Component
export default class Form extends Vue {
    show = false;

    query = {
        name: '',
        region: '',
        date: '',
        time: '',
        checkbox: [],
        radio: 1,
        flag: false,
        desc: '',
        province: '',
        city: '',
        county: '',
    };

    queryRules = {
        name: [{ required: true, message: '请输入姓名' }],
        region: [{ required: true, message: ' ' }],
        date: [{ required: true, message: '请选择时间' }],
    };

    queryConfig: (DomFormConfig | DomFormConfig[])[] = [
        { type: 'input', prop: 'name', placeholder: '请输入姓名' },
        {
            type: 'select',
            prop: 'region',
            placeholder: '请选择活动',
            lazyLoad(resolve) {
                resolve([
                    { id: 1, name: '阮垚' },
                    { id: 2, name: '陈涛' },
                ]);
            },
        },
        [
            {
                type: 'select',
                prop: 'province',
                placeholder: '请选择省',
                lazyLoad(resolve) {
                    resolve([
                        { id: 1, name: '阮垚' },
                        { id: 2, name: '陈涛' },
                    ]);
                },
            },
            {
                type: 'select',
                prop: 'city',
                placeholder: '请选择市',
                lazyLoad(resolve, params?: lazyLoadParams) {
                    console.log(params, 'lazyLoadParams');
                    resolve([
                        { id: 1, name: '阮垚' },
                        { id: 2, name: '陈涛' },
                    ]);
                },
            },
            {
                type: 'select',
                prop: 'county',
                placeholder: '请选择县',
                lazyLoad(resolve) {
                    resolve([
                        { id: 1, name: '阮垚' },
                        { id: 2, name: '陈涛' },
                    ]);
                },
            },
        ],
        { type: 'date', prop: 'date', placeholder: '请选择日期' },
        { type: 'time', prop: 'time', placeholder: '请选择时间' },
        {
            type: 'checkbox',
            prop: 'checkbox',
            placeholder: '复选框',
            lazyLoad(resolve) {
                resolve([
                    { id: 1, name: '复选1' },
                    { id: 2, name: '复选2' },
                    { id: 3, name: '复选3' },
                    { id: 4, name: '复选4' },
                ]);
            },
        },
        {
            type: 'radio',
            prop: 'radio',
            placeholder: '复选框',
            option: [
                { id: 1, name: '男' },
                { id: 2, name: '女' },
            ],
        },
        {
            type: 'radio',
            prop: 'radio',
            placeholder: '复选框',
            option: [
                { id: 1, name: '男' },
                { id: 2, name: '女' },
            ],
        },
        { type: 'switch', prop: 'flag' },
        { type: 'textarea', prop: 'desc', placeholder: '请输入文本' },
        {
            type: 'radio',
            prop: 'radio',
            placeholder: '复选框',
            option: [
                { id: 1, name: '男' },
                { id: 2, name: '女' },
            ],
        },
        {
            type: 'radio',
            prop: 'radio',
            placeholder: '复选框',
            option: [
                { id: 1, name: '男' },
                { id: 2, name: '女' },
            ],
        },
        { type: 'button-primary', prop: 'submit', placeholder: '搜索' },
        { type: 'button', prop: 'reset', placeholder: '重置' },
    ];

    private dialog1() {
        this.queryConfig = [
            {
                type: 'input',
                prop: 'name',
                placeholder: '请输入姓名',
            },
            {
                type: 'select',
                prop: 'region',
                placeholder: '请选择活动',
                lazyLoad(resolve) {
                    resolve([
                        { id: 1, name: '阮垚' },
                        { id: 2, name: '陈涛' },
                    ]);
                },
            },
            {
                type: 'date',
                prop: 'date',
                placeholder: '请选择日期',
            },
            {
                type: 'time',
                prop: 'time',
                placeholder: '请选择时间',
            },
            {
                type: 'checkbox',
                prop: 'checkbox',
                placeholder: '复选框',
                lazyLoad(resolve) {
                    resolve([
                        { id: 1, name: '复选1' },
                        { id: 2, name: '复选2' },
                        { id: 3, name: '复选3' },
                        { id: 4, name: '复选4' },
                    ]);
                },
            },
            {
                type: 'radio',
                prop: 'radio',
                placeholder: '复选框',
                option: [
                    { id: 1, name: '男' },
                    { id: 2, name: '女' },
                ],
            },
            {
                type: 'radio',
                prop: 'radio',
                placeholder: '复选框',
                option: [
                    { id: 1, name: '男' },
                    { id: 2, name: '女' },
                ],
            },
            {
                type: 'switch',
                prop: 'flag',
            },
            {
                type: 'textarea',
                prop: 'desc',
                placeholder: '请输入文本',
            },
            {
                type: 'radio',
                prop: 'radio',
                placeholder: '复选框',
                option: [
                    { id: 1, name: '男' },
                    { id: 2, name: '女' },
                ],
            },
            {
                type: 'radio',
                prop: 'radio',
                placeholder: '复选框',
                option: [
                    { id: 1, name: '男' },
                    { id: 2, name: '女' },
                ],
            },
        ];
        this.show = true;
    }

    formEvent(params: DomFormConfig) {
        console.log(params);
    }

    // 编辑确定
    private async editConfirm() {
        const form = this.$refs.form as DomForm;

        try {
            const res = await form.onSubmit();

            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }

    onCancel() {
        const form = this.$refs.form as DomForm;
        form.onReset();
    }
}
</script>
<style lang="less" scoped>
.form {
    padding: 0 80px;
}
</style>
