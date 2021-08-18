<template>
    <div class="login">
        <p>管理系统</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="密  码" prop="password">
                <el-input type="password" v-model="ruleForm.password" @keyup.enter.native="login"></el-input>
            </el-form-item>

            <el-form-item class="btnContent">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="info" @click="toReg">注册</el-button>
            </el-form-item>
        </el-form> 
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                ruleForm: {
                    name: '',
                    password: '',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            login() {
                let {name, password} = this.ruleForm;
                if(name === sessionStorage.getItem('name') && password === sessionStorage.getItem('password')) {
                    sessionStorage.setItem('allow', true);
                    this.$router.push('/home');
                }else{
                    console.log(name, password);
                    this.ruleForm.name = '';
                    this.ruleForm.password = '';
                    alert('用户名或密码错误！');
                }

                // 这个是用axios获取后端数据，但是我没有后端服务器
                // this.$http({
                //     method: 'post',
                //     url: '/get_login',
                //     data:{user: name, password: password}
                // }).then()
            },
            toReg() {
                this.$router.push('/register');
            }
        }
    }
</script>

<style scoped>
    .login{
        width: 400px;
        margin: 0 auto;
        margin-top: 200px;
    }
</style>