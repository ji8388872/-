<template>
  <div id="chart03">

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
    // 获取数据

    initChart() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }
      this.chart = echarts.init(document.getElementById('chart03'));

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
          top: "40",
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
            name: '(kg)',
            nameTextStyle: {
              color: "rgba(255,255,255,.9)",
            },
            axisTick: {
              show: false
            },
            // min: 0,
            // max: 100,
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
            name: '老虫重量',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7,
            ],
            // markPoint: {
            //   data: [
            //     { type: 'max', name: 'Max' },
            //     { type: 'min', name: 'Min' }
            //   ]
            // },
            // markLine: {
            //   data: [{ type: 'average', name: '均值', label: { position: 'middle', formatter: '均值：{c} ', color: '#fff' } }]
            // }
          },
          {
            name: '虫沙重量',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
           
            itemStyle: {
              
              color: "rgb(143, 202, 116)"
            },
            // 填充颜色设置
          

            data:[60, 61, 63, 64, 65, 65, 64, 66, 67, 65, 66, 66, 63, 69, 64, 68, 60, 65, 62, 66, 62, 67, 66, 63, 65, 66, 64, 66, 67, 69]
          },
        ]
      };


      this.chart.setOption(option);
    },
    updateMonth1() {
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
          top: "0%",
          left: "10%",
        },
        xAxis: [
          {
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
          }
        ],
        series: [
          {
            name: '老虫重量(极大值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            itemStyle: {
              // 修改柱状图的颜色
              color: 'rgb(145, 204, 117)'
            },
            data: [
              10, 15, 18, 20, 25.6, 76.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '老虫重量(极小值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            itemStyle: {
              // 修改柱状图的颜色
              color: 'rgb(24, 144, 255)'
            },
            data: [
              6, 9, 4, 7, 2, 10, 3, 8, 1, 5, 10, 11
            ],
            markPoint: null,
            markLine: null
          },
          {
            name: '老虫重量(平均值)',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            itemStyle: {
              // 修改柱状图的颜色
              color: 'rgb(195, 109, 38)'
            },
            data: [
              37, 31, 52, 48, 30, 34, 39, 34, 36, 37, 32, 38
            ],
            markPoint: null,
            markLine: null
          },
        ]
      })
    },
    updateMonth2() {
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
          top: "0%",
          left: "10%",
        },
        xAxis: {
          data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
        },
        // yAxis: [
        //   {
        //     max: 100,
        //     min: 0,
        //   }
        // ],
        series: [
          {
            name: '虫沙重量(极大值)',
            type: 'bar',
            
         
           
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
          
            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94]
          },
          {
            name: '虫沙重量(极小值)',
            type: 'bar',
           
          itemStyle: {
            // 修改柱状图的颜色
            color: 'rgb(145, 204, 117)'
          },
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
         
            data: [26,29, 24, 27, 22, 10, 23, 28, 21, 25, 20, 11]
          },
          {
            name: '虫沙重量(平均值)',
            type: 'bar',
            itemStyle: {
              color: 'rgb(213, 139, 81)'
            },
          
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            showSymbol: false,
          
            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68]
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


<style lang="less" scoped>
#chart03 {
  width: 100%;
  height: 100%;


}
</style>
