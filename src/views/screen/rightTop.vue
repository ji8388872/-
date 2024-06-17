<template>
  <div class="main">
    <div class="tabs">
      <div class="tab" v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }"
        @click="changeTab(index)">{{ tab }}</div>
    </div>

    <div class="tab-content" v-for="(content, index) in contents" :key="index"
      :class="{ active: activeTab === index, hidden: !contentVisible }">
      <div class="left">
        <!-- <img src="@/assets/images/staff_1024-removebg-preview.png" alt=""> -->
        <span>{{ content.num }}</span>
      </div>
      <div class="right">
        <a href="#" class="iconfont icon-xiayibu"></a>
        <div class="all">
          {{ content.text }}
        </div>
        <a href="#" class="iconfont icon-xiayibu"></a>
        <div :class="['chart', 'chart' + (index + 1)]" v-show="activeTab === index" id="chartContainer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      tabs: ['厨余垃圾', '园林垃圾', '果蔬垃圾'],
      contents: [
        { num: '90%', text: '虫, 虫沙' },
        { num: '100%', text: '有机肥' },
        { num: '80%', text: '酵素' }
      ],
      activeTab: 0,
      timer: null,// 定时器对象
      contentVisible: true, // Add this variable
      myCharts: [null, null, null],
      chartData: [
        [
          { value: 50, name: '养殖' },
          { value: 50, name: '种植' }
        ],
        [
          { value: 100, name: '种植' }
        ],
        [
          { value: 50, name: '除臭剂' },
          { value: 50, name: '洗涤剂' },
          { value: 50, name: '液态肥' },
          { value: 50, name: '堆肥剂' }
        ]
      ]
    };
  },
  watch: {
    activeTab(newTab) {
      this.renderChart(newTab);
    }
  },
  methods: {


    changeTab(index) {
      this.activeTab = index;
      this.contentVisible = true; // Show content when changing tab
    },
    renderChart(index) {
      if (!this.myCharts[index]) {
        this.myCharts[index] = echarts.init(document.querySelector(`.chart${index + 1}`));
      }

      this.myCharts.forEach((chart, i) => {
        if (chart) {
          chart.clear();
        }
      });

      if (this.myCharts[index]) {
        const option = {
          series: [{
            type: 'pie',
            radius: '70%',
            data: this.chartData[index],
            label: {
              show: true,
              position: 'inside',
              formatter: '{a|{b}}\n\n{per|{d}%}',
              rich: {
                a: {
                  fontWeight: 'bold',
                  fontSize: '12'
                },
                per: {
                  color: '#ffffff'
                }
              }

            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        };
        this.myCharts[index].setOption(option);
      }
    }
  },
  mounted() {


    // this.$nextTick(() => {
    const chartContainer = document.querySelector('.chart' + (this.activeTab + 1));
    if (chartContainer) {
      this.renderChart(this.activeTab);
    }
    // });

  },

}
</script>

<style lang="less" scoped>
/* Add the following style */


.hidden {
  display: none;
}

.main {
  padding: 0 1%;
  text-align: center !important;
  color: #ffffff;
  font-size: .14rem;

  text-shadow: 0 0 .05rem #00d8ff;

  .tabs {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }

  .tab {
    flex: 1;
    cursor: pointer;
    font-weight: bold;
    padding: 1% 2%;
    // background-color: #333;
    border-radius: 0.1rem;
    margin: 0 2%;
    color: #fff;
  }

  .tab-content {
    padding: 2%;
    height: 100%;
    display: none;
  }

  .tab-content.active {
    display: block;
    display: flex;

    .left {
      position: relative;
      flex: 1;

      img {
        margin-top: 0.2rem;
        width: 99%;
        animation: rotateAnimation 5s linear infinite;
      }

      span {
        position: absolute;
        top: 53%;
        left: 52%;
        transform: translate(-50%, -50%);
        font-size: 0.14rem;
      }
    }

    .right {
      flex: 2;
      position: relative;

      a {
        text-decoration: none;
        color: orange;
        font-size: 0.3rem;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
      }

      .all {
        position: absolute;
        left: 23%;
        top: 14%;
        transform: translate(-50%);
        height: 80%;
        width: 17%;
        text-shadow: none;
        color: #fff;
        font-weight: 600;
        background-color: rgba(0, 255, 81, 0.5);
        background-size: 70% 50%;
        padding: 18% 0;
        font-size: 0.14rem;
        border-radius: 50%;
      }

      a:nth-of-type(2) {
        text-decoration: none;
        color: orange;
        font-size: 0.3rem;
        position: absolute;
        left: 33%;
        top: 50%;
        transform: translate(0, -50%);
      }
    }
  }

  .tab.active {
    background-color: #00d8ff;
    border-radius: 5%;
  }

  .chart {
    position: absolute;
    top: -9%;
    right: -13%;
    height: 100%;
    width: 55%;
    overflow: hidden;

    v-deep canvas {
      width: 120px;
      height: 120px;
    }
  }

  #chartContainer {
    width: 1.5rem !important;
    height: 1.5rem !important;
  }
}

@keyframes rotateAnimation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>








