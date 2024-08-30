<template>
  <div id="chart06"></div>
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
  created() { },
  mounted() {
    this.initChart();
    this.bindResizeEvent();
  },
  updated() {
    this.chart.resize();
  },
  watch: {
    yearTime(newVal, oldVal) {
      console.log('1111111', this.y);

      if (newVal && this.y) {
        const xData = ['2024', '2023', '2022', '2021', '近三年'];
        const data = [
          48.7, 80.7, 20.9, 48.7, 68.8
        ];
        this.chart.setOption({
          xAxis: {
            data: xData,
          },
          series: [
            {
              data: data,
            },
          ],
          markLine: {
            data: [
              {
                yAxis: 80,
              },
              {
                yAxis: 60,
              },
            ]
          }
        });
      }
    },
    monthTime(newVal, oldVal) {
      console.log('2222222', this.m);

      if (newVal && this.m) {
        const xData = ['2024-6', '2024-5', '2023-6'];
        const data = [
          70.7, 25.9, 48.7
        ];
        this.chart.setOption({
          xAxis: {
            data: xData,
          },
          series: [
            {
              data: data,
            },
          ],
          markLine: {
            data: [
              {
                yAxis: 70,
              },
              {
                yAxis: 40,
              },
            ]
          }
        });
      }
    },
    day(newVal, oldVal) {
      if (newVal && this.d) {
        console.log('3333333', this.d);

        const xData = ['2024-8-29', '2024-8-28', '2023-8-29', '2024-7', '2023-8'];
        const data = [
          38.7, 85.7, 20.9, 48.7, 68.8
        ];
        this.chart.setOption({
          xAxis: {
            data: xData,
          },
          series: [
            {
              data: data,
            },
          ],
          markLine: {
            data: [
              {
                yAxis: 80,
              },
              {
                yAxis: 60,
              },
            ]
          }
        });
      }
    },
  },
  computed: {
    ...mapState("time", ["yearTime", "monthTime", "day", 'y', 'm', 'd']),
  },
  methods: {
    initChart() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }

      const chartElement = document.querySelector("#chart06");
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error("指定的元素不存在，请检查选择器是否正确。");
      }
      const option = {
        // 配置提示框组件，显示在坐标轴触发时
        tooltip: {
          // 当鼠标悬停在坐标轴上时，触发提示框
          trigger: "axis",
          // 配置坐标轴指示器     十字准星
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#6a7985",
            },
            // 配置指示器标签的样式
            label: {
              backgroundColor: "#6a7985", // 标签的背景颜色
              formatter: function (params) {
                return params.value;
              },
            },
          },
        },
        // 配置图表网格的位置和尺寸
        grid: {
          left: "5",
          top: "30",
          right: "5",
          bottom: "3",
          containLabel: true, // 网格区域是否包含坐标轴的标签
        },

        // 配置x轴
        xAxis: [
          {
            type: "category", // x轴类型为类目型
            data: ['2024-8-29', '2024-8-28', '2023-8-29', '2024-7', '2023-8'], // x轴数据
            axisLabel: {
              color: "rgba(255,255,255,.6)", // x轴标签文本颜色
              fontSize: 15, // x轴标签文本字体大小
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)", // x轴轴线颜色
              },
            },
            axisPointer: {
              type: "shadow", // 设置指示器类型为阴影
            },
          },
        ],

        // 配置y轴
        yAxis: [
          {
            type: "value", // y轴类型为数值型
            name: "(kg/日)", // y轴名称
            nameTextStyle: {
              color: "rgba(255,255,255,.9)", // y轴名称文本颜色
            },
            axisTick: {
              show: false, // 不显示y轴刻度线
            },
            interval: 20, // y轴刻度间隔

            axisLabel: {
              color: "rgba(255,255,255,.6)", // y轴标签文本颜色
              fontSize: 15, // y轴标签文本字体大小
              formatter: "{value} ", // y轴标签文本格式
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)", // y轴分割线颜色
              },
            },
          },
        ],

        // 配置数据系列
        series: [
          {
            name: "处理量", // 数据系列名称
            type: "bar", // 数据系列类型为柱状图
            barWidth: '50%', // 柱状图宽度为50%

            // 配置数据系列的提示框
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg/日"; // 格式化提示框中显示的值，单位为kg
              },
            },

            lineStyle: {
              color: "rgb(145, 204, 117)", // 设置柱状图的颜色
            },

            data: [
              70.7, 75.6, 82.2, 48.7, 18.8 // 数据系列的具体值
            ],

            // 配置标记点（例如最大值和最小值）
            markPoint: {
              data: [
                { type: "max", name: "Max" }, // 标记最大值
                { type: "min", name: "Min" }, // 标记最小值
              ],
            },

            // 配置标记线（标准值上限和标准值下限）
            markLine: {
              data: [
                {
                  yAxis: 68, // 标准值上限
                  name: "标准值上限",
                  label: {
                    position: "insideEndTop", // 标记线标签的位置为中间
                    align: 'right', // 标签文字对齐到右边
                    verticalAlign: 'bottom', // 标签垂直对齐到线的上方
                    formatter: "标准值上限：{c} kg/日", // 格式化标记线标签文本
                    color: "#fff", // 标记线标签文本颜色
                  },
                  lineStyle: {
                    color: "red", // 标记线颜色
                    type: "dashed", // 标记线样式为虚线
                  },
                },
                {
                  yAxis: 48, // 标准值下限
                  name: "标准值下限",
                  label: {
                    position: "insideEndTop", // 标签放置在标记线末端的上方
                    align: 'right', // 标签文字对齐到右边
                    verticalAlign: 'bottom', // 标签垂直对齐到线的上方
                    formatter: "标准值下限：{c} kg/日", // 格式化标记线标签文本
                    color: "#fff", // 标记线标签文本颜色
                  },
                  lineStyle: {
                    color: "red", // 标记线颜色
                    type: "dashed", // 标记线样式为虚线
                  },
                },
              ],
            },
          },
        ],
      };

      this.chart.setOption(option);
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
#chart06 {
  width: 100%;
  height: 100%;
  padding: 0.0167rem;
}
</style>
