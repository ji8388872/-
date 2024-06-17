<template>
  <div id="fuHua"></div>
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

      const chartElement = document.querySelector('#fuHua');
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
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          },
          show: false
        },
        grid: {
          left: '10',
          top: "40",
          right: '10',
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
            min: 0,
            max: 100,
            interval: 20,

            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: '{value}万元'
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
            name: '吨处理成本',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3
            ],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: '均值', label: { position: 'middle', formatter: '均值：{c} 万元', color: '#fff' } }]
            }
          }
        ]
      };


      this.chart.setOption(option);
    },
    // （月）
    monthCost() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + '月'
              }
            }
          }
        },
        legend: {
          top: '0%',
          left: "10%",
          show: true
        },
        xAxis: [
          {
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
          }
        ],
        series: [
          {
            name: '吨处理成本(极大值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              82.2, 88.7, 88.8, 86.0, 82.3,
              72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '吨处理成本(极小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              2.6, 5.9, 9.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2,
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '吨处理成本(平均值)',
            type: 'line',
            smooth: true,//圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              52.6, 52.9, 59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2,
            ],
            markPoint: null,
            markLine: null
          },
        ]
      })
    },
    // （年）
    yearCost() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + '年'
              }
            }
          }
        },
        legend: {
          top: '0%',
          left: "10%",
          show: true
        },
        xAxis: [
          {
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          }
        ],
        series: [
          {
            name: '吨处理成本(极大值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              88.8, 86.0, 82.3,
              72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '吨处理成本(极小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2,
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '吨处理成本(平均值)',
            type: 'line',
            smooth: true,//圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2,
            ],
            markPoint: null,
            markLine: null
          },
        ]
      })
    },
    // (历年)
    historyCost() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + ''
              }
            }
          }
        },
        legend: {
          top: '0%',
          left: "10%",
          show: true
        },
        xAxis: [
          {
            data: ['历年', '总计'],
          }
        ],
        series: [
          {
            name: '吨处理成本(极大值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              88.8, 88.8
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '吨处理成本(极小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              29.0, 29.0
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '吨处理成本(平均值)',
            type: 'line',
            smooth: true,//圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              59.0, 59.0
            ],
            markPoint: null,
            markLine: null
          },
        ]
      })
    },


    // 月明细图
    monthCostM() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }

      const chartElement = document.querySelector('#fuHua');
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
          right: "20%",
          show: true,
          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }
        },
        grid: {
          left: '10',
          top: "30",
          right: '10',
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
            min: 0,
            max: 100,
            interval: 20,

            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: '{value}万元'
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
            name: '吨处理成本',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              70.7, 75.6, 82.2
            ],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: '均值', label: { position: 'middle', formatter: '均值：{c} 万元', color: '#fff' } }]
            }
          }
        ]
      };


      this.chart.setOption(option);
    },
    // 年极值图
    yearCostM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + '年'
              }
            }
          }
        },
        legend: {
          top: '0%',
          left: "10%",
          show: true
        },
        xAxis: [
          {
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          }
        ],
        series: [
          {
            name: '吨处理成本(极大值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              88.8, 86.0, 82.3,
              72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '吨处理成本(极小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2,
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '吨处理成本(平均值)',
            type: 'line',
            smooth: true,//圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2,
            ],
            markPoint: null,
            markLine: null
          },
        ]
      })
    },
    // 历年（月）
    historyCostM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + ''
              }
            }
          }
        },
        legend: {
          top: '0%',
          left: "10%",
          show: true
        },
        xAxis: [
          {
            data: ['历年', '总计'],
          }
        ],
        series: [
          {
            name: '吨处理成本(极大值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              88.8, 88.8
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '吨处理成本(极小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              29.0, 29.0
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '吨处理成本(平均值)',
            type: 'line',
            smooth: true,//圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              59.0, 59.0
            ],
            markPoint: null,
            markLine: null
          },
        ]
      })
    },

    // 年明细图
    yearCostY() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }

      const chartElement = document.querySelector('#fuHua');
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
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          },
          show: true
        },
        grid: {
          left: '10',
          top: "40",
          right: '10',
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
            min: 0,
            max: 100,
            interval: 20,

            axisLabel: {

              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: '{value}万元'
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
            name: '吨处理成本',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              70.7, 75.6, 82.2
            ],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: '均值', label: { position: 'middle', formatter: '均值：{c} 万元', color: '#fff' } }]
            }
          }
        ]
      };


      this.chart.setOption(option);
    },
    // 历年（年）
    historyCostY() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + ''
              }
            }
          }
        },
        legend: {
          top: '0%',
          left: "10%",
          show: true
        },
        xAxis: [
          {
            data: ['历年', '总计'],
          }
        ],
        series: [
          {
            name: '吨处理成本(极大值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              88.8, 88.8
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '吨处理成本(极小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              29.0, 29.0
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '吨处理成本(平均值)',
            type: 'line',
            smooth: true,//圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + '万元';
              }
            },

            data: [
              59.0, 59.0
            ],
            markPoint: null,
            markLine: null
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
#fuHua {
  width: 100%;
  height: 100%;
  padding: .0167rem;
}
</style>