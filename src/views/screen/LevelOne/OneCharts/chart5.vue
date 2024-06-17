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
            // Use axis to trigger tooltip
            type: 'shadow',
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
          right: '20',
          bottom: '3',
          containLabel: true
        },
        xAxis: [{
          type: 'value',
          min: 0,
          max: 600,
          axisLabel: {
            //文本颜色
            color: "rgba(255,255,255,.6)",
            fontSize: 12,

          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
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
        }],
        yAxis: {
          type: 'category',
          data: Array.from({ length: 30 }, (v, i) => (i+1).toString()),
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.7)"
            }
          },

        },
        series: [
          {
            name: '宣传传播量',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,

              fontSize: 10

            },
            emphasis: {
              focus: 'series'
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + '次';
              }
            },
            data: [320, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390, 330, 320, 320, 302, 301]
          },


        ]
      };


      this.chart.setOption(option);
    },
    updateMonth() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: '#6a7985',
              formatter: function (params) {
                return params.value + "月"
              }
            }
          }
        },
        legend: {
          top: "0%",
          left: "10%",
        },
        xAxis: [
          {
            min: 0,
            max: 1000,
          }
        ],
        yAxis: {
          data: Array.from({ length: 12 }, (v, i) => (i+1).toString()),
        },
        series: [
        {
            name: '传播量(极大值)',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,

              fontSize: 10

            },
            emphasis: {
              focus: 'series'
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + '次';
              }
            },
            data: [320, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390]
          },
          {
            name: '传播量(极小值)',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,

              fontSize: 10

            },
            emphasis: {
              focus: 'series'
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + '次';
              }
            },
            data: [215, 218, 213, 217, 212, 220, 214, 219, 211, 216, 210, 221]
          },
          {
            name: '传播量(平均值)',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,

              fontSize: 10

            },
            emphasis: {
              focus: 'series'
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + '次';
              }
            },
            data: [257, 261, 252, 248, 270, 264, 259, 254, 266, 277, 272, 268]
          },
        ]
      });
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