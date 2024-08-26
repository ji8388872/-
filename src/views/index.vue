<template>
  <div style="margin: 20px">
    <div>
      <el-row :gutter="20">
        <el-col :span="18">
          <img style="width: 100%; height: 30vh;" src="@/assets/images/首页.jpg" alt="">
        </el-col>
        <el-col :span="6">
          <el-card class="box-card" style="height: 30vh;">
            <div slot="header" class="clearfix">
              <span style="font-size:1.05rem;font-weight: 600; ">通知公告</span>
            </div>
            <div style="font-size: 1.13rem;font-weight: 600; color: #696a6e">
              关于2024年度生态教室主题大屏管理系统升级的通知，黑水虻已日产日清，请各位老师及学生关注详细信息，例如：来料量、处理量，产率等。
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div style="margin: 10px 0">
      <el-row :gutter="15">
        <el-col :span="12">
          <el-row :gutter="10">
            <el-col :span="12">
              <el-card class="box-card" style="height: 29vh;">
                <div slot="header" class="clearfix">
                  <span style="font-size:1.05rem;font-weight: 600; ">设备情况</span>
                </div>
                <div class="spanContent">
                  <div class="spanConDiv1">
                    <span class="spanTitle">目前是否解决：</span> 是
                  </div>
                  <div class="spanConDiv2">
                    <span class="spanTitle">故障设备名称：</span> 摄像机
                  </div>
                  <div class="spanConDiv2">
                    <span class="spanTitle">故障修理人员：</span> 李宁泽
                  </div>
                  <div class="spanConDiv2">
                    <span class="spanTitle">维修时间：</span> 1h
                  </div>
                </div>
              </el-card></el-col>
            <el-col :span="12">
              <el-card class="box-card" style="height: 29vh;">
                <div slot="header" class="clearfix">
                  <span style="font-size:1.05rem;font-weight: 600; ">环境情况</span>
                </div>
                <div class="spanContent">
                  <div class="spanConDiv1">
                    <span class="spanTitle">目前是否解决：</span> 是
                  </div>
                  <div class="spanConDiv2">
                    <span class="spanTitle">环境问题：</span> 水污染
                  </div>
                  <div class="spanConDiv2">
                    <span class="spanTitle">解决人员</span> 李宁泽
                  </div>
                  <div class="spanConDiv2">
                    <span class="spanTitle">解决时间：</span> 1h
                  </div>
                </div>
              </el-card></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12"><el-card class="box-card" style="height: 29vh;">
                <div slot="header" class="clearfix">
                  <span style="font-size:1.05rem;font-weight: 600; ">安全情况</span>
                </div>
                <div class="spanContent">
                  <div class="spanConDiv1">
                    <span class="spanTitle">目前是否解决：</span> 是
                  </div>
                  <div class="spanConDiv2">
                    <span class="spanTitle">隐患问题：</span> 水污染
                  </div>
                  <div class="spanConDiv2">
                    <span class="spanTitle">解决办法：</span> 换水
                  </div>
                  <div class="spanConDiv2">
                    <span class="spanTitle">解决时间：</span> 1h
                  </div>
                </div>
              </el-card></el-col>
            <el-col :span="12"><el-card class="box-card" style="height: 29vh;">
                <div slot="header" class="clearfix">
                  <span style="font-size:1.05rem;font-weight: 600; ">外部检查参观情况</span>
                </div>
                <div class="spanContent">
                  <div class="spanConDiv1">
                    <span class="spanTitle">单位：</span> 中科智禾有限公司
                  </div>
                  <div class="spanConDiv2">
                    <span class="spanTitle">人数：</span> 2
                  </div>
                  <div class="spanConDiv2">
                    <span class="spanTitle">问题情况：</span> 没问题
                  </div>
                </div>
              </el-card></el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <div id="main" style="height:58vh; box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2); padding: 0.8rem;"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// 导入echarts
import * as echarts from 'echarts'
export default {
  name: "Index",
  data() {
    return {


    };
  },

  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      var myChart = echarts.init(document.getElementById('main'))
      const option = {
        title: {
          text: '人员成本统计(工时)',
          left: 'center',
          top: 15,
        },
        color: '#83bff6',

        // 提示框配置
        tooltip: {
          trigger: "axis", // 提示框触发的条件，"axis" 表示触发时会显示整个坐标轴的提示框
          axisPointer: {
            type: "cross", // 坐标轴指示器的类型，"cross" 表示十字交叉线
            crossStyle: {
              color: "#6a7985", // 指示器的颜色
            },
            label: {
              backgroundColor: "#6a7985", // 提示框背景色
              formatter: function (params) {
                // 提示框内容的格式化函数
                return params.value + "号"; // 显示的数据后面加上"号"
              },
            },
          },
        },
        // 图例配置
        legend: {
          top: "20%", // 图例的位置，距离顶部0%
          right: "20%", // 图例的位置，距离右侧20%
          show: false, // 是否显示图例，false表示不显示
          textStyle: {
            color: "rgba(255,255,255,.9)", // 图例文字的颜色
            fontSize: 15, // 图例文字的字体大小
          },
        },
        // 网格配置
        grid: {
          left: "20", // 网格距离左侧的距离
          top: "80", // 网格距离顶部的距离
          right: "20", // 网格距离右侧的距离
          bottom: "20", // 网格距离底部的距离
          containLabel: true, // 是否包含坐标轴刻度标签
        },

        xAxis: {
          type: 'category',
          data: ['2024-7-19', '2024-7-18', '2023-7-19', '2024-6', '2023-7'],
          axisLabel: {
            fontSize: 15, // X轴刻度标签的字体大小
          },
          axisPointer: {
            type: "shadow", // 坐标轴指示器的类型，"shadow" 表示阴影
          },
        },
        yAxis: {
          type: 'value',
          name: "(h)", // Y轴名称
          interval: 20, // Y轴刻度间隔
          axisLabel: {
            fontSize: 15, // Y轴刻度标签的字体大小
          },
        },
        series: [
          {
            data: [70.7, 75.6, 82.2, 48.7, 18.8],
            type: 'bar',
            name: "工时", // 数据系列的名称
            barWidth: '50%', // 柱状图的宽度
            tooltip: {
              valueFormatter: function (value) {
                // 提示框内容的格式化函数
                return value + " h"; // 显示的数据后面加上"kg"
              },
            },
            lineStyle: {
              // 修改柱状图的颜色
              color: "rgb(145, 204, 117)", // 柱状图的颜色
            },
            markPoint: {
              data: [
                { type: "max", name: "Max" }, // 标记最大值
                { type: "min", name: "Min" }, // 标记最小值
              ],
            },
            markLine: {
              data: [
                {
                  type: "average", // 标记平均值
                  name: "均值", // 标记名称
                  label: {
                    position: "middle", // 标签位置
                    formatter: "均值：{c} ", // 标签格式
                    color: "#1907ef", // 标签颜色
                  },
                },
              ],
            },
          }
        ]
      }

      // 5 展示数据
      myChart.setOption(option)

    }
  },
};
</script>

<style lang="less" scoped>
.spanTitle {
  font-size: 1.1rem;
  color: rgb(65, 64, 76);
  font-weight: 500;
}

.spanContent {
  font-size: 1.2rem;
  color: #38322e;
  font-weight: 500;
  line-height: 2.5rem;

}

.spanConDiv1 {
  color: #f0455ff5;
  font-weight: 550;
}

.spanConDiv2 {
  color: #1a9ca0;
  font-weight: 550;
}
</style>