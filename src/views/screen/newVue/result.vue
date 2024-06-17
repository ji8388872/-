<template>
  <div class="result">
    <div class="bjRank" @click="BjdialogVisible = true">
      <!-- <bjRankVue></bjRankVue> -->
      <bjRank2 :rank="allBj"></bjRank2>
    </div>
    <div class="top">
      <div class="rate">
        <span class="iconfont icon-a_qd-shiming "></span>
        <h3>总正确率</h3>
        <span class="iconfont icon-a_qd-shiming "></span>
      </div>
      <div class="num">{{ (Choice.zqd / (Choice.zqd + Choice.cud) * 100).toFixed(2) }} <span>%</span></div>
    </div>
    <div class="bot">
      <div class="left">
        <div>{{ Choice.zqd > 0 ? `${Choice.zqd}` : '0' }} <span>题</span></div>
        <div>答对</div>
      </div>
      <div class="right">
        <div>{{ Choice.cud > 0 ? `${Choice.cud}` : '0' }} <span>题</span></div>
        <div>答错</div>
      </div>
    </div>
    <!-- <ul class="bj" @click="BjdialogVisible = true">
      <h4>班级排名</h4>
      <li class="iconfont icon-diyiming1"><span>{{ allBj[0] }}</span>
       
      </li>
      <li class="iconfont icon-dierming1"><span>{{ allBj[1] }}</span>
      
      </li>
      <li class="iconfont icon-a-zu8275"><span>{{ allBj[2] }}</span> 
     
    </li>
    </ul> -->
    <el-dialog title="班级排名" :visible.sync="BjdialogVisible" width="40%" custom-class="dialog">

      <el-table :data="tableData" stripe style="width: 100%;text-align: center;">
        <el-table-column type="index" label="排名" width="150" align="center">
        </el-table-column>
        <el-table-column prop="bj" label="班级" align="center">
        </el-table-column>
        <el-table-column prop="zql" label="准确率" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.zql > 60 ? 'success' : 'danger'">{{ scope.row.zql }}%</el-tag>
          </template>
        </el-table-column>
      </el-table>

      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="BjdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="BjdialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
import bus from '@/utils/evenBus.js'
import { getResultList } from '@/api/screen/result.js'
import { getRankList } from '@/api/screen/ranking.js'
import bjRankVue from './test/bjRank.vue'
import bjRank2 from '@/views/screen/newVue/test/bjRank2'
export default {
  data() {
    return {
      Choice: {},
      allBj: [],
      BjdialogVisible: false,
      tableData: [],
      fRank: '',//前三名准确率
      sRank: '',
      tRank: '',
      
    }
  },
  components: {
    bjRankVue,
    bjRank2
  },
  created() {
    this.getRank()
    this.getChoice()
  },
  mounted() {

    bus.$on('updateGame', (val) => {
      this.Choice = val
      // console.log('val', val);
    })
  },
  methods: {
    async getChoice() {
      await getResultList().then(res => {
        if (res.code === 200) {
          this.Choice = res.rows[0]
        }
      })

    },
    // 获取排名班级
    async getRank() {
      await getRankList().then(res => {

        if (res.code === 200) {
          this.allBj = res.rows.map(item => {
            return item.bj
          })
          // 获取所有排名
          this.tableData = res.rows
          this.fRank = this.tableData[0].zql
          this.sRank = this.tableData[1].zql
          this.tRank = this.tableData[2].zql
          // console.log('res.rows', this.tableData);

        }
      })
    },
  }
}
</script>

<style lang="less" scoped>
.result {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  flex-wrap: nowrap;
  position: relative;
  // padding-left: 2rem; 


  .bj {
    position: absolute;
    top: 25%;
    left: 0%;
    font-family: "Hiragino Sans GB";
    color: aliceblue;

    h4 {
      cursor: pointer;
      // color: rgb(34, 119, 172);
      // text-align: center;
      font-size: 1.2rem;
      color: rgba(255, 215, 0, 1);

      &:hover {
        color: rgb(117, 251, 253);
      }
    }

    li {
      list-style: none;
      color: rgba(255, 215, 0, 1);
      font-size: 1rem;
      cursor: pointer;

      span {
        font-size: 1rem;
        padding-right: 0.7rem;
      }

      &:hover {
        color: rgb(117, 251, 253);
      }
    }
  }

  ::v-deep .el-table {
    max-height: 45rem;
    overflow-y: auto;
  }

  .bjRank {
    flex: 5;
    display: flex;
  
    align-items: center;
    justify-content: center;
    z-index: 999;
  }

  .top {
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .rate {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: nowrap;

      h3 {
        font-size: 2.2rem;
        color: rgb(34, 119, 172);
        margin: 0;
        padding: 0 0.5rem;
      }

      .iconfont {
        font-size: 2.4rem;
        color: aqua;
      }
    }

    .num {
      font-size: 3.5rem;
      font-weight: 700;
      color: rgb(196, 250, 232);


      span {
        font-size: 3rem;
      }
    }
  }

  .bot {
    flex: 2;

    flex-direction: row;
    display: flex;
    flex-direction: nowrap;
    // justify-content: center;
    // align-items: center;

    .left,
    .right {
      flex: 1;
      font-size: 2.8rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        font-size: 2rem;
      }

      div:nth-child(2) {
        font-size: 2rem;
      }
    }
  }
}

::v-deep .el-dialog:not(.is-fullscreen) {
  margin-top: 10% !important;
}
</style>