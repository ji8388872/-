<template>
  <div id="chart04"></div>
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
    // 获取数据

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
          top: "0",
          left: "8%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },

        grid: {
          left: "2",
          top: "45",
          right: "2",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            name: "天",
            axisPointer: {
              type: "shadow",
            },

            data: Array.from({ length: 30 }, (v, i) => (i + 1).toString()),
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              // interval: 100, // 每隔 100 个数据显示一次标签
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
            name: "(%)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },

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
            name: "助剂2含水率",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [
              52, 85, 19, 73, 6, 97, 41, 30, 63, 14, 88, 10, 58, 75, 3, 45, 91,
              22, 68, 50, 94, 37, 81, 29, 55, 12, 67, 99, 2, 77,
            ],
          },
          {
            name: "助剂2比例",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
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
        xAxis: {
          data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
        },
        series: [
          {
            name: "含水率(最大值)",
            type: "bar",
            stack: "Ad",
            data: [96, 88, 85, 91, 98, 92, 89, 84, 90, 95, 97, 93],
          },
          {
            name: "含水率(最小值)",
            type: "bar",
            stack: "Ad",
            data: [5, 9, 3, 7, 2, 10, 4, 8, 1, 6, 10, 15],
          },
          {
            name: "含水率(平均值)",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(19, 206, 102)",
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
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [58, 62, 53, 49, 71, 65, 60, 55, 67, 78, 73, 69],
          },

          {
            name: "比例(最大值)",
            type: "bar",
            stack: "Bd",
            data: [96, 88, 85, 91, 98, 92, 89, 84, 90, 95, 97, 93],
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
          },
          {
            name: "比例(最小值)",
            type: "bar",
            stack: "Bd",
            data: [15, 19, 13, 17, 22, 10, 24, 8, 21, 6, 10, 15],
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
          },
          {
            name: "比例(平均值)",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(19, 206, 102)",
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

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [58, 62, 53, 49, 71, 65, 60, 55, 67, 78, 73, 69],
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
        xAxis: {
          data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
        },
        series: [
          {
            name: "含水率(最大值)",
            type: "bar",
            stack: "Ad",
            data: [85, 91, 98, 92, 89, 84, 90, 95, 97, 93],
          },
          {
            name: "含水率(最小值)",
            type: "bar",
            stack: "Ad",
            data: [3, 7, 2, 10, 4, 8, 1, 6, 10, 15],
          },
          {
            name: "含水率(平均值)",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(19, 206, 102)",
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
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [53, 49, 71, 65, 60, 55, 67, 78, 73, 69],
          },

          {
            name: "比例(最大值)",
            type: "bar",
            stack: "Bd",
            data: [85, 91, 98, 92, 89, 84, 90, 95, 97, 93],
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
          },
          {
            name: "比例(最小值)",
            type: "bar",
            stack: "Bd",
            data: [13, 17, 22, 10, 24, 8, 21, 6, 10, 15],
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
          },
          {
            name: "比例(平均值)",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(19, 206, 102)",
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

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [53, 49, 71, 65, 60, 55, 67, 78, 73, 69],
          },
        ],
      });
    },

    updateHistoryYear() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }

      const chartElement = document.querySelector("#chart04");
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
          left: "8%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },
        grid: {
          left: "5",
          top: "45",
          right: "5",
          bottom: "3",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            data: ["含水率", "比例"],
            axisPointer: {
              type: "shadow",
            },
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
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "(%)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },

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
            name: "最大值",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            data: [90, 89],
          },
          {
            name: "最小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            data: [74, 77],
          },
          {
            name: "平均值",
            type: "line",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
            },

            data: [81, 85],
          },
        ],
      });
    },

    monthZJ2M() {
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
          top: "0",
          left: "8%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },

        grid: {
          left: "2",
          top: "45",
          right: "2",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            name: "天",
            axisPointer: {
              type: "shadow",
            },

            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              // interval: 100, // 每隔 100 个数据显示一次标签
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
            name: "(%)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },

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
            name: "助剂2含水率",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [
              52, 85, 19, 73, 6, 97, 41, 30, 63, 14, 88, 10, 58, 75, 3, 45, 91,
              22, 68, 50, 94, 37, 81, 29, 55, 12, 67, 99, 2, 77,
            ],
          },
          {
            name: "助剂2比例",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
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
    yearZJ2M() {
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
        xAxis: {
          data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
        },
        series: [
          {
            name: "含水率(最大值)",
            type: "bar",
            stack: "Ad",
            data: [85, 91, 98, 92, 89, 84, 90, 95, 97, 93],
          },
          {
            name: "含水率(最小值)",
            type: "bar",
            stack: "Ad",
            data: [3, 7, 2, 10, 4, 8, 1, 6, 10, 15],
          },
          {
            name: "含水率(平均值)",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(19, 206, 102)",
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
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [53, 49, 71, 65, 60, 55, 67, 78, 73, 69],
          },

          {
            name: "比例(最大值)",
            type: "bar",
            stack: "Bd",
            data: [85, 91, 98, 92, 89, 84, 90, 95, 97, 93],
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
          },
          {
            name: "比例(最小值)",
            type: "bar",
            stack: "Bd",
            data: [13, 17, 22, 10, 24, 8, 21, 6, 10, 15],
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
          },
          {
            name: "比例(平均值)",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(19, 206, 102)",
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

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [53, 49, 71, 65, 60, 55, 67, 78, 73, 69],
          },
        ],
      });
    },
    historyZJ2M() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }

      const chartElement = document.querySelector("#chart04");
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
          left: "8%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },
        grid: {
          left: "5",
          top: "45",
          right: "5",
          bottom: "3",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            data: ["含水率", "比例"],
            axisPointer: {
              type: "shadow",
            },
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
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "(%)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },

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
            name: "最大值",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            data: [90, 89],
          },
          {
            name: "最小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            data: [74, 77],
          },
          {
            name: "平均值",
            type: "line",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
            },

            data: [81, 85],
          },
        ],
      });
    },

    yearZJ2Y() {
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
          top: "0",
          left: "8%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },

        grid: {
          left: "2",
          top: "45",
          right: "2",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            name: "天",
            axisPointer: {
              type: "shadow",
            },

            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
            axisLabel: {
              //文本颜色
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
              // interval: 100, // 每隔 100 个数据显示一次标签
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
            name: "(%)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },

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
            name: "助剂2含水率",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [
              52, 85, 19, 73, 6, 97, 41, 30, 63, 14, 88, 10, 58, 75, 3, 45, 91,
              22, 68, 50, 94, 37, 81, 29, 55, 12, 67, 99, 2, 77,
            ],
          },
          {
            name: "助剂2比例",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
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
    historyZJ2Y() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }

      const chartElement = document.querySelector("#chart04");
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
          left: "8%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },
        grid: {
          left: "5",
          top: "45",
          right: "5",
          bottom: "3",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            data: ["含水率", "比例"],
            axisPointer: {
              type: "shadow",
            },
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
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "(%)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },

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
            name: "最大值",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            data: [90, 89],
          },
          {
            name: "最小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            data: [74, 77],
          },
          {
            name: "平均值",
            type: "line",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
            },

            data: [81, 85],
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


<style lang="less" scoped>
#chart04 {
  width: 100%;
  height: 100%;
}
</style>
