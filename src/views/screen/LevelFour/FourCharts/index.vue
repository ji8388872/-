<template>
  <div class="content">
    <div class="top">
      <div class="topLeft">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="" />
              <span>来料量</span>
            </div>
            <div class="map">
              <chart1> </chart1>
            </div>
          </div>
        </dv-border-box-2>
      </div>
      <div class="topCenter">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="" />
              <span>处理量</span>
            </div>
            <div class="map">
              <shanMap></shanMap>
            </div>
          </div>
        </dv-border-box-2>
      </div>
      <div class="topRight">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="" />
              <span>吨垃圾用卵量</span>
            </div>
            <div class="map">
              
                  <chart2></chart2>
               
            </div>
          </div>
        </dv-border-box-2>
      </div>
    </div>
    <div class="main">
      <ul>
        <li>
          <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="" />
                <span>减量化率</span>
              </div>
              <div class="map">
                
                    <chart3></chart3>
                 
              </div>
            </div>
          </dv-border-box-2>
        </li>
        <li>
          <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="" />
                <span> 减重率 </span>
              </div>
              <div class="map">
               
                    <chart5></chart5>
                 
              </div>
            </div>
          </dv-border-box-2>
        </li>
        <li>
          <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="" />
                <span>工时</span>
              </div>
              <div class="map">
               
                    <chart4></chart4>
                 
              </div>
            </div>
          </dv-border-box-2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import chart1 from "@/views/screen/LevelFour/FourCharts/chart1.vue";
import chart2 from "@/views/screen/LevelFour/FourCharts/chart2.vue";
import chart3 from "@/views/screen/LevelFour/FourCharts/chart3.vue";
import chart4 from "@/views/screen/LevelFour/FourCharts/chart4.vue";
import chart5 from "@/views/screen/LevelFour/FourCharts/chart5.vue";
import shanMap from "@/views/screen/LevelFour/FourCharts/chart6.vue";
import topBot from "@/components/screen/top-Bot";

export default {
  data() {
    return {
    };
  },
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    shanMap,
    topBot,
  },
  mounted() { },
  methods: {
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.content {
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
