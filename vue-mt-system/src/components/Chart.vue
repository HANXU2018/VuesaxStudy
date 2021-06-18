<template>
    <div>
        <div id="chart" style="width:400px;height: 400px"></div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                chart: null,
            };
        },
        mounted() {
            // 在生命周期中调用函数
            this.draw();
        },
        methods: {
            draw() {
                // 基于准备好的 dom，初始化 echarts 实例
                this.chart = this.$echarts.init(document.getElementById('chart'));

                let option = {
                    // 全局字体样式
                    textStyle: {
                        color: '#666',
                        fontStyle: 'normal',
                        fontSize: 12,
                    },
                    // 标题模块
                    title: {
                        show: true,
                        text: '折线图案例',
                        subtext: 'subtext表示内容描述',
                        //标题距离左侧的位置
                        left: 'center',
                        //标题距离顶部的位置
                        top: 0,
                        // 设置标题文字样式
                        textStyle: {
                            fontSize: 24,
                            color: '#7e7bd6',
                        },
                        // 设置副标题文字样式
                        subtextStyle: {
                            fontSize: 14,
                        },
                    },
                    // 图例模块
                    legend: {
                        // 需要展示的图例映射，对应 series 里的 name 名称
                        data: ['line1', 'line2'],
                        show: true,
                        left: 'center',
                        bottom: '0%',
                        // 图例内边距
                        padding: 5,
                        // 图例之间的间隔
                        itemGap: 10,
                        // 自定义图例的名称，模板变量为图例名称 {name}
                        formatter: '自定义{name}',
                        // 图例关闭时的颜色
                        inactiveColor: '#ccc',
                        // 图例颜色控制
                        textStyle: {
                            color: '#333',
                            fontStyle: 'normal',
                        },
                    },
                    // 控制坐标的位置，相当于控制整个图表的位置
                    grid: {
                        show: true,
                        left: '0%',
                        bottom: 60,
                        width: '90%',
                        height: 'auto',
                        // 区域是否包含坐标轴的刻度标签
                        containLabel: true,
                        // 整个图表的背景颜色（默认透明）
                        backgroundColor: 'transparent',
                    },
                    // X轴数据
                    xAxis: {
                        // 坐标轴的类型是类目轴，适用于离散的类目数据
                        type: 'category',
                        // 展示数据
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        // 与轴线之间的距离
                        nameGap: 15,
                        // 控制坐标文字的样式，不一一列举
                        nameTextStyle: {
                            color: 'rgb(80,227,194)',
                        },
                        // 坐标轴刻度控制
                        axisTick: {
                            show: true,
                            length: 5,
                        },
                        // 控制文字数据
                        axisLabel: {
                            // 格式化内容，{value} 代表原有数据
                            formatter: '{value}',
                        },
                        // 控制坐标轴线
                        axisLine: {
                            show: true,
                            // 控制坐标轴线的箭头
                            symbol: ['none', 'arrow'],
                            lineStyle: {
                                // 设置坐标轴线的颜色
                                color: '#3498db',
                                width: 1,
                                // 坐标轴线线的类型
                                type: 'solid',
                            },
                        },
                        // 指示条，鼠标放到图形上会出现辅助线条/图形
                        axisPointer: {
                            show: true,
                            type: 'line', // 'shadow'是出现长方形底色辅助图形
                        },
                        // 背景网格控制
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ['#e4e4e4'],
                                width: 1,
                                type: 'solid',
                            },
                        },
                    },
                    // Y 轴数据
                    yAxis: {
                        type: 'value',
                        // 控制坐标轴线
                        axisLine: {
                            show: true,
                            // 控制坐标轴线的箭头
                            symbol: ['none', 'arrow'],
                            lineStyle: {
                                // 设置坐标轴线的颜色
                                color: '#3498db',
                                width: 1,
                                // 坐标轴线线的类型
                                type: 'solid',
                            },
                        },
                    },
                    // 类型控制、数据列表、样式操作等区域
                    series: [
                        {
                            // 控制数据要展示的类型图表（请参照官方案例）
                            type: 'line', //line，bar，pie，scatter.....
                            name: 'line1',
                            data: [820, 932, 810, 934, 1290, 1330, 1320],
                            // 是否开启弯曲过度
                            smooth: true,
                            // 开启 hover 在拐点标志上的提示动画效果。
                            hoverAnimation: true,
                            // 标签控制区域
                            label: {
                                show: true,
                                // 文字在横向上偏移 30，纵向上偏移 40
                                offset: [0, -5],
                                fontSize: 12,
                            },
                            // 曲线样式
                            lineStyle: {
                                normal: {
                                    // 线条宽度
                                    width: 2,
                                    // 颜色控制
                                    color: {
                                        type: 'linear',
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: '#A44FFF', // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: '#0CB0D3', // 100% 处的颜色
                                            },
                                        ],
                                        // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                                        /*color: {
                                        type: 'radial',
                                        x: 0.5,
                                        y: 0.5,
                                        r: 0.5,
                                        colorStops: [{
                                            offset: 0, color: 'red' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: 'blue' // 100% 处的颜色
                                        }],
                                        global: false // 缺省为 false
                                      }*/
                                        globalCoord: false, // 缺省为 false
                                    },
                                },
                            },
                        },
                        {
                            name: 'line2',
                            data: [82, 93, 190, 93, 229, 233, 232],
                            type: 'line',
                        },
                    ],
                };
                // 创建图表
                this.chart.setOption(option);
            },
        },
    };

</script>

<style lang="scss" scoped></style>
