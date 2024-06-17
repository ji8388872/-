<template>
  <div id="chart01"></div>
</template>
<script>
import * as echarts from "echarts";
import { mapState } from "vuex";
export default {
  data() {
    return {
      chart: null,
    };
  },
  created() {},
  mounted() {
    this.initChart();
    this.bindResizeEvent();
  },
  updated() {
    this.chart.resize();
  },
  watch: {
    yearTime(newVal, oldVal) {
      if (newVal) {
        const data = [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7,
          75.6, 82.2, 48.7, 18.8, 6.0, 2.3, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
          70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
        ];

        const shuffledData = this.shuffleArray(data);

        this.chart.setOption({
          series: [
            {
              data: shuffledData,
            },
          ],
        });
      }
    },
    monthTime(newVal, oldVal) {
      if (newVal) {
        const data = [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7,
          75.6, 82.2, 48.7, 18.8, 6.0, 2.3, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
          70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
        ];

        const shuffledData = this.shuffleArray(data);

        this.chart.setOption({
          series: [
            {
              data: shuffledData,
            },
          ],
        });
      }
    },
  },
  computed: {
    ...mapState("time", ["yearTime", "monthTime"]),
  },
  methods: {
    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    },
    initChart() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }

      const chartElement = document.querySelector("#chart01");
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error("指定的元素不存在，请检查选择器是否正确。");
      }
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#6a7985",
            },
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "号";
              },
            },
          },
        },

        legend: {
          top: "0%",
          right: "20%",
          show: false,
          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "2",
          top: "40",
          right: "2",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: Array.from({ length: 30 }, (v, i) => (i + 1).toString()),
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },
            },
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "(kg)",
            nameTextStyle: {
              color: "rgba(255,255,255,.9)",
            },
            axisTick: {
              show: false,
            },
            // min: 0,
            // max: 100,
            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} ",
            },
            // 修改分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
        series: [
          {
            name: "废弃物处理量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            lineStyle: {
              // 修改柱状图的颜色
              color: "rgb(145, 204, 117)",
            },

            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
            ],
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
            markLine: {
              data: [
                {
                  type: "average",
                  name: "均值",
                  label: {
                    position: "middle",
                    formatter: "均值：{c} ",
                    color: "#fff",
                  },
                },
              ],
            },
          },
        ],
      };

      this.chart.setOption(option);
    },
    updateMonth() {
      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "月";
              },
            },
          },
        },
        legend: {
          top: "0%",
          left: "10%",
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },
            },
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        series: [
          {
            name: "厨余处理量(极大值)",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            lineStyle: {
              // 修改柱状图的颜色
              color: "rgb(145, 204, 117)",
            },

            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            data: [
              10, 15, 18, 20, 25.6, 76.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3,
            ],
          },
          {
            name: "厨余处理量(极小值)",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            lineStyle: {
              // 修改柱状图的颜色
              color: "rgb(24, 144, 255)",
            },

            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            data: [6, 9, 4, 7, 2, 10, 3, 8, 1, 5, 10, 11],
            markPoint: null,
            markLine: null,
          },
          {
            name: "厨余处理量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            lineStyle: {
              // 修改柱状图的颜色
              color: "rgb(195, 109, 38)",
            },
            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "rgb(195, 109, 38)",
              borderColor: "rgba(195, 109, 38, .1)",
              borderWidth: 12,
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            data: [57, 61, 52, 48, 50, 64, 59, 54, 66, 57, 52, 58],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 日·历年
    updateEveryYear() {
      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
              },
            },
          },
        },

        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
          },
        ],
        series: [
          {
            name: "厨余处理量(最大值)",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            lineStyle: {
              // 修改柱状图的颜色
              color: "rgb(145, 204, 117)",
            },

            data: [18, 20, 25.6, 76.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3],
            markPoint: null,
            markLine: null,
          },
          {
            name: "厨余处理量(最小值)",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            lineStyle: {
              // 修改柱状图的颜色
              color: "rgb(24, 144, 255)",
            },

            data: [4, 7, 2, 10, 3, 8, 1, 5, 10, 11],
          },
          {
            name: "厨余处理量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            lineStyle: {
              // 修改柱状图的颜色
              color: "rgb(195, 109, 38)",
            },
            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "rgb(195, 109, 38)",
              borderColor: "rgba(195, 109, 38, .1)",
              borderWidth: 12,
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            data: [72, 68, 50, 34, 69, 54, 66, 57, 52, 58],
          },
        ],
      });
    },
    bindResizeEvent() {
      window.addEventListener("resize", this.resize);
    },
    resize() {
      this.chart.resize();
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
};
</script>

<style scoped>
#chart01 {
  width: 100%;
  height: 100%;
  padding: 0.0167rem;
}
</style>