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
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }

        },

        grid: {
          left: '10',
          top: "45",
          right: '10',
          bottom: '5',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
           
            name: '时间',
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

            max: 100,
            min: 80,
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
            name: '日黑水虻虫沙重量',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
           
            itemStyle: {
              width: 2,
              color: "#0184d5"
            },
            // 填充颜色设置
          

            data: [90, 91, 93, 94, 95, 95, 94, 96, 97, 95, 96, 96, 93, 99, 94, 98, 90, 95, 92, 96, 92, 97, 96, 93, 95, 96, 94, 96, 97, 99],
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
                return params.value + '月'
              }
            }
          }
        },
        legend: {
          top: "0%",
          left: "5%",
        },
        xAxis: {
          data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
        },
        yAxis: [
          {
            max: 100,
            min: 0,
          }
        ],
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

<style scoped>
#chart02 {
  width: 100%;
  height: 100%;
  padding: .0167rem;
}
</style>