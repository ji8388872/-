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
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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
          min:0,
          max:600,
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
          data: Array.from({ length: 31 }, (v, i) => (i).toString()),
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
            name: '电车里程',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
             
                fontSize:10
              
            },
            emphasis: {
              focus: 'series'
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + 'km';
              }
            },
            data: [320, 302, 301, 334, 390, 330, 320,320, 302, 301, 334, 390, 330, 320,320, 302, 301, 334, 390, 330, 320,320, 302, 301, 334, 390, 330, 320,320, 302, 301]
          },
          {
            name: '油车里程',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              
                fontSize:10
              
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101]
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


<style lang="less" scoped>
#chart05 {
  width: 100%;
  height: 100%;
}
</style>