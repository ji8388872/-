<template>
  <div class="app-container home">
    <el-card>
      <el-row :gutter="20">
        <!-- 左侧图片 -->
        <el-col :span="16">
          <img src="@/assets/images/首页.jpg" alt="" style="width: 100%; height: 250px;">
        </el-col>

        <!-- 右侧通知公告 -->
        <el-col :span="8">
          <el-scrollbar style="height: 250px; padding: 10px;">
            <span>通知公告：</span>
            <el-divider></el-divider>
            <div v-for="(item, index) in notices" :key="index" class="notice-item">
              <el-alert :title="item" type="info" show-icon :closable="false" />
            </div>
          </el-scrollbar>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="cordShow">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-row :gutter="20">

            <el-row :gutter="20">
              <el-col :span="12">
                <!--                <div class="grid-content bg-purple">设备情况:</div>-->

                <div class="grid-content" :class="deviceStatus === 'normal' ? 'bg-normal' : 'bg-warning'">
                  设备情况:
                  <div v-if="deviceStatus === 'normal'">正常</div>
                  <div v-else>
                    <p>状态: 异常</p>
                    <p>是否解决: {{ deviceErrorInfo.isResolve }}</p>
                    <p>设备故障名称: {{ deviceErrorInfo.equipmentName }}</p>
                    <p>故障维修人员: {{ deviceErrorInfo.maintenancePersonnel }}</p>
                    <p>维修时间: {{ deviceErrorInfo.maintenanceTime }}</p>
                  </div>
                </div>

              </el-col>
              <el-col :span="12">
                <!--                <div class="grid-content bg-purple">环境情况:</div>-->
                <div class="grid-content" :class="environmentStatus === 'normal' ? 'bg-normal' : 'bg-warning'">
                  环境情况:
                  <div v-if="environmentStatus === 'normal'">正常</div>
                  <div v-else>
                    <p>状态: 异常</p>
                    <p>是否解决: {{ environmentErrorInfo.isResolve }}</p>
                    <p>环境问题: {{ environmentErrorInfo.environmentalIssues }}</p>
                    <p>解决人员: {{ environmentErrorInfo.maintenancePersonnel }}</p>
                    <p>解决时间: {{ environmentErrorInfo.maintenanceTime }}</p>
                  </div>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="12">
                <!--                <div class="grid-content bg-purple">安全情况:</div>-->
                <!--                <div class="grid-content bg-purple" :class="safetyStatus === 'normal' ? 'bg-normal' : 'bg-warning'">-->
                <!--                  安全情况:-->
                <!--&lt;!&ndash;                  <div v-if="safetyStatus === 'normal'">正常</div>&ndash;&gt;-->
                <!--                  <div v-if="safetyStatus === 'normal'">正常</div>-->
                <!--                  <div v-else>-->
                <!--                    <p>状态: 异常</p>-->
                <!--                    <p>是否解决: {{ safetyErrorInfo.isResolve }}</p>-->
                <!--                    <p>隐患问题: {{ safetyErrorInfo.reason }}</p>-->
                <!--                    <p>解决办法: {{ safetyErrorInfo.solution }}</p>-->
                <!--                    <p>解决时间: {{ safetyErrorInfo.maintenanceTime }}</p>-->
                <!--                  </div>-->
                <!--                </div>-->

                <div class="grid-content bg-purple" :class="safetyStatus === 'normal' ? 'bg-normal' : 'bg-warning'"
                  @mouseenter="showDetails = true" @mouseleave="showDetails = false">
                  <div v-if="safetyStatus === 'normal'">安全情况: 正常</div>
                  <div v-else>
                    <div v-if="!showDetails">安全情况: 异常</div>
                    <div v-show="showDetails">
                      <p>状态: 异常</p>
                      <p>是否解决: {{ safetyErrorInfo.isResolve }}</p>
                      <p>隐患问题: {{ safetyErrorInfo.reason }}</p>
                      <p>解决办法: {{ safetyErrorInfo.solution }}</p>
                      <p>解决时间: {{ safetyErrorInfo.maintenanceTime }}</p>
                    </div>
                  </div>
                </div>
              </el-col>

              <el-col :span="12">
                <div class="grid-content bg-purple">外部检查参观情况:</div>
              </el-col>
            </el-row>

          </el-row>
        </el-col>

        <el-col :span="14">
          <div id="main" style="width:750px;height:350px;"></div>
        </el-col>

      </el-row>

    </el-card>

  </div>
</template>

<script>
// 导入echarts
import * as echarts from 'echarts'
export default {
  name: "Index",
  data() {
    return {
      showDetails: false,
      // 状态信息
      deviceStatus: 'normal', // 或 'abnormal'
      environmentStatus: 'abnormal', // 或 'normal'
      safetyStatus: 'abnormal', // 或 'abnormal'
      inspectionStatus: 'abnormal', // 或 'normal'
      // 异常详细信息
      // 设备情况
      deviceErrorInfo: {
        isResolve: '是否解决',
        equipmentName: '设备故障名称xxx',
        maintenancePersonnel: '故障维修人员xxx',
        maintenanceTime: '2024-08-22'

      },
      // 环境情况
      environmentErrorInfo: {
        isResolve: '是否解决',
        environmentalIssues: '空气质量指数超标',
        maintenancePersonnel: '解决人员xxx',
        maintenanceTime: '2024-08-22'
      },
      // 安全情况
      safetyErrorInfo: {
        isResolve: '是否解决',
        reason: '隐患问题',
        solution: '解决办法',
        maintenanceTime: '2024-08-22'
      },
      //  外部检查参观情况
      inspectionErrorInfo: {
        Unit: '单位',
        peopleCounts: 3,
        reason: '问题情况'
      },

      // 版本号
      version: "3.8.6",
      notices: [
        '公告1：欢迎访问我们的平台！',
        '公告2：系统将在今晚12点维护。',
        '公告3：新功能上线，敬请期待！'
      ],
      option: {
        color: '#83bff6',
        title: {
          text: '人员成本统计'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70],
            type: 'bar'
          }
        ]
      },
    };
  },
  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    },

  },
  mounted() {
    // 3 。 在页面挂载完成后，调用echarts的init方法，将图表初始化
    var myChart = echarts.init(document.getElementById('main'))

    // 4 准备数据和配置项
    // var result = res.data
    const option = this.option

    // 5 展示数据
    myChart.setOption(option)
  }
};
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }

  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans",
  "Helvetica Neue",
  Helvetica,
  Arial,
  sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}

.notice-item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cordShow {
  margin-top: 20px;

  .el-col {
    padding: 10px;
    margin-bottom: 50px;
  }

  .bg-purple {
    background-color: #83bff6;
    height: 100px;
    border-radius: 4px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
  }
}

.bg-normal {
  background-color: #67c23a;
  /* 正常状态绿色背景 */
}

.bg-warning {
  background-color: #f56c6c;
  /* 异常状态红色背景 */
}

//.detailed-info {
//  margin-top: 10px;
//}
//
//.default-text {
//  line-height: 50px; /* 垂直居中 */
//}</style>
