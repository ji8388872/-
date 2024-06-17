<template>
  <div id="chart01"></div>
</template>
<script>
import * as echarts from "echarts";
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
  methods: {
    // 虫入库量
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

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫入库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
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
                    formatter: "均值：{c} kg",
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
    // 虫入库量（月）
    monthChonIn() {
      this.chart.setOption({
        tooltip: {
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
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
          },
        ],
        series: [
          {
            name: "虫入库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [
              82.2, 88.7, 88.8, 86.0, 82.3, 72.6, 75.9, 79.0, 76.4, 78.7, 80.7,
              79.6,
            ],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫入库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [
              2.6, 5.9, 9.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2,
            ],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫入库量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [
              52.6, 52.9, 59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6,
              52.2,
            ],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫入库量（年）
    yearChonIn() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          },
        ],
        series: [
          {
            name: "虫入库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88.8, 86.0, 82.3, 72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫入库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫入库量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫入库量（历年）
    historyChonIn() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫入库量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫入库量明细图
    monthChonInM() {
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
                return params.value + "月";
              },
            },
          },
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
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
        yAxis: [
          {
            type: "value",
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫入库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
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
                    formatter: "均值：{c} kg",
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
    // 月虫入库量年极值图
    yearChonInM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          },
        ],
        series: [
          {
            name: "虫入库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88.8, 86.0, 82.3, 72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫入库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫入库量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫入库量历年极值图
    historyChonInM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫入库量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 年虫入库量年明细图
    yearChonInY() {
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
                return params.value + "年";
              },
            },
          },
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫入库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
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
                    formatter: "均值：{c} kg",
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
    // 年虫入库量历年极值图
    historyChonInY() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫入库量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },

    // 虫出库量
    updateChonOut() {
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

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫出库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            // 设置柱子的颜色
            itemStyle: {
              color: "rgb(19, 206, 102)", // 这里使用了一个示例颜色，你可以根据需要替换成任何你想要的颜色。
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
                    formatter: "均值：{c} kg",
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
    // 虫出库量（月）
    monthChonOut() {
      this.chart.setOption({
        tooltip: {
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
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
          },
        ],
        series: [
          {
            name: "虫出库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫出库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [15, 18, 13, 17, 12, 20, 14, 19, 11, 16, 10, 21],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫出库量(平均值)",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫出库量（年）
    yearChonOut() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          },
        ],
        series: [
          {
            name: "虫出库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88.8, 86.0, 82.3, 72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫出库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫出库量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫出库量（历年）
    historyChonOut() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫出库量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫出库量明细图
    monthChonOutM() {
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
                return params.value + "月";
              },
            },
          },
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
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
        yAxis: [
          {
            type: "value",
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫出库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            // 设置柱子的颜色
            itemStyle: {
              color: "rgb(19, 206, 102)", // 这里使用了一个示例颜色，你可以根据需要替换成任何你想要的颜色。
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
                    formatter: "均值：{c} kg",
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
    // 月虫出库量年极值图
    yearChonOutM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          },
        ],
        series: [
          {
            name: "虫出库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88.8, 86.0, 82.3, 72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫出库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫出库量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫出库量历年极值图
    historyChonOutM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫出库量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 年虫出库量年明细图
    yearChonOutY() {
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
                return params.value + "年";
              },
            },
          },
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫出库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            // 设置柱子的颜色
            itemStyle: {
              color: "rgb(19, 206, 102)", // 这里使用了一个示例颜色，你可以根据需要替换成任何你想要的颜色。
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
                    formatter: "均值：{c} kg",
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
    // 年虫出库量历年极值图
    historyChonOutY() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫出库量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },

    // 虫库存量
    updateChon() {
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

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫库存量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            itemStyle: {
              color: "rgb(204, 119, 41)", // 这里使用了一个示例颜色，你可以根据需要替换成任何你想要的颜色。
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
                    formatter: "均值：{c} kg",
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
    // 虫库存量（月）
    monthChon() {
      this.chart.setOption({
        tooltip: {
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
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
          },
        ],
        series: [
          {
            name: "虫库存量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫库存量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [15, 18, 13, 17, 12, 20, 14, 19, 11, 16, 10, 21],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫库存量(平均值)",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫库存量（年）
    yearChon() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          },
        ],
        series: [
          {
            name: "虫库存量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88.8, 86.0, 82.3, 72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫库存量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫库存量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫库存量（历年）
    historyChon() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫库存量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫库存量明细图
    monthChonM() {
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
                return params.value + "月";
              },
            },
          },
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
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
        yAxis: [
          {
            type: "value",
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫库存量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            itemStyle: {
              color: "rgb(204, 119, 41)", // 这里使用了一个示例颜色，你可以根据需要替换成任何你想要的颜色。
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
                    formatter: "均值：{c} kg",
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
    // 月虫库存量年极值图
    yearChonM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          },
        ],
        series: [
          {
            name: "虫库存量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88.8, 86.0, 82.3, 72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫库存量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫库存量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫库存量历年极值图
    historyChonM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫库存量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 年虫库存量年明细图
    yearChonY() {
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
                return params.value + "年";
              },
            },
          },
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫库存量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            itemStyle: {
              color: "rgb(204, 119, 41)", // 这里使用了一个示例颜色，你可以根据需要替换成任何你想要的颜色。
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
                    formatter: "均值：{c} kg",
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
    // 年虫库存量历年极值图
    historyChonY() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫库存量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },

    // 虫沙入库量
    updateChonSha_in() {
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

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫沙入库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
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
                    formatter: "均值：{c} kg",
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
    // 虫沙入库量（月）
    monthChonSha_in() {
      this.chart.setOption({
        tooltip: {
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
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
          },
        ],
        series: [
          {
            name: "虫沙入库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙入库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            itemStyle: {
              color: "rgb(203, 109, 46)",
            },
            data: [15, 18, 13, 17, 12, 20, 14, 19, 11, 16, 10, 21],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙入库量(平均值)",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫沙入库量（年）
    yearChonSha_in() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          },
        ],
        series: [
          {
            name: "虫沙入库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88.8, 86.0, 82.3, 72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙入库量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫沙入库量（历年）
    historyChonSha_in() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫沙入库量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫沙入库量明细图
    monthChonSha_inM() {
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
                return params.value + "月";
              },
            },
          },
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
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
        yAxis: [
          {
            type: "value",

            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫沙入库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
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
                    formatter: "均值：{c} kg",
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
    // 月虫沙入库量年极值图
    yearChonSha_inM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          },
        ],
        series: [
          {
            name: "虫沙入库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88.8, 86.0, 82.3, 72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙入库量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫沙入库量历年极值图
    historyChonSha_inM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫沙入库量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 年虫沙入库量年明细图
    yearChonSha_inY() {
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
                return params.value + "年";
              },
            },
          },
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
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

            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫沙入库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
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
                    formatter: "均值：{c} kg",
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
    // 年虫沙入库量历年极值图
    historyChonSha_inY() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫沙入库量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },

    // 虫沙出库量
    updateChonSha_out() {
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

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫出库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
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
                    formatter: "均值：{c} kg",
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
    // 虫沙出库量（月）
    monthChonSha_out() {
      this.chart.setOption({
        tooltip: {
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
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
          },
        ],
        series: [
          {
            name: "虫沙出库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙出库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [15, 18, 13, 17, 12, 20, 14, 19, 11, 16, 10, 21],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙出库量(平均值)",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫沙出库量（年）
    yearChonSha_out() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          },
        ],
        series: [
          {
            name: "虫沙出库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88.8, 86.0, 82.3, 72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙出库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙出库量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫沙出库量（历年）
    historyChonSha_out() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫沙出库量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫沙出库量明细图
    monthChonSha_outM() {
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
                return params.value + "月";
              },
            },
          },
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
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
        yAxis: [
          {
            type: "value",
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫出库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
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
                    formatter: "均值：{c} kg",
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
    // 月虫沙出库量年极值图
    yearChonSha_outM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          },
        ],
        series: [
          {
            name: "虫沙出库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88.8, 86.0, 82.3, 72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙出库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙出库量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫沙出库量历年极值图
    historyChonSha_outM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫沙出库量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 年虫沙出库量年明细图
    yearChonSha_outY() {
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
                return params.value + "年";
              },
            },
          },
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫出库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
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
                    formatter: "均值：{c} kg",
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
    // 年虫沙出库量历年极值图
    historyChonSha_outY() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫沙出库量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },

    // 虫沙库存量
    updateChonSha() {
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

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫沙库存量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
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
                    formatter: "均值：{c} kg",
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
    // 虫沙库存量（月）
    monthChonSha() {
      this.chart.setOption({
        tooltip: {
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
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
          },
        ],
        series: [
          {
            name: "虫沙库存量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙库存量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [15, 18, 13, 17, 12, 20, 14, 19, 11, 16, 10, 21],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙库存量(平均值)",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫沙库存量（年）
    yearChonSha() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          },
        ],
        series: [
          {
            name: "虫沙库存量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88.8, 86.0, 82.3, 72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙库存量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙库存量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫沙库存量（历年）
    historyChonSha() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫沙库存量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫沙库存量明细图
    monthChonShaM() {
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
                return params.value + "月";
              },
            },
          },
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
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
        yAxis: [
          {
            type: "value",
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫沙库存量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
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
                    formatter: "均值：{c} kg",
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
    // 月虫沙库存量年极值图
    yearChonShaM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
          },
        ],
        series: [
          {
            name: "虫沙库存量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88.8, 86.0, 82.3, 72.6, 75.9, 79.0, 76.4, 78.7, 80.7, 79.6],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙库存量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 26.4, 48.7, 18.8, 6.0, 2.3, 28.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙库存量(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 56.4, 48.7, 58.8, 60.0, 52.3, 58.7, 60.7, 65.6, 52.2],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫沙库存量历年极值图
    historyChonShaM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫沙库存量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 年虫沙库存量年明细图
    yearChonShaY() {
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
                return params.value + "年";
              },
            },
          },
        },

        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫沙库存量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
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
                    formatter: "均值：{c} kg",
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
    // 年虫沙库存量历年极值图
    historyChonShaY() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫沙库存量", "总计"],
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [88, 88],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [29.0, 29.0],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [59.0, 59.0],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },

    // 虫出库去向
    updateOutDirection() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      const chartElement = document.querySelector("#chart01");
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error("指定的元素不存在，请检查选择器是否正确。");
      }
      this.chart.setOption({
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

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
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
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫出库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },
            // 设置柱子的颜色
            itemStyle: {
              color: "#ff5722", // 这里使用了一个示例颜色，你可以根据需要替换成任何你想要的颜色。
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
            ],
          },
        ],
      });
    },
    // 虫出库去向（月）
    monthChonOutDirection() {
      this.chart.setOption({
        tooltip: {
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
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
            },
          },
        ],
        series: [
          {
            name: "虫出库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫出库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [15, 18, 13, 17, 12, 20, 14, 19, 11, 16, 10, 21],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫出库量(平均值)",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫出库去向（年）
    yearChonOutDirection() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
            },
          },
        ],
        series: [
          {
            name: "虫出库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫出库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [15, 18, 13, 17, 12, 20, 14, 19, 11, 16, 10, 21],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫出库量(平均值)",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫出库去向（历年）
    historyChonOutDirection() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫出库去向", "总计"],
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
            },
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [98, 98],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [15, 15],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [57, 57],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫出库去向明细图
    monthChonOutDirectionM() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      const chartElement = document.querySelector("#chart01");
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error("指定的元素不存在，请检查选择器是否正确。");
      }
      this.chart.setOption({
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
                return params.value + "月";
              },
            },
          },
        },
        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
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
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫出库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },
            // 设置柱子的颜色
            itemStyle: {
              color: "#ff5722", // 这里使用了一个示例颜色，你可以根据需要替换成任何你想要的颜色。
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
            ],
          },
        ],
      });
    },
    // 月虫出库去向年极值图
    yearChonOutDirectionM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
            },
          },
        ],
        series: [
          {
            name: "虫出库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫出库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [15, 18, 13, 17, 12, 20, 14, 19, 11, 16, 10, 21],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫出库量(平均值)",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫出库去向历年极值图
    historyChonOutDirectionM() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫出库去向", "总计"],
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
            },
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [98, 98],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [15, 15],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [57, 57],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 年虫出库去向年明细图
    yearChonOutDirectionY() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      const chartElement = document.querySelector("#chart01");
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error("指定的元素不存在，请检查选择器是否正确。");
      }
      this.chart.setOption({
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
                return params.value + "年";
              },
            },
          },
        },
        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫出库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },
            // 设置柱子的颜色
            itemStyle: {
              color: "#ff5722", // 这里使用了一个示例颜色，你可以根据需要替换成任何你想要的颜色。
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
            ],
          },
        ],
      });
    },
    // 年虫出库去向历年极值图
    historyChonOutDirectionY() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫出库去向", "总计"],
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
            },
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [98, 98],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [15, 15],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫出库去向：怀柔";
              },
            },

            data: [57, 57],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },

    //虫沙出库去向
    updateOutDirection2() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      const chartElement = document.querySelector("#chart01");
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error("指定的元素不存在，请检查选择器是否正确。");
      }
      this.chart.setOption({
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

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
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
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫沙出库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },
            // 设置柱子的颜色
            itemStyle: {
              color: "rgb(48, 165, 167)", // 这里使用了一个示例颜色，你可以根据需要替换成任何你想要的颜色。
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
            ],
          },
        ],
      });
    },
    //虫沙出库去向（月）
    monthChonOutDirection2() {
      this.chart.setOption({
        tooltip: {
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
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
            },
          },
        ],
        series: [
          {
            name: "虫沙出库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙出库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [15, 18, 13, 17, 12, 20, 14, 19, 11, 16, 10, 21],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙出库量(平均值)",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    //  //虫沙出库去向（年）
    yearChonOutDirection2() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
            },
          },
        ],
        series: [
          {
            name: "虫沙出库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙出库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [15, 18, 13, 17, 12, 20, 14, 19, 11, 16, 10, 21],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙出库量(平均值)",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 虫沙出库去向（历年）
    historyChonOutDirection2() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫沙出库去向", "总计"],
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
            },
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [98, 98],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [15, 15],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [57, 57],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫沙出库去向明细图
    monthChonOutDirection2M() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      const chartElement = document.querySelector("#chart01");
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error("指定的元素不存在，请检查选择器是否正确。");
      }
      this.chart.setOption({
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
                return params.value + "月";
              },
            },
          },
        },
        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
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
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫沙出库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },
            // 设置柱子的颜色
            itemStyle: {
              color: "rgb(48, 165, 167)", // 这里使用了一个示例颜色，你可以根据需要替换成任何你想要的颜色。
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
            ],
          },
        ],
      });
    },
    // 月虫沙出库去向年极值图
    yearChonOutDirection2M() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "年";
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
            data: Array.from({ length: 10 }, (v, i) => (i + 2020).toString()),
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
            },
          },
        ],
        series: [
          {
            name: "虫沙出库量(极大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙出库量(极小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [15, 18, 13, 17, 12, 20, 14, 19, 11, 16, 10, 21],
            markPoint: null,
            markLine: null,
          },
          {
            name: "虫沙出库量(平均值)",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 月虫沙出库去向历年极值图
    historyChonOutDirection2M() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫沙出库去向", "总计"],
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
            },
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [98, 98],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [15, 15],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [57, 57],
            markPoint: null,
            markLine: null,
          },
        ],
      });
    },
    // 年虫沙出库去向年明细图
    yearChonOutDirection2Y() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      const chartElement = document.querySelector("#chart01");
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error("指定的元素不存在，请检查选择器是否正确。");
      }
      this.chart.setOption({
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
                return params.value + "年";
              },
            },
          },
        },
        legend: {
          top: "0%",
          right: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15,
          },
        },
        grid: {
          left: "10",
          top: "40",
          right: "10",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
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
            // name: '命中率',
            axisTick: {
              show: false,
            },

            interval: 20,

            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} kg",
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
            name: "虫沙出库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },
            // 设置柱子的颜色
            itemStyle: {
              color: "rgb(48, 165, 167)", // 这里使用了一个示例颜色，你可以根据需要替换成任何你想要的颜色。
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
              75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
            ],
          },
        ],
      });
    },
    // 年虫沙出库去向年历年极值图
    historyChonOutDirection2Y() {
      this.chart.setOption({
        tooltip: {
          axisPointer: {
            label: {
              backgroundColor: "#6a7985",
              formatter: function (params) {
                return params.value + "历年";
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
            data: ["虫沙出库去向", "总计"],
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              formatter: function (params) {
                return params + "\n怀柔\n白长亮";
              },
            },
          },
        ],
        series: [
          {
            name: "极大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [98, 98],
            markPoint: null,
            markLine: null,
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [15, 15],
            markPoint: null,
            markLine: null,
          },
          {
            name: "平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg" + "\n虫沙出库去向：怀柔";
              },
            },

            data: [57, 57],
            markPoint: null,
            markLine: null,
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