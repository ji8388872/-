<template>
  <div id="chart05"></div>
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
    initChart() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart05"));

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
          left: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },
        grid: {
          left: "10",
          top: "45",
          right: "10",
          bottom: "3",

          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
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
            name: "助剂3菌落总数",
            // min: 0,
            // max: 200,
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
          {
            type: "value",

            name: "助剂3比例",

            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} %",
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
            name: "助剂3菌落总数",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8,
              6.0, 2.3, 182.2, 48.7, 18.8, 6.0, 2.3, 100,
            ],
          },
          {
            name: "助剂3比例",
            type: "line",
            // smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: "rgb(92, 147, 16)",
            },
            smooth: true,

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
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: true,
            yAxisIndex: 1,
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
          right: "7%",
        },
        xAxis: {
          type: "category",
          data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
        },
        yAxis: [
          {
            type: "value",
            name: "菌落总数",
            nameLocation: "end",
            nameGap: 10,
            // min: 0,
            // max: 200,
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
          {
            type: "value",

            name: "比例",
            nameGap: 10,

            interval: 20,
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} %",
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
          // 柱状图

          {
            name: "菌落极大值",
            type: "bar",
            stack: "Ad",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [198, 188, 183, 191, 197, 192, 189, 184, 190, 195, 197, 193],
          },
          {
            name: "菌落极小值",
            type: "bar",
            stack: "Ad",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [10, 20, 5, 30, 0, 15, 25, 35, 40, 45, 50, 55],
          },
          {
            name: "菌落平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [108, 112, 103, 99, 121, 115, 110, 105, 117, 128, 123, 119],
          },

          {
            name: "比例极大值",
            type: "bar",
            stack: "Bd",
            lineStyle: {
              width: 2,
              color: "rgb(92, 147, 16)",
            },

            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [98, 88, 86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
          },
          {
            name: "比例极小值",
            type: "bar",
            stack: "Bd",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [6, 9, 4, 7, 2, 10, 3, 8, 1, 5, 0, 11],
          },
          {
            name: "比例平均值",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(24, 144, 255)",
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
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: true,
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [57, 61, 52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
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
          right: "7%",
        },
        xAxis: {
          type: "category",
          data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
        },
        yAxis: [
          {
            type: "value",
            name: "菌落总数",
            nameLocation: "end",
            nameGap: 10,

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
          {
            type: "value",

            name: "比例",
            nameGap: 10,
            // min: 0,
            // max: 100,
            interval: 20,
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} %",
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
          // 柱状图

          {
            name: "菌落极大值",
            type: "bar",
            stack: "Ad",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [183, 191, 197, 192, 189, 184, 190, 195, 197, 193],
          },
          {
            name: "菌落极小值",
            type: "bar",
            stack: "Ad",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [5, 30, 0, 15, 25, 35, 40, 45, 50, 55],
          },
          {
            name: "菌落平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [103, 99, 121, 115, 110, 105, 117, 128, 123, 119],
          },

          {
            name: "比例极大值",
            type: "bar",
            stack: "Bd",
            lineStyle: {
              width: 2,
              color: "rgb(92, 147, 16)",
            },

            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
          },
          {
            name: "比例极小值",
            type: "bar",
            stack: "Bd",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [4, 7, 2, 10, 3, 8, 1, 5, 0, 11],
          },
          {
            name: "比例平均值",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(24, 144, 255)",
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

            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
          },
        ],
      });
    },

    updateHistoryYear() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart05"));

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
                return params.value + "历年";
              },
            },
          },
        },
        legend: {
          top: "0%",
          left: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },
        grid: {
          left: "10",
          top: "45",
          right: "10",
          bottom: "3",

          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["菌落总数", "比例"],
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
            name: "助剂3菌落总数",
            // min: 0,
            // max: 200,
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
          {
            type: "value",

            name: "助剂3比例",

            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} %",
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
            tooltip: {
              valueFormatter: function (value) {
                return value + " ";
              },
            },
            data: [180, 90],
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " ";
              },
            },
            data: [80, 40],
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(92, 147, 16)",
            },
            smooth: true,

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
                return value + " ";
              },
            },
            data: [152, 85],
          },
        ],
      };

      this.chart.setOption(option);
    },

    monthZJ3M() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart05"));

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
          left: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },
        grid: {
          left: "10",
          top: "45",
          right: "10",
          bottom: "3",

          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
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
            name: "助剂3菌落总数",
            // min: 0,
            // max: 200,
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
          {
            type: "value",

            name: "助剂3比例",

            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} %",
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
            name: "助剂3菌落总数",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8,
              6.0, 2.3, 182.2, 48.7, 18.8, 6.0, 2.3, 100,
            ],
          },
          {
            name: "助剂3比例",
            type: "line",
            // smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: "rgb(92, 147, 16)",
            },
            smooth: true,

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
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: true,
            yAxisIndex: 1,
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
        ],
      };

      this.chart.setOption(option);
    },
    yearZJ3M() {
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
          right: "7%",
        },
        xAxis: {
          type: "category",
          data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
        },
        yAxis: [
          {
            type: "value",
            name: "菌落总数",
            nameLocation: "end",
            nameGap: 10,

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
          {
            type: "value",

            name: "比例",
            nameGap: 10,
            // min: 0,
            // max: 100,
            interval: 20,
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} %",
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
          // 柱状图

          {
            name: "菌落极大值",
            type: "bar",
            stack: "Ad",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [183, 191, 197, 192, 189, 184, 190, 195, 197, 193],
          },
          {
            name: "菌落极小值",
            type: "bar",
            stack: "Ad",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [5, 30, 0, 15, 25, 35, 40, 45, 50, 55],
          },
          {
            name: "菌落平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [103, 99, 121, 115, 110, 105, 117, 128, 123, 119],
          },

          {
            name: "比例极大值",
            type: "bar",
            stack: "Bd",
            lineStyle: {
              width: 2,
              color: "rgb(92, 147, 16)",
            },

            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [86, 93, 97, 91, 89, 85, 92, 96, 99, 94],
          },
          {
            name: "比例极小值",
            type: "bar",
            stack: "Bd",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [4, 7, 2, 10, 3, 8, 1, 5, 0, 11],
          },
          {
            name: "比例平均值",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(24, 144, 255)",
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

            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [52, 48, 70, 64, 59, 54, 66, 77, 72, 68],
          },
        ],
      });
    },
    historyZJ3M() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart05"));

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
                return params.value + "历年";
              },
            },
          },
        },
        legend: {
          top: "0%",
          left: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },
        grid: {
          left: "10",
          top: "45",
          right: "10",
          bottom: "3",

          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["菌落总数", "比例"],
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
            name: "助剂3菌落总数",
            // min: 0,
            // max: 200,
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
          {
            type: "value",

            name: "助剂3比例",

            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} %",
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
            tooltip: {
              valueFormatter: function (value) {
                return value + " ";
              },
            },
            data: [180, 90],
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " ";
              },
            },
            data: [80, 40],
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(92, 147, 16)",
            },
            smooth: true,

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
                return value + " ";
              },
            },
            data: [152, 85],
          },
        ],
      };

      this.chart.setOption(option);
    },

    yearZJ3Y() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart05"));

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
          left: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },
        grid: {
          left: "10",
          top: "45",
          right: "10",
          bottom: "3",

          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
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
            name: "助剂3菌落总数",
            // min: 0,
            // max: 200,
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
          {
            type: "value",

            name: "助剂3比例",

            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} %",
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
            name: "助剂3菌落总数",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8,
              6.0, 2.3, 182.2, 48.7, 18.8, 6.0, 2.3, 100,
            ],
          },
          {
            name: "助剂3比例",
            type: "line",
            // smooth: true,//圆滑
            lineStyle: {
              width: 2,
              color: "rgb(92, 147, 16)",
            },
            smooth: true,

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
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: true,
            yAxisIndex: 1,
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
        ],
      };

      this.chart.setOption(option);
    },
    historyZJ3Y() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart05"));

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
                return params.value + "历年";
              },
            },
          },
        },
        legend: {
          top: "0%",
          left: "20%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },
        grid: {
          left: "10",
          top: "45",
          right: "10",
          bottom: "3",

          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["菌落总数", "比例"],
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
            name: "助剂3菌落总数",
            // min: 0,
            // max: 200,
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
          {
            type: "value",

            name: "助剂3比例",

            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,

              formatter: "{value} %",
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
            tooltip: {
              valueFormatter: function (value) {
                return value + " ";
              },
            },
            data: [180, 90],
          },
          {
            name: "极小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " ";
              },
            },
            data: [80, 40],
          },
          {
            name: "平均值",
            type: "line",
            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(92, 147, 16)",
            },
            smooth: true,

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
                return value + " ";
              },
            },
            data: [152, 85],
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


<style lang="less" scoped>
#chart05 {
  width: 100%;
  height: 100%;
}
</style>