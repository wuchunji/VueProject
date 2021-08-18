<template>
    <div class="register">
        <p>注册账号</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="密  码" prop="password">
                <el-input type="password" v-model="ruleForm.password" @keyup.enter.native="register"></el-input>
            </el-form-item>

            <el-form-item class="btnContent">
                <el-button type="primary" @click="register">注册</el-button>
                <el-button type="info" @click="backLogin">返回登录</el-button>
            </el-form-item>
        </el-form> 
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            ruleForm: {
                name: '',
                password: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入正确用户名', trigger: 'blur' },
                    { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
                ],
                password: [
                     { required: true, message: '请输入正确密码', trigger: 'blur' },
                    { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        register() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    sessionStorage.setItem('name', this.ruleForm.name);
                    sessionStorage.setItem('password', this.ruleForm.password);
                    alert('注册成功！');
                    this.$router.push('/login');  
                } else {
                    alert('用户名或密码不合法!')
                    return false;
                }
            })
        },
        backLogin() {
            this.$router.push('/login');
        },
        a(){
            console.log(1);
        }
    }
}
</script>

<style scoped>
    .register{
        width: 400px;
        margin: 0 auto;
        margin-top: 200px;
    }
</style>