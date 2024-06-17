<template>
  <div class="content" ref="contentBox">
    <div class="nav">
      <ul>
        <li v-for="(item, index) in chonData" :key="index"
          :style="{ visibility: (item.name.toLowerCase() === '助剂1' || item.name.toLowerCase() === '助剂2' || item.name.toLowerCase() === '助剂3') ? 'hidden' : 'visible' }">
          <div class="name">{{ item.name }}</div>
          <div class="value">{{ item.value }}</div>
        </li>

      </ul>
    </div>
    <div class="top">
      <div class="topLeft" ref="conBox">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)" ref="box">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="">
              <span>环境温度</span>
            </div>
            <div class="map">
              <topBot>
                <template #Title>
                  {{ title1 }}
                </template>
                <template #btn>
                  <el-row type="flex" justify="space-between">
                    <el-col :span="8">
                    </el-col>
                    <el-col :span="8">
                      <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="dayWD()" type="success" size="small" round>明细图</el-button>
                          <el-button @click="monthWD()" type="success" size="small" round>月极值图</el-button>
                          <el-button @click="yearWD()" type="success" size="small" round>年极值图</el-button>
                          <el-button @click="historyWD()" type="success" size="small" round>历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>日</el-button>
                      </el-tooltip>
                      <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="monthWDM" type="success" round size="small">明细图</el-button>

                          <el-button @click="yearWDM" type="success" round size="small">年极值图</el-button>
                          <el-button @click="historyWDM" type="success" round size="small">历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>月</el-button>
                      </el-tooltip>
                      <el-tooltip placement="bottom-end" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="yearWDY" type="success" size="small" round>明细图</el-button>
                          <el-button @click="historyWDY" type="success" size="small" round>历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>年</el-button>
                      </el-tooltip>
                    </el-col>

                  </el-row>
                </template>
                <template #charts>
                  <chart-1 ref="chart1Ref"></chart-1>

                </template>
              </topBot>
            </div>
          </div>
        </dv-border-box-2>
      </div>
      <div class="topCenter">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)" ref="box">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="">
              <span>虫卵单位孵化量</span>
            </div>
            <div class="map">
              <top-bot>
                <template #Title>
                  {{ title2 }}
                </template>
                <template #btn>
                  <el-row type="flex" justify="space-between">
                    <el-col :span="8">
                    </el-col>
                    <el-col :span="8">
                      <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="dayFH" type="success" size="small" round>明细图</el-button>
                          <el-button @click="monthFH" type="success" size="small" round>月极值图</el-button>
                          <el-button @click="yearFH" type="success" size="small" round>年极值图</el-button>
                          <el-button @click="historyFH()" type="success" size="small" round>历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>日</el-button>
                      </el-tooltip>
                      <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="monthFHM" type="success" round size="small">明细图</el-button>

                          <el-button @click="yearFHM" type="success" round size="small">年极值图</el-button>
                          <el-button @click="historyFHM" type="success" round size="small">历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>月</el-button>
                      </el-tooltip>
                      <el-tooltip placement="bottom-end" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="yearFHY" type="success" size="small" round>明细图</el-button>
                          <el-button @click="historyFHY" type="success" size="small" round>历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>年</el-button>
                      </el-tooltip>
                    </el-col>

                  </el-row>
                </template>
                <template #charts>

                  <fuHua ref="fuHuaRef"></fuHua>
                </template>
              </top-bot>
            </div>
          </div>
        </dv-border-box-2>
      </div>
      <div class="topRight">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)" ref="box">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="">
              <span>含水率</span>
            </div>
            <div class="map">
              <topBot>
                <template #Title>
                  {{ title3 }}
                </template>
                <template #btn>
                  <el-row type="flex" justify="space-between">
                    <el-col :span="8">
                    </el-col>
                    <el-col :span="8">
                      <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="dayWater" type="success" size="small" round>明细图</el-button>
                          <el-button @click="monthWater" type="success" size="small" round>月极值图</el-button>
                          <el-button @click="yearWater" type="success" size="small" round>年极值图</el-button>
                          <el-button @click="historyWater()" type="success" size="small" round>历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>日</el-button>
                      </el-tooltip>
                      <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="monthWaterM" type="success" round size="small">明细图</el-button>

                          <el-button @click="yearWaterM" type="success" round size="small">年极值图</el-button>
                          <el-button @click="historyWaterM" type="success" round size="small">历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>月</el-button>
                      </el-tooltip>
                      <el-tooltip placement="bottom-end" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="yearWaterY" type="success" size="small" round>明细图</el-button>
                          <el-button @click="historyWaterY" type="success" size="small" round>历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>年</el-button>
                      </el-tooltip>
                    </el-col>

                  </el-row>
                </template>
                <template #charts>
                  <chart2 ref="chart2Ref"></chart2>
                </template>
              </topBot>
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
                <span>助剂1</span>
              </div>
              <div class="map">
                <topBot>
                  <template #Title>
                    {{ title4 }}
                  </template>
                  <template #btn>
                    <el-row type="flex" justify="space-between">
                      <el-col :span="8">
                      </el-col>
                      <el-col :span="8">
                        <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="dayZJ1" type="success" size="small" round>明细图</el-button>
                            <el-button @click="monthZJ1" type="success" size="small" round>月极值图</el-button>
                            <el-button @click="yearZJ1" type="success" size="small" round>年极值图</el-button>
                            <el-button @click="historyZJ1()" type="success" size="small" round>历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>日</el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="monthZJ1M" type="success" round size="small">明细图</el-button>

                            <el-button @click="yearZJ1M" type="success" round size="small">年极值图</el-button>
                            <el-button @click="historyZJ1M" type="success" round size="small">历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>月</el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom-end" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="yearZJ1Y" type="success" size="small" round>明细图</el-button>
                            <el-button @click="historyZJ1Y" type="success" size="small" round>历年极值图</el-button>
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
          </dv-border-box-2></li>
        <li><dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)" ref="box">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="">
                <span>
                  助剂2
                </span>
              </div>
              <div class="map">
                <topBot>
                  <template #Title>
                    {{ title5 }}
                  </template>
                  <template #btn>
                    <el-row type="flex" justify="space-between">
                      <el-col :span="8">
                      </el-col>
                      <el-col :span="8">
                        <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="dayZJ2" type="success" size="small" round>明细图</el-button>
                            <el-button @click="monthZJ2" type="success" size="small" round>月极值图</el-button>
                            <el-button @click="yearZJ2" type="success" size="small" round>年极值图</el-button>
                            <el-button @click="historyZJ2()" type="success" size="small" round>历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>日</el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="monthZJ2M" type="success" round size="small">明细图</el-button>

                            <el-button @click="yearZJ2M" type="success" round size="small">年极值图</el-button>
                            <el-button @click="historyZJ2M" type="success" round size="small">历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>月</el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom-end" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="yearZJ2Y" type="success" size="small" round>明细图</el-button>
                            <el-button @click="historyZJ2Y" type="success" size="small" round>历年极值图</el-button>
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
          </dv-border-box-2></li>
        <li><dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)" ref="box">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="">
                <span>助剂3</span>
              </div>
              <div class="map">
                <topBot>
                  <template #Title>
                    {{ title6 }}
                  </template>
                  <template #btn>
                    <el-row type="flex" justify="space-between">
                      <el-col :span="8">
                      </el-col>
                      <el-col :span="8">
                        <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="dayZJ3" type="success" size="small" round>明细图</el-button>
                            <el-button @click="monthZJ3" type="success" size="small" round>月极值图</el-button>
                            <el-button @click="yearZJ3" type="success" size="small" round>年极值图</el-button>
                            <el-button @click="historyZJ3()" type="success" size="small" round>历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>日</el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="monthZJ3M" type="success" round size="small">明细图</el-button>

                            <el-button @click="yearZJ3M" type="success" round size="small">年极值图</el-button>
                            <el-button @click="historyZJ3M" type="success" round size="small">历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>月</el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom-end" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="yearZJ3Y" type="success" size="small" round>明细图</el-button>
                            <el-button @click="historyZJ3Y" type="success" size="small" round>历年极值图</el-button>
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
import chart5 from '@/views/screen/LevelThree/ThreeCharts/chart5.vue'
import fuHua from '@/views/screen/LevelThree/ThreeCharts/fuHua.vue'
import topBot from '@/components/screen/top-Bot.vue'
export default {
  data() {
    return {

      chonData: [
        { name: '环境温度', value: '正常' },
        { name: '工艺状态', value: '正常' },
        { name: '含水率', value: '正常' },
        // { name: '助剂1', value: '正常' },
        // { name: '助剂2', value: '正常' },
        // { name: '助剂3', value: '正常' },
      ],

      borderKey: 0,
      month: 2,
      borderBoxWidth: 0,
      title1: '日环境温度明细图',
      title2: '日虫卵单位孵化量明细图',
      title3: '日含水量明细图',
      title4: '日助剂1明细图',
      title5: '日助剂2明细图',
      title6: '日助剂3明细图',
    }
  },
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    // chart6,
    topBot,
    fuHua


  },
  mounted() {
    window.addEventListener('resize', this.handleResize)

    this.getBorderBoxWidth()
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
    handleResize() {
      // this.borderKey++;
      this.$refs.box.initWH()
      this.getBorderBoxWidth()
    },
    getBorderBoxWidth() {
      this.borderBoxWidth = this.$refs.conBox.offsetWidth;
    },
    // 环境温度
    // 切换日按钮
    // 1.明细图表
    dayWD() {
      this.$refs.chart1Ref.initChart()
      this.title1 = '日环境温度明细图'
    },
    // 2.月极值图表
    monthWD() {
      this.$refs.chart1Ref.updateMonth()
      this.title1 = '日环境温度月极值图'
    },
    // 3.年极值图表
    yearWD() {
      this.$refs.chart1Ref.updateYear()
      this.title1 = '日环境温度年极值图'
    },
    // 4.历年图表
    historyWD() {
      this.$refs.chart1Ref.updateHistoryYear()
      this.title1 = '日环境温度历年极值图'
    },
    // 切换月
    // 2-1.明细图表
    monthWDM() {
      this.$refs.chart1Ref.monthWDM()
      this.title1 = '月环境温度明细图'
    },
    // 2-2（月）年极值图
    yearWDM() {
      this.$refs.chart1Ref.yearWDM()
      this.title1 = '月环境温度年极值图'
    },
    // 2-3（月）历年
    historyWDM() {
      this.$refs.chart1Ref.historyWDM()
      this.title1 = '月环境温度历年极值图'
    },
    // 切换年
    // 3-1 年明细图
    yearWDY() {
      this.$refs.chart1Ref.yearWDY()
      this.title1 = '年环境温度年明细图'
    },
    // 3-2（年）历年
    historyWDY() {
      this.$refs.chart1Ref.historyWDY()
      this.title1 = '年环境温度历年极值图'
    },

    // 虫卵单位孵化量
    // 切换日按钮
    // 1.明细图表
    dayFH() {
      this.$refs.fuHuaRef.initChart()
      this.title2 = '日虫卵单位孵化量明细图'
    },
    // 2.月图表
    monthFH() {
      this.$refs.fuHuaRef.monthChonRuan()
      this.title2 = '日虫卵单位孵化量月极值图'
    },
    // 3.年图表
    yearFH() {
      this.$refs.fuHuaRef.yearChonRuan()
      this.title2 = '日虫卵单位孵化量年极值图'
    },
    // 4.历年图表
    historyFH() {
      this.$refs.fuHuaRef.historyChonRuan()
      this.title2 = '日虫卵单位孵化量历年极值图'
    },
    // 切换月
    // 2-1.明细图表
    monthFHM() {
      this.$refs.fuHuaRef.monthChonRuanM()
      this.title2 = '月虫卵单位孵化量明细图'
    },
    // 2-2（月）年极值图
    yearFHM() {
      this.$refs.fuHuaRef.yearChonRuanM()
      this.title2 = '月虫卵单位孵化量年极值图'
    },
    // 2-3（月）历年
    historyFHM() {
      this.$refs.fuHuaRef.historyChonRuanM()
      this.title2 = '月虫卵单位孵化量历年极值图'

    },
    // 切换年
    // 3-1 年明细图
    yearFHY() {
      this.$refs.fuHuaRef.yearChonRuanY()
      this.title2 = '年虫卵单位孵化量年明细图'
    },
    // 3-2（年）历年
    historyFHY() {
      this.$refs.fuHuaRef.historyChonRuanY()
      this.title2 = '年虫卵单位孵化量历年极值图'
    },


    // 含水率
    // 切换日按钮
    //     1.明细图表
    dayWater() {
      this.$refs.chart2Ref.initChart()
      this.title3 = '日含水率明细图'
    },
    // 2.月极值图表
    monthWater() {
      this.$refs.chart2Ref.updateMonth()
      this.title3 = '日含水率月极值图'
    },
    // 3.年极值图表
    yearWater() {
      this.$refs.chart2Ref.updateYear()
      this.title3 = '日含水率年极值图'
    },
    // 4.历年
    historyWater() {
      this.$refs.chart2Ref.updateHistoryYear()
      this.title3 = '日含水率历年极值图'
    },
    // 切换月
    // 2-1.明细图表
    monthWaterM() {
      this.$refs.chart2Ref.monthWaterM()
      this.title3 = '月含水率明细图'
    },
    // 2-2（月）年极值图
    yearWaterM() {
      this.$refs.chart2Ref.yearWaterM()
      this.title3 = '月含水率年极值图'
    },
    // 2-3（月）历年
    historyWaterM() {
      this.$refs.chart2Ref.historyWaterM()
      this.title3 = '月含水率历年极值图'
    },
    // 切换年
    // 3-1 年明细图
    yearWaterY() {
      this.$refs.chart2Ref.yearWaterY()
      this.title3 = '年含水率年明细图'
    },
    // 3-2（年）历年
    historyWaterY() {
      this.$refs.chart2Ref.historyWaterY()
      this.title3 = '年含水率历年极值图'
    },

    // 助剂1
    // 切换日按钮
    //     1.明细图表
    dayZJ1() {
      this.$refs.chart3Ref.initChart()
      this.title4 = '日助剂1明细图'
    },
    // 2.月极值图表
    monthZJ1() {
      this.$refs.chart3Ref.updateMonth()
      this.title4 = '日助剂1月极值图'
    },
    // 3.年极值图表
    yearZJ1() {
      this.$refs.chart3Ref.updateYear()
      this.title4 = '日助剂1年极值图'
    },
    // 4.历年
    historyZJ1() {
      this.$refs.chart3Ref.updateHistoryYear()
      this.title4 = '日助剂1历年极值图'
    },
    // 切换月
    // 2-1.明细图表
    monthZJ1M() {
      this.$refs.chart3Ref.monthZJ1M()
      this.title4 = '月助剂1明细图'
    },
    // 2-2（月）年极值图
    yearZJ1M() {
      this.$refs.chart3Ref.yearZJ1M()
      this.title4 = '月助剂1年极值图'
    },
    // 2-3（月）历年
    historyZJ1M() {
      this.$refs.chart3Ref.historyZJ1M()
      this.title4 = '月助剂1历年极值图'
    },
    // 切换年
    // 3-1 年明细图
    yearZJ1Y() {
      this.$refs.chart3Ref.yearZJ1Y()
      this.title4 = '年助剂1年明细图'
    },
    // 3-2（年）历年
    historyZJ1Y() {
      this.$refs.chart3Ref.historyZJ1Y()
      this.title4 = '年助剂1历年极值图'
    },

    // 助剂2
    // 切换日按钮
    //     1.明细图表
    dayZJ2() {
      this.$refs.chart4Ref.initChart()
      this.title5 = '日助剂2明细图'
    },
    // 2.月极值图表
    monthZJ2() {
      this.$refs.chart4Ref.updateMonth()
      this.title5 = '日助剂2月极值图'
    },
    // 3.年极值图表
    yearZJ2() {
      this.$refs.chart4Ref.updateYear()
      this.title5 = '日助剂2年极值图'
    },
    // 4.历年
    historyZJ2() {
      this.$refs.chart4Ref.updateHistoryYear()
      this.title5 = '日助剂2历年极值图'
    },
    // 切换月
    // 2-1.明细图表
    monthZJ2M() {
      this.$refs.chart4Ref.monthZJ2M()
      this.title5 = '月助剂2明细图'
    },
    // 2-2（月）年极值图
    yearZJ2M() {
      this.$refs.chart4Ref.yearZJ2M()
      this.title5 = '月助剂2年极值图'
    },
    // 2-3（月）历年
    historyZJ2M() {
      this.$refs.chart4Ref.historyZJ2M()
      this.title5 = '月助剂2历年极值图'
    },
    // 切换年
    // 3-1 年明细图
    yearZJ2Y() {
      this.$refs.chart4Ref.yearZJ2Y()
      this.title5 = '年助剂2年明细图'
    },
    // 3-2（年）历年
    historyZJ2Y() {
      this.$refs.chart4Ref.historyZJ2Y()
      this.title5 = '年助剂2历年极值图'
    },

    // 助剂3
    // 切换日按钮
    //     1.明细图表
    dayZJ3() {
      this.$refs.chart5Ref.initChart()
      this.title6 = '日助剂3明细图'
    },
    // 2.月极值图表
    monthZJ3() {
      this.$refs.chart5Ref.updateMonth()
      this.title6 = '日助剂3月极值图'
    },
    // 3.年极值图表
    yearZJ3() {
      this.$refs.chart5Ref.updateYear()
      this.title6 = '日助剂3年极值图'
    },
    // 4.历年
    historyZJ3() {
      this.$refs.chart5Ref.updateHistoryYear()
      this.title6 = '日助剂3历年极值图'
    },
    // 切换月
    // 2-1.明细图表
    monthZJ3M() {
      this.$refs.chart5Ref.monthZJ3M()
      this.title6 = '月助剂3明细图'
    },
    // 2-2（月）年极值图
    yearZJ3M() {
      this.$refs.chart5Ref.yearZJ3M()
      this.title6 = '月助剂3年极值图'
    },
    // 2-3（月）历年
    historyZJ3M() {
      this.$refs.chart5Ref.historyZJ3M()
      this.title6 = '月助剂3历年极值图'
    },
    // 切换年
    // 3-1 年明细图
    yearZJ3Y() {
      this.$refs.chart5Ref.yearZJ3Y()
      this.title6 = '年助剂3年明细图'

    },
    // 3-2（年）历年
    historyZJ3Y() {
      this.$refs.chart5Ref.historyZJ3Y()
      this.title6 = '年助剂3历年极值图'
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

    padding: 0;

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
            height: 3.5rem;
          }

          span {
            position: absolute;
            left: 50%;
            top: 11%;
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
          flex: 6;
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