<template>
  <div id="chart1"></div>
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

      const option5 = {
        title: {
          text: '当日减排',
          left: '10%',
          textStyle: {
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '30'
          }
        },
        grid: {
          left: '0',
          right: '0',
          top: '27%',
          bottom: '24%',
          //containLabel: true
        },
        legend: {
          data: ['厨余', '园林', '酵素'],
          bottom: 0,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "rgba(255,255,255,1)",
            fontSize: '10',
          },


          itemGap: 5
        },
        tooltip: {
          show: "true",
          trigger: 'item'
        },
        yAxis: {
          type: 'value',
          show: false,
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#363e83',
            }
          },
          axisLabel: {
            show: false,
            //   inside: true,

            color: "rgba(255,255,255,1)",
            fontWeight: 'normal',
            fontSize: '12',

          },
          // formatter:function(val){
          //     return val.split("").join("\n")
          // },

          data: ['co2当日减排量']
        }

        ],
        series: [
          {
            name: '厨余',
            type: 'bar',
            barWidth: '20',

            itemStyle: {

              show: true,
              color: '#20aa92',
              borderRadius: 50,
              borderWidth: 0,

            },
            zlevel: 2,
            barGap: '100%',
            data: [20],
            label: {
              formatter: "{c}吨",
              show: true,
              position: 'top',

              fontSize: 12,
              color: 'rgba(255,255,255,1)',

            },
          },
          {
            name: '园林',
            type: 'bar',
            itemStyle: {

              show: true,
              color: '#f4664e',
              borderRadius: 50,
              borderWidth: 0,

            },
            zlevel: 2,
            barWidth: '20',
            data: [20],
            label: {
              formatter: "{c}吨",
              show: true,
              position: 'top',

              fontSize: 12,
              color: 'rgba(255,255,255,1)',

            },
          },
          {
            name: '酵素',
            type: 'bar',
            itemStyle: {

              show: true,
              color: '#0c93dc',
              borderRadius: 50,
              borderWidth: 0,

            },
            zlevel: 2,
            barWidth: '20',
            data: [10],
            label: {
              formatter: "{c}吨",
              show: true,
              position: 'top',

              fontSize: 12,
              color: 'rgba(255,255,255,1)',

            },
          },

        ]
      };


      this.chart = echarts.init(document.getElementById('chart1'));
      this.chart.setOption(option5);
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
#chart1 {
  width: 100%;
  height: 100%;
  padding: .0367rem;

}
</style>