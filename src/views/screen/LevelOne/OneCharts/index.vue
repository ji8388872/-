<template>
  <div class="content">
    <div class="top">
      <div class="topLeft">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="">
              <span>废弃物处理量</span>
            </div>
            <div class="map">
              <chart-1 ref="chart1Ref"></chart-1>
             
            </div>
          </div>
        </dv-border-box-2>
      </div>
      <div class="topCenter">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
      <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="">
              <span>累积量</span>
            </div>
            <div class="map">
              <div class="context">
                <div class="topGrid">
                  <div class="num">130</div>
                  <div class="name">累计处理量(吨)</div>

                </div>
                <div class="btnGrid">

                  <div class="left">
                    <div class="num">30</div>
                    <div class="name">累计老虫重量(吨)</div>

                  </div>
                  <div class="right">
                    <div class="num">30</div>
                    <div class="name">累计虫沙重量(吨)</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </dv-border-box-2>
      </div>

      <div class="topRight">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="">
              <span>参观/宣传</span>
            </div>
            <div class="map">

              <swiper></swiper>
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
                <span>再生产品产生量</span>
              </div>
              <div class="map">
                <!-- <el-button type="primary" round
                  style="position: absolute; top: -12%; right: 0;padding: 1%;font-size: 1.3rem;">年</el-button>
                <el-button type="primary" round
                  style="position: absolute; top: -12%; right: 7%;padding: 1%;font-size: 1.3rem;">半年</el-button>
                <el-button type="primary" round
                  style="position: absolute; top: -12%; right: 16%;padding: 1%;font-size: 1.3rem;">季度</el-button>
                <el-button type="primary" round @click="monthWeight1()"
                  style="position: absolute; top: -12%; right: 25%;padding: 1%;font-size: 1.3rem;">月</el-button>
                <el-button type="primary" round @click="dayWeight()"
                  style="position: absolute; top: -12%; right: 32%;padding: 1%;font-size: 1.3rem;">日</el-button>

                <el-button v-if="showWeight" type="success" @click="monthWeight1(month)"
                  style="position: absolute; top: -3%; right: 15%;padding: 0.5%;font-size: 1.2rem;z-index: 9;">老虫</el-button>
                <el-button v-if="showWeight" type="success" @click="monthWeight2(month)"
                  style="position: absolute; top: -3%; right: 8%;padding: 0.5%;font-size: 1.2rem;z-index: 9;">虫沙</el-button> -->
                <chart3 ref="chart3Ref"></chart3>
              </div>
            </div>
          </dv-border-box-2></li>
        <li><dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="">
                <span>

                  碳减排量
                </span>
              </div>
              <div class="map">
                <shuVue></shuVue>
          
              </div>
            </div>
          </dv-border-box-2></li>
        <li><dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="">
                <span>照片墙</span>
              </div>
              <div class="map">
             <swiperBot></swiperBot>

              </div>
            
            </div>
          </dv-border-box-2></li>
      </ul>
    </div>
  </div>
</template>

<script>


import chart1 from '@/views/screen/LevelOne/OneCharts/chart1.vue'
import chart2 from '@/views/screen/LevelOne/OneCharts/chart2.vue'
import chart3 from '@/views/screen/LevelOne/OneCharts/chart3.vue'
import chart4 from '@/views/screen/LevelOne/OneCharts/chart4.vue'
import chart5 from '@/views/screen/LevelOne/OneCharts/chart5.vue'
import shuVue from '@/views/screen/newVue/test/shu.vue'
import swiper from '@/views/screen/LevelOne/OneCharts/swiper'
import topBot from '@/components/screen/top-Bot'
import swiperBot from '@/views/screen/LevelOne/OneCharts/element-swiper.vue'
export default {
  data() {
    return {

      showEveryYear: false,
      showYear: false,
      showMonth: false,
      showDetail: false,
      showWeight: false,
    }
  },
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    shuVue,
    swiper,
    topBot,
    swiperBot

  },
  mounted() {

  },
  methods: {

    
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
      height: 110%;
      padding: 0 0.6rem;

      display: flex;
      flex-wrap: nowrap;
      // align-content: space-between;
      align-items: center;
      justify-content: space-around;

      li {
        flex: 1;
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
          transform: translateY(0.5rem);
        }

        .value {
          font-size: 2rem;
          text-align: center;

          text-shadow: 0 0 8px white;
        }
      }
    }
  }

  .top {
    flex: 4;

    display: flex;

    .topLeft,
    .topRight,
    .topCenter {
      flex: 1;
      padding: 0.2%;

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
            top: 18%;
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
          flex: 7;
          width: 100%;
          margin-top: 2%;
          position: relative;
        }
      }

      .context {
        width: 100%;
        height: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        // background: rgba(3, 74, 138, 0.3);

        .btnGrid {
          flex: 1;
          // border: #006aff 1px solid;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          justify-items: center;
          transform: translateY(-10%);

          .num {
            font-size: 5rem;
            color: rgb(13, 253, 255);
            text-align: center;
            text-shadow: 0 0 8px rgb(13, 253, 255);
          }

          .name {
            font-size: 2.5rem;
            color: #fff;
            font-family: 'Helvetica Neue' !important;
          }
        }

        .topGrid {
          flex: 1;
          display: grid;
          align-items: center;
          justify-items: center;
          transform: translateY(10%);

          .num {
            font-size: 6rem;
            color: rgb(13, 253, 255);
            text-align: center;
            text-shadow: 0 0 8px rgb(13, 253, 255);
          }

          .name {
            font-size: 2.5rem;
            color: #fff;
            transform: translateY(-60%);
            font-family: 'Helvetica Neue' !important;
          }
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
        padding: 0.2%;

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
              width: 24rem;
              height: 3.5rem;
            }

            span {
              position: absolute;
              left: 50%;
              top: 16%;
              transform: translate(-50%);
              color: #fff;
              font-weight: bold;
              text-shadow: 0 0 .02rem #006aff;
              font-size: 1.5rem;
            }
          }

          .map {
            flex: 7;
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

::v-deep .border {
  border: none !important;
}
</style>