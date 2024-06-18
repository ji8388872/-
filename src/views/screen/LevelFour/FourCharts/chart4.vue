<template>
  <div id="chart04">
    <!-- 除臭剂 -->
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
          left: "2",
          top: "45",
          right: "2",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",

            // name: "天",
            // data:this.frameList,
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
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "(吨)",
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
            name: "自产除臭剂用量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },

            // 设置拐点颜色以及边框
            itemStyle: {
              color: "rgba(145, 204, 117)",
            },

            data: [
              20, 30, 40, 20, 40, 50, 30, 60, 20, 40, 70, 50, 40, 50, 30, 40,
              30, 60, 40, 50, 30, 60, 20, 40, 20, 40, 70, 50, 50, 40,
            ],
          },
          {
            name: "外购除臭剂用量",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },

            // 设置拐点颜色以及边框
            itemStyle: {
              color: "rgba(199, 124, 29)",
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
          label: {
            backgroundColor: "#6a7985",
            formatter: function (params) {
              return params.value + "月";
            },
          },
        },

        xAxis: {
          data: Array.from({ length: 12 }, (v, i) => (i + 1).toString()),
        },
        yAxis: [
          {
            name: "吨",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
          },
        ],
        series: [
          {
            name: "自产用量(最大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            stack: "Ad",
            data: [94, 97, 94, 98, 96, 96, 92, 91, 94, 93, 92, 91],
          },
          {
            name: "自产用量(最小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            stack: "Ad",
            data: [20, 30, 40, 20, 40, 50, 30, 60, 20, 40, 70, 50],
          },
          {
            name: "自产用量(平均值)",
            type: "line",

            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "#0184d5",
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
          },
          {
            name: "外购用量(最大值)",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            stack: "Bd",
            data: [93, 94, 95, 97, 96, 91, 70, 96, 97, 96, 94, 65],
          },
          {
            name: "外购用量(最小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            stack: "Bd",
            data: [10, 20, 30, 35, 40, 50, 20, 30, 40, 50, 60, 70],
          },
          {
            name: "外购用量(平均值)",
            type: "line",

            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(181, 45, 117)",
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
          },
        ],
      });
    },
    updateYear() {
      this.chart.setOption({
        tooltip: {
          label: {
            backgroundColor: "#6a7985",
            formatter: function (params) {
              return params.value + "年";
            },
          },
        },

        xAxis: {
          data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
        },
        yAxis: [
          {
            name: "吨",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
          },
        ],
        series: [
          {
            name: "自产用量(最大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            stack: "Ad",
            data: [94, 97, 94, 98, 96, 96, 92, 91, 94, 93, 92, 91],
          },
          {
            name: "自产用量(最小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            stack: "Ad",
            data: [20, 30, 40, 20, 40, 50, 30, 60, 20, 40, 70, 50],
          },
          {
            name: "自产用量(平均值)",
            type: "line",

            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "#0184d5",
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
            showSymbol: false,
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
          },
          {
            name: "外购用量(最大值)",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            stack: "Bd",
            data: [93, 94, 95, 97, 96, 91, 70, 96, 97, 96, 94, 65],
          },
          {
            name: "外购用量(最小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            stack: "Bd",
            data: [10, 20, 30, 35, 40, 50, 20, 30, 40, 50, 60, 70],
          },
          {
            name: "外购用量(平均值)",
            type: "line",

            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(181, 45, 117)",
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
          },
        ],
      });
    },
    updateHistoryYear() {
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
          left: "2",
          top: "45",
          right: "2",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",

            name: "天",
            // data:this.frameList,
            data: ["自产除臭剂用量", "外购除臭剂用量"],

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
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "(吨)",
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
                return value + " 吨";
              },
            },

            data: [80, 84],
          },
          {
            name: "最小值",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },

            data: [30, 32],
          },
          {
            name: "平均值",
            type: "line",

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },

            data: [50, 52],
          },
        ],
      };
      this.chart.setOption(option);
    },

    monthSmellyM() {
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
          left: "2",
          top: "45",
          right: "2",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",

            name: "天",
            // data:this.frameList,
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
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "(吨)",
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
            name: "自产除臭剂用量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },

            // 设置拐点颜色以及边框
            itemStyle: {
              color: "rgba(145, 204, 117)",
            },

            data: [
              60, 20, 40, 70, 50, 40, 50, 30, 40, 30, 60, 40, 50, 30, 60, 20,
              40, 20, 40, 70, 50, 50, 40,
            ],
          },
          {
            name: "外购除臭剂用量",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },

            // 设置拐点颜色以及边框
            itemStyle: {
              color: "rgba(199, 124, 29)",
            },

            data: [
              97, 96, 94, 65, 93, 96, 98, 95, 92, 94, 95, 93, 99, 96, 92, 96,
              90, 97, 96, 99, 94, 92,
            ],
          },
        ],
      };
      this.chart.setOption(option);
    },
    yearSmellyM() {
      this.chart.setOption({
        tooltip: {
          label: {
            backgroundColor: "#6a7985",
            formatter: function (params) {
              return params.value + "年";
            },
          },
        },

        xAxis: {
          data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
        },
        yAxis: [
          {
            name: "(吨)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
          },
        ],
        series: [
          {
            name: "自产用量(最大值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            stack: "Ad",
            data: [94, 97, 94, 98, 96, 96, 92, 91, 94, 93, 92, 91],
          },
          {
            name: "自产用量(最小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            stack: "Ad",
            data: [20, 30, 40, 20, 40, 50, 30, 60, 20, 40, 70, 50],
          },
          {
            name: "自产用量(平均值)",
            type: "line",

            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "#0184d5",
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
            showSymbol: false,
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
          },
          {
            name: "外购用量(最大值)",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            stack: "Bd",
            data: [93, 94, 95, 97, 96, 91, 70, 96, 97, 96, 94, 65],
          },
          {
            name: "外购用量(最小值)",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            stack: "Bd",
            data: [10, 20, 30, 35, 40, 50, 20, 30, 40, 50, 60, 70],
          },
          {
            name: "外购用量(平均值)",
            type: "line",

            smooth: true, //圆滑
            lineStyle: {
              width: 2,
              color: "rgb(181, 45, 117)",
            },

            // 设置拐点，小圆点
            Symbol: "circle",
            // 拐点大小
            SymbolSize: 8,

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },
            data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
          },
        ],
      });
    },
    yearSmellyY() {
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
          left: "2",
          top: "45",
          right: "2",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",

            name: "天",
            // data:this.frameList,
            data: ["自产除臭剂用量", "外购除臭剂用量"],

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
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "(吨)",
            nameTextStyle: {
              color: "rgba(255,255,255,.9)",
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
                return value + " 吨";
              },
            },

            data: [80, 84],
          },
          {
            name: "最小值",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },

            data: [30, 32],
          },
          {
            name: "平均值",
            type: "line",

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },

            data: [50, 52],
          },
        ],
      };
      this.chart.setOption(option);
    },

    yearSmellyY() {
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
          left: "2",
          top: "45",
          right: "2",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",

            name: "天",
            // data:this.frameList,
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
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "(吨)",
            nameTextStyle: {
              color: "rgba(255,255,255,.9)",
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
            name: "自产除臭剂用量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },

            // 设置拐点颜色以及边框
            itemStyle: {
              color: "rgba(145, 204, 117)",
            },

            data: [
              40, 50, 30, 40, 30, 60, 40, 50, 30, 60, 20, 40, 20, 40, 70, 50,
              50, 40,
            ],
          },
          {
            name: "外购除臭剂用量",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },

            // 设置拐点颜色以及边框
            itemStyle: {
              color: "rgba(199, 124, 29)",
            },

            data: [
              96, 98, 95, 92, 94, 95, 93, 99, 96, 92, 96, 90, 97, 96, 99, 94,
              92,
            ],
          },
        ],
      };
      this.chart.setOption(option);
    },
    historySmellyY() {
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
          left: "2",
          top: "45",
          right: "2",
          bottom: "3",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",

            name: "天",
            // data:this.frameList,
            data: ["自产除臭剂用量", "外购除臭剂用量"],

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
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "(吨)",
            nameTextStyle: {
              color: "rgba(255,255,255,.9)",
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
                return value + " 吨";
              },
            },

            data: [80, 84],
          },
          {
            name: "最小值",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },

            data: [30, 32],
          },
          {
            name: "平均值",
            type: "line",

            tooltip: {
              valueFormatter: function (value) {
                return value + " 吨";
              },
            },

            data: [50, 52],
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