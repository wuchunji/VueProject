<template>
    <div class="index">
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="(item, index) in items" :key="index">
                <img :src="item" style="width: 100%;height: 100%"/>
            </el-carousel-item>
        </el-carousel>

        <div class="hotGoods">
            <h2>热销产品:</h2>
            <ul>
                <li v-for="(item, i) in goodsItemUrl" :key="i">
                    <a href="#"><img :src="item" /></a>
                </li>
            </ul>
            <div class="text">
                <h4 v-for="good in goods" :key="good.id">{{good.title}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name:'Index',
        data() {
            return {
                items:[
                    require('@/assets/img/1.jpeg'),
                    require('@/assets/img/3.jpeg'),
                    require('@/assets/img/2.jpeg'),
                ],
                goodsItemUrl: [
                    require('@/assets/img/hot_1.jpeg'),
                    require('@/assets/img/hot_2.jpeg'),
                    require('@/assets/img/hot_3.jpeg'),
                    require('@/assets/img/hot_4.jpeg'),
                ]
            }
        },
        computed: {
            ...mapState('goodsAbout',['goods']),
        }
    }
</script>

<style scoped>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


    /* 热门商品展示区 */
    .hotGoods h2{
        font-size: 30px;
        color: #f40;
        text-align: left;
        line-height: 30px;
        margin-top: 20px;
    }
    .hotGoods ul{
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
        height: 430px;
    }
    .hotGoods .text{
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
    }
    .hotGoods .text h4{
        width: 25%;
        font-size: 20px;
        line-height: 20px;
        text-align: center;
    }
</style>