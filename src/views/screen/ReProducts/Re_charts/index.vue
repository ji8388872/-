<template>
  <div class="content">
    <div class="top">
      <Input></Input>
    </div>
    <div class="bottom">
      <div class="centerCharts">
        <div class="left"  v-if="!showCharts">
          <div
            class="oldChon"
            style="border-bottom: 3px solid rgba(64, 158, 255, 0.2)"
          >
            老虫
          </div>
          <div class="chonSa">虫沙</div>
        </div>
        <div class="right"  v-if="!showCharts">
          <ul >
            <li
              v-for="(item, index) in reProducts"
              :key="index"
              @click="handleClick(item)"
            >
              <dv-border-box-3>
                <div class="name">{{ item.name }}</div>
              </dv-border-box-3>
            </li>
          </ul>
         
        </div>
        <div class="charts" v-else>
            <div class="btn">
              <div class="titleName">
                {{ title }}
              </div>
              <el-row :gutter="2">
                <el-col :span="6" :offset="14">
                  <el-tooltip
                    placement="bottom"
                    effect="light"
                    popper-class="atooltip"
                  >
                    <template #content>
                      <el-button
                        @click="dayClick()"
                        type="success"
                        size="medium"
                        round
                        >明细图</el-button
                      >
                      <el-button
                        type="success"
                        @click="monthClick()"
                        size="medium"
                        round
                        >月极值图</el-button
                      >
                      <el-button
                        @click="yearClick()"
                        type="success"
                        size="medium"
                        round
                        >年极值图</el-button
                      >
                      <el-button
                        @click="historyClick()"
                        type="success"
                        size="medium"
                        round
                        >历年极值图</el-button
                      >
                    </template>
                    <el-button type="primary" round>日</el-button>
                  </el-tooltip>
                  <el-tooltip
                    placement="bottom"
                    effect="light"
                    popper-class="atooltip"
                  >
                    <template #content>
                      <el-button
                        @click="monthClickM()"
                        type="success"
                        round
                        size="medium"
                        >明细图</el-button
                      >

                      <el-button
                        @click="yearClickM()"
                        type="success"
                        round
                        size="medium"
                        >年极值图</el-button
                      >
                      <el-button
                        @click="historyClickM()"
                        type="success"
                        round
                        size="medium"
                        >历年极值图</el-button
                      >
                    </template>
                    <el-button type="primary" round>月</el-button>
                  </el-tooltip>
                  <el-tooltip
                    placement="bottom-end"
                    effect="light"
                    popper-class="atooltip"
                  >
                    <template #content>
                      <el-button
                        @click="yearClickY()"
                        type="success"
                        size="medium"
                        round
                        >明细图</el-button
                      >
                      <el-button
                        @click="historyClickY()"
                        type="success"
                        size="medium"
                        round
                        >历年极值图</el-button
                      >
                    </template>
                    <el-button type="primary" round>年</el-button>
                  </el-tooltip>
                </el-col>

                <el-col :span="4">
                  <el-button type="success" round @click="back()"
                    >返回</el-button
                  >
                </el-col>
              </el-row>
            </div>
            <div class="map">
              <chart1 ref="chart1Ref"></chart1>
            </div>
          </div>
      </div>
     
    </div>
  </div>
</template>

<script>
import Input from "@/components/screen/input.vue";
import chart1 from "./chart1.vue";
export default {
  data() {
    return {
      reProducts: [
        { name: "入库量", tag: "oldChon" },
        { name: "出库量", tag: "oldChon" },
        { name: "库存量", tag: "oldChon" },
        { name: "去向", tag: "oldChon" },
        { name: "入库量", tag: "chonSa" },
        { name: "出库量", tag: "chonSa" },
        { name: "库存量", tag: "chonSa" },
        { name: "去向", tag: "chonSa" },
      ],
      showCharts: false,
      // 按顺序标记八个图表
      flag: 0,
      title: "再生产品",
    };
  },
  components: {
    Input,
    chart1,
  },
  methods: {
    handleClick(item) {
      this.showCharts = true;
      if (item.tag === "oldChon") {
        if (item.name === "入库量") {
          this.flag = 1;
          this.$nextTick(() => {
            this.$refs.chart1Ref.initChart();
            this.title = "日老虫入库量明细图";
          });
        } else if (item.name === "出库量") {
          this.flag = 2;
          this.$nextTick(() => {
            this.$refs.chart1Ref.updateChonOut();
            this.title = "日老虫出库量明细图";
          });
        } else if (item.name === "库存量") {
          this.flag = 3;
          this.$nextTick(() => {
            this.$refs.chart1Ref.updateChon();
            this.title = "日老虫库存量明细图";
          });
        } else if (item.name === "去向") {
          this.flag = 4;
          this.$nextTick(() => {
            this.$refs.chart1Ref.updateOutDirection();
            this.title = "日老虫去向明细图";
          });
        }
      } else {
        if (item.name === "入库量") {
          this.flag = 5;
          this.$nextTick(() => {
            this.$refs.chart1Ref.updateChonSha_in();
            this.title = "日虫沙入库量明细图";
          });
        } else if (item.name === "出库量") {
          this.flag = 6;
          this.$nextTick(() => {
            this.$refs.chart1Ref.updateChonSha_out();
            this.title = "日虫沙出库量明细图";
          });
        } else if (item.name === "库存量") {
          this.flag = 7;
          this.$nextTick(() => {
            this.$refs.chart1Ref.updateChonSha();
            this.title = "日虫沙库存量明细图";
          });
        } else if (item.name === "去向") {
          this.flag = 8;
          this.$nextTick(() => {
            this.$refs.chart1Ref.updateOutDirection2();
            this.title = "日虫沙去向明细图";
          });
        }
      }
    },
    back() {
      this.showCharts = false;
      this.flag = 0;
    },
    dayClick() {
      if (this.flag === 1) {
        this.$refs.chart1Ref.initChart();
        this.title = "日老虫入库量明细图";
      } else if (this.flag === 2) {
        this.$refs.chart1Ref.updateChonOut();
        this.title = "日老虫出库量明细图";
      } else if (this.flag === 3) {
        this.$refs.chart1Ref.updateChon();
        this.title = "日老虫库存量明细图";
      } else if (this.flag === 4) {
        this.$refs.chart1Ref.updateOutDirection();
        this.title = "日老虫去向明细图";
      } else if (this.flag === 5) {
        this.$refs.chart1Ref.updateChonSha_in();
        this.title = "日虫沙入库量明细图";
      } else if (this.flag === 6) {
        this.$refs.chart1Ref.updateChonSha_out();
        this.title = "日虫沙出库量明细图";
      } else if (this.flag === 7) {
        this.$refs.chart1Ref.updateChonSha();
        this.title = "日虫沙库存量明细图";
      } else if (this.flag === 8) {
        this.$refs.chart1Ref.updateOutDirection2();
        this.title = "日虫沙去向明细图";
      }
    },
    monthClick() {
      switch (this.flag) {
        case 1:
          this.$refs.chart1Ref.monthChonIn();
          this.title = "日老虫入库量月极值图";
          break;
        case 2:
          this.$refs.chart1Ref.monthChonOut();
          this.title = "日老虫出库量月极值图";
          break;
        case 3:
          this.$refs.chart1Ref.monthChon();
          this.title = "日老虫库存量月极值图";
          break;
        case 4:
          this.$refs.chart1Ref.monthChonOutDirection();
          this.title = "日老虫去向月极值图";
          break;
        case 5:
          this.$refs.chart1Ref.monthChonSha_in();
          this.title = "日虫沙入库量月极值图";
          break;
        case 6:
          this.$refs.chart1Ref.monthChonSha_out();
          this.title = "日虫沙出库量月极值图";
          break;
        case 7:
          this.$refs.chart1Ref.monthChonSha();
          this.title = "日虫沙库存量月极值图";
          break;
        case 8:
          this.$refs.chart1Ref.monthChonOutDirection2();
          this.title = "日虫沙去向月极值图";
          break;
      }
    },
    yearClick() {
      if (this.flag === 1) {
        this.$refs.chart1Ref.yearChonIn();
        this.title = "日老虫入库量年极值图";
      } else if (this.flag === 2) {
        this.$refs.chart1Ref.yearChonOut();
        this.title = "日老虫出库量年极值图";
      } else if (this.flag === 3) {
        this.$refs.chart1Ref.yearChon();
        this.title = "日老虫库存量年极值图";
      } else if (this.flag === 4) {
        this.$refs.chart1Ref.yearChonOutDirection();
        this.title = "日老虫去向年极值图";
      } else if (this.flag === 5) {
        this.$refs.chart1Ref.yearChonSha_in();
        this.title = "日虫沙入库量年极值图";
      } else if (this.flag === 6) {
        this.$refs.chart1Ref.yearChonSha_out();
        this.title = "日虫沙出库量年极值图";
      } else if (this.flag === 7) {
        this.$refs.chart1Ref.yearChonSha();
        this.title = "日虫沙库存量年极值图";
      } else if (this.flag === 8) {
        this.$refs.chart1Ref.yearChonOutDirection2();
        this.title = "日虫沙去向年极值图";
      }
    },
    // 历年
    historyClick() {
      switch (this.flag) {
        case 1:
          this.$refs.chart1Ref.historyChonIn();
          this.title = "日老虫入库量历年极值图";
          break;
        case 2:
          this.$refs.chart1Ref.historyChonOut();
          this.title = "日老虫出库量历年极值图";
          break;
        case 3:
          this.$refs.chart1Ref.historyChon();
          this.title = "日老虫库存量历年极值图";
          break;
        case 4:
          this.$refs.chart1Ref.historyChonOutDirection();
          this.title = "日老虫去向历年极值图";
          break;
        case 5:
          this.$refs.chart1Ref.historyChonSha_in();
          this.title = "日虫沙入库量历年极值图";
          break;
        case 6:
          this.$refs.chart1Ref.historyChonSha_out();
          this.title = "日虫沙出库量历年极值图";
          break;
        case 7:
          this.$refs.chart1Ref.historyChonSha();
          this.title = "日虫沙库存量历年极值图";
          break;
        case 8:
          this.$refs.chart1Ref.historyChonOutDirection2();
          this.title = "日虫沙去向历年极值图";
          break;
      }
    },
    // 切换月
    // 2-1.明细图
    monthClickM() {
      switch (this.flag) {
        case 1:
          this.$refs.chart1Ref.monthChonInM();
          this.title = "月老虫入库量明细图";
          break;
        case 2:
          this.$refs.chart1Ref.monthChonOutM();
          this.title = "月老虫出库量明细图";
          break;
        case 3:
          this.$refs.chart1Ref.monthChonM();
          this.title = "月老虫库存量明细图";
          break;
        case 4:
          this.$refs.chart1Ref.monthChonOutDirectionM();
          this.title = "月老虫去向明细图";
          break;
        case 5:
          this.$refs.chart1Ref.monthChonSha_inM();
          this.title = "月虫沙入库量明细图";
          break;
        case 6:
          this.$refs.chart1Ref.monthChonSha_outM();
          this.title = "月虫沙出库量明细图";
          break;
        case 7:
          this.$refs.chart1Ref.monthChonShaM();
          this.title = "月虫沙库存量明细图";
          break;
        case 8:
          this.$refs.chart1Ref.monthChonOutDirection2M();
          this.title = "月虫沙去向明细图";
          break;
      }
    },

    // 2-2.年极值图
    yearClickM(){
      switch (this.flag) {
        case 1:
          this.$refs.chart1Ref.yearChonInM();
          this.title = "月老虫入库量年极值图";
          break;
        case 2:
          this.$refs.chart1Ref.yearChonOutM();
          this.title = "月老虫出库量年极值图";
          break;
        case 3:
          this.$refs.chart1Ref.yearChonM();
          this.title = "月老虫库存量年极值图";
          break;
        case 4:
          this.$refs.chart1Ref.yearChonOutDirectionM();
          this.title = "月老虫去向年极值图";
          break;
        case 5:
          this.$refs.chart1Ref.yearChonSha_inM();
          this.title = "月虫沙入库量年极值图";
          break;
        case 6:
          this.$refs.chart1Ref.yearChonSha_outM();
          this.title = "月虫沙出库量年极值图";
          break;
        case 7:
          this.$refs.chart1Ref.yearChonShaM();
          this.title = "月虫沙库存量年极值图";
          break;
        case 8:
          this.$refs.chart1Ref.yearChonOutDirection2M();
          this.title = "月虫沙去向年极值图";
          break;
      }
    },

    // 2-3.历年极值图
    historyClickM(){
      switch (this.flag) {
        case 1:
          this.$refs.chart1Ref.historyChonInM();
          this.title = "月老虫入库量历年极值图";
          break;
        case 2:
          this.$refs.chart1Ref.historyChonOutM();
          this.title = "月老虫出库量历年极值图";
          break;
        case 3:
          this.$refs.chart1Ref.historyChonM();
          this.title = "月老虫库存量历年极值图";
          break;
        case 4:
          this.$refs.chart1Ref.historyChonOutDirectionM();
          this.title = "月老虫去向历年极值图";
          break;
        case 5:
          this.$refs.chart1Ref.historyChonSha_inM();
          this.title = "月虫沙入库量历年极值图";
          break;
        case 6:
          this.$refs.chart1Ref.historyChonSha_outM();
          this.title = "月虫沙出库量历年极值图";
          break;
        case 7:
          this.$refs.chart1Ref.historyChonShaM();
          this.title = "月虫沙库存量历年极值图";
          break;
        case 8:
          this.$refs.chart1Ref.historyChonOutDirection2M();
          this.title = "月虫沙去向历年极值图";
          break;
      }
    },
    // 3-1.年明细图
    yearClickY(){
      switch (this.flag) {
        case 1:
          this.$refs.chart1Ref.yearChonInY();
          this.title = "年老虫入库量年明细图";
          break;
        case 2:
          this.$refs.chart1Ref.yearChonOutY();
          this.title = "年老虫出库量年明细图";
          break;
        case 3:
          this.$refs.chart1Ref.yearChonY();
          this.title = "年老虫库存量年明细图";
          break;
        case 4:
          this.$refs.chart1Ref.yearChonOutDirectionY();
          this.title = "年老虫去向年明细图";
          break;
        case 5:
          this.$refs.chart1Ref.yearChonSha_inY();
          this.title = "年虫沙入库量年明细图";
          break;
        case 6:
          this.$refs.chart1Ref.yearChonSha_outY();
          this.title = "年虫沙出库量年明细图";
          break;
        case 7:
          this.$refs.chart1Ref.yearChonShaY();
          this.title = "年虫沙库存量年明细图";
          break;
        case 8:
          this.$refs.chart1Ref.yearChonOutDirection2Y();
          this.title = "年虫沙去向年明细图";
          break;
      }
    },
    // 3-2.历年极值图
    historyClickY(){
      switch (this.flag) {
        case 1:
          this.$refs.chart1Ref.historyChonInY();
          this.title = "年老虫入库量历年极值图";
          break;
        case 2:
          this.$refs.chart1Ref.historyChonOutY();
          this.title = "年老虫出库量历年极值图";
          break;
        case 3:
          this.$refs.chart1Ref.historyChonY();
          this.title = "年老虫库存量历年极值图";
          break;
        case 4:
          this.$refs.chart1Ref.historyChonOutDirectionY();
          this.title = "年老虫去向历年极值图";
          break;
        case 5:
          this.$refs.chart1Ref.historyChonSha_inY();
          this.title = "年虫沙入库量历年极值图";
          break;
        case 6:
          this.$refs.chart1Ref.historyChonSha_outY();
          this.title = "年虫沙出库量历年极值图";
          break;
        case 7:
          this.$refs.chart1Ref.historyChonShaY();
          this.title = "年虫沙库存量历年极值图";
          break;
        case 8:
          this.$refs.chart1Ref.historyChonOutDirection2Y();
          this.title = "年虫沙去向历年极值图";
          break;
      }
    }
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;

  .top {
    flex: 1;

    position: relative;

    .block {
      position: absolute;
      top: 25% !important;
      left: 2%;
    }
  }

  .bottom {
    flex: 15;

    .centerCharts {
      width: 120rem;
      height: 60rem;
      border: 1px solid rgb(64, 158, 255);
      margin: 4rem auto;
      display: flex;
      flex-direction: row;

      .left {
        flex: 1;
        display: flex;
        flex-direction: column;

        div {
          flex: 1;
          font-weight: 600;
          font-size: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 3px solid rgba(64, 158, 255, 0.2);
        }
      }

      .right {
        flex: 5;

        ul {
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          margin: 0;
          padding: 0;

          li {
            position: relative;
            flex-basis: 25%;
            overflow: hidden;
            cursor: pointer;
            color: rgb(24, 144, 255);

            &:hover {
              color: #fff;
            }

            .name {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              font-weight: 600;
              font-size: 3rem;
            }
          }
        }

     
      }

      .charts {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          .titleName {
            position: absolute;
            top: 5%;
            left: 35%;
            transform: translate(-50%);
            font-size: 2rem;
            font-family: Arial, sans-serif;
            color: #fff;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 600;
          }
          .btn {
            flex: 1;
            border: none;
            padding-top: 1rem;
          }

          .map {
            flex: 6;
          }
        }
    }

   
  }
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
  padding: 0;
}
</style>