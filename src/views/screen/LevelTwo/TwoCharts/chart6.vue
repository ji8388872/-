<template>
  <div class="chart06">
    <div class="shanMap"></div>
    <div class="text">
      <ul>
        <li v-for="(item, index) in baseData" :key="index" @click="changeModel(index)">
          <div class="name">{{ item.name }}</div>
          <div :class="item.type == 1 ? 'type' : 'typeRed'" @click="showDialog(item.type)">{{ item.type == 1 ? '正常' : '异常' }}</div>
        </li>

      </ul>
    </div>
    <el-dialog title="异常日期" :visible.sync="dialogType" width="30%" style="margin-top: 10%;">
      <span>
        <el-tag type="danger" v-for="(item, index) in abnormalDate" :key="index"
          style="margin: 0.5rem;cursor: pointer;">{{ item }}号</el-tag>
      </span>

    </el-dialog>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      baseData: [
        {
          name: '设备稳定',
          type: 1//正常为1，异常为0
        },
        {
          name: '厂区气味',
          type: 0
        },
        {
          name: '工艺正常',
          type: 1
        },

      ],
      chart: null,
      model: 0,//0:设备稳定；1:厂区气味；2:工艺正常
      dialogType: false,//类型弹框
      // 异常日期
      abnormalDate: [
        1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29
      ]
    }
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
        this.chart.dispose();//销毁
      }

      const chartElement = document.querySelector('.shanMap');
      if (chartElement) {
        this.chart = echarts.init(chartElement);
      } else {
        console.error('指定的元素不存在，请检查选择器是否正确。');
      }
      const option = {
        title: {
          text: '设备稳定(月)',
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 20
          }
        },
        tooltip: {
          trigger: 'item',
          label: {
            backgroundColor: '#6a7985',
            formatter: function (params) {
              return params.value + '天'
            }
          }
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: "rgba(255,255,255,.9)",
            fontSize: 15
          }
        },
        series: [
          {
            name: '设备稳定天数',
            type: 'pie',
            radius: '70%',
            label: {
              show: true,
              position: 'outer',
              formatter: '{b}:{c}天',
              textStyle: {
                color: '#fff', // 设置字体颜色
                fontSize: 16 // 设置字体大小
              }
            },
            data: [
              { value: 14, name: '正常', itemStyle: { color: 'rgb(24, 144, 255)' } },
              { value: 16, name: '异常', itemStyle: { color: 'rgb(199, 49, 128)' } },

            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0,0)',

              },
              // label: {
              //   show: true,
              //   // position: 'inner',
              //   textStyle: {
              //     color: '#fff', // 设置字体颜色
              //     fontSize: 16 // 设置字体大小
              //   }
              // }
            }
          }
        ]
      }


      this.chart.setOption(option);
    },
    // 改变模型
    changeModel(index) {
   
      this.model = index
      if (this.model == 0) {
        this.initChart();
      } else if (this.model == 1) {
        this.updatemodel1();

      } else {
        this.updatemodel2();
      }
    },
    // 异常日期弹框
    showDialog(type) {
      if (type == 0) {
        this.dialogType = true
      }
    },
    bindResizeEvent() {
      window.addEventListener('resize', this.resize);
    },
    resize() {
      this.chart.resize();
    },
    updatemodel1() {
      this.chart.setOption({
        title: {
          text: '厂区气味(月)',

        },
        series: [
          {
            name: '厂区气味天数',
            type: 'pie',
            radius: '70%',
            label: {
              show: true,
              position: 'outer',
              formatter: '{b}:{c}天',
              textStyle: {
                color: '#fff', // 设置字体颜色
                fontSize: 16 // 设置字体大小
              }
            },
            data: [
              { value: 15, name: '正常', itemStyle: { color: 'rgb(24, 144, 255)' } },
              { value: 15, name: '异常', itemStyle: { color: 'rgb(199, 49, 128)' } },

            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0,0)',

              },

            }
          }
        ]
      })
    },
    updatemodel2() {
      this.chart.setOption({
        title: {
          text: '工艺正常(月)',
        },
        series: [
          {
            name: '工艺正常天数',
            type: 'pie',
            radius: '70%',
            label: {
              show: true,
              position: 'outer',
              formatter: '{b}:{c}天',
              textStyle: {
                color: '#fff', // 设置字体颜色
                fontSize: 16 // 设置字体大小
              }
            },
            data: [
              { value: 20, name: '正常', itemStyle: { color: 'rgb(24, 144, 255)' } },
              { value: 10, name: '异常', itemStyle: { color: 'rgb(199, 49, 128)' } },

            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0,0)',

              },

            }
          }
        ]
      })
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  }
}
</script>

<style lang="less" scoped>
.chart06 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .shanMap {
    flex: 4;

  }

  .text {
    flex: 1;

    ul {
      width: 100%;
      height: 100%;
      display: flex;

      li {
        flex: 1;
        border-right: 1px solid rgb(15, 160, 168);
        cursor: pointer;
        text-align: center;

        &:hover {
          .name {
            color: rgb(24, 144, 255);
          }
        }

        &:last-child {
          border-right: none;
        }

        .name {
          font-size: 1.5rem;
          color: #fff;
        }

        .type {
          font-size: 1.8rem;
          color: green;
        }

        .typeRed {
          color: red;
          font-size: 1.8rem;
        }
      }
    }
  }
}

::v-deep .el-dialog:not(.is-fullscreen) {
  // margin-top: 12vh !important;

}
</style>