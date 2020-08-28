<style lang="less"></style>

<template>
    <div class="form">
        <dom-form
            ref="form"
            :config="queryConfig"
            :label-width="0"
            :form="query"
            :rules="queryRules"
            :show-message="true"
            :inline="false"
            @onSubmit="onSubmit"
        />

        <dom-dialog :show.sync="show" title="编辑" @cancel="onCancel" @confirm="editConfirm">
            <dom-form
                ref="form"
                :label-width="0"
                :config="queryConfig"
                :inline="false"
                :rules="queryRules"
                :form="query"
                :footer="false"
            />
        </dom-dialog>

        <el-button @click="dialog1">dialog1</el-button>
        <el-button @click="dialog2">dialog2</el-button>
        <el-button @click="dialog3">dialog3</el-button>
        <el-button @click="show = true">dialog4</el-button>
        <el-button @click="show = true">dialog5</el-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DomFormConfig, DomForm } from '@/types/components/form';

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
    };

    queryRules = {
        name: [{ required: true, message: '请输入姓名' }],
        region: [{ required: true, message: ' ' }],
        date: [{ required: true, message: '请选择时间' }],
    };

    queryConfig: DomFormConfig[] = [];

    private onSubmit() {
        console.log('onSubmit', this.query);
    }

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
                prop: 'switch',
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
    dialog2() {
        this.queryConfig = [
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

    dialog3() {
        this.queryConfig = [];
        this.show = true;
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
