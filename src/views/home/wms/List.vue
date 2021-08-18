<template>
    <div class="order">
        <div class="table">
            <el-table
                :data="listData"
                style="width: 100%">
                 <el-table-column
                    prop="id"
                    label="编号"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="货名"
                    width="280">
                </el-table-column>
                <el-table-column
                    prop="save"
                    label="库存"
                    width="280"
                >
                </el-table-column>
                <el-table-column
                    prop="price"
                    label="价格"
                >
                </el-table-column>
            </el-table>
        </div>

        <div class="inputBox">
            <el-input v-model="input0" placeholder="请输入编号" class="mr20"></el-input>
            <el-input v-model="input1" placeholder="请输入货名" class="mr20"></el-input>
            <el-input v-model="input2" placeholder="请输入库存" class="mr20"></el-input>
            <el-input v-model="input3" placeholder="请输入价格" class="mr20"></el-input>
        </div>

        <el-button type="primary" icon="el-icon-plus" circle @click="increase(input0)"></el-button>
        <el-button type="info" icon="el-icon-minus" circle @click="decrease(input0)"></el-button> <br>
        <el-button type="success" @click="add">添加货物</el-button>
        <el-button type="danger" @click="deleteList(input0)">删除货物</el-button> <br>
        
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        name:'List',
        data() {
            return {
                input0:'',
                input1:'',
                input2:'',
                input3:''
            }
        },
        computed: {
            ...mapState('listAbout',['listData']),
        },
        methods: {
            add() {
                if(this.input0 !== '' && this.input1 !== '' && this.input2 !== '' && this.input3 !== ''){
                    const listObj = {
                        id: this.input0,
                        title: this.input1,
                        save: this.input2,
                        price: this.input3
                    };
                    this.$store.commit('listAbout/ADD', listObj);
                    this.input0 = '';
                    this.input1 = '';
                    this.input2 = '';
                    this.input3 = '';
                }else{
                    alert('输入不能为空');
                }
                
            },
            ...mapMutations('listAbout',{deleteList:'DELETE',increase:'INCREASE',decrease:'DECREASE'}),
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
    button{
        margin-top: 20px;
    }
</style>