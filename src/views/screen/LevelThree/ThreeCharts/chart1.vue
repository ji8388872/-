<template>
  <div id="chart01"></div>
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

      const chartElement = document.querySelector('#chart01');
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error('指定的元素不存在，请检查选择器是否正确。');
      }
      const option = {

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#6a7985'
            },
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
          left: "6%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12
          }
        },
        grid: {
          left: '5',
          top: "45",
          right: '5',
          bottom: '3',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            // boundaryGap: false,
            data: Array.from({ length: 30 }, (v, i) => (i + 1).toString()),
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
            },
            axisPointer: {
              type: 'shadow'
            },

          }
        ],
        yAxis: [
          {
            type: 'value',
            // name: '命中率',
            axisTick: {
              show: false
            },
            // min: 0,
            // max: 100,
            interval: 20,

            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: '{value} °C'
            },
            // 修改分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          },

        ],
        series: [
          {
            name: '设备外环境温度',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              10, 15, 18, 20, 25.6, 76.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3, 4.4, 4.5, 4.6, 4.7
            ]
          },
          {
            name: '环境温度',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3
            ]
          },
          {
            name: '物料温度',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3
            ]
          },
        ]
      };


      this.chart.setOption(option);
    },
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
        xAxis: [
          {
            type: 'category',
            // boundaryGap: false,
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
          }
        ],
        series: [
          {
            name: '设外环境温度(极大值)',
            type: 'bar',
            stack: 'Ad',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              10, 15, 18, 20, 25.6, 76.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
          {
            name: '设外环境温度(极小值)',
            type: 'bar',
            stack: 'Ad',
            tooltip: {
              valueFormatter: function (value) {
                return value + '  °C';
              }
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,

            ]
          },
          {
            name: '设外环境温度(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,

            ]
          },

          {
            name: '环境温度(极大值)',
            type: 'bar',
            stack: 'Bd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              62, 65, 63, 69, 70, 66, 64, 67, 60, 68, 70, 66
            ]
          },
          {
            name: '环境温度(极小值)',
            type: 'bar',
            stack: 'Bd',
            tooltip: {
              valueFormatter: function (value) {
                return value + '  °C';
              }
            },
            data: [
              67, 69, 63, 65, 60, 68, 62, 64, 70, 66, 61, 70

            ]
          },
          {
            name: '环境温度(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              65, 67, 70, 61, 68, 64, 63, 66, 69, 62, 60, 70

            ]
          },

          {
            name: '物料温度(极大值)',
            type: 'bar',
            stack: 'Cd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              53, 30, 80, 11, 69, 4, 26, 51, 89, 62, 95, 73
            ]
          },
          {
            name: '物料温度(极小值)',
            type: 'bar',
            stack: 'Cd',
            tooltip: {
              valueFormatter: function (value) {
                return value + '  °C';
              }
            },
            data: [
              17, 84, 95, 2, 44, 70, 58, 39, 99, 76, 36, 22

            ]
          },
          {
            name: '物料温度(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              48, 84, 7, 97, 39, 23, 61, 13, 58, 85, 79, 16

            ]
          },
        ]
      })
    },

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
        xAxis: [
          {
            type: 'category',
            // boundaryGap: false,
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
          }
        ],
        series: [
          {
            name: '设外环境温度(极大值)',
            type: 'bar',
            stack: 'Ad',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              18, 20, 25.6, 76.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
          {
            name: '设外环境温度(极小值)',
            type: 'bar',
            stack: 'Ad',
            tooltip: {
              valueFormatter: function (value) {
                return value + '  °C';
              }
            },
            data: [
              9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,

            ]
          },
          {
            name: '设外环境温度(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,

            ]
          },

          {
            name: '环境温度(极大值)',
            type: 'bar',
            stack: 'Bd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              63, 69, 70, 66, 64, 67, 60, 68, 70, 66
            ]
          },
          {
            name: '环境温度(极小值)',
            type: 'bar',
            stack: 'Bd',
            tooltip: {
              valueFormatter: function (value) {
                return value + '  °C';
              }
            },
            data: [
              63, 65, 60, 68, 62, 64, 70, 66, 61, 70

            ]
          },
          {
            name: '环境温度(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              70, 61, 68, 64, 63, 66, 69, 62, 60, 70

            ]
          },

          {
            name: '物料温度(极大值)',
            type: 'bar',
            stack: 'Cd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              80, 11, 69, 4, 26, 51, 89, 62, 95, 73
            ]
          },
          {
            name: '物料温度(极小值)',
            type: 'bar',
            stack: 'Cd',
            tooltip: {
              valueFormatter: function (value) {
                return value + '  °C';
              }
            },
            data: [
              95, 2, 44, 70, 58, 39, 99, 76, 36, 22

            ]
          },
          {
            name: '物料温度(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              97, 97, 39, 23, 61, 13, 58, 85, 79, 16

            ]
          },
        ]
      })
    },

    updateHistoryYear() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }

      const chartElement = document.querySelector('#chart01');
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error('指定的元素不存在，请检查选择器是否正确。');
      }
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
          left: "6%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12
          }
        },
        grid: {
          left: '5',
          top: "45",
          right: '5',
          bottom: '3',
          containLabel: true
        },

        xAxis: [
          {
            type: 'category',
            data: ['设外环境温度', '环境温度', '物料温度'],
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
              formatter: '{value} °C'
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

            data: [120, 110, 130],
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


    monthWDM() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }

      const chartElement = document.querySelector('#chart01');
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error('指定的元素不存在，请检查选择器是否正确。');
      }
      const option = {

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#6a7985'
            },
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
          left: "6%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12
          }
        },
        grid: {
          left: '5',
          top: "45",
          right: '5',
          bottom: '3',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            // boundaryGap: false,
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
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
            },
            axisPointer: {
              type: 'shadow'
            },

          }
        ],
        yAxis: [
          {
            type: 'value',
            // name: '命中率',
            axisTick: {
              show: false
            },
            // min: 0,
            // max: 100,
            interval: 20,

            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: '{value} °C'
            },
            // 修改分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          },

        ],
        series: [
          {
            name: '设备外环境温度',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [

              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3, 4.4, 4.5, 4.6, 4.7
            ]
          },
          {
            name: '环境温度',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3
            ]
          },
          {
            name: '物料温度',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              48.7, 18.8, 6.0, 2.3, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              70.7, 75.6, 82.2,
            ]
          },
        ]
      };


      this.chart.setOption(option);
    },
    yearWDM() {
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
        xAxis: [
          {
            type: 'category',
            // boundaryGap: false,
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
          }
        ],
        series: [
          {
            name: '设外环境温度(极大值)',
            type: 'bar',
            stack: 'Ad',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              18, 20, 25.6, 76.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
          {
            name: '设外环境温度(极小值)',
            type: 'bar',
            stack: 'Ad',
            tooltip: {
              valueFormatter: function (value) {
                return value + '  °C';
              }
            },
            data: [
              9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,

            ]
          },
          {
            name: '设外环境温度(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,

            ]
          },

          {
            name: '环境温度(极大值)',
            type: 'bar',
            stack: 'Bd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              63, 69, 70, 66, 64, 67, 60, 68, 70, 66
            ]
          },
          {
            name: '环境温度(极小值)',
            type: 'bar',
            stack: 'Bd',
            tooltip: {
              valueFormatter: function (value) {
                return value + '  °C';
              }
            },
            data: [
              63, 65, 60, 68, 62, 64, 70, 66, 61, 70

            ]
          },
          {
            name: '环境温度(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              70, 61, 68, 64, 63, 66, 69, 62, 60, 70

            ]
          },

          {
            name: '物料温度(极大值)',
            type: 'bar',
            stack: 'Cd',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              80, 11, 69, 4, 26, 51, 89, 62, 95, 73
            ]
          },
          {
            name: '物料温度(极小值)',
            type: 'bar',
            stack: 'Cd',
            tooltip: {
              valueFormatter: function (value) {
                return value + '  °C';
              }
            },
            data: [
              95, 2, 44, 70, 58, 39, 99, 76, 36, 22

            ]
          },
          {
            name: '物料温度(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              97, 97, 39, 23, 61, 13, 58, 85, 79, 16

            ]
          },
        ]
      })
    },
    historyWDM() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }

      const chartElement = document.querySelector('#chart01');
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error('指定的元素不存在，请检查选择器是否正确。');
      }
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
          left: "6%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12
          }
        },
        grid: {
          left: '5',
          top: "45",
          right: '5',
          bottom: '3',
          containLabel: true
        },

        xAxis: [
          {
            type: 'category',
            data: ['设外环境温度', '环境温度', '物料温度'],
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
              formatter: '{value} °C'
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

            data: [120, 110, 130],
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

    yearWDY() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }

      const chartElement = document.querySelector('#chart01');
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error('指定的元素不存在，请检查选择器是否正确。');
      }
      const option = {

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#6a7985'
            },
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
          left: "6%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12
          }
        },
        grid: {
          left: '5',
          top: "45",
          right: '5',
          bottom: '3',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            // boundaryGap: false,
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
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
            },
            axisPointer: {
              type: 'shadow'
            },

          }
        ],
        yAxis: [
          {
            type: 'value',
            // name: '命中率',
            axisTick: {
              show: false
            },
            // min: 0,
            // max: 100,
            interval: 20,

            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: '{value} °C'
            },
            // 修改分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          },

        ],
        series: [
          {
            name: '设备外环境温度',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [

              2.6, 5.9, 9.0, 82.2, 48.7, 18.8, 6.0, 2.3, 4.4, 4.5, 4.6, 4.7
            ]
          },
          {
            name: '环境温度',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              70.7, 75.6, 82.2, 48.7,
            ]
          },
          {
            name: '物料温度',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [
              48.7, 18.8, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              70.7, 75.6, 82.2,
            ]
          },
        ]
      };


      this.chart.setOption(option);
    },
    historyWDY() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }

      const chartElement = document.querySelector('#chart01');
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error('指定的元素不存在，请检查选择器是否正确。');
      }
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
          left: "6%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12
          }
        },
        grid: {
          left: '5',
          top: "45",
          right: '5',
          bottom: '3',
          containLabel: true
        },

        xAxis: [
          {
            type: 'category',
            data: ['设外环境温度', '环境温度', '物料温度'],
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
              formatter: '{value} °C'
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

            data: [120, 110, 130],
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
    resize() {
      this.chart.resize();
    },
    bindResizeEvent() {
      window.addEventListener('resize', this.resize);
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  }
}
</script>

<style scoped>
#chart01 {
  width: 100%;
  height: 100%;
  padding: .0167rem;
}
</style>