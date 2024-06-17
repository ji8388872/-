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
            boundaryGap: false,
            name: '时间',
            data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
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
            name: '助剂1',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: "#0184d5"
            },
            // 填充颜色设置
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 191, 0)'
                },
                {
                  offset: 1,
                  color: 'rgb(224, 62, 76)'
                }
              ])
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

            data: [90, 91, 93, 94, 95, 95, 94, 96, 97, 95, 96, 96, 93, 99, 94, 98, 90, 95, 92, 96, 92, 97, 96, 93, 95, 96, 94, 96, 97, 99],
          },
          {
            name: '助剂2',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: "#0184d5"
            },
            // 填充颜色设置
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 0, 135)'
                },
                {
                  offset: 1,
                  color: 'rgb(135, 0, 157)'
                }
              ])
            },
            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(245, 108, 108, .1)",
              borderWidth: 12

            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [95, 96, 96, 96, 93, 97, 95, 94, 95, 96, 97, 94, 97, 96, 96, 94, 95, 99, 96, 93, 90, 94, 99, 93, 90, 98, 92, 92, 95, 91],
          },
          {
            name: '助剂3',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: "#0184d5"
            },
            // 填充颜色设置
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(110, 191, 0)'
                },
                {
                  offset: 1,
                  color: 'rgb(110, 62, 76)'
                }
              ])
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

            data: [93, 94, 95, 97, 96, 91, 90, 96, 97, 96, 94, 95, 93, 96, 98, 95, 92, 94, 95, 93, 99, 96, 92, 96, 90, 97, 96, 99, 94, 92],
          },
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

<style scoped>
#chart02 {
  width: 100%;
  height: 100%;
  padding: .0167rem;
}
</style>