<template>
    <div class="users">
        <div ref="sex" style="width: 900px;height:600px;"></div>
        <div ref="source" style="width: 900px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name:'Users',
        methods: {
            sex() {
                const chartDom = this.$refs.sex;
                const myChart = this.$echarts.init(chartDom);
                const option = {
                    title: {
                        text: '用户性别分布',
                        subtext: '纯属虚构',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                    },
                    series: [
                        {
                            name: '性别分布',
                            type: 'pie',
                            radius: '50%',
                            data: [
                                {value: 1048, name: '男'},
                                {value: 735, name: '女'},
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };

                option && myChart.setOption(option);
            },
            source() {
                const chartDom = this.$refs.source;
                const myChart = this.$echarts.init(chartDom);
                const option = {
                    title: {
                        text: '商店用户访问来源',
                        subtext: '纯属虚构',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '50%',
                            data: [
                                {value: 1048, name: '淘宝'},
                                {value: 735, name: '拼多多'},
                                {value: 580, name: '京东'},
                                {value: 484, name: '苏宁'},
                                {value: 300, name: '微信商城'}
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };

                option && myChart.setOption(option);
            }
        },
        mounted() {
            this.sex();
            this.source();
        },
    }
</script>

<style scoped>
    .users{
        margin-top: 100px;
        display: flex;
        justify-content: center;
    }
</style>