<template>
  <div id="chart02"></div>
</template>


<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      chart: null,

    };
  },
  created() {

  },
  mounted() {
    this.initChart();
    this.bindResizeEvent();
  },
  updated() {
    this.chart.resize();
  },
  methods: {

    initChart() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }
      this.chart = echarts.init(document.getElementById('chart02'));

      const option = {

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + '号'
              }
            }
          }
        },
        legend: {
          top: "0%",
          left: "5%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }

        },

        grid: {
          left: '5',
          top: "45",
          right: '5',
          bottom: '5',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',

            name: '时间',
            data: Array.from({ length: 30 }, (v, i) => (i + 1).toString()),
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)"
              }
            }

          }
        ],
        yAxis: [
          {
            type: 'value',

            // max: 300,
            // min: 0,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: '{value} kg'
            },
            // 修改分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            name: '助剂1',
            type: 'bar',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            // emphasis: {
            //   focus: 'series'
            // },

            itemStyle: {
              color: "rgb(245, 108, 108)",
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [76, 74, 74, 77, 78, 72, 79, 73, 78, 75, 77, 76, 72, 75, 75, 78, 71, 80, 78, 77, 76, 79, 74, 75, 74, 76, 75, 71, 74, 71],
          },
          {
            name: '助剂2',
            type: 'bar',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            // emphasis: {
            //   focus: 'series'
            // },

            itemStyle: {
              color: "rgb(92, 184, 92)",

            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [85, 87, 89, 83, 80, 84, 89, 88, 81, 86, 80, 83, 88, 82, 86, 84, 85, 80, 86, 89, 81, 88, 84, 82, 81, 83, 85, 84, 87, 82],
          },
          {
            name: '助剂3',
            type: 'bar',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            // emphasis: {
            //   focus: 'series'
            // },

            // 设置拐点颜色以及边框
            itemStyle: {
              color: "rgb(241, 196, 15)",

            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [94, 97, 94, 98, 96, 96, 92, 91, 94, 93, 92, 91, 95, 98, 94, 98, 94, 91, 98, 96, 92, 97, 96, 99, 95, 97, 93, 91, 94, 94],
          },
        ]
      };


      this.chart.setOption(option);
    },
    // 助剂（月）
    updateMonth() {
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {

            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + '月'
              }
            }
          }
        },
        xAxis: {
          data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
        },
        series: [
          {
            name: '助剂1(极大值)',
            type: 'bar',
            stack: 'Ad',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [85, 87, 89, 83, 80, 84, 89, 88, 81, 86, 80, 83, 88,],
          },
          {
            name: '助剂1(极小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            stack: 'Ad',
            data: [76, 74, 74, 77, 78, 72, 79, 73, 78, 75, 77, 76],
          },
          {
            name: '助剂1(平均值)',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,

            },

            data: [98, 94, 98, 94, 91, 98, 96, 92, 97, 96, 99, 95],
          },

          {
            name: '助剂2(极大值)',
            type: 'bar',
            stack: 'Bd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [52, 56, 58, 53, 50, 55, 59, 51, 57, 54, 60, 50],
          },
          {
            name: '助剂2(极小值)',
            type: 'bar',
            stack: 'Bd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [43, 45, 41, 49, 50, 46, 42, 47, 40, 44, 50, 48],
          },
          {
            name: '助剂2(平均值)',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,

            },

            data: [41, 43, 49, 45, 40, 48, 42, 44, 50, 47, 46, 50],
          },

          {
            name: '助剂3(极大值)',
            type: 'bar',
            stack: 'Cd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [62, 65, 63, 69, 70, 66, 64, 67, 60, 68, 70, 66],
          },
          {
            name: '助剂3(极小值)',
            type: 'bar',
            stack: 'Cd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [67, 69, 63, 65, 60, 68, 62, 64, 70, 66, 61, 70],
          },
          {
            name: '助剂3(平均值)',
            type: 'line',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: 'red',
            },

            data: [65, 67, 70, 61, 68, 64, 63, 66, 69, 62, 60, 70],
          }
        ]
      })
    },
    // 助剂（年）
    updateYear() {
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {

            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + '年'
              }
            }
          }
        },
        xAxis: {
          data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
        },
        series: [
          {
            name: '助剂1(极大值)',
            type: 'bar',
            stack: 'Ad',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [89, 83, 80, 84, 89, 88, 81, 86, 80, 83, 88,],
          },
          {
            name: '助剂1(极小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            stack: 'Ad',
            data: [74, 77, 78, 72, 79, 73, 78, 75, 77, 76],
          },
          {
            name: '助剂1(平均值)',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,

            },

            data: [98, 94, 91, 98, 96, 92, 97, 96, 99, 95],
          },

          {
            name: '助剂2(极大值)',
            type: 'bar',
            stack: 'Bd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [58, 53, 50, 55, 59, 51, 57, 54, 60, 50],
          },
          {
            name: '助剂2(极小值)',
            type: 'bar',
            stack: 'Bd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [41, 49, 50, 46, 42, 47, 40, 44, 50, 48],
          },
          {
            name: '助剂2(平均值)',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,

            },

            data: [49, 45, 40, 48, 42, 44, 50, 47, 46, 50],
          },

          {
            name: '助剂3(极大值)',
            type: 'bar',
            stack: 'Cd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [63, 69, 70, 66, 64, 67, 60, 68, 70, 66],
          },
          {
            name: '助剂3(极小值)',
            type: 'bar',
            stack: 'Cd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [63, 65, 60, 68, 62, 64, 70, 66, 61, 70],
          },
          {
            name: '助剂3(平均值)',
            type: 'line',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: 'red',
            },

            data: [70, 61, 68, 64, 63, 66, 69, 62, 60, 70],
          }
        ]
      })
    },
    // 助剂（历年）
    updateHistoryYear() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }
      this.chart = echarts.init(document.getElementById('chart02'));
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + '历年'
              }
            }
          }
        },
        legend: {
          top: "0%",
          left: "5%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }

        },

        grid: {
          left: '5',
          top: "45",
          right: '5',
          bottom: '5',
          containLabel: true
        },

        xAxis: [
          {
            type: 'category',
            data: ['助剂1', '助剂2', '助剂3'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)"
              }
            }

          }
        ],
        yAxis: [
          {
            type: 'value',

            // max: 300,
            // min: 0,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: '{value} kg'
            },
            // 修改分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            name: '极大值',
            type: 'bar',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [89, 90, 91],
          },
          {
            name: '极小值',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [74, 77, 78],
          },
          {
            name: '平均值',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,

            },

            data: [91, 95, 96],
          },
        ]
      })
    },


    monthZJM() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }
      this.chart = echarts.init(document.getElementById('chart02'));

      const option = {

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + '月'
              }
            }
          }
        },
        legend: {
          top: "0%",
          left: "5%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }

        },

        grid: {
          left: '5',
          top: "45",
          right: '5',
          bottom: '5',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',

            name: '时间',
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)"
              }
            }

          }
        ],
        yAxis: [
          {
            type: 'value',

            // max: 300,
            // min: 0,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: '{value} kg'
            },
            // 修改分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            name: '助剂1',
            type: 'bar',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            emphasis: {
              focus: 'series'
            },

            itemStyle: {
              color: "rgb(245, 108, 108)",
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [78, 75, 77, 76, 72, 75, 75, 78, 71, 80, 78, 77, 76, 79, 74, 75, 74, 76, 75, 71, 74, 71],
          },
          {
            name: '助剂2',
            type: 'bar',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            emphasis: {
              focus: 'series'
            },

            itemStyle: {
              color: "rgb(92, 184, 92)",

            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [85, 87, 89, 83, 80, 84, 89, 88, 81, 86, 80, 83, 88, 82, 86, 84, 85, 80, 86, 89, 81, 88, 84, 82, 81, 83, 85, 84, 87, 82],
          },
          {
            name: '助剂3',
            type: 'bar',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            emphasis: {
              focus: 'series'
            },

            // 设置拐点颜色以及边框
            itemStyle: {
              color: "rgb(241, 196, 15)",

            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [93, 92, 91, 95, 98, 94, 98, 94, 91, 98, 96, 92, 97, 96, 99, 95, 97, 93, 91, 94, 94],
          },
        ]
      };


      this.chart.setOption(option);
    },
    yearZJM() {
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {

            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + '年'
              }
            }
          }
        },
        xAxis: {
          data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
        },
        series: [
          {
            name: '助剂1(极大值)',
            type: 'bar',
            stack: 'Ad',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [89, 83, 80, 84, 89, 88, 81, 86, 80, 83, 88,],
          },
          {
            name: '助剂1(极小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            stack: 'Ad',
            data: [74, 77, 78, 72, 79, 73, 78, 75, 77, 76],
          },
          {
            name: '助剂1(平均值)',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,

            },

            data: [98, 94, 91, 98, 96, 92, 97, 96, 99, 95],
          },

          {
            name: '助剂2(极大值)',
            type: 'bar',
            stack: 'Bd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [58, 53, 50, 55, 59, 51, 57, 54, 60, 50],
          },
          {
            name: '助剂2(极小值)',
            type: 'bar',
            stack: 'Bd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [41, 49, 50, 46, 42, 47, 40, 44, 50, 48],
          },
          {
            name: '助剂2(平均值)',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,

            },

            data: [49, 45, 40, 48, 42, 44, 50, 47, 46, 50],
          },

          {
            name: '助剂3(极大值)',
            type: 'bar',
            stack: 'Cd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [63, 69, 70, 66, 64, 67, 60, 68, 70, 66],
          },
          {
            name: '助剂3(极小值)',
            type: 'bar',
            stack: 'Cd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [63, 65, 60, 68, 62, 64, 70, 66, 61, 70],
          },
          {
            name: '助剂3(平均值)',
            type: 'line',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: 'red',
            },

            data: [70, 61, 68, 64, 63, 66, 69, 62, 60, 70],
          }
        ]
      })
    },
    historyZJM() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }
      this.chart = echarts.init(document.getElementById('chart02'));
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + '历年'
              }
            }
          }
        },
        legend: {
          top: "0%",
          left: "5%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }

        },

        grid: {
          left: '5',
          top: "45",
          right: '5',
          bottom: '5',
          containLabel: true
        },

        xAxis: [
          {
            type: 'category',
            data: ['助剂1', '助剂2', '助剂3'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)"
              }
            }

          }
        ],
        yAxis: [
          {
            type: 'value',

            // max: 300,
            // min: 0,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: '{value} kg'
            },
            // 修改分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            name: '极大值',
            type: 'bar',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [89, 90, 91],
          },
          {
            name: '极小值',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [74, 77, 78],
          },
          {
            name: '平均值',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,

            },

            data: [91, 95, 96],
          },
        ]
      })
    },

    yearZJY() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }
      this.chart = echarts.init(document.getElementById('chart02'));

      const option = {

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + '年'
              }
            }
          }
        },
        legend: {
          top: "0%",
          left: "5%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }

        },

        grid: {
          left: '5',
          top: "45",
          right: '5',
          bottom: '5',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',

            name: '时间',
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)"
              }
            }

          }
        ],
        yAxis: [
          {
            type: 'value',

            // max: 300,
            // min: 0,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: '{value} kg'
            },
            // 修改分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            name: '助剂1',
            type: 'bar',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            emphasis: {
              focus: 'series'
            },

            itemStyle: {
              color: "rgb(245, 108, 108)",
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [78, 75, 77, 76, 72, 75, 75, 78, 71, 80, 78, 77, 76, 79, 74, 75, 74, 76, 75],
          },
          {
            name: '助剂2',
            type: 'bar',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            emphasis: {
              focus: 'series'
            },

            itemStyle: {
              color: "rgb(92, 184, 92)",

            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [85, 87, 89, 83, 80, 84, 89, 88, 81, 86, 80, 83, 88, 82, 86, 84, 85, 80, 86, 89, 81, 88, 84, 82, 81, 83, 85, 84, 87, 82],
          },
          {
            name: '助剂3',
            type: 'bar',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            emphasis: {
              focus: 'series'
            },

            // 设置拐点颜色以及边框
            itemStyle: {
              color: "rgb(241, 196, 15)",

            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [93, 92, 91, 95, 98, 94, 98, 94, 91, 98, 96, 92, 97, 96, 99, 95, 97, 93, 91, 94, 94],
          },
        ]
      };


      this.chart.setOption(option);
    },
    historyZJY() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }
      this.chart = echarts.init(document.getElementById('chart02'));
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + '历年'
              }
            }
          }
        },
        legend: {
          top: "0%",
          left: "5%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }

        },

        grid: {
          left: '5',
          top: "45",
          right: '5',
          bottom: '5',
          containLabel: true
        },

        xAxis: [
          {
            type: 'category',
            data: ['助剂1', '助剂2', '助剂3'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)"
              }
            }

          }
        ],
        yAxis: [
          {
            type: 'value',

            // max: 300,
            // min: 0,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: '{value} kg'
            },
            // 修改分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            name: '极大值',
            type: 'bar',

            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [89, 90, 91],
          },
          {
            name: '极小值',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },

            data: [74, 77, 78],
          },
          {
            name: '平均值',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,

            },

            data: [91, 95, 96],
          },
        ]
      })
    },
    bindResizeEvent() {
      window.addEventListener('resize', this.resize);
    },
    resize() {
      this.chart.resize();
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  }
}
</script>

<style scoped>
#chart02 {
  width: 100%;
  height: 100%;
  padding: .0167rem;
}
</style>