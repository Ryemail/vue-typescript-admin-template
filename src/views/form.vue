<template>
    <div class="form">
        <h1>查询表单</h1>
        <dom-form ref="form" :config="queryConfig" :label-width="0" :form="query" :inline="false" @event="formEvent" />

        <h1>dialog 表单</h1>
        <dom-dialog :show.sync="show" title="编辑" @cancel="onCancel" @confirm="editConfirm">
            <dom-form ref="dialogForm" :config="queryConfig" :inline="false" :rules="queryRules" :form="query" />
        </dom-dialog>

        <el-button @click="dialog1">dialog1</el-button>
        <el-button @click="showModal">modal</el-button>
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
        province: [{ required: true, message: '请选择时间' }],
        city: [{ required: true, message: '请选择时间' }],
        county: [{ required: true, message: '请选择时间' }],
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

    private created() {
        // this.$result({ code: 200, message: '操作成功', data: {} });
    }

    private showModal() {
        this.$modal({
            type: 'warning',
            title: '成功导入数据100条，失败数据25条！ ',
            message: '请前往基础配置-操作日志-导入操作日志，下载失败数据。',
            callback(action: string) {
                console.log(action);
            },
        });
    }

    private dialog1() {
        // this.queryConfig = [
        //     {
        //         type: 'input',
        //         prop: 'name',
        //         placeholder: '请输入姓名',
        //     },
        //     {
        //         type: 'select',
        //         prop: 'region',
        //         placeholder: '请选择活动',
        //         lazyLoad(resolve) {
        //             resolve([
        //                 { id: 1, name: '阮垚' },
        //                 { id: 2, name: '陈涛' },
        //             ]);
        //         },
        //     },
        //     {
        //         type: 'date',
        //         prop: 'date',
        //         placeholder: '请选择日期',
        //     },
        //     {
        //         type: 'time',
        //         prop: 'time',
        //         placeholder: '请选择时间',
        //     },
        //     {
        //         type: 'checkbox',
        //         prop: 'checkbox',
        //         placeholder: '复选框',
        //         lazyLoad(resolve) {
        //             resolve([
        //                 { id: 1, name: '复选1' },
        //                 { id: 2, name: '复选2' },
        //                 { id: 3, name: '复选3' },
        //                 { id: 4, name: '复选4' },
        //             ]);
        //         },
        //     },
        //     {
        //         type: 'radio',
        //         prop: 'radio',
        //         placeholder: '复选框',
        //         option: [
        //             { id: 1, name: '男' },
        //             { id: 2, name: '女' },
        //         ],
        //     },
        //     {
        //         type: 'radio',
        //         prop: 'radio',
        //         placeholder: '复选框',
        //         option: [
        //             { id: 1, name: '男' },
        //             { id: 2, name: '女' },
        //         ],
        //     },
        //     {
        //         type: 'switch',
        //         prop: 'flag',
        //     },
        //     {
        //         type: 'textarea',
        //         prop: 'desc',
        //         placeholder: '请输入文本',
        //     },
        //     {
        //         type: 'radio',
        //         prop: 'radio',
        //         placeholder: '复选框',
        //         option: [
        //             { id: 1, name: '男' },
        //             { id: 2, name: '女' },
        //         ],
        //     },
        //     {
        //         type: 'radio',
        //         prop: 'radio',
        //         placeholder: '复选框',
        //         option: [
        //             { id: 1, name: '男' },
        //             { id: 2, name: '女' },
        //         ],
        //     },
        // ];
        this.show = true;
    }

    formEvent(params: DomFormConfig) {
        console.log(params);
    }

    // 编辑确定
    private async editConfirm() {
        const form = this.$refs.dialogForm as DomForm;

        try {
            const res = await form.onSubmit();
            console.log(res, 'dialog');
        } catch (e) {
            console.log(e);
        }
    }

    onCancel() {
        (this.$refs.dialogForm as DomForm).onReset();
    }
}
</script>
<style lang="less" scoped>
.form {
    padding: 0 80px;
}
</style>
