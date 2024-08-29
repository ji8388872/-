<template>
  <div class="content" ref="contentBox">
    <div class="top">
      <div class="topLeft" ref="conBox">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)" ref="box">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="">
              <span>老虫产率</span>
            </div>
            <div class="map">
              <topBot>
                <template #charts>
                  <chart1 ref="chart1Ref"></chart1>

                </template>
              </topBot>
            </div>
          </div>
        </dv-border-box-2>
      </div>
      <div class="topRight">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)" ref="box">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="">
              <span>虫沙产率</span>
            </div>
            <div class="map">
              <top-bot>
                <template #charts>

                  <chart2></chart2>
                </template>
              </top-bot>
            </div>
          </div>
        </dv-border-box-2>
      </div>
    </div>
    <div class="main">
      <ul>
        <li><dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)" ref="box">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="">
                <span>老虫体长</span>
              </div>
              <div class="map">
                <topBot>
                  <template #charts>
                    <chart3 ref="chart3Ref"></chart3>
                  </template>
                </topBot>
              </div>
            </div>
          </dv-border-box-2></li>
        <li><dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)" ref="box">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="">
                <span>
                  老虫体重
                </span>
              </div>
              <div class="map">
                <topBot>
                  <template #charts>
                    <chart4 ref="chart4Ref"></chart4>
                  </template>
                </topBot>
              </div>
            </div>
          </dv-border-box-2></li>
      </ul>
    </div>
  </div>
</template>

<script>


import chart1 from '@/views/screen/LevelThree/ThreeCharts/chart1.vue'
import chart2 from '@/views/screen/LevelThree/ThreeCharts/chart2.vue'
import chart3 from '@/views/screen/LevelThree/ThreeCharts/chart3.vue'
import chart4 from '@/views/screen/LevelThree/ThreeCharts/chart4.vue'
import topBot from '@/components/screen/top-Bot.vue'
export default {
  data() {
    return {

      

      borderBoxWidth: 0,
    }
  },
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    topBot,


  },
  mounted() {
    window.addEventListener('resize', this.handleResize)

    // console.log('页面宽高', this.borderBoxWidth);
  },

  watch: {
    borderBoxWidth() {
      // console.log('页面宽高', this.borderBoxWidth);
      setTimeout(() => {
        this.$refs.box.initWH()
      }, 300)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    // 自适应

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
  // width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: bold;
  text-shadow: 0 0 .01rem #006aff;

  .top {
    flex: 5;

    display: flex;

    .topLeft,
    .topCenter,
    .topRight {
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
            height: 3.5rem;
          }

          span {
            position: absolute;
            left: 50%;
            top: 25%;
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
          flex: 10;
          width: 100%;
          margin-top: 2%;
          position: relative;
        }
      }
    }


  }



  .main {
    flex: 5;

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
              width: 20rem;
              height: 3.5rem;
            }

            span {
              position: absolute;
              left: 50%;
              top: 25%;
              transform: translate(-50%);
              color: #fff;
              font-weight: bold;
              text-shadow: 0 0 .02rem #006aff;
              font-size: 1.5rem;
            }
          }

          .map {
            flex: 10;
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
