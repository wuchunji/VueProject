<template>
    <div class="stats">
        <div class="total">
            <h2>店铺总销量(千件)</h2>
            <div ref="total" style="width: 600px;height:400px;"></div>
        </div>
        <div class="single">
            <h2>热门商品销量</h2>
            <div ref="single" style="width: 600px;height:400px;"></div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name:'Stats',
        computed: {
            ...mapState('goodsAbout',['goods']),
        },
        methods: {
            totalSale() {
                const chartDom = this.$refs.total;
                const myChart = this.$echarts.init(chartDom);

                const option = {
                    xAxis: {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line'
                    }]
                };

                option && myChart.setOption(option);
            },
            singleSale() {
                const chartDom = this.$refs.single;
                const myChart = this.$echarts.init(chartDom);

                const option = {
                    xAxis: {
                        type: 'category',
                        data: ['黑色卫衣', '黑色T恤', '双色外套', '白色卫衣']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [this.goods[0].sales, {
                            value: this.goods[1].sales,
                            itemStyle: {
                                color: '#ff0000'
                            }
                        }, this.goods[2].sales, this.goods[3].sales],
                        type: 'bar'
                    }]
                };

                option && myChart.setOption(option);
            }
        },
        mounted() {
            this.totalSale();
            this.singleSale();
        },
    }
</script>

<style scoped>
    .stats{
        display: flex;
        justify-content: center;
    }
</style>