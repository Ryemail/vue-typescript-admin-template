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

        <dom-dialog :show.sync="show" title="编辑" @confirm="editConfirm">
            <dom-form ref="form" :footer="false" />
        </dom-dialog>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DomForm } from '@/types';

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

    queryConfig: DomForm.Config[] = [
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
            type: 'switch',
            prop: 'switch',
        },
        {
            type: 'textarea',
            prop: 'desc',
            placeholder: '请输入文本',
        },
    ];

    private onSubmit() {
        console.log('onSubmit', this.query);
    }

    // 编辑确定
    private editConfirm() {
        const form = this.$refs['form'] as HTMLFormElement;

        form.onSubmit().then(() => {
            console.log('fomr');
        });
    }
}
</script>
