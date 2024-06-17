<template>
  <div class="tableTop board">
    <div
      style="font-size: 25px; font-weight: 600; border: 2px solid rgb(3, 168, 52);padding: 20px; text-align: center;margin-bottom: 30px;">
      <div>
        厨余垃圾资源转化率&nbsp;
        <span
          style="color: beige; display: inline-block; padding:3px 5px;background-color: #6af1a7;border-radius: 3px; margin: 0 2px;">1</span>
        <span
          style="color: beige; display: inline-block; padding:3px 5px;background-color: #6af1a7;border-radius: 3px; margin: 0 2px;">0</span>
        <span
          style="color: beige; display: inline-block; padding:3px 5px;background-color: #6af1a7;border-radius: 3px; margin: 0 2px;">0</span>
        <span style="color: beige;margin: 0 2px;">%</span>
      </div>
      <!-- <div style="flex: 1;">
        累计参观人数&nbsp;
        <span
          style="color: beige; display: inline-block; padding:3px 5px;background-color: #6af1a7;border-radius: 3px; margin: 0 2px;">5</span>
        人
      </div> -->
    </div>
    <div style=" display: flex;justify-content: space-around;  font-size: 16px; font-weight: 600; margin:
        20px 0;">
      <!-- <img style="width: 20%;height: 55%;" src="@/assets/images/黑水虻-removebg-preview.png" alt=""> -->
      <div>
        <div>
          <div style="margin-bottom: 10px;">
            <span
              style="display: inline-block; width: 10px; height: 10px; background-color: rgb(246, 242, 8);margin-right: 2px;"></span>
            日处理量
          </div>
          <span style="color: aliceblue;margin-left: 5px;">{{ tableData.cyll || 100 }} </span>(kg)
        </div>
        <div style="margin-top: 40px;">
          <div style="margin-bottom: 10px;">
            <span
              style="display: inline-block; width: 10px; height: 10px; background-color: rgb(9, 111, 236);margin-right: 2px;"></span>
            累计处理量
          </div>
          <span style="color: aliceblue;margin-left: 5px;">{{ tableData.cyll || 100 }} </span>(kg)
        </div>
      </div>
      <div style="border-left: 1px dashed green; padding-left: 10px;">
        <div>
          <div style="margin-bottom: 10px;">
            <span
              style="display: inline-block; width: 10px; height: 10px; background-color: rgb(105, 252, 105);margin-right: 2px;"></span>
            日再生产品(虫)产量
          </div>
          <span style="color: aliceblue;margin-left: 5px;">{{ tableData.ccs || 100 }} </span>(kg)
        </div>
        <div style="margin-top: 40px;">
          <div style="margin-bottom: 10px;">
            <span
              style="display: inline-block; width: 10px; height: 10px; background-color: rgb(248, 107, 72);margin-right: 2px;"></span>

            累计再生产品(虫)产量
          </div>
          <span style="color: aliceblue;margin-left: 5px;">{{ tableData.ccs || 100 }} </span>(kg)
        </div>
      </div>
      <div style="border-left: 1px dashed green; padding-left: 10px;">
        <div>
          <div style="margin-bottom: 10px;">
            <span
              style="display: inline-block; width: 10px; height: 10px; background-color: rgb(244, 20, 173);margin-right: 2px;"></span>
            日再生产品(虫沙)产量
          </div>
          <span style="color: aliceblue;margin-left: 5px;">{{ tableData.scsl || 100 }} </span>(kg)
        </div>
        <div style="margin-top: 40px;">
          <div style="margin-bottom: 10px;">
            <span
              style="display: inline-block; width: 10px; height: 10px; background-color: rgb(37, 6, 133);margin-right: 2px;"></span>
            累计再生产品(虫沙)产量
          </div>
          <span style="color: aliceblue;margin-left: 5px;">{{ tableData.scsl || 100 }} </span>(kg)
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import { getTableTopList } from '@/api/screen/tableTop.js';
export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getTableTopList()
  },
  methods: {
    async getTableTopList() {
      await getTableTopList().then(res => {
        if (res.code === 200) {
          this.tableData = res.rows[0]
          // console.log('this.tableData', res);
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.tableTop {
  width: 100%;
  height: 100%;
  padding: 2%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.board::-webkit-scrollbar {
  height: 4px;
}

.board::-webkit-scrollbar-thumb {
  background-color: rgb(104, 186, 114);
  /* 滚动条颜色 */
}

.board::-webkit-scrollbar-track {
  background-color: rgb(104, 186, 114);
  /* 滚动条轨道背景色 */
}
</style>

<!-- .tableTop {
  width: 100%;
  height: 100%;
  padding: 2%;
  overflow: auto;
}
.tableTop ::v-deep .el-table th.el-table__cell,
::v-deep .el-table th,
::v-deep .el-table tr {
  background-color: transparent !important;
  color: rgba(0, 0, 0, 0.8);
}
::v-deep .el-table,
.el-table__expanded-cell {
  background-color: transparent !important;
  color: #fff;

}
/**
改变边框颜色
 */
 ::v-deep .el-table--border,
.el-table--group {
  border: 2px solid rgb(208, 250, 186) !important;
}

/**
改变表格内竖线颜色
 */
::v-deep .el-table--border td,
.el-table--border th,
.el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
  border-right: 1px solid rgb(208, 250, 186) !important;
}

/**
改变表格内行线颜色
 */
::v-deep .el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid rgb(208, 250, 186) !important;
}

::v-deep .el-table thead tr th {
  border-color: rgb(208, 250, 186);

}

::v-deep .el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border-bottom: 1px solid rgb(208, 250, 186) !important;
}

::v-deep .el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: rgb(208, 250, 186);
}

::v-deep .el-table--border th.el-table__cell,
.el-table__fixed-right-patch {
  border-bottom: 1px solid rgb(208, 250, 186) !important;
}
::v-deep .el-table th.el-table__cell {
  font-size: 0.1rem;
}
::v-deep .el-table tbody tr:hover>td {
  background-color: rgb(126, 192, 80) !important;
  color: #fff;
}
/* 隐藏滚动条 */
::-webkit-scrollbar {
  width: 0.5em;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

/* 当滚动条被激活时才显示 */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>  -->