<template>
  <div class="block">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-date-picker v-model="yearValue" type="year" placeholder="选择年" value-format="yyyy">
        </el-date-picker>
      </el-col>
      <el-col :span="8">
        <el-cascader @change="changeMonth(monthValue)" :options="monthOpt" v-model="monthValue" clearable
          placeholder="选择月" style="margin-left: 0.45rem;">
        </el-cascader>
      </el-col>
      <el-col :span="8">
        <el-cascader @change="changeDay(dayValue)" :options="dayOpt" v-model="dayValue" clearable placeholder="选择日">
        </el-cascader>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      yearValue: String(new Date().getFullYear()),
      monthValue: [parseInt(String(new Date().getMonth() + 1))],
      monthOpt: [
        { value: 1, label: '一月' },
        { value: 2, label: '二月' },
        { value: 3, label: '三月' },
        { value: 4, label: '四月' },
        { value: 5, label: '五月' },
        { value: 6, label: '六月' },
        { value: 7, label: '七月' },
        { value: 8, label: '八月' },
        { value: 9, label: '九月' },
        { value: 10, label: '十月' },
        { value: 11, label: '十一月' },
        { value: 12, label: '十二月' }
      ],
      dayOpt: [],
      dayValue: [parseInt(String(new Date().getDate()))],
    }
  },
  created() {
    this.updateDays(this.yearValue, this.monthValue[0]);
  },
  watch: {
    yearValue(newVal) {
      if (newVal) {
        this.monthValue = ''; // 清空月份
        this.dayValue = ''; // 清空日期
        this.SET_YEARTIME(newVal);
        this.SET_MONTHTIME([]);
        this.SET_DAY([]);
        this.dayOpt = []
        console.log('111');

      }
    },
    monthValue(newVal) {
      if (newVal.length > 0) {
        this.dayValue = ''; // 清空日期
        this.SET_MONTHTIME(newVal[0]);
        this.SET_DAY([]);
        console.log('222');

      }
    },
    dayValue(newVal) {
      if (newVal.length > 0) {
        this.SET_DAY(newVal[0]);
        console.log('333');

      }
    },
  },
  computed: {
    ...mapState("time", ["yearTime", "monthTime", "day"]),
  },
  methods: {
    ...mapMutations('time', ['SET_YEARTIME', 'SET_MONTHTIME', 'SET_DAY']),
    changeMonth(value) {
      this.updateDays(this.yearValue, value[0]);
    },
    changeDay(value) {
      // this.SET_DAY(value[0]);
    },
    updateDays(year, month) {
      if (year && month) {
        const daysInMonth = new Date(year, month, 0).getDate();
        this.dayOpt = Array.from({ length: daysInMonth }, (_, i) => ({
          value: i + 1,
          label: `${i + 1}日`
        }));
      } else {
        this.dayOpt = [];
      }
    }
  }
}
</script>

<style lang="less" scoped>
.block {
  position: absolute;
  top: 65%;
  left: 1%;

  ::v-deep .el-input__inner {
    background-color: rgb(17, 38, 55);
    border: 2px solid #409eff;
    height: 2.5rem;
    color: #fff;
  }
}
</style>
