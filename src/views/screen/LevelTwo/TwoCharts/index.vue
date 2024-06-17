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
        <dv-border-box-2
          :color="['green', 'green']"
          backgroundColor="rgba(55, 126, 34,.1)"
        >
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="" />
              <span>废弃物处理量</span>
            </div>
            <div class="map">
              <topBot>
                <template #Title>
                  {{ title1 }}
                </template>
                <template #btn>
                  <el-row type="flex" justify="space-between">
                    <el-col :span="8"> </el-col>
                    <el-col :span="8">
                      <el-tooltip
                        placement="bottom"
                        effect="light"
                        popper-class="atooltip"
                      >
                        <template #content>
                          <el-button
                            @click="dayFQW()"
                            type="success"
                            size="small"
                            round
                            >明细图</el-button
                          >
                          <el-button
                            type="success"
                            @click="monthFQW()"
                            size="small"
                            round
                            >月极值图</el-button
                          >
                          <el-button
                            @click="yearFQW()"
                            type="success"
                            size="small"
                            round
                            >年极值图</el-button
                          >
                          <el-button
                            @click="historyFQW()"
                            type="success"
                            size="small"
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
                            @click="monthFQWM"
                            type="success"
                            round
                            size="small"
                            >明细图</el-button
                          >
                          <el-button
                            @click="yearFQWM"
                            type="success"
                            round
                            size="small"
                            >年极值图</el-button
                          >
                          <el-button
                            @click="historyFQWM"
                            type="success"
                            round
                            size="small"
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
                            @click="yearFQWY"
                            type="success"
                            size="small"
                            round
                            >明细图</el-button
                          >
                          <el-button
                            @click="historyFQWY"
                            type="success"
                            size="small"
                            round
                            >历年极值图</el-button
                          >
                        </template>
                        <el-button type="primary" round>年</el-button>
                      </el-tooltip>
                    </el-col>
                  </el-row>
                </template>
                <template #charts>
                  <chart1 ref="chart1Ref"> </chart1>
                </template>
              </topBot>
            </div>
          </div>
        </dv-border-box-2>
      </div>
      <div class="topCenter">
        <dv-border-box-2
          :color="['green', 'green']"
          backgroundColor="rgba(55, 126, 34,.1)"
        >
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="" />
              <span>运行情况</span>
            </div>
            <div class="map">
              <shanMap></shanMap>
            </div>
          </div>
        </dv-border-box-2>
      </div>
      <div class="topRight">
        <dv-border-box-2
          :color="['green', 'green']"
          backgroundColor="rgba(55, 126, 34,.1)"
        >
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="" />
              <span>产率</span>
            </div>
            <div class="map">
              <top-bot>
                <template #Title>
                  {{ title2 }}
                </template>
                <template #btn>
                  <el-row type="flex" justify="space-between">
                    <el-col :span="8"> </el-col>
                    <el-col :span="8">
                      <el-tooltip
                        placement="bottom"
                        effect="light"
                        popper-class="atooltip"
                      >
                        <template #content>
                          <el-button
                            @click="dayCL()"
                            type="success"
                            size="small"
                            round
                            >明细图</el-button
                          >
                          <el-button
                            @click="monthCL()"
                            type="success"
                            size="small"
                            round
                            >月极值图</el-button
                          >
                          <el-button
                            @click="yearCL()"
                            type="success"
                            size="small"
                            round
                            >年极值图</el-button
                          >
                          <el-button
                            @click="historyCL()"
                            type="success"
                            size="small"
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
                            @click="monthCLM"
                            type="success"
                            size="small"
                            round
                            >明细图</el-button
                          >

                          <el-button
                            @click="yearCLM"
                            type="success"
                            size="small"
                            round
                            >年极值图</el-button
                          >
                          <el-button
                            @click="historyCLM"
                            type="success"
                            size="small"
                            round
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
                            @click="yearCLY"
                            type="success"
                            size="small"
                            round
                            >明细图</el-button
                          >

                          <el-button
                            @click="historyCLY"
                            type="success"
                            size="small"
                            round
                            >历年极值图</el-button
                          >
                        </template>
                        <el-button type="primary" round>年</el-button>
                      </el-tooltip>
                    </el-col>
                  </el-row>
                </template>
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
          <dv-border-box-2
            :color="['green', 'green']"
            backgroundColor="rgba(55, 126, 34,.1)"
          >
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="" />
                <span>老虫体征信息</span>
              </div>
              <div class="map">
                <topBot>
                  <template #Title>
                    {{ title3 }}
                  </template>
                  <template #btn>
                    <el-row type="flex" justify="space-between">
                      <el-col :span="8"> </el-col>
                      <el-col :span="8">
                        <el-tooltip
                          placement="bottom"
                          effect="light"
                          popper-class="atooltip"
                        >
                          <template #content>
                            <el-button
                              @click="dayOldC()"
                              type="success"
                              size="small"
                              round
                              >明细图</el-button
                            >
                            <el-button
                              @click="monthOldC()"
                              type="success"
                              size="small"
                              round
                              >月极值图</el-button
                            >
                            <el-button
                              @click="yearOldC()"
                              type="success"
                              size="small"
                              round
                              >年极值图</el-button
                            >
                            <el-button
                              @click="historyOldC()"
                              type="success"
                              size="small"
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
                              @click="monthOldCM"
                              type="success"
                              round
                              size="small"
                              >明细图</el-button
                            >

                            <el-button
                              @click="yearOldCM"
                              type="success"
                              round
                              size="small"
                              >年极值图</el-button
                            >
                            <el-button
                              @click="historyOldCM"
                              type="success"
                              round
                              size="small"
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
                              @click="yearOldCY"
                              type="success"
                              size="small"
                              round
                              >明细图</el-button
                            >
                            <el-button
                              @click="historyOldCY"
                              type="success"
                              size="small"
                              round
                              >历年极值图</el-button
                            >
                          </template>
                          <el-button type="primary" round>年</el-button>
                        </el-tooltip>
                      </el-col>
                    </el-row>
                  </template>
                  <template #charts>
                    <chart3 ref="chart3Ref"></chart3>
                  </template>
                </topBot>
              </div>
            </div>
          </dv-border-box-2>
        </li>
        <li>
          <dv-border-box-2
            :color="['green', 'green']"
            backgroundColor="rgba(55, 126, 34,.1)"
          >
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="" />
                <span> 能源消耗 </span>
              </div>
              <div class="map">
                <topBot>
                  <template #Title>
                    {{ title4 }}
                  </template>
                  <template #btn>
                    <el-row type="flex" justify="space-between">
                      <el-col :span="8"> </el-col>
                      <el-col :span="8">
                        <el-tooltip
                          placement="bottom"
                          effect="light"
                          popper-class="atooltip"
                        >
                          <template #content>
                            <el-button
                              @click="dayEnergy()"
                              type="success"
                              size="small"
                              round
                              >明细图</el-button
                            >
                            <el-button
                              @click="monthEnergy()"
                              type="success"
                              size="small"
                              round
                              >月极值图</el-button
                            >
                            <el-button
                              @click="yearEnergy()"
                              type="success"
                              size="small"
                              round
                              >年极值图</el-button
                            >
                            <el-button
                              @click="historyEnergy()"
                              type="success"
                              size="small"
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
                              @click="monthEnergyM()"
                              type="success"
                              round
                              size="small"
                              >明细图</el-button
                            >

                            <el-button
                              @click="yearEnergyM()"
                              type="success"
                              round
                              size="small"
                              >年极值图</el-button
                            >
                            <el-button
                              @click="historyEnergyM()"
                              type="success"
                              round
                              size="small"
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
                              @click="yearEnergyY()"
                              type="success"
                              size="small"
                              round
                              >明细图</el-button
                            >
                            <el-button
                              @click="historyEnergyY()"
                              type="success"
                              size="small"
                              round
                              >历年极值图</el-button
                            >
                          </template>
                          <el-button type="primary" round>年</el-button>
                        </el-tooltip>
                      </el-col>
                    </el-row>
                  </template>
                  <template #charts>
                    <chart5 ref="chart5Ref"></chart5>
                  </template>
                </topBot>
              </div>
            </div>
          </dv-border-box-2>
        </li>
        <li>
          <dv-border-box-2
            :color="['green', 'green']"
            backgroundColor="rgba(55, 126, 34,.1)"
          >
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="" />
                <span>单位工时</span>
              </div>
              <div class="map">
                <topBot>
                  <template #Title>
                    {{ title5 }}
                  </template>
                  <template #btn>
                    <el-row type="flex" justify="space-between">
                      <el-col :span="8"> </el-col>
                      <el-col :span="8">
                        <el-tooltip
                          placement="bottom"
                          effect="light"
                          popper-class="atooltip"
                        >
                          <template #content>
                            <el-button
                              @click="dayDanwei"
                              type="success"
                              size="small"
                              round
                              >明细图</el-button
                            >
                            <el-button
                              @click="monthDanwei"
                              type="success"
                              size="small"
                              round
                              >月极值图</el-button
                            >
                            <el-button
                              @click="yearDanwei"
                              type="success"
                              size="small"
                              round
                              >年极值图</el-button
                            >
                            <el-button
                              @click="historyDanwei()"
                              type="success"
                              size="small"
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
                              @click="monthDanweiM"
                              type="success"
                              round
                              size="small"
                              >明细图</el-button
                            >

                            <el-button
                              @click="yearDanweiM"
                              type="success"
                              round
                              size="small"
                              >年极值图</el-button
                            >
                            <el-button
                              @click="historyDanweiM"
                              type="success"
                              round
                              size="small"
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
                              @click="yearDanweiY"
                              type="success"
                              size="small"
                              round
                              >明细图</el-button
                            >
                            <el-button
                              @click="historyDanweiY"
                              type="success"
                              size="small"
                              round
                              >历年极值图</el-button
                            >
                          </template>
                          <el-button type="primary" round>年</el-button>
                        </el-tooltip>
                      </el-col>
                    </el-row>
                  </template>
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
import shanMap from "@/views/screen/LevelTwo/TwoCharts/chart6.vue";
import topBot from "@/components/screen/top-Bot";

export default {
  data() {
    return {
      chonData: [
        { name: "虫卵来源", value: "仓库" },
        { name: "单克虫卵产老虫产量(kg)", value: 30 },
        { name: "单位书柜标准工时(h)", value: 40 },
        { name: "吨用水量(L)", value: "正常" },
        { name: "吨用电量(kWh)", value: "正常" },
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
    shanMap,
    topBot,
  },
  mounted() {},
  methods: {
    // 废弃物处理量
    // 切换日
    // 1.明细图
    dayFQW() {
      this.$refs.chart1Ref.initChart();
      this.title1 = "日废弃物处理量明细图";
    },
    // 2.月极值图表
    monthFQW() {
      this.$refs.chart1Ref.updateMonth();
      this.title1 = "日废弃物处理量月极值图";
    },
    // 3.年极值图表
    yearFQW() {
      this.$refs.chart1Ref.updateYear();
      this.title1 = "日废弃物处理量年极值图";
    },
    // 4.历年
    historyFQW() {
      this.$refs.chart1Ref.updateHistory();
      this.title1 = "日废弃物处理量历年极值图";
    },
    // 切换月
    // 2-1.明细图
    monthFQWM() {
      this.$refs.chart1Ref.monthFQWM();
      this.title1 = "月废弃物处理量明细图";
    },
    // 2-2.年极值图表
    yearFQWM() {
      this.$refs.chart1Ref.yearFQWM();
      this.title1 = "月废弃物处理量年极值图";
    },
    // 2-3.历年
    historyFQWM() {
      this.$refs.chart1Ref.historyFQWM();
      this.title1 = "月废弃物处理量历年极值图";
    },
    // 切换年
    // 3-1.明细图
    yearFQWY() {
      this.$refs.chart1Ref.yearFQWY();
      this.title1 = "年废弃物处理量明细图";
    },
    // 3-2.历年
    historyFQWY() {
      this.$refs.chart1Ref.historyFQWY();
      this.title1 = "年废弃物处理量历年极值图";
    },

    // 产率
    // 切换日
    // 1.明细图
    dayCL() {
      this.$refs.chart2Ref.initChart();
      this.title2 = "日产率明细图";
    },
    // 2.月极值图表
    monthCL() {
      this.$refs.chart2Ref.updateMonth();
      this.title2 = "日产率月极值图";
    },
    // 3.年极值图表
    yearCL() {
      this.$refs.chart2Ref.updateYear();
      this.title2 = "日产率年极值图";
    },
    // 4.历年
    historyCL() {
      this.$refs.chart2Ref.updateHistory();
      this.title2 = "日产率历年极值图";
    },
    // 切换月
    // 2-1.明细图
    monthCLM() {
      this.$refs.chart2Ref.monthCLM();
      this.title2 = "月产率明细图";
    },
    // 2-2.年极值图表
    yearCLM() {
      this.$refs.chart2Ref.yearCLM();
      this.title2 = "月产率年极值图";
    },
    // 2-3.历年
    historyCLM() {
      this.$refs.chart2Ref.historyCLM();
      this.title2 = "月产率历年极值图";
    },
    // 切换年
    // 3-1.明细图
    yearCLY() {
      this.$refs.chart2Ref.yearCLY();
      this.title2 = "年产率明细图";
    },
    // 3-2.历年
    historyCLY() {
      this.$refs.chart2Ref.historyCLY();
      this.title2 = "年产率历年极值图";
    },

    // 老虫体征信息
    // 切换日
    // 1.明细图
    dayOldC() {
      this.$refs.chart3Ref.initChart();
      this.title3 = "日老虫体征信息明细图";
    },
    // 2.月极值图表
    monthOldC() {
      this.$refs.chart3Ref.updateMonth();
      this.title3 = "日老虫体征信息月极值图";
    },
    // 3.年极值图表
    yearOldC() {
      this.$refs.chart3Ref.updateYear();
      this.title3 = "日老虫体征信息年极值图";
    },
    // 4.历年
    historyOldC() {
      this.$refs.chart3Ref.updateHistory();
      this.title3 = "日老虫体征信息历年极值图";
    },
    // 切换月
    // 2-1.明细图
    monthOldCM() {
      this.$refs.chart3Ref.monthOldCM();
      this.title3 = "月老虫体征信息明细图";
    },
    // 2-2.年极值图表
    yearOldCM() {
      this.$refs.chart3Ref.yearOldCM();
      this.title3 = "月老虫体征信息年极值图";
    },
    // 2-3.历年
    historyOldCM() {
      this.$refs.chart3Ref.historyOldCM();
      this.title3 = "月老虫体征信息历年极值图";
    },
    // 切换年
    // 3-1.明细图
    yearOldCY() {
      this.$refs.chart3Ref.yearOldCY();
      this.title3 = "年老虫体征信息明细图";
    },
    // 3-2.历年
    historyOldCY() {
      this.$refs.chart3Ref.historyOldCY();
      this.title3 = "年老虫体征信息历年极值图";
    },

    // 能源消耗
    // 切换日
    // 1.明细图
    dayEnergy() {
      this.$refs.chart5Ref.initChart();
      this.title4 = "日能源消耗明细图";
    },
    // 2.月极值图表
    monthEnergy() {
      this.$refs.chart5Ref.updateMonth();
      this.title4 = "日能源消耗月极值图";
    },
    // 3.年极值图表
    yearEnergy() {
      this.$refs.chart5Ref.updateYear();
      this.title4 = "日能源消耗年极值图";
    },
    // 4.历年
    historyEnergy() {
      this.$refs.chart5Ref.updateHistory();
      this.title4 = "日能源消耗历年极值图";
    },
    // 切换月
    // 2-1.明细图
    monthEnergyM() {
      this.$refs.chart5Ref.monthEnergyM();
      this.title4 = "月能源消耗明细图";
    },
    // 2-2.年极值图表
    yearEnergyM() {
      this.$refs.chart5Ref.yearEnergyM();
      this.title4 = "月能源消耗年极值图";
    },
    // 2-3.历年
    historyEnergyM() {
      this.$refs.chart5Ref.historyEnergyM();
      this.title4 = "月能源消耗历年极值图";
    },
    // 切换年
    // 3-1.明细图
    yearEnergyY() {
      this.$refs.chart5Ref.yearEnergyY();
      this.title4 = "年能源消耗明细图";
    },
    // 3-2.历年
    historyEnergyY() {
      this.$refs.chart5Ref.historyEnergyY();
      this.title4 = "年能源消耗历年极值图";
    },

    // 单位工时
    // 切换日
    // 1.明细图
    dayDanwei() {
      this.$refs.chart4Ref.initChart();
      this.title5 = "日单位工时明细图";
    },
    // 2.月极值图表
    monthDanwei() {
      this.$refs.chart4Ref.updateMonth();
      this.title5 = "日单位工时月极值图";
    },
    // 3.年极值图表
    yearDanwei() {
      this.$refs.chart4Ref.updateYear();
      this.title5 = "日单位工时年极值图";
    },
    // 4.历年
    historyDanwei() {
      this.$refs.chart4Ref.updateHistory();
      this.title5 = "日单位工时历年极值图";
    },
    // 切换月
    // 2-1.明细图
    monthDanweiM() {
      this.$refs.chart4Ref.monthDanweiM();
      this.title5 = "月单位工时明细图";
    },
    // 2-2（月）年极值图
    yearDanweiM() {
      this.$refs.chart4Ref.yearDanweiM();
      this.title5 = "月单位工时年极值图";
    },
    // 2-3（月）历年
    historyDanweiM() {
      this.$refs.chart4Ref.historyDanweiM();
      this.title5 = "月单位工时历年极值图";
    },
    // 切换年
    // 3-1 年明细图
    yearDanweiY() {
      this.$refs.chart4Ref.yearDanweiY();
      this.title5 = "年单位工时年明细图";
    },
    // 3-2（年）历年
    historyDanweiY() {
      this.$refs.chart4Ref.historyDanweiY();
      this.title5 = "年单位工时历年极值图";
    },
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
          font-size: 1.3rem;
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
            text-shadow: 0 0 0.02rem #006aff;
            // vertical-align: middle;
            padding-bottom: 5%;
            font-size: 1.5rem;
          }
        }

        .map {
          flex: 6;
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
              text-shadow: 0 0 0.02rem #006aff;
              font-size: 1.5rem;
            }
          }

          .map {
            flex: 6;
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
  padding: 0;
}
</style>