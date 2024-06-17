<template>
  <div id="chart04">

  </div>
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
    this.initChart()
    //  this.initChart()
    this.bindResizeEvent();

  },
  updated() {
    this.chart.resize();

  },
  methods: {
 
    bindResizeEvent() {
      window.addEventListener('resize', this.resize);
    },
    resize() {
      this.chart.resize();
    },
    async initChart() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }
      this.chart = echarts.init(document.getElementById('chart04'));
      const option = {

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return '第' + params.value + "天"
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
          left: '10',
          top: "30",
          right: '10',
          bottom: '5',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            name: '天',
            // data:this.frameList,
            data: Array.from({ length: 30 }, (v, i) => (i + 1).toString()),
           
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              // interval: 100, // 每隔 100 个数据显示一次标签

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
            // 间隙

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
              formatter: '{value} 次'
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
            name: '参观人次',
            type: 'line',

            smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: "#0184d5"
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12

            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            formatter: '{value} 次',

            data: [20, 30, 40, 20, 40, 50, 30, 60, 20, 40, 70, 50, 40, 50, 30, 40, 30, 60, 40, 50, 30, 60, 20, 40, 20, 40, 70, 50, 50, 40]
          },

        ]
      };
      this.chart.setOption(option);
    },
    updateMonth(){
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return  params.value + "月"
              }
            }
          }
        },

        legend: {
          top: "0%",
          left: "10%",
        },
        xAxis: {
          data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
        },
        series: [
          {
            name: '参观人次(极大值)',
            type: 'line',

            smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: "#0184d5"
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12

            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            formatter: '{value} 次',

            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94]
          },
          {
            name: '参观人次(极小值)',
            type: 'line',

            smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: "rgb(195, 109, 38)"
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12

            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            formatter: '{value} 次',

            data: [15, 18, 13, 17, 12, 20, 14, 19, 11, 16, 10, 21]
          },
          {
            name: '参观人次(平均值)',
            type: 'line',

            smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: "rgb(145, 204, 117)"
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12

            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            formatter: '{value} 次',

            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68]
          },
        ]

      })
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  }
}
</script>
</script>

<style lang="less" scoped>
#chart04 {
  width: 100%;
  height: 100%;
}
</style>