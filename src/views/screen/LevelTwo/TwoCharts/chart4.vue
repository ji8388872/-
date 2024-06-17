<template>
  <div id="chart04">
    <!-- 雨水日志 -->
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart();

    this.bindResizeEvent();
  },
  updated() {
    this.chart.resize();
  },
  methods: {
    bindResizeEvent() {
      window.addEventListener("resize", this.resize);
    },
    resize() {
      this.chart.resize();
    },
    initChart() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart04"));
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
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
          bottom: "5",
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
              // interval: 100, // 每隔 100 个数据显示一次标签
            },
            axisPointer: {
              type: "shadow",
            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            // name: '角度',
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
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
            name: "单位工时产虫量",
            type: "bar",
            lineStyle: {
              color: "#0184d5",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [
              20, 30, 40, 20, 40, 50, 30, 60, 20, 40, 70, 50, 40, 50, 30, 40,
              30, 60, 40, 50, 30, 60, 20, 40, 20, 40, 70, 50, 50, 40,
            ],
          },
          {
            name: "单位工时产虫沙量",
            type: "bar",

            lineStyle: {
              color: "rgb(181, 45, 117)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [
              93, 94, 95, 97, 96, 91, 70, 96, 97, 96, 94, 65, 93, 96, 98, 95,
              92, 94, 95, 93, 99, 96, 92, 96, 90, 97, 96, 99, 94, 92,
            ],
          },
        ],
      };
      this.chart.setOption(option);
    },
    updateMonth() {
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
          left: "7%",
          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },
        xAxis: {
          data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
        },
        series: [
          {
            name: "产虫量(极大值)",
            type: "bar",
            stack: " Ad",

            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [70, 50, 40, 50, 30, 40, 30, 60, 40, 50, 30, 60],
          },
          {
            name: "产虫量(极小值)",
            type: "bar",
            stack: " Ad",

            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [15, 18, 13, 17, 12, 20, 14, 19, 11, 16, 10, 21],
          },
          {
            name: "产虫量(平均值)",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(145, 204, 117)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
            formatter: "{value} kg",

            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
          },

          {
            name: "产虫沙量(极大值)",
            type: "bar",
            stack: " Bd",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [70, 50, 40, 50, 30, 40, 30, 60, 40, 50, 30, 60],
          },
          {
            name: "产虫沙量(极小值)",
            type: "bar",
            stack: " Bd",

            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [25, 28, 23, 27, 22, 20, 14, 19, 11, 16, 10, 21],
          },
          {
            name: "产虫沙量(平均值)",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(199, 49, 128)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框

            formatter: "{value} kg",

            data: [64, 59, 54, 66, 77, 72, 68, 57, 61, 52, 48, 70],
          },
        ],
      });
    },

    updateYear() {
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
          left: "7%",
          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },
        xAxis: {
          data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
        },
        series: [
          {
            name: "产虫量(极大值)",
            type: "bar",
            stack: " Ad",

            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [70, 50, 40, 50, 30, 60, 40, 50, 30, 60],
          },
          {
            name: "产虫量(极小值)",
            type: "bar",
            stack: " Ad",

            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [15, 18, 13, 17, 12, 19, 11, 16, 10, 21],
          },
          {
            name: "产虫量(平均值)",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(145, 204, 117)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
            formatter: "{value} kg",

            data: [57, 61, 52, 48, 59, 54, 66, 77, 72, 68],
          },

          {
            name: "产虫沙量(极大值)",
            type: "bar",
            stack: " Bd",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [40, 50, 30, 40, 30, 60, 40, 50, 30, 60],
          },
          {
            name: "产虫沙量(极小值)",
            type: "bar",
            stack: " Bd",

            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [23, 27, 22, 20, 14, 19, 11, 16, 10, 21],
          },
          {
            name: "产虫沙量(平均值)",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(199, 49, 128)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框

            formatter: "{value} kg",

            data: [54, 66, 77, 72, 68, 57, 61, 52, 48, 70],
          },
        ],
      });
    },

    updateHistory() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart04"));
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
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
          bottom: "5",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: ["产虫量", "产虫沙量"],
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              // interval: 100, // 每隔 100 个数据显示一次标签
            },
            axisPointer: {
              type: "shadow",
            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            // name: '角度',
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
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
            name: "极大值",
            type: "bar",
            lineStyle: {
              color: "#0184d5",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [90, 92],
          },
          {
            name: "极小值",
            type: "bar",

            lineStyle: {
              color: "rgb(181, 45, 117)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [50, 60],
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(145, 204, 117)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
            formatter: "{value} kg",

            data: [77, 81],
          },
        ],
      };
      this.chart.setOption(option);
    },

    monthDanweiM() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart04"));
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
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
          bottom: "5",
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
              // interval: 100, // 每隔 100 个数据显示一次标签
            },
            axisPointer: {
              type: "shadow",
            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            // name: '角度',
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
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
            name: "单位工时产虫量",
            type: "bar",
            lineStyle: {
              color: "#0184d5",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [
              20, 30, 40, 20, 40, 50, 30, 60, 20, 40, 70, 50, 40, 50, 30, 40,
              30, 60, 40, 50, 30, 60, 20, 40, 20, 40, 70, 50, 50, 40,
            ],
          },
          {
            name: "单位工时产虫沙量",
            type: "bar",

            lineStyle: {
              color: "rgb(181, 45, 117)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [
              93, 94, 95, 97, 96, 91, 70, 96, 97, 96, 94, 65, 93, 96, 98, 95,
              92, 94, 95, 93, 99, 96, 92, 96, 90, 97, 96, 99, 94, 92,
            ],
          },
        ],
      };
      this.chart.setOption(option);
    },
    yearDanweiM() {
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
          left: "7%",
          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },
        xAxis: {
          data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
        },
        series: [
          {
            name: "产虫量(极大值)",
            type: "bar",
            stack: " Ad",

            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [70, 50, 40, 50, 30, 60, 40, 50, 30, 60],
          },
          {
            name: "产虫量(极小值)",
            type: "bar",
            stack: " Ad",

            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [15, 18, 13, 17, 12, 19, 11, 16, 10, 21],
          },
          {
            name: "产虫量(平均值)",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(145, 204, 117)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
            formatter: "{value} kg",

            data: [57, 61, 52, 48, 59, 54, 66, 77, 72, 68],
          },

          {
            name: "产虫沙量(极大值)",
            type: "bar",
            stack: " Bd",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [40, 50, 30, 40, 30, 60, 40, 50, 30, 60],
          },
          {
            name: "产虫沙量(极小值)",
            type: "bar",
            stack: " Bd",

            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [23, 27, 22, 20, 14, 19, 11, 16, 10, 21],
          },
          {
            name: "产虫沙量(平均值)",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(199, 49, 128)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框

            formatter: "{value} kg",

            data: [54, 66, 77, 72, 68, 57, 61, 52, 48, 70],
          },
        ],
      });
    },
    historyDanweiM() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart04"));
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
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
          bottom: "5",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: ["产虫量", "产虫沙量"],
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              // interval: 100, // 每隔 100 个数据显示一次标签
            },
            axisPointer: {
              type: "shadow",
            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            // name: '角度',
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
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
            name: "极大值",
            type: "bar",
            lineStyle: {
              color: "#0184d5",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [90, 92],
          },
          {
            name: "极小值",
            type: "bar",

            lineStyle: {
              color: "rgb(181, 45, 117)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [50, 60],
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(145, 204, 117)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
            formatter: "{value} kg",

            data: [77, 81],
          },
        ],
      };
      this.chart.setOption(option);
    },

    yearDanweiY() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart04"));
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
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
          bottom: "5",
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
              // interval: 100, // 每隔 100 个数据显示一次标签
            },
            axisPointer: {
              type: "shadow",
            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            // name: '角度',
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
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
            name: "单位工时产虫量",
            type: "bar",
            lineStyle: {
              color: "#0184d5",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [
              20, 30, 40, 20, 40, 50, 30, 60, 20, 40, 70, 50, 40, 50, 30, 40,
              30, 60, 40, 50, 30, 60, 20, 40, 20, 40, 70, 50, 50, 40,
            ],
          },
          {
            name: "单位工时产虫沙量",
            type: "bar",

            lineStyle: {
              color: "rgb(181, 45, 117)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [
              93, 94, 95, 97, 96, 91, 70, 96, 97, 96, 94, 65, 93, 96, 98, 95,
              92, 94, 95, 93, 99, 96, 92, 96, 90, 97, 96, 99, 94, 92,
            ],
          },
        ],
      };
      this.chart.setOption(option);
    },
    historyDanweiY() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart04"));
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
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
          bottom: "5",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: ["产虫量", "产虫沙量"],
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              // interval: 100, // 每隔 100 个数据显示一次标签
            },
            axisPointer: {
              type: "shadow",
            },
            // x轴颜色
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            // name: '角度',
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
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
            name: "极大值",
            type: "bar",
            lineStyle: {
              color: "#0184d5",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [90, 92],
          },
          {
            name: "极小值",
            type: "bar",

            lineStyle: {
              color: "rgb(181, 45, 117)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [50, 60],
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(145, 204, 117)",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
            formatter: "{value} kg",

            data: [77, 81],
          },
        ],
      };
      this.chart.setOption(option);
    },

  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
};
</script>
</script>

<style lang="less" scoped>
#chart04 {
  width: 100%;
  height: 100%;
}
</style>