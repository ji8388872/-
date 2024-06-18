<template>
  <div id="chart03"></div>
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
      this.chart = echarts.init(document.getElementById("chart03"));

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
          show: false,
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
            name:'(kg)',
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
            axisTick: {
              show: false,
            },

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
            name: "虫卵用量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            itemStyle: {
              color: "rgb(145, 204, 117)",
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8,
              6.0, 2.3, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7,
            ],
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
          show: true,
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
            name: "(kg)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
            interval: 20,
          },
        ],
        series: [
          {
            name: "最大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            emphasis: {
              focus: "series",
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3,
            ],
          },
          {
            name: "最小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            emphasis: {
              focus: "series",
            },
            data: [10, 15, 8, 2, 5.6, 6.7, 15.6, 6.2, 3.6, 2.0, 6.4, 3.3],
          },
          {
            name: "平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            emphasis: {
              focus: "series",
            },
            data: [
              10, 15, 18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 33.3, 66.4,
            ],
          },
        ],
      });
    },
    // 日----年极值
    updateYear() {
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
        legend: {
          show: true,
        },
        xAxis: {
          data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
        },
        yAxis: [
          {
            type: "value",
            name: "(kg)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
            interval: 20,
          },
        ],
        series: [
          {
            name: "最大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            emphasis: {
              focus: "series",
            },
            data: [18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3],
          },
          {
            name: "最小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            emphasis: {
              focus: "series",
            },
            data: [8, 2, 5.6, 6.7, 5.6, 6.2, 2.6, 2.0, 6.4, 3.3],
          },
          {
            name: "平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            emphasis: {
              focus: "series",
            },
            data: [18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 33.3, 66.4],
          },
        ],
      });
    },
    updateHistoryYear() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart03"));

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
            // boundaryGap: false,
            data: ["虫卵用量"],
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
              color: "rgba(255,255,255,1)",
            },
            axisTick: {
              show: false,
            },

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
            name: "最大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [80, 80],
          },
          {
            name: "最小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [20, 20],
          },
          {
            name: "平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [50, 50],
          },
        ],
      };

      this.chart.setOption(option);
    },

    monthchonRM() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart03"));

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
          show: false,
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
            name: "(kg)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
            axisTick: {
              show: false,
            },

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
            name: "虫卵用量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            itemStyle: {
              color: "rgb(145, 204, 117)",
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
          },
        ],
      };

      this.chart.setOption(option);
    },
    yearchonRM() {
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
        legend: {
          show: true,
        },
        xAxis: {
          data: Array.from({ length: 10 }, (v, i) => (i + 2019).toString()),
        },
        yAxis: [
          {
            type: "value",
            name: "(kg)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
          },
        ],
        series: [
          {
            name: "最大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            emphasis: {
              focus: "series",
            },
            data: [18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3],
          },
          {
            name: "最小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            emphasis: {
              focus: "series",
            },
            data: [18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 66.4, 33.3],
          },
          {
            name: "平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            emphasis: {
              focus: "series",
            },
            data: [18, 20, 25.6, 6.7, 15.6, 62.2, 32.6, 20.0, 33.3, 66.4],
          },
        ],
      });
    },
    historychonRM() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart03"));

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
            // boundaryGap: false,
            data: ["虫卵用量"],
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
              color: "rgba(255,255,255,1)",
            },
            axisTick: {
              show: false,
            },

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
            name: "最大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [80, 80],
          },
          {
            name: "最小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [20, 20],
          },
          {
            name: "平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [50, 50],
          },
        ],
      };

      this.chart.setOption(option);
    },

    yearchonRY() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart03"));

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
          show: false,
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
            name: "(kg)",
            nameTextStyle: {
              color: "rgba(255,255,255,1)",
            },
            axisTick: {
              show: false,
            },

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
            name: "虫卵用量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },
            itemStyle: {
              color: "rgb(145, 204, 117)",
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
          },
        ],
      };

      this.chart.setOption(option);
    },
    historychonRY() {
      if (this.chart != null && this.chart != "" && this.chart != undefined) {
        this.chart.dispose(); //销毁
      }
      this.chart = echarts.init(document.getElementById("chart03"));

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
          right: "20%",
          show: true,
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
            // boundaryGap: false,
            data: ["虫卵用量"],
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
              color: "rgba(255,255,255,1)",
            },
            axisTick: {
              show: false,
            },

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
            name: "最大值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [80, 80],
          },
          {
            name: "最小值",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [20, 20],
          },
          {
            name: "平均值",
            type: "line",
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " kg";
              },
            },

            data: [50, 50],
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
#chart03 {
  width: 100%;
  height: 100%;
}
</style>
