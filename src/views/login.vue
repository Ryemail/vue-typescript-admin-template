<template>
    <main class="login">
        <header class="header">
            <img class="logo" src="@/assets/image/logo.png" alt="青橄榄" />
        </header>
        <section class="content">
            <div class="content-form">
                <div class="rectangle"><img src="@/assets/image/rectangle.png" /></div>
                <el-form ref="form" class="login-form" :model="form">
                    <div class="login-form-title">登录</div>
                    <el-form-item label="企业账号">
                        <el-input v-model="form.system" placeholder="请输入企业账号"></el-input>
                    </el-form-item>
                    <el-form-item label="个人账号">
                        <el-input v-model="form.name" placeholder="请输入个人账号"></el-input>
                    </el-form-item>
                    <el-form-item label="账号密码">
                        <el-input v-model="form.password" placeholder="请输入账号密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="login-button" round @click="onSubmit">立即登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </section>
        <footer class="login-footer">
            <div class="copyright">
                <p>杭州青橄榄网络技术有限公司</p>
                <p>Tel：0571-87208806</p>
                <p>Add：杭州市 西湖区 西湖国际科技大厦 D楼 中座 617</p>
                <p>Copyright © 2015-2016 Golive All Rights Reserved 浙ICP备14020207号-4</p>
            </div>
            <div>
                <img src="@/assets/image/code.png" class="qrcode" />
                <p>青橄榄网络</p>
            </div>
        </footer>
    </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Attr, Rules, LoginForm } from '@/types/login';

@Component
export default class Login extends Vue {
    private form: LoginForm = {
        system: '',
        name: '',
        password: '',
    };

    // 登录
    private onSubmit() {
        this.validater(this.form, {
            system: [{ message: '请输入企业账号' }],
            name: [{ message: '请输入个人账号' }],
            password: [{ message: '请输入账号密码' }],
        });
    }

    // 数据为空校验
    private validater(data: LoginForm, rules: Rules): boolean {
        let ret = false;
        for (const key in rules) {
            const rule: Attr[] = rules[key];

            for (let i = 0; i < rule.length; i++) {
                if (!data[key].length) {
                    const type = rule[i].type ? rule[i].type : 'error';
                    this.$message({
                        type: type,
                        message: rule[i].message,
                    });
                    ret = true;
                    break;
                }
            }
            if (ret) break;
        }
        return ret;
    }
}
</script>

<style lang="less" scoped>
.login {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .header {
        padding: 0 20px 0 165px;
        height: 60px;
        background: #fff;
        display: flex;
        align-items: center;
        .logo {
            height: 32px;
            width: 305px;
            object-fit: contain;
            object-position: left;
        }
    }
    .content {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('../assets/image/pic.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        .content-form {
            display: flex;
            width: 740px;
            height: 360px;
            overflow: hidden;
            background: linear-gradient(32deg, rgba(159, 238, 235, 0.3) 0%, rgba(255, 255, 255, 1) 100%);
            border-radius: 10px;
            .login-form {
                flex: 1;
                background-color: #fff;
                padding: 0 20px;
            }
        }
        .login-form-title {
            text-align: center;
            font-size: 24px;
            padding: 32px 0 10px;
        }
        .rectangle {
            width: 384px;
            img {
                object-fit: contain;
            }
        }
        .login-button {
            width: 100%;
            margin-top: 16px;
            height: 45px;
            border-radius: 25px;
            font-size: 16px;
        }
    }
    .login-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 182px 0 165px;
        height: 130px;
        background: #fff;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #333333;
        line-height: 20px;
        .qrcode {
            width: 70px;
            height: 70px;
            object-fit: contain;
            object-position: center;
            .copyright {
                text-align: left;
            }
        }
        p {
            margin: 0;
        }
    }
    /deep/ .login-form {
        .el-input__inner {
            padding-left: 90px;
            border-radius: 25px;
            height: 50px;
            line-height: 50px;
        }
        .el-form-item__label {
            position: absolute;
            top: 5px;
            left: 20px;
            z-index: 1;
            padding-right: 0;
        }
        .el-form-item {
            overflow: hidden;
            position: relative;
            margin-bottom: 10px;
        }
    }
}
</style>
