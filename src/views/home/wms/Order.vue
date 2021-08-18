<template>
    <div class="order">
        <div class="table">
            <el-table
                :data="orderData"
                style="width: 100%">
                 <el-table-column
                    prop="id"
                    label="编号"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址"
                >
                </el-table-column>
            </el-table>
        </div>

        <div class="inputBox">
            <el-input v-model="input0" placeholder="请输入编号" class="mr20"></el-input>
            <el-input v-model="input1" placeholder="请输入日期" class="mr20"></el-input>
            <el-input v-model="input2" placeholder="请输入姓名" class="mr20"></el-input>
            <el-input v-model="input3" placeholder="请输入地址" class="mr20"></el-input>
        </div>
        <el-button type="success" @click="add">添加订单</el-button>
        <el-button type="danger" @click="deleteOrder(input0)">删除订单</el-button>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        name:'Order',
        data() {
            return {
                input0:'',
                input1:'',
                input2:'',
                input3:''
            }
        },
        computed: {
            ...mapState('orderAbout',['orderData']),
        },
        methods: {
            add() {
                if(this.input0 !== '' && this.input1 !== '' && this.input2 !== '' && this.input3 !== ''){
                    const orderObj = {
                        id: this.input0,
                        date: this.input1,
                        name: this.input2,
                        address: this.input3
                    };
                    this.$store.commit('orderAbout/ADD', orderObj);
                    this.input0 = '';
                    this.input1 = '';
                    this.input2 = '';
                    this.input3 = '';
                }else{
                    alert('输入不能为空');
                }
                
            },
            ...mapMutations('orderAbout',{deleteOrder:'DELETE'}),
        }
    }
</script>

<style scoped>
    .inputBox{
        display: flex;
        justify-content: center;
        width: 600px;
        margin: 20px auto
    }
    .mr20{
        margin-right: 20px;
    }
</style>