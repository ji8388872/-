<template>
  <div id="chart03">

  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getEnzymesList } from "@/api/screen/configData.js"
export default {
  data() {
    return {
      chart: null,

    };
  },
  created() {
    this.getData()
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
    async getData() {
      await getEnzymesList().then(res => {
        if (res.code === 200) {
          console.log('酵素', res.rows);
        }
      })
    },
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
          // data: ['高靶位', '低靶位'],
          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }
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

              formatter: '{value} kg'
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
            name: '虫卵用量',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kg';
              }
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7,
            ]

          },
          // {
          //   name: 'B酵素',
          //   type: 'bar',
          //   tooltip: {
          //     valueFormatter: function (value) {
          //       return value + ' %';
          //     }
          //   },
          //   data: [
          //     10, 15, 18, 20, 25.6, 76.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3
          //   ]
          // },

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
#chart03 {
  width: 100%;
  height: 100%;


}
</style>
