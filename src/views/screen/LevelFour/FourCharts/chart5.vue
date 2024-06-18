<template>
  <div id="chart05"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      chart: null,

    };
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
      this.chart = echarts.init(document.getElementById('chart05'));

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
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }
        },
        grid: {
          left: '2',
          top: "45",
          right: '2',
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
            name: "(km)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
            axisTick: {
              show: false
            },
            // min: 0,
            // max: 140,
            interval: 20,

            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: '{value} '
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
            name: '电车里程',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            data: [75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              18.8, 6.0, 2.3, 70.7,
              10, 15, 18, 20, 25.6, 76.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3,
              28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3, 70.7,
            ]
          },
          {
            name: '油车里程',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3
            ],

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

        series: [
          {
            name: '电车里程(最大值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
          {
            name: '电车里程(最小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,

            ]
          },
          {
            name: '电车里程(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            // stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,

            ]
          },
          {
            name: '油车里程(最大值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            stack: '油车里程(最大值)',
            emphasis: {
              focus: 'series'
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
          {
            name: '油车里程(最小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            stack: '油车里程(最大值)',
            emphasis: {
              focus: 'series'
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
          {
            name: '油车里程(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },

            emphasis: {
              focus: 'series'
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
        ],

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

        series: [
          {
            name: '电车里程(最大值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
          {
            name: '电车里程(最小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,

            ]
          },
          {
            name: '电车里程(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            // stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,

            ]
          },
          {
            name: '油车里程(最大值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            stack: '油车里程(最大值)',
            emphasis: {
              focus: 'series'
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
          {
            name: '油车里程(最小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            stack: '油车里程(最大值)',
            emphasis: {
              focus: 'series'
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
          {
            name: '油车里程(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },

            emphasis: {
              focus: 'series'
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
        ],

      })
    },
    updateHistoryYear() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }

      const chartElement = document.querySelector('#chart05');
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
                return params.value + '历年'
              }
            }
          }
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }
        },
         grid: {
          left: '2',
          top: "45",
          right: '2',
          bottom: '3',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            // boundaryGap: false,
            data: ['电车里程', '油车里程'],
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
            name: "(km)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
            axisTick: {
              show: false
            },
            // min: 0,
            // max: 140,
            interval: 20,

            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: '{value} H'
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
            name: '最大值',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 小时';
              }
            },
            data: [
              80, 82
            ]
          },
          {
            name: '最小值',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 小时';
              }
            },
            data: [
              2.6, 5.9
            ],

          },
          {

            name: '平均值',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 小时';
              }
            },
            data: [
              18, 20
            ]
          }
        ]
      };


      this.chart.setOption(option);
    },


    monthNYM() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }
      this.chart = echarts.init(document.getElementById('chart05'));

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
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }
        },
         grid: {
          left: '2',
          top: "45",
          right: '2',
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
            name: "(km)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
            axisTick: {
              show: false
            },
            // min: 0,
            // max: 140,
            interval: 20,

            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: '{value} '
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
            name: '电车里程',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            data: [
              10, 15, 18, 20, 25.6, 76.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3,
              28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3, 70.7,
            ]
          },
          {
            name: '油车里程',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            data: [

              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3
            ],

          },

        ]
      };

      this.chart.setOption(option);
    },
    yearNYM() {
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

        series: [
          {
            name: '电车里程(最大值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
          {
            name: '电车里程(最小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,

            ]
          },
          {
            name: '电车里程(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            // stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,

            ]
          },
          {
            name: '油车里程(最大值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            stack: '油车里程(最大值)',
            emphasis: {
              focus: 'series'
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
          {
            name: '油车里程(最小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            stack: '油车里程(最大值)',
            emphasis: {
              focus: 'series'
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
          {
            name: '油车里程(平均值)',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },

            emphasis: {
              focus: 'series'
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ]
          },
        ],

      })
    },
    historyNYM() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }

      const chartElement = document.querySelector('#chart05');
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
                return params.value + '历年'
              }
            }
          }
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }
        },
         grid: {
          left: '2',
          top: "45",
          right: '2',
          bottom: '3',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            // boundaryGap: false,
            data: ['电车里程', '油车里程'],
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
            name: "(km)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
            axisTick: {
              show: false
            },
            // min: 0,
            // max: 140,
            interval: 20,

            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: '{value} ',
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
            name: '最大值',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 小时';
              }
            },
            data: [
              80, 82
            ]
          },
          {
            name: '最小值',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 小时';
              }
            },
            data: [
              2.6, 5.9
            ],

          },
          {

            name: '平均值',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 小时';
              }
            },
            data: [
              18, 20
            ]
          }
        ]
      };


      this.chart.setOption(option);
    },

    yearNYY() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }
      this.chart = echarts.init(document.getElementById('chart05'));

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
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }
        },
         grid: {
          left: '2',
          top: "45",
          right: '2',
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
            name: "(km)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
            axisTick: {
              show: false
            },
            // min: 0,
            // max: 140,
            interval: 20,

            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: '{value} '
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
            name: '电车里程',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            data: [
              10, 15, 18, 20, 25.6, 76.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3,
              28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3, 70.7,
            ]
          },
          {
            name: '油车里程',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' km';
              }
            },
            data: [

              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3
            ],

          },

        ]
      };

      this.chart.setOption(option);
    },
    historyNYY() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }

      const chartElement = document.querySelector('#chart05');
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
                return params.value + '历年'
              }
            }
          }
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }
        },
         grid: {
          left: '2',
          top: "45",
          right: '2',
          bottom: '3',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            // boundaryGap: false,
            data: ['电车里程', '油车里程'],
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
            name: "(km)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
            axisTick: {
              show: false
            },
            // min: 0,
            // max: 140,
            interval: 20,

            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: '{value} ',
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
            name: '最大值',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 小时';
              }
            },
            data: [
              80, 82
            ]
          },
          {
            name: '最小值',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 小时';
              }
            },
            data: [
              2.6, 5.9
            ],

          },
          {

            name: '平均值',
            type: 'line',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 小时';
              }
            },
            data: [
              18, 20
            ]
          }
        ]
      };


      this.chart.setOption(option);
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


<style lang="less" scoped>
#chart05 {
  width: 100%;
  height: 100%;
}
</style>