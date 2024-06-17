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
              <span>吨处理成本</span>
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
                          <el-button @click="dayCost" type="success" size="small" round>明细图</el-button>
                          <el-button @click="monthCost" type="success" size="small" round>月极值图</el-button>
                          <el-button @click="yearCost" type="success" size="small" round>年极值图</el-button>
                          <el-button @click="historyCost()" type="success" size="small" round>历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>日</el-button>
                      </el-tooltip>
                      <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="monthCostM" type="success" round size="small">明细图</el-button>

                          <el-button @click="yearCostM" type="success" round size="small">年极值图</el-button>
                          <el-button @click="historyCostM" type="success" round size="small">历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>月</el-button>
                      </el-tooltip>
                      <el-tooltip placement="bottom-end" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="yearCostY" type="success" size="small" round>明细图</el-button>
                          <el-button @click="historyCostY" type="success" size="small" round>历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>年</el-button>
                      </el-tooltip>
                    </el-col>

                  </el-row>
                </template>
                <template #charts>
                  <chart6 ref="chart6Ref"></chart6>
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
              <img src="@/assets/images/14-小标题.png" alt="">
              <span>人工</span>
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
                          <el-button @click="dayRG" type="success" size="small" round>明细图</el-button>
                          <el-button @click="monthRG" type="success" size="small" round>月极值图</el-button>
                          <el-button @click="yearRG" type="success" size="small" round>年极值图</el-button>
                          <el-button @click="historyRG()" type="success" size="small" round>历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>日</el-button>
                      </el-tooltip>
                      <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="monthRGM" type="success" round size="small">明细图</el-button>

                          <el-button @click="yearRGM" type="success" round size="small">年极值图</el-button>
                          <el-button @click="historyRGM" type="success" round size="small">历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>月</el-button>
                      </el-tooltip>
                      <el-tooltip placement="bottom-end" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="yearRGY" type="success" size="small" round>明细图</el-button>
                          <el-button @click="historyRGY" type="success" size="small" round>历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>年</el-button>
                      </el-tooltip>
                    </el-col>

                  </el-row>
                </template>
                <template #charts>

                  <chart1 ref="chart1Ref"></chart1>
                </template>
              </top-bot>
            </div>
          </div>
        </dv-border-box-2>
      </div>
      <div class="topRight">
        <dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
          <div class="chart_1">
            <div class="title">
              <img src="@/assets/images/14-小标题.png" alt="">
              <span>能源</span>
            </div>
            <div class="map">
              <top-bot>
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
                          <el-button @click="dayNY" type="success" size="small" round>明细图</el-button>
                          <el-button @click="monthNY" type="success" size="small" round>月极值图</el-button>
                          <el-button @click="yearNY" type="success" size="small" round>年极值图</el-button>
                          <el-button @click="historyNY()" type="success" size="small" round>历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>日</el-button>
                      </el-tooltip>
                      <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="monthNYM" type="success" round size="small">明细图</el-button>

                          <el-button @click="yearNYM" type="success" round size="small">年极值图</el-button>
                          <el-button @click="historyNYM" type="success" round size="small">历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>月</el-button>
                      </el-tooltip>
                      <el-tooltip placement="bottom-end" effect="light" popper-class="atooltip">
                        <template #content>
                          <el-button @click="yearNYY" type="success" size="small" round>明细图</el-button>
                          <el-button @click="historyNYY" type="success" size="small" round>历年极值图</el-button>
                        </template>
                        <el-button type="primary" round>年</el-button>
                      </el-tooltip>
                    </el-col>

                  </el-row>
                </template>
                <template #charts>

                  <chart5 ref="chart5Ref"></chart5>
                </template>
              </top-bot>

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

                <top-bot>
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
                            <el-button @click="daychonR" type="success" size="small" round>明细图</el-button>
                            <el-button @click="monthchonR" type="success" size="small" round>月极值图</el-button>
                            <el-button @click="yearchonR" type="success" size="small" round>年极值图</el-button>
                            <el-button @click="historychonR()" type="success" size="small" round>历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>日</el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="monthchonRM" type="success" round size="small">明细图</el-button>

                            <el-button @click="yearchonRM" type="success" round size="small">年极值图</el-button>
                            <el-button @click="historychonRM" type="success" round size="small">历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>月</el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom-end" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="yearchonRY" type="success" size="small" round>明细图</el-button>
                            <el-button @click="historychonRY" type="success" size="small" round>历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>年</el-button>
                        </el-tooltip>
                      </el-col>

                    </el-row>
                  </template>
                  <template #charts>

                    <chart3 ref="chart3Ref"></chart3>
                  </template>
                </top-bot>
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
                <top-bot>
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
                            <el-button @click="daySmelly" type="success" size="small" round>明细图</el-button>
                            <el-button @click="monthSmelly" type="success" size="small" round>月极值图</el-button>
                            <el-button @click="yearSmelly" type="success" size="small" round>年极值图</el-button>
                            <el-button @click="historySmelly()" type="success" size="small" round>历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>日</el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="monthSmellyM" type="success" round size="small">明细图</el-button>

                            <el-button @click="yearSmellyM" type="success" round size="small">年极值图</el-button>
                            <el-button @click="historySmellyM" type="success" round size="small">历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>月</el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom-end" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="yearSmellyY" type="success" size="small" round>明细图</el-button>
                            <el-button @click="historySmellyY" type="success" size="small" round>历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>年</el-button>
                        </el-tooltip>
                      </el-col>

                    </el-row>
                  </template>
                  <template #charts>
                    <chart4 ref="chart4Ref"></chart4>
                  </template>
                </top-bot>
              </div>
            </div>
          </dv-border-box-2></li>
        <li><dv-border-box-2 :color="['green', 'green']" backgroundColor="rgba(55, 126, 34,.1)">
            <div class="chart_2">
              <div class="title">
                <img src="@/assets/images/14-小标题.png" alt="">
                <span>助剂用量</span>
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
                            <el-button type="success" @click="dayZJ()" size="small" round>明细图</el-button>
                            <el-button type="success" @click="monthZJ()" size="small" round>月极值图</el-button>
                            <el-button type="success" @click="yearZJ()" size="small" round>年极值图</el-button>
                            <el-button type="success" @click="historyZJ()" size="small" round>历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>日</el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="monthZJM" type="success" round size="small">明细图</el-button>

                            <el-button @click="yearZJM" type="success" round size="small">年极值图</el-button>
                            <el-button @click="historyZJM" type="success" round size="small">历年极值图</el-button>
                          </template>
                          <el-button type="primary" round>月</el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom-end" effect="light" popper-class="atooltip">
                          <template #content>
                            <el-button @click="yearZJY" type="success" size="small" round>明细图</el-button>
                            <el-button @click="historyZJY" type="success" size="small" round>历年极值图</el-button>
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
          </dv-border-box-2></li>
      </ul>
    </div>
  </div>
</template>

<script>
import chart1 from '@/views/screen/LevelFour/FourCharts/chart1.vue'
import chart2 from '@/views/screen/LevelFour/FourCharts/chart2.vue'
import chart3 from '@/views/screen/LevelFour/FourCharts/chart3.vue'
import chart4 from '@/views/screen/LevelFour/FourCharts/chart4.vue'
import chart5 from '@/views/screen/LevelFour/FourCharts/chart5.vue'
import topBot from '@/components/screen/top-Bot.vue'
import chart6 from '@/views/screen/LevelFour/FourCharts/chart6.vue'
export default {
  data() {
    return {
      chonData: [
        { name: '日吨虫成本', value: 20 },
        { name: '月吨虫成本', value: 30 },
        { name: '季吨虫成本', value: 40 },
        { name: '半年吨虫成本', value: 50 },
        { name: '年吨虫成本', value: 60 }
      ],
      title1: '日吨虫成本明细图',
      title2: '日人工明细图',
      title3: '日能源明细图',
      title4: '日虫卵用量明细图',
      title5: '日除臭剂用量明细图',
      title6: '日助剂用量明细图',
    }
  },
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    chart6,
    topBot

  },

  methods: {
    // 吨处理成本
    // 切换日
    // 1.明细图表
    dayCost() {
      this.$refs.chart6Ref.initChart()
      this.title1 = '日吨虫成本明细图'
    },
    // 2.月极值图表
    monthCost() {
      this.$refs.chart6Ref.monthCost()
      this.title1 = '日吨虫成本月极值图'
    },
    // 3.年极值图表
    yearCost() {
      this.$refs.chart6Ref.yearCost()
      this.title1 = '日吨虫成本年极值图'
    },
    // 4.历年
    historyCost() {
      this.$refs.chart6Ref.historyCost()
      this.title1 = '日吨虫成本历年极值图'
    },

    // 2-1 月明细图
    monthCostM() {
      this.$refs.chart6Ref.monthCostM()
      this.title1 = '月吨虫成本明细图'
    },
    // 2-2 （月）年极值图
    yearCostM() {
      this.$refs.chart6Ref.yearCostM()
      this.title1 = '月吨虫成本年极值图'
    },
    // 2-3 (月) 历年
    historyCostM() {
      this.$refs.chart6Ref.historyCostM()
      this.title1 = '月吨虫成本历年极值图'
    },
    // 3-1 年明细图
    yearCostY() {
      this.$refs.chart6Ref.yearCostY()
      this.title1 = '年吨虫成本年明细图'
    },
    // 3-2 历年
    historyCostY() {
      this.$refs.chart6Ref.historyCostY()
      this.title1 = '年吨虫成本历年极值图'
    },






    // 点击运行总工时月按钮
    // 切换日
    dayRG() {
      this.$refs.chart1Ref.initChart()
      this.title2 = '日人工明细图'
    },
    monthRG() {
      this.$refs.chart1Ref.updateMonth()
      this.title2 = '日人工月极值图'

    },
    yearRG() {
      this.$refs.chart1Ref.updateYear()
      this.title2 = '日人工年极值图'
    },
    historyRG() {
      this.$refs.chart1Ref.updateHistoryYear()
      this.title2 = '日人工历年极值图'
    },
    // 切换月
    // 2-1.月明细图表
    monthRGM() {
      this.$refs.chart1Ref.monthRGM()
      this.title2 = '月人工明细图'
    },
    // 2-2 （月）年极值图
    yearRGM() {
      this.$refs.chart1Ref.yearRGM()
      this.title2 = '月人工年极值图'
    },
    // 2-3 (月) 历年
    historyRGM() {
      this.$refs.chart1Ref.historyRGM()
      this.title2 = '月人工历年极值图'
    },
    // 切换年
    // 3-1 年明细图
    yearRGY() {
      this.$refs.chart1Ref.yearRGY()
      this.title2 = '年人工年明细图'
    },
    // 3-2 历年
    historyRGY() {
      this.$refs.chart1Ref.historyRGY()
      this.title2 = '年人工历年极值图'
    },






    // 能源
    // 切换日
    // 1.明细图表
    dayNY() {
      this.$refs.chart5Ref.initChart()
      this.title3 = '日能源明细图'
    },
    // 2.月极值图表
    monthNY() {
      this.$refs.chart5Ref.updateMonth()
      this.title3 = '日能源月极值图'
    },
    // 3.年极值图表
    yearNY() {
      this.$refs.chart5Ref.updateYear()
      this.title3 = '日能源年极值图'
    },
    // 4.历年
    historyNY() {
      this.$refs.chart5Ref.updateHistoryYear()
      this.title3 = '日能源历年极值图'
    },
    // 切换月
    // 2-1.月明细图表
    monthNYM() {
      this.$refs.chart5Ref.monthNYM()
      this.title3 = '月能源明细图'
    },
    // 2-2 （月）年极值图
    yearNYM() {
      this.$refs.chart5Ref.yearNYM()
      this.title3 = '月能源年极值图'
    },
    // 2-3 (月) 历年
    historyNYM() {
      this.$refs.chart5Ref.historyNYM()
      this.title3 = '月能源历年极值图'
    },
    // 切换年
    // 3-1 年明细图
    yearNYY() {
      this.$refs.chart5Ref.yearNYY()
      this.title3 = '年能源年明细图'
    },
    // 3-2 历年
    historyNYY() {
      this.$refs.chart5Ref.historyNYY()
      this.title3 = '年能源历年极值图'
    },




    // 虫卵用量
    // 切换日
    // 1.明细图表
    daychonR() {
      this.$refs.chart3Ref.initChart()
      this.title4 = '日虫卵用量明细图'
    },
    // 2.月极值图表
    monthchonR() {
      this.$refs.chart3Ref.updateMonth()
      this.title4 = '日虫卵用量月极值图'
    },
    // 3.年极值图表
    yearchonR() {
      this.$refs.chart3Ref.updateYear()
      this.title4 = '日虫卵用量年极值图'
    },
    // 4.历年
    historychonR() {
      this.$refs.chart3Ref.updateHistoryYear()
      this.title4 = '日虫卵用量历年极值图'
    },
    // 切换月
    // 2-1.月明细图表
    monthchonRM() {
      this.$refs.chart3Ref.monthchonRM()
      this.title4 = '月虫卵用量明细图'
    },
    // 2-2（月）年极值图
    yearchonRM() {
      this.$refs.chart3Ref.yearchonRM()
      this.title4 = '月虫卵用量年极值图'
    },
    // 2-3（月）历年
    historychonRM() {
      this.$refs.chart3Ref.historychonRM()
      this.title4 = '月虫卵用量历年极值图'
    },
    // 切换年
    // 3-1 年明细图
    yearchonRY() {
      this.$refs.chart3Ref.yearchonRY()
      this.title4 = '年虫卵用量年明细图'
    },
    // 3-2 历年
    historychonRY() {
      this.$refs.chart3Ref.historychonRY()
      this.title4 = '年虫卵用量历年极值图'
    },

    // 除臭剂用量
    // 切换日
    // 1.明细图表
    daySmelly() {
      this.$refs.chart4Ref.initChart()
      this.title5 = '日除臭剂用量明细图'
    },
    // 2.月极值图表
    monthSmelly() {
      this.$refs.chart4Ref.updateMonth()
      this.title5 = '日除臭剂用量月极值图'
    },
    // 3.年极值图表
    yearSmelly() {
      this.$refs.chart4Ref.updateYear()
      this.title5 = '日除臭剂用量年极值图'
    },
    // 4.历年
    historySmelly() {
      this.$refs.chart4Ref.updateHistoryYear()
      this.title5 = '日除臭剂用量历年极值图'
    },
    // 切换月
    // 2-1.月明细图表
    monthSmellyM() {
      this.$refs.chart4Ref.monthSmellyM()
      this.title5 = '月除臭剂用量明细图'
    },
    // 2-2（月）年极值图
    yearSmellyM() {
      this.$refs.chart4Ref.yearSmellyM()
      this.title5 = '月除臭剂用量年极值图'
    },
    // 2-3（月）历年
    historySmellyM() {
      this.$refs.chart4Ref.historySmellyM()
      this.title5 = '月除臭剂用量历年极值图'
    },
    // 切换年
    // 3-1 年明细图
    yearSmellyY() {
      this.$refs.chart4Ref.yearSmellyY()
      this.title5 = '年除臭剂用量年明细图'
    },
    // 3-2 历年
    historySmellyY() {
      this.$refs.chart4Ref.historySmellyY()
      this.title5 = '年除臭剂用量历年极值图'
    },



    // 助剂用量
    // 切换日

    // 1.明细图表
    dayZJ() {
      this.$refs.chart2Ref.initChart()
      this.title6 = '日助剂用量明细图'
    },
    // 2.月极值图表
    monthZJ() {
      this.$refs.chart2Ref.updateMonth()
      this.title6 = '日助剂用量月极值图'
    },
    // 3.年极值图表
    yearZJ() {
      this.$refs.chart2Ref.updateYear()
      this.title6 = '日助剂用量年极值图'
    },
    // 4.历年
    historyZJ() {
      this.$refs.chart2Ref.updateHistoryYear()
      this.title6 = '日助剂用量历年极值图'
    },
    // 切换月
    // 2-1.月明细图表
    monthZJM() {
      this.$refs.chart2Ref.monthZJM()
      this.title6 = '月助剂用量明细图'
    },
    // 2-2（月）年极值图
    yearZJM() {
      this.$refs.chart2Ref.yearZJM()
      this.title6 = '月助剂用量年极值图'
    },
    // 2-3（月）历年
    historyZJM() {
      this.$refs.chart2Ref.historyZJM()
      this.title6 = '月助剂用量历年极值图'
    },
    // 切换年
    // 3-1 年明细图
    yearZJY() {
      this.$refs.chart2Ref.yearZJY()
      this.title6 = '年助剂用量年明细图'
    },
    // 3-2 历年
    historyZJY() {
      this.$refs.chart2Ref.historyZJY()
      this.title6 = '年助剂用量历年极值图'
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