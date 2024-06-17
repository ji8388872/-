<template>
  <div id="app">
    <header>
      <div class="title">中关村一小 怀柔分校 生态教室主题大屏</div>
      <span class="time">{{ today }} </span>
      <span class="weather">天气:晴</span>
      <span class="day">{{ currentTime }}</span>
      <span class="iconfont icon-tuichu2" @click="back"></span>
      <!-- <div class="iconfont icon-shangyiye" title="上一页" v-show="isNext == true" @click="toFirst">
      </div>
      <div class="iconfont icon-xiayiye" title="下一页" v-show="isNext == false" @click="toNext">
      </div> -->
    </header>
    <nav>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-4 left">
            <div class="leftTop">

              <dv-border-box-7 style="background: linear-gradient(to top,#14b484,#4cc065)">
                <div class="main">
                  <div class="title1" style="flex: 1;">
                    <dv-decoration-7 style="width:22rem;height:5rem;">
                      <span class="iconfont icon-tupian" style="padding: 0 1%;">&nbsp;生态园足迹</span></dv-decoration-7>
                  </div>
                  <div class="map" style="flex: 10!important;">
                    <!-- <photoWall></photoWall> -->
                    <!-- <swiper></swiper> -->
                    <elementSwiper></elementSwiper>
                  </div>
                </div>
              </dv-border-box-7>
            </div>
            <div class="leftBottom">
              <dv-border-box-7 style="background: linear-gradient(to top,#14b484,#4cc065)">
                <div class="main">
                  <div class="title1">
                    <dv-decoration-7 style="width:22rem;height:5rem;">
                      <span class="iconfont icon-tupian" style="padding: 0 1%;">&nbsp;生态知识大考场</span></dv-decoration-7>
                  </div>
                  <div class="map">

                    <result></result>
                  </div>
                </div>
              </dv-border-box-7>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="center">
              <div class="centerTop">

                <dv-border-box-7 style="background: linear-gradient(to top,#14b484,#4cc065)">
                  <div class="main">
                    <div class="title1">
                      <dv-decoration-7 style="width:15rem;height:5rem;">
                        <span class="iconfont icon-ptjkicon-" style="padding: 0 1%;">&nbsp;生态校园</span></dv-decoration-7>
                    </div>
                    <div class="content">

                      <centerTop></centerTop>
                    </div>
                  </div>
                </dv-border-box-7>
              </div>

            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="right">
              <div class="rightTop">
                <dv-border-box-7 style="background: linear-gradient(to top,#14b484,#4cc065)">

                  <div class="main">
                    <div class="title1">
                      <dv-decoration-7 style="width:22rem;height:5rem;">
                        <span class="iconfont icon-jienenghuanbao"
                          style="padding: 0 1%;">&nbsp;变废为宝小能手</span></dv-decoration-7>
                    </div>
                    <div class="content">
                      <little-expert></little-expert>
                      <!-- <tableTop></tableTop> -->
                    </div>
                  </div>
                </dv-border-box-7>
              </div>
              <div class="rightBot">
                <dv-border-box-7 style="background: linear-gradient(to top,#14b484,#4cc065)">
                  <div class="title1">
                    <dv-decoration-7 style="width:15rem;height:5rem;">
                      <span class="iconfont icon-zhongshu" style="padding: 0 1%;">&nbsp;生态成果</span></dv-decoration-7>
                  </div>
                  <div class="shu">
                    <!-- <div class="shu_text"></div> -->
                    <div class="shu_text">累计减排量<span style="color:rgb(0, 111, 128)">{{ (tableData.cyll *
        0.39).toFixed(2)
                        }}(kgCO2e)</span><br>
                      累积种植<span>{{
        Math.ceil((tableData.cyll * 0.39).toFixed(2) * 0.39) }}</span>棵树</div>
                    <!-- <div class="shu_img">
                      <img src="@/assets/images/树.png" alt="" @mouseover="startAnimation" @mouseout="stopAnimation">
                    </div> -->
                  </div>
                </dv-border-box-7>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- <div class="container" v-else>
        <next></next>
      </div> -->
    </nav>
  </div>
</template>

<script>
import { getTableTopList } from '@/api/screen/tableTop.js';
import GallerySlideshow from 'vue-gallery-slideshow';
import chart1 from './map2.vue'
import next from './next.vue'
import rightTop from '@/views/screen/rightTop'
import centerTop from '@/views/screen/newVue/centerTop.vue'
import result from '@/views/screen/newVue/result.vue'

import tableTop from './newVue/test/tableTop.vue';
import swiper from './newVue/swiper.vue';
import elementSwiper from '@/views/screen/newVue/test/element-swiper'
import LittleExpert from './newVue/test/LittleExpert.vue'
export default {
  name: 'home',
  data() {
    return {
      tableData: [],
      // isNext: false,
      currentTime: '',
      today: '',
      videoUrl: require('@/assets/images/怀柔.mp4'),
      showSlideshow: false,
      slideshowIndex: -1,
      // 随机放大图片特效
      selectedPhotoIndex: null,
      // 定时器

      shakeInterval: null,
      // 轮播图容器高度
      bannerHeight: 0,
      // 浏览器宽度
      screenWidth: '',
      config1: {
        value: 100,
        borderWidth: 5,
        borderRadius: 10,
        borderGap: 5
      },
      config2: {
        value: 66,
        borderWidth: 5,
        borderRadius: 10,
        borderGap: 5
      },
      config3: {
        value: 77,
        borderWidth: 5,
        borderRadius: 10,
        borderGap: 5
      }
    }
  },
  components: {
    chart1,
    next,
    rightTop,
    GallerySlideshow,
    centerTop,
    result,
    // photoWall,
    // testWall,
    tableTop,
    swiper,
    elementSwiper,
    LittleExpert
  },
  computed: {

  },
  mounted() {
    this.getData()
    this.updateTime()
    setInterval(this.updateTime, 1000); // 每秒钟更新一次时间
    this.getDayOfWeek()
    setInterval(this.getDayOfWeek, 10000);
    this.screenWidth = window.innerWidth
    this.bannerHeight = 300 / 1850 * this.screenWidth
    // 窗口大学发生变化
    window.onresize = () => {
      this.screenWidth = window.innerWidth
      this.bannerHeight = 300 / 1850 * this.screenWidth
    };
    window.addEventListener('load', () => {
      this.setZoom(); // 在组件挂载后调用设置缩放比例的方法
      window.addEventListener('resize', this.setZoom); // 监听屏幕大小变化
    });

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setZoom); // 组件销毁前移除事件监听器

  },
  methods: {
    // 获取数据
    async getData() {
      await getTableTopList().then(res => {
        if (res.code === 200) {
          this.tableData = res.rows[0]
        }
      })
    },
    updateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      this.currentTime = `${year}年${month}月${day}日  ${hours}:${minutes}`;
    },
    getDayOfWeek() {
      const daysOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

      const currentDate = new Date();
      const dayIndex = currentDate.getDay();

      this.today = daysOfWeek[dayIndex];
    },
    // 下一页
    // toNext() {
    //   this.isNext = true;

    // },

    // toFirst() {
    //   this.isNext = false;

    // },
    startAnimation(event) {
      event.target.classList.add('shake');
    },
    stopAnimation(event) {
      event.target.classList.remove('shake');
    },

    setZoom() {
      if (window.innerWidth > 2000) {
        document.body.style.zoom = '175%';
      } else {
        document.body.style.zoom = '80%';
      }
    },
    // 退出
    back() {
      this.$router.back();
      if (document.exitFullscreen) {
        document.exitFullscreen(); // 退出全屏
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen(); // Firefox
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Chrome 和 Safari
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE
      }
    }


  }
}
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@media screen and (min-width: 1200px) {
  html {
    font-size: 85px !important;
  }

  .container {
    max-width: 1232px;
  }
}

@media screen and (min-width: 761px) {
  .container {
    max-width: 100% !important;
  }

}

@media screen and (max-width: 760px) {
  .container {
    max-width: 890px;
  }
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  background-color: rgb(26, 168, 78);
  background-size: cover;
  overflow: hidden;
}

#app1 {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: url('~@/assets/images/bg.png') no-repeat center;
  background-size: cover;
  overflow: hidden;
}

#app header {
  position: relative;
  /* width: 100%; */
  transform: scale(1);
  flex: 1;
  background: url('~@/assets/images/极简风格1.png') no-repeat center;
  background-size: cover;
  z-index: 999;
  margin-bottom: 0.2rem;

  .icon-shangyiye {
    position: absolute;
    left: 1%;
    top: 60%;
    color: rgba(28, 128, 0, .7);
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      color: #00d8ff;
    }
  }


}

#app header .icon-xiayiye {

  position: absolute;
  right: 1%;
  top: 55%;
  color: rgba(28, 128, 0, .7);
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #00d8ff;
  }
}

#app header .icon-tuichu2 {
  position: absolute;
  top: 0;
  right: 0.5%;
  cursor: pointer;
  font-size: 1.8rem;

}

#app header .title {
  text-align: center;
  color: #ffffff;
  font-size: 2.2rem;
  font-weight: bold;
  text-shadow: 0 0 .2rem #00ff5e;
  line-height: 6.45rem;
  padding-top: 0.2rem;
  // margin-bottom: 0.001rem;
  margin-top: 0.15rem;
  font-family: Arial, Helvetica, sans-serif;

}

#app header .time,
.weather {
  position: absolute;
  right: 4%;
  top: 19%;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: 0 0 .02rem #006aff;
  /* background-color: rgba(26, 158, 191, .3); */
  padding: 0.2% 0.5%;
  border-radius: 10%;
}

#app header .weather {
  right: 10%;
}

#app header .day {
  position: absolute;
  left: 5%;
  top: 19%;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: 0 0 .05rem #0062ff;
}

nav {
  width: 100%;
  flex: 11;
  margin-top: 0.1rem;

}

.container {

  height: 100%;
  padding: 0 1%;
}

.container .row {
  height: 100%;

}

.container .row .left {
  display: flex;
  flex-direction: column;
  padding-right: 1%;
}

.container .row .left .leftTop {
  flex: 4 !important;
}

.container .row .left .leftTop,
.container .row .left .leftBottom {
  flex: 3;
  margin-bottom: 2%;



  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;

    .videoBor {
      position: relative;
      flex: 4;
      //  padding: 2%;
      margin: 1% 1% 2% 1%;
      width: 95%;
      height: 100%;

      .borderImg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: scale(1.1, 1.8);
      }

      .videoMain {
        position: absolute;
        left: 48.9%;
        top: 50%;
        // width: 76.5%;
        // height: 85%;
        width: 2.31rem;
        height: 1.5rem;
        transform: translate(-50%, -50%);
        border: 1px solid rgb(87, 121, 34);

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          // border: 1px solid #00d8ff;

        }
      }
    }



  }



}

.title1 {

  display: flex;
  flex: 1;
  justify-content: center;
  color: #ffffff;

  font-weight: bold;
  text-shadow: 0 0 .05rem #00d8ff;
  padding-top: 1%;
  z-index: 999;

  .iconfont {
    font-size: 1.9rem;
  }

  .dv-decoration-7 {
    svg {
      width: 3rem;
      height: 0.3rem;
    }
  }


}






.container .row .left .map {

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 4;
  padding: 1%;
  width: 100%;


  el-carousel {
    width: 100%;
    height: 100% !important;

  }

  .el-carousel__indicators--outside {
    bottom: 0;
  }
}


.el-carousel__item img {
  padding: 0 2%;
  width: 100%;
  // height: 100%;
  height: inherit;
  object-fit: cover;
  // object-fit: scale-down
}

.center {
  display: flex;
  flex-direction: column;
  height: 100%;
  // background: url('@/assets/images/2.png') no-repeat center;
  background-size: convert;

  .centerTop {
    flex: 4;
    margin-bottom: 2%;

    .main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .title1 {
        flex: 1;
      }

      .content {
        flex: 4;
        background: url('~@/assets/images/黑水虻小标.png') no-repeat center;
        background-size: 100% 100%;

      }
    }
  }

  .centerBot {
    flex: 3;
    margin-bottom: 2%;

    .main {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      .title1 {
        flex: 1;

      }

      .bot {
        flex: 4;
        display: flex;
        flex-direction: row;

        .botLeft {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.15rem;
          color: #ffffff;
          // text-shadow: 0 0 .05rem #00d8ff;


          .all {
            flex: 1;
            margin-top: 0.02rem;
          }

          .allNum {
            flex: 3;
            // background-color: pink;
          }
        }

        .botRight {
          flex: 1;
          // background-color: #fff;
        }
      }
    }

  }
}

.right {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 3%;


  .rightTop {
    overflow: hidden;
    flex: 1;
    margin-bottom: 2%;

    .main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .title1 {
        flex: 1;
      }

      .content {
        display: flex;
        flex-direction: row;
        flex: 4;

        height: 83%;

        .chart {
          display: flex;

          flex: 2;
          // padding: 1%;
          // background-color: pink;

          ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;
            padding: 5% 0 5% 0%;
            margin-top: 2%;

            // li:nth-child(1) {
            //   flex: 1;
            //   color: #ffffff;
            //   font-weight: bold;
            //   text-shadow: 0 0 .05rem #00d8ff;
            //   padding-left: 4%;
            //   font-size: 0.14rem;
            //   margin-top: 0.03rem;
            //   margin-bottom: 0.08rem;
            // }

            li {
              flex: 2;
              margin-top: 10%;

            }
          }
        }

        .name,
        .text {
          flex: 3;

          ul {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 4% 1% 4% 7%;

            // li:nth-child(1) {
            //   display: flex;
            //   justify-content: center;
            //   flex: 1;
            //   color: #ffffff;
            //   font-weight: bold;
            //   text-shadow: 0 0 .05rem #00d8ff;

            //   font-size: 0.14rem;
            //   background: none;
            // }

            li {
              display: flex;
              justify-content: center;
              align-items: center;
              flex: 2;
              background: url('~@/assets/images/资源 48@2x-8.png') no-repeat center;
              color: #ffffff;
              font-weight: bold;
              text-shadow: 0 0 .05rem #00d8ff;
              font-size: 0.12rem;
            }
          }
        }

        .text {
          ul li {
            background: none;
            font-size: 0.1rem !important;
            padding-left: 2% !important;
          }

          // ul li:nth-child(1) {
          //   font-size: 0.13rem !important;
          //   padding-right: 7%;
          // }
        }
      }
    }
  }

  .rightBot {
    flex: 1;

    margin-bottom: 2%;
    display: flex;
    flex-direction: column;

    .title1 {
      flex: 1;
    }

    .shu {
      flex: 4;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      width: 100%;
      height: 80%;
      padding: 5%;
      background: url('~@/assets/images/树.png') no-repeat center;
      background-size: contain;


      justify-content: center;


      .shu_text {
        padding: 7rem 7rem;
        // flex: 2;
        color: rgb(240, 225, 153);
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        // text-shadow: 0 0 .2rem #ffffff;
        font-size: 2.5rem;
        // border: #ffffff solid 0.2rem;
        text-align: center;

        span {
          color: #0062ff;
          text-shadow: none;
        }

      }


    }
  }
}

.title1 :hover {
  font-size: 2.2rem;
  cursor: pointer;
}

/* 定义抖动效果的 keyframes */
@keyframes shake {
  0% {
    // transform: translateX(0);
    transform: scale(1);
  }

  // 20% {
  //   transform: translateX(-3%);
  // }
  50% {
    // transform: translateX(3%);
    transform: scale(1.2);
  }

  // 60% {
  //   transform: translateX(-3%);
  // }
  // 80% {
  //   transform: translateX(-3%);
  // }

  100% {
    transform: translateX(1);
  }
}

/* 定义元素的 CSS 规则，设置 transform-origin 属性 */
img {
  transform-origin: center;
}

/* 添加 .shake 类，元素加入抖动效果 */
.shake {
  animation: shake 0.5s;
}
</style>