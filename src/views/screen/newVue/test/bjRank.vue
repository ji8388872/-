<template>
  <div id="bjRank" v-if="allData"></div>
  <div id="bjRank" v-else>数据加载中</div>
</template>

<script>
import * as echarts from 'echarts';
import { getRankList } from '@/api/screen/ranking.js'
export default {

  data() {
    return {
      chart: null,
      allData: [],
    }
  },
  mounted() {
    this.initChart();

  },
  created() {
    this.getRank()
  },
  updated() {
    this.chart.resize();
  },
  // watch: {
  //   allRank: {
  //     immediate: true, // 立即执行一次
  //     handler(newVal, oldVal) {
  //       // console.log('New allRank:', newVal);
  //       this.allData = newVal
  //       this.updatedChart(newVal)

  //     }
  //   }
  // },

  methods: {
    async getRank() {
      await getRankList().then(res => {

        if (res.code === 200) {
          this.allData = res.rows.map(item => {
            return item.bj
          })

          this.updatedChart()
        }
      })
    },
    initChart() {

      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose();//销毁
      }
      this.chart = echarts.init(document.getElementById('bjRank'));

      const option = {

        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 5,
            roam: true,
            label: {
              show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 0],
            edgeLabel: {
              fontSize: 50
            },
            data: [],
            links: [],

            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0
            }
          }
        ]
      };

      this.chart.setOption(option);
    },
    updatedChart() {

      this.chart.setOption({
        series: [
          {
            data: [
              {
                name: this.allData[0],
                x: 450,
                y: 300,
                label: {
                  show: true,
                  fontSize: 20,
                  color: 'rgb(237, 225, 162)'
                }
              },
              {
                name: this.allData[1],
                x: 680,
                y: 300,
                label: {
                  show: true,
                  fontSize: 20,
                  color: 'rgb(237, 225, 162)'
                }
              },
              {
                name: this.allData[2],
                x: 910,
                y: 300,
                label: {
                  show: true,
                  fontSize: 20,
                  color: 'rgb(237, 225, 162)'
                }
              },
              {
                name: '班级排名',
                x: 680,
                y: 210,
                label: {
                  show: true,
                  fontSize: 25,
                  color: 'rgb(237, 225, 162)'
                }
              },

            ],
            links: [

              {
                source: '班级排名',
                target: this.allData[0],
                value: 1,
                label: {
                  show: true,
                  formatter: '①',
                  fontSize: 30,
                  color: 'rgb(237, 225, 162)'
                },
                lineStyle: {
                  curveness: 0
                }
              },
              {
                source: '班级排名',
                target: this.allData[1],
                label: {
                  show: true,
                  formatter: '②',
                  fontSize: 30,
                  position: 'middle',
                  color: 'rgb(237, 225, 162)'
                },
                lineStyle: {
                  curveness: 0
                }
              },


              {
                source: '班级排名',
                target: this.allData[2],
                label: {
                  show: true,
                  formatter: '③',
                  fontSize: 30,
                  color: 'rgb(237, 225, 162)'
                },
                lineStyle: {
                  curveness: 0
                }
              }
            ],
          }
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
#bjRank {
  width: 100%;
  height: 100%;
  padding: .0167rem;
}
</style>