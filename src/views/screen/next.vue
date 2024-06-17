<template>
  <div class="content">
    <div class="nav">
      <ul>
        <li v-for="(item, index) in chonData" :key="index">
          <div class="name">{{ item.name }}(吨)</div>
          <div class="value">{{ item.value }}</div>
        </li>

      </ul>
    </div>
    <div class="top">
      <div class="topLeft">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="">
              <span>运行/维修总工时</span>
            </div>
            <div class="map">
              <el-button type="primary" round
                style="position: absolute; top: -12%; right: 0;padding: 1%;font-size: 1.5rem;">年</el-button>
              <el-button type="success" round
                style="position: absolute; top: -12%; right: 5%;padding: 1%;font-size: 1.5rem;">半年</el-button>
              <el-button type="warning" round
                style="position: absolute; top: -12%; right: 12%;padding: 1%;font-size: 1.5rem;">季度</el-button>
              <el-button type="danger" round @click="monthClick"
                style="position: absolute; top: -12%; right: 19%;padding: 1%;font-size: 1.5rem;">月</el-button>
              <el-button type="success" round @click="dayClick"
                style="position: absolute; top: -12%; right: 24%;padding: 1%;font-size: 1.5rem;">日</el-button>
              <!-- <dv-scroll-board :config="config1" style=" width: fit-content; " /> -->
              <chart-1 ref="chart1Ref"></chart-1>
            </div>
          </div>
        </dv-border-box-2>
      </div>
      <div class="topRight">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="">
              <span>助剂用量</span>
            </div>
            <div class="map">
              <el-button type="primary" round
                style="position: absolute; top: -12%; right: 0;padding: 1%;font-size: 1.5rem;">年</el-button>
              <el-button type="success" round
                style="position: absolute; top: -12%; right: 5%;padding: 1%;font-size: 1.5rem;">半年</el-button>
              <el-button type="warning" round
                style="position: absolute; top: -12%; right: 12%;padding: 1%;font-size: 1.5rem;">季度</el-button>
              <el-button type="danger" round
                style="position: absolute; top: -12%; right: 19%;padding: 1%;font-size: 1.5rem;">月</el-button>
              <el-button type="success" round
                style="position: absolute; top: -12%; right: 24%;padding: 1%;font-size: 1.5rem;">日</el-button>
              <chart2 ref="chart2Ref"></chart2>

            </div>
          </div>
        </dv-border-box-2>
      </div>
    </div>
    <div class="main">
      <ul>
        <li><dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="">
                <span>虫卵用量</span>
              </div>
              <div class="map">
                <el-button type="primary" round
                  style="position: absolute; top: -12%; right: 0;padding: 1%;font-size: 1.3rem;">年</el-button>
                <el-button type="success" round
                  style="position: absolute; top: -12%; right: 7%;padding: 1%;font-size: 1.3rem;">半年</el-button>
                <el-button type="warning" round
                  style="position: absolute; top: -12%; right: 16%;padding: 1%;font-size: 1.3rem;">季度</el-button>
                <el-button type="danger" round
                  style="position: absolute; top: -12%; right: 25%;padding: 1%;font-size: 1.3rem;">月</el-button>
                <el-button type="success" round
                  style="position: absolute; top: -12%; right: 32%;padding: 1%;font-size: 1.3rem;">日</el-button>
                <chart3></chart3>
              </div>
            </div>
          </dv-border-box-2></li>
        <li><dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="">
                <span>

                  除臭剂用量
                </span>
              </div>
              <div class="map">
                <el-button type="primary" round
                  style="position: absolute; top: -12%; right: 0;padding: 1%;font-size: 1.3rem;">年</el-button>
                <el-button type="success" round
                  style="position: absolute; top: -12%; right: 7%;padding: 1%;font-size: 1.3rem;">半年</el-button>
                <el-button type="warning" round
                  style="position: absolute; top: -12%; right: 16%;padding: 1%;font-size: 1.3rem;">季度</el-button>
                <el-button type="danger" round
                  style="position: absolute; top: -12%; right: 25%;padding: 1%;font-size: 1.3rem;">月</el-button>
                <el-button type="success" round
                  style="position: absolute; top: -12%; right: 32%;padding: 1%;font-size: 1.3rem;">日</el-button>
                <chart4></chart4>
              </div>
            </div>
          </dv-border-box-2></li>
        <li><dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="">
                <span>电车/油车里程</span>
              </div>
              <div class="map">
                <el-button type="primary" round
                  style="position: absolute; top: -12%; right: 0;padding: 1%;font-size: 1.3rem;">年</el-button>
                <el-button type="success" round
                  style="position: absolute; top: -12%; right: 7%;padding: 1%;font-size: 1.3rem;">半年</el-button>
                <el-button type="warning" round
                  style="position: absolute; top: -12%; right: 16%;padding: 1%;font-size: 1.3rem;">季度</el-button>
                <el-button type="danger" round
                  style="position: absolute; top: -12%; right: 25%;padding: 1%;font-size: 1.3rem;">月</el-button>
                <el-button type="success" round
                  style="position: absolute; top: -12%; right: 32%;padding: 1%;font-size: 1.3rem;">日</el-button>
                <chart5></chart5>
              </div>
            </div>
          </dv-border-box-2></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getConfigData } from '@/api/screen/configData.js'

import chart1 from '@/views/screen/nextCharts/chart1.vue'
import chart2 from '@/views/screen/nextCharts/chart2.vue'
import chart3 from '@/views/screen/nextCharts/chart3.vue'
import chart4 from '@/views/screen/nextCharts/chart4.vue'
import chart5 from '@/views/screen/nextCharts/chart5.vue'
import Chart1 from './map2.vue'

export default {
  data() {
    return {
      // config1: {
      //   header: ['日期', '厨余垃圾减量率', '厨余垃圾处理量', '黑水虻虫产生量', '黑水茫虫沙产生量', '黑水茫虫用途及用量', '黑水茫虫沙用途'
      //     //  '黑水虻虫用途及用量', '黑水虻虫沙产生量', '黑水虻虫沙用途及用量'
      //   ],
      //   data: [

      //   ],
      //   index: true,
      //   columnWidth: [50, 110, 130, 130, 130, 140, 170, 170],
      //   align: ['center'],
      //   // 表头颜色
      //   headerBGC: ['rgb(20, 31, 45)'],
      //   // 奇数行背景色
      //   oddRowBGC: [''],
      //   // 	偶数行背景色
      //   evenRowBGC: ['rgba(10, 107, 149,.3)']
      // },
      chonData: [
        { name: '日吨虫成本', value: 20 },
        { name: '月吨虫成本', value: 30 },
        { name: '季吨虫成本', value: 40 },
        { name: '半年吨虫成本', value: 50 },
        { name: '年吨虫成本', value: 60 }
      ]
    }
  },
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    chart5

  },
  mounted() {
    this.getConfig()
  },
  methods: {
    async getConfig() {
      await getConfigData().then(res => {
        if (res.code === 200) {
          let newData = []; // 存放转换后的数据
          res.rows.forEach(row => {
            let rowData = [
              row.rq,
              row.cyljccl,
              row.cyljcll,
              row.hsmccsl,
              row.hsmcscsl,
              row.hsmcytjyl,
              row.hsmcsytjyl
            ];
            newData.push(rowData); // 添加转换后的数据到数组中
          });
          this.config1 = Object.assign({}, this.config1, { data: newData }); // 更新config1中的data

        }

      })
    },
    // 点击运行总工时月按钮
    dayClick() {
      this.$refs.chart1Ref.initChart()
    },
    monthClick() {
      this.$refs.chart1Ref.updateMonth()

    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: bold;
  text-shadow: 0 0 .01rem #006aff;

  .nav {
    flex: 1;

    ul {
      width: 100%;
      height: 100%;
      padding: 0 0.6rem;

      display: flex;
      flex-wrap: nowrap;
      align-content: space-between;

      li {
        flex-basis: 20%;

        // margin: 0 1%;
        background: url('~@/assets/images/main_middle.png') no-repeat center;
        margin-right: 1rem;
        background-size: contain;
        padding: 1%;

        &:last-child {
          margin-right: 0;
        }

        .name {
          font-size: 1.5rem;
          color: rgb(14, 241, 245);
        }
        .value {
          font-size: 2.5rem;
          text-align: center;
          
          text-shadow: 0 0 8px white;
        }
      }
    }
  }

  .top {
    flex: 5;

    display: flex;

    .topLeft,
    .topRight {
      flex: 1;
      padding: 0.4%;

      .chart_1 {
        width: 100%;
        height: 100%;
        display: flex;
        padding: 2.5%;
        flex-direction: column;
        align-content: center;
        align-items: center;

        .title {
          flex: 1;
          text-align: center;
          position: relative;

          img {
            width: 24rem;
            height: 4rem;
          }

          span {
            position: absolute;
            left: 50%;
            top: 16%;
            transform: translate(-50%);
            color: #fff;
            font-weight: bold;
            text-shadow: 0 0 .02rem #006aff;
            // vertical-align: middle;
            padding-bottom: 5%;
            font-size: 1.5rem;

          }
        }

        .map {
          flex: 4;
          width: 100%;
          margin-top: 2%;
          position: relative;
        }
      }
    }


  }



  .main {
    flex: 4;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      padding: 0;

      li {
        flex: 1;
        padding: 0.4%;

        .chart_2 {
          width: 100%;
          height: 100%;
          display: flex;
          padding: 2.5%;
          flex-direction: column;
          align-content: center;
          align-items: center;
          justify-content: center;


          .title {
            flex: 1;
            text-align: center;
            position: relative;

            img {
              width: 20rem;
              height: 3.5rem;
            }

            span {
              position: absolute;
              left: 50%;
              top: 15%;
              transform: translate(-50%);
              color: #fff;
              font-weight: bold;
              text-shadow: 0 0 .02rem #006aff;
              font-size: 1.5rem;
            }
          }

          .map {
            flex: 4;
            width: 100%;
            margin-top: 2%;
            position: relative;
          }
        }
      }
    }
  }
}

.board::-webkit-scrollbar {
  height: 4px;
}

.board::-webkit-scrollbar-thumb {
  background-color: #099112;
  /* 滚动条颜色 */
}

.board::-webkit-scrollbar-track {
  background-color: #4bb207;
  /* 滚动条轨道背景色 */
}
</style>