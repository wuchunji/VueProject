<template>
    <div ref="trade" style="width: 1200px;height:800px;"></div>
</template>

<script>
    export default {
        name: 'Role',
        methods: {
            trade() {
                const chartDom = this.$refs.trade;
                const myChart = this.$echarts.init(chartDom);
                const option = {
                    legend: {
                        top: 'bottom'
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {show: true},
                            dataView: {show: true, readOnly: false},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    series: [
                        {
                            name: '面积模式',
                            type: 'pie',
                            radius: [50, 250],
                            center: ['50%', '50%'],
                            roseType: 'area',
                            itemStyle: {
                                borderRadius: 8
                            },
                            data: [
                                {value: 40, name: '学生'},
                                {value: 38, name: 'IT行业'},
                                {value: 32, name: '教育行业'},
                                {value: 30, name: '金融行业'},
                                {value: 28, name: '艺术行业'},
                                {value: 26, name: '司法行业'},
                                {value: 22, name: '个体'},
                                {value: 18, name: '房地产行业'}
                            ]
                        }
                    ]
                };

                option && myChart.setOption(option);

            }
        },
        mounted() {
            this.trade();
        },
    }
</script>

<style>

</style>