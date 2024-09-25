<template>
  <div id="chart04">
    <!-- 雨水日志 -->
  </div>
</template>

<script>

import * as echarts from 'echarts';
export default {
  data() {
    return {
      chart: null,

      anglesList: [20,30,40,20,40,50,30,60,20,40,70,50,40,50,30,40,30,60,40,50,30,60,20,40,20,40,70,50,50,40]
    };
  },
  mounted() {
    this.getData()
    //  this.initChart()
    this.bindResizeEvent();

  },
  updated() {
    this.chart.resize();

  },
  methods: {
    // initChart() {



    // },
    bindResizeEvent() {
      window.addEventListener('resize', this.resize);
    },
    resize() {
      this.chart.resize();
    },
    async getData() {
      // const { data: res } = await this.$http.get('system/process/angle-analyze')
      // // console.log(res);
      // this.frameList = res.map(item => item.frame);
      // this.anglesList = res.map(item => item.angles);
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
          top: "25",
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
            data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
            // data: Array.from({ length: 20 }, (v, i) => (i * 100).toString()),
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
            // name: '角度',
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
              formatter: '{value} 吨'
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
            name: '自产除臭剂用量',
            type: 'line',

            smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: "#0184d5"
            },
            // 填充颜色设置
            // areaStyle: {
            //   // 渐变色，只需要复制即可
            //   color: new echarts.graphic.LinearGradient(
            //     0,
            //     0,
            //     0,
            //     1,
            //     [
            //       {
            //         offset: 0,
            //         color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
            //       },
            //       {
            //         offset: 0.8,
            //         color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
            //       }
            //     ],
            //     false
            //   ),
            //   shadowColor: "rgba(0, 0, 0, 0.1)"
            // },
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
            formatter: '{value} 吨',

            data: this.anglesList
          },
          {
            name: '外购除臭剂用量',
            type: 'line',

            smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: "rgb(181, 45, 117)"
            },
            // 填充颜色设置
            // areaStyle: {
            //   // 渐变色，只需要复制即可
            //   color: new echarts.graphic.LinearGradient(
            //     0,
            //     0,
            //     0,
            //     1,
            //     [
            //       {
            //         offset: 0,
            //         color: "rgba(1, 250, 213, 0.4)"   // 渐变色的起始颜色
            //       },
            //       {
            //         offset: 0.8,
            //         color: "rgba(1, 250, 213, 0.1)"   // 渐变线的结束颜色
            //       }
            //     ],
            //     false
            //   ),
            //   shadowColor: "rgba(0, 0, 0, 0.1)"
            // },
            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(110, 220, 107, .1)",
              borderWidth: 12

            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            formatter: '{value} 吨',

            data: [93, 94, 95, 97, 96, 91, 70, 96, 97, 96, 94, 65, 93, 96, 98, 95, 92, 94, 95, 93, 99, 96, 92, 96, 90, 97, 96, 99, 94, 92],
          },
        ]
      };
      this.chart.setOption(option);
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  }
}
</script>

<style lang="less" scoped>
#chart04 {
  width: 100%;
  height: 100%;
}

</style>
