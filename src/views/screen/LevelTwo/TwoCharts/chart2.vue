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
          left: "7%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },

        grid: {
          left: "10",
          top: "45",
          right: "10",
          bottom: "5",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            name: "时间",
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
            name: "虫产率",
            type: "line",
            stack: "total",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑
            lineStyle: {
              width: 0,
              color: "rgb(61, 108, 204)",
            },
            // 填充颜色设置
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(116, 21, 219)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },

            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [
              90, 91, 93, 94, 95, 95, 94, 96, 97, 95, 96, 96, 93, 99, 94, 98,
              90, 95, 92, 96, 92, 97, 96, 93, 95, 96, 94, 96, 97, 99,
            ],
          },
          {
            name: "虫沙产率",
            type: "line",
            stack: "total",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑
            lineStyle: {
              width: 0,
              color: "rgb(205, 126, 38)",
            },
            // 填充颜色设置
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 191, 0)",
                },
                {
                  offset: 1,
                  color: "rgb(224, 62, 76)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },

            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [
              95, 96, 96, 96, 93, 97, 95, 94, 95, 96, 97, 94, 97, 96, 96, 94,
              95, 99, 96, 93, 90, 94, 99, 93, 90, 98, 92, 92, 95, 91,
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
          left: "5%",
        },
        xAxis: [
          {
            boundaryGap: true,
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
            name: "虫产率(极大值)",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [80, 82, 81, 84, 85, 85, 84, 86, 87, 85, 86, 64],
          },
          {
            name: "虫产率(极小值)",
            type: "bar",
            stack: "Ad",

            emphasis: {
              focus: "series",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [50, 52, 51, 44, 45, 45, 34, 46, 57, 45, 36, 54],
          },
          {
            name: "虫产率(平均值)",
            type: "line",

            smooth: true,

            emphasis: {
              focus: "series",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [80, 82, 81, 84, 85, 85, 84, 86, 87, 85, 86, 64],
          },

          {
            name: "虫沙产率(极大值)",
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
            data: [84, 86, 87, 85, 86, 64, 80, 82, 81, 84, 85, 85],
          },
          {
            name: "虫沙产率(极小值)",
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
            data: [44, 45, 45, 34, 46, 57, 50, 52, 51, 45, 36, 54],
          },
          {
            name: "虫沙产率(平均值)",
            type: "line",

            smooth: true,

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [84, 86, 87, 85, 86, 80, 82, 81, 84, 85, 85, 64],
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
          left: "5%",
        },
        xAxis: [
          {
            boundaryGap: true,
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

        series: [
          {
            name: "虫产率(极大值)",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [81, 84, 85, 85, 84, 86, 87, 85, 86, 64],
          },
          {
            name: "虫产率(极小值)",
            type: "bar",
            stack: "Ad",

            emphasis: {
              focus: "series",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [51, 44, 45, 45, 34, 46, 57, 45, 36, 54],
          },
          {
            name: "虫产率(平均值)",
            type: "line",

            smooth: true,

            emphasis: {
              focus: "series",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [81, 84, 85, 85, 84, 86, 87, 85, 86, 64],
          },

          {
            name: "虫沙产率(极大值)",
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
            data: [87, 85, 86, 64, 80, 82, 81, 84, 85, 85],
          },
          {
            name: "虫沙产率(极小值)",
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
            data: [45, 34, 46, 57, 50, 52, 51, 45, 36, 54],
          },
          {
            name: "虫沙产率(平均值)",
            type: "line",

            smooth: true,

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [87, 85, 86, 80, 82, 81, 84, 85, 85, 64],
          },
        ],
      });
    },

    updateHistory() {
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
                return params.value + "历年";
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

        grid: {
          left: "10",
          top: "45",
          right: "10",
          bottom: "5",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,

            data: ["虫产率", "虫沙产率"],
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
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
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
                return value + " %";
              },
            },

            data: [90, 89],
          },
          {
            name: "极小值",
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
      };

      this.chart.setOption(option);
    },

    monthCLM() {
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
          left: "7%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },

        grid: {
          left: "10",
          top: "45",
          right: "10",
          bottom: "5",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            name: "时间",
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
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
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
            name: "虫产率",
            type: "line",
            stack: "total",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑
            lineStyle: {
              width: 0,
              color: "rgb(61, 108, 204)",
            },
            // 填充颜色设置
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(116, 21, 219)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },

            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [
              96, 97, 95, 96, 96, 93, 99, 94, 98, 90, 95, 92, 96, 92, 97, 96,
              93, 95, 96, 94, 96, 97, 99,
            ],
          },
          {
            name: "虫沙产率",
            type: "line",
            stack: "total",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑
            lineStyle: {
              width: 0,
              color: "rgb(205, 126, 38)",
            },
            // 填充颜色设置
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 191, 0)",
                },
                {
                  offset: 1,
                  color: "rgb(224, 62, 76)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },

            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [
              95, 96, 95, 96, 97, 94, 97, 96, 96, 94, 95, 99, 96, 93, 90, 94,
              99, 93, 90, 98, 92, 92, 95, 91,
            ],
          },
        ],
      };

      this.chart.setOption(option);
    },
    yearCLM() {
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
          left: "5%",
        },
        xAxis: [
          {
            boundaryGap: true,
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

        series: [
          {
            name: "虫产率(极大值)",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [81, 84, 85, 85, 84, 86, 87, 85, 86, 64],
          },
          {
            name: "虫产率(极小值)",
            type: "bar",
            stack: "Ad",

            emphasis: {
              focus: "series",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [51, 44, 45, 45, 34, 46, 57, 45, 36, 54],
          },
          {
            name: "虫产率(平均值)",
            type: "line",

            smooth: true,

            emphasis: {
              focus: "series",
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: [81, 84, 85, 85, 84, 86, 87, 85, 86, 64],
          },

          {
            name: "虫沙产率(极大值)",
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
            data: [87, 85, 86, 64, 80, 82, 81, 84, 85, 85],
          },
          {
            name: "虫沙产率(极小值)",
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
            data: [45, 34, 46, 57, 50, 52, 51, 45, 36, 54],
          },
          {
            name: "虫沙产率(平均值)",
            type: "line",

            smooth: true,

            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [87, 85, 86, 80, 82, 81, 84, 85, 85, 64],
          },
        ],
      });
    },
    historyCLM() {
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
                return params.value + "历年";
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

        grid: {
          left: "10",
          top: "45",
          right: "10",
          bottom: "5",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,

            data: ["虫产率", "虫沙产率"],
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
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
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
                return value + " %";
              },
            },

            data: [90, 89],
          },
          {
            name: "极小值",
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
      };

      this.chart.setOption(option);
    },


    yearCLY() {
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
          left: "7%",

          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 12,
          },
        },

        grid: {
          left: "10",
          top: "45",
          right: "15",
          bottom: "5",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            name: "时间",
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
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
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
            name: "虫产率",
            type: "line",
            stack: "total",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑
            lineStyle: {
              width: 0,
              color: "rgb(61, 108, 204)",
            },
            // 填充颜色设置
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(116, 21, 219)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },

            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [
              96, 97, 95, 96, 96, 93, 99, 94, 98, 90, 95, 92, 96, 92, 97, 96,
              93, 95, 96, 94, 96, 97, 99,
            ],
          },
          {
            name: "虫沙产率",
            type: "line",
            stack: "total",
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            smooth: true, //圆滑
            lineStyle: {
              width: 0,
              color: "rgb(205, 126, 38)",
            },
            // 填充颜色设置
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 191, 0)",
                },
                {
                  offset: 1,
                  color: "rgb(224, 62, 76)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },

            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,

            data: [
              95, 96, 95, 96, 97, 94, 97, 96, 96, 94, 95, 99, 96, 93, 90, 94,
              99, 93, 90, 98, 92, 92, 95, 91,
            ],
          },
        ],
      };

      this.chart.setOption(option);
    },
    historyCLY() {
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
                return params.value + "历年";
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

        grid: {
          left: "10",
          top: "45",
          right: "10",
          bottom: "5",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,

            data: ["虫产率", "虫沙产率"],
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
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
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
                return value + " %";
              },
            },

            data: [90, 89],
          },
          {
            name: "极小值",
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
#chart02 {
  width: 100%;
  height: 100%;
  padding: 0.0167rem;
}
</style>