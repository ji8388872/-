<template>
  <div class="content">
    <div class="nav">
      <ul>
        <li v-for="(item, index) in chonData" :key="index">
          <div class="name">{{ item.name }}</div>
          <div class="value">{{ item.value }}</div>
        </li>
      </ul>
    </div>
    <div class="top">
      <div class="topLeft">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="" />
              <span>来料量</span>
            </div>
            <div class="map">
              <topBot>
                <template #charts>
                  <chart1> </chart1>
                </template>
              </topBot>
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
              <topBot>
                <template #charts>
                  <chart6> </chart6>
                </template>
              </topBot>
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
              <top-bot>
                <template #charts>
                  <chart2 ref="chart2Ref"></chart2>
                </template>
              </top-bot>
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
                <topBot>
                  <template #charts>
                    <chart3 ref="chart3Ref"></chart3>
                  </template>
                </topBot>
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
                <topBot>
                  <template #charts>
                    <chart5 ref="chart5Ref"></chart5>
                  </template>
                </topBot>
              </div>
            </div>
          </dv-border-box-2>
        </li>
        <li>
          <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="" />
                <span>单位工时</span>
              </div>
              <div class="map">
                <topBot>
                  <template #charts>
                    <chart4 ref="chart4Ref"></chart4>
                  </template>
                </topBot>
              </div>
            </div>
          </dv-border-box-2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import chart1 from "@/views/screen/LevelTwo/TwoCharts//chart1.vue";
import chart2 from "@/views/screen/LevelTwo/TwoCharts//chart2.vue";
import chart3 from "@/views/screen/LevelTwo/TwoCharts//chart3.vue";
import chart4 from "@/views/screen/LevelTwo/TwoCharts//chart4.vue";
import chart5 from "@/views/screen/LevelTwo/TwoCharts//chart5.vue";
import chart6 from "@/views/screen/LevelTwo/TwoCharts/chart6.vue";
import topBot from "@/components/screen/top-Bot";

export default {
  data() {
    return {
      chonData: [
        {
          name: "日产日清", value: "是"
        },
        { name: "来料量: 100kg", value: "正常" },
        { name: "处理量: 100kg", value: "正常" },

        {
          name: "吨垃圾用卵量", value: "正常"
        },
        {
          name: "减量化率: 90%", value: "正常"
        },
        {
          name: "减重率: 60%", value: "正常"
        },

        {
          name: "工时", value: "正常"
        },
      ],
      title1: "日废弃物处理量明细图",
      title2: "日产率明细图",
      title3: "日老虫体征信息明细图",
      title4: "日能源消耗明细图",
      title5: "日单位工时明细图",
    };
  },
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    chart6,
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: bold;
  text-shadow: 0 0 0.01rem #006aff;

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
        background: url("~@/assets/images/main_middle.png") no-repeat center;
        margin-right: 1rem;
        background-size: contain;
        padding: 1%;
        cursor: pointer;

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
            height: 4rem;
          }

          span {
            position: absolute;
            left: 50%;
            top: 16%;
            transform: translate(-50%);
            color: #fff;
            font-weight: bold;
            text-shadow: 0 0 0.02rem #006aff;
            // vertical-align: middle;
            padding-bottom: 5%;
            font-size: 1.5rem;
          }
        }

        .map {
          flex: 8;
          width: 100%;
          margin-top: 2%;
          position: relative;

          // .el-button {
          //   position: absolute;
          //   right: 1.5%;
          //   top: -12%;
          // }

          ul {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            // align-content: center;
            justify-content: center;

            li {
              flex-basis: 25%;
              // border: #006aff 1px solid;
              position: relative;
              overflow: hidden;
              cursor: pointer;
              color: rgb(24, 144, 255);

              &:hover {
                color: #fff;

                .value {
                  text-shadow: none;
                }
              }

              .name {
                width: 100%;
                position: absolute;
                left: 70%;
                top: 40%;
                transform: translate(-50%, -50%);
                font-weight: 700;
                font-size: 2.3rem;
              }

              &:last-of-type {
                .name {
                  left: 60%;
                }
              }

              .value {
                position: absolute;
                left: 50%;
                top: 60%;
                transform: translate(-50%, -50%);
                font-weight: 600;
                font-size: 2rem;
                color: #fff;
                text-shadow: 0 0 8px #fff;
              }
            }
          }
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
              top: 15%;
              transform: translate(-50%);
              color: #fff;
              font-weight: bold;
              text-shadow: 0 0 0.02rem #006aff;
              font-size: 1.5rem;
            }
          }

          .map {
            flex: 8;
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
<style>
.atooltip.el-tooltip__popper[x-placement^="bottom"] .popper__arrow {
  border-bottom-color: transparent;
}

.atooltip.el-tooltip__popper[x-placement^="bottom"] .popper__arrow:after {
  border-bottom-color: transparent;
}

.atooltip {
  background: transparent !important;
  border: none !important;
  padding: 0 2.2rem 0 0;

}
</style>