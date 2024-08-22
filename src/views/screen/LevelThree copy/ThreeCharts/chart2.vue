<template>
  <div id="chart02"></div>
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
    initChart() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart02"));

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
            name: "时间",
            data: Array.from({ length: 30 }, (v, i) => (i + 1).toString()),
            axisPointer: {
              type: "shadow",
            },
            // 文本颜色
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
            name: "虫沙含水率",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [
              95, 96, 96, 96, 93, 97, 95, 94, 95, 96, 97, 94, 97, 96, 96, 94,
              95, 99, 96, 93, 90, 94, 99, 93, 90, 98, 92, 92, 95, 91,
            ],
          },
          {
            name: "原料含水率",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [
              93, 94, 95, 97, 96, 91, 90, 96, 97, 96, 94, 95, 93, 96, 98, 95,
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
            name: "虫沙含水率(最大值)",
            type: "bar",
            stack: "Ad",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [95, 96, 96, 96, 93, 97, 95, 94, 95, 96, 97, 94],
          },
          {
            name: "虫沙含水率(最小值)",
            type: "bar",
            stack: "Ad",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [48, 84, 7, 97, 39, 23, 61, 13, 58, 85, 79, 16],
          },
          {
            name: "虫沙含水率(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑

            emphasis: {
              focus: "series",
            },

            // 开始不显示拐点， 鼠标经过显示
            // showSymbol: false,

            data: [48, 84, 7, 97, 39, 23, 61, 13, 58, 85, 79, 16],
          },

          {
            name: "原料含水率(最大值)",
            type: "bar",
            stack: "Bd",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },
            data: [95, 96, 96, 96, 93, 97, 95, 94, 95, 96, 97, 94],
          },
          {
            name: "原料含水率(最小值)",
            type: "bar",
            stack: "Bd",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [48, 84, 7, 97, 39, 23, 61, 13, 58, 85, 79, 16],
          },
          {
            name: "原料含水率(平均值)",
            type: "line",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑

            emphasis: {
              focus: "series",
            },
            data: [53, 30, 80, 11, 69, 4, 26, 51, 89, 62, 95, 73],
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
            name: "虫沙含水率(最大值)",
            type: "bar",
            stack: "Ad",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [96, 96, 93, 97, 95, 94, 95, 96, 97, 94],
          },
          {
            name: "虫沙含水率(最小值)",
            type: "bar",
            stack: "Ad",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [7, 97, 39, 23, 61, 13, 58, 85, 79, 16],
          },
          {
            name: "虫沙含水率(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑

            emphasis: {
              focus: "series",
            },

            data: [7, 97, 39, 23, 61, 13, 58, 85, 79, 16],
          },

          {
            name: "原料含水率(最大值)",
            type: "bar",
            stack: "Bd",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },
            data: [95, 96, 96, 96, 93, 97, 95, 94, 95, 96],
          },
          {
            name: "原料含水率(最小值)",
            type: "bar",
            stack: "Bd",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [48, 84, 7, 97, 39, 23, 61, 13, 58, 85],
          },
          {
            name: "原料含水率(平均值)",
            type: "line",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑

            emphasis: {
              focus: "series",
            },
            data: [53, 30, 80, 11, 69, 4, 26, 51, 89, 62],
          },
        ],
      });
    },

    updateHistoryYear() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }

      const chartElement = document.querySelector("#chart02");
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
          left: "6%",

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
            data: ["虫沙含水率", "原料含水率"],
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

            // max: 300,
            // min: 0,
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

            data: [90, 89, 80],
          },
          {
            name: "最小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            data: [74, 77, 78],
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

            data: [81, 85, 86],
          },
        ],
      });
    },

    monthWaterM() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart02"));

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
          left: "6%",

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
            name: "时间",
            data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
            axisPointer: {
              type: "shadow",
            },
            // 文本颜色
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
            name: "虫沙含水率",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [
              95, 96, 96, 95, 96, 97, 94, 97, 96, 96, 94, 95, 99, 96, 93, 90,
              94, 99, 93, 90, 98, 92, 92, 95, 91,
            ],
          },
          {
            name: "原料含水率",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [
              93, 94, 95, 97, 96, 91, 90, 96, 97, 96, 94, 95, 93, 96, 98, 95,
              92, 94, 95, 93, 99, 96, 99, 94, 92,
            ],
          },
        ],
      };

      this.chart.setOption(option);
    },
    yearWaterM() {
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
            name: "虫沙含水率(最大值)",
            type: "bar",
            stack: "Ad",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [96, 96, 93, 97, 95, 94, 95, 96, 97, 94],
          },
          {
            name: "虫沙含水率(最小值)",
            type: "bar",
            stack: "Ad",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [7, 97, 39, 23, 61, 13, 58, 85, 79, 16],
          },
          {
            name: "虫沙含水率(平均值)",
            type: "line",
            smooth: true, //圆滑
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑

            emphasis: {
              focus: "series",
            },

            data: [7, 97, 39, 23, 61, 13, 58, 85, 79, 16],
          },

          {
            name: "原料含水率(最大值)",
            type: "bar",
            stack: "Bd",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },
            data: [95, 96, 96, 96, 93, 97, 95, 94, 95, 96],
          },
          {
            name: "原料含水率(最小值)",
            type: "bar",
            stack: "Bd",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [48, 84, 7, 97, 39, 23, 61, 13, 58, 85],
          },
          {
            name: "原料含水率(平均值)",
            type: "line",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑

            emphasis: {
              focus: "series",
            },
            data: [53, 30, 80, 11, 69, 4, 26, 51, 89, 62],
          },
        ],
      });
    },
    historyWaterM() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }

      const chartElement = document.querySelector("#chart02");
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
          left: "6%",

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
            data: ["虫沙含水率", "原料含水率"],
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

            // max: 300,
            // min: 0,
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

            data: [90, 89, 80],
          },
          {
            name: "最小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            data: [74, 77, 78],
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

            data: [81, 85, 86],
          },
        ],
      });
    },

    yearWaterY() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart02"));

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
          left: "6%",

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
            name: "时间",
            data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
            axisPointer: {
              type: "shadow",
            },
            // 文本颜色
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
            name: "虫沙含水率",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [
              97, 94, 97, 96, 96, 94, 95, 99, 96, 93, 90, 94, 99, 93, 90, 98,
              92, 92, 95, 91,
            ],
          },
          {
            name: "原料含水率",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            emphasis: {
              focus: "series",
            },

            data: [
              93, 94, 95, 96, 94, 95, 93, 96, 98, 95, 92, 94, 95, 93, 99, 96,
              99, 94, 92,
            ],
          },
        ],
      };

      this.chart.setOption(option);
    },
    historyWaterY() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }

      const chartElement = document.querySelector("#chart02");
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
          left: "6%",

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
            data: ["虫沙含水率", "原料含水率"],
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

            // max: 300,
            // min: 0,
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

            data: [90, 89, 80],
          },
          {
            name: "最小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },

            data: [74, 77, 78],
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

            data: [81, 85, 86],
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
#chart02 {
  width: 100%;
  height: 100%;
  padding: 0.0167rem;
}
</style>