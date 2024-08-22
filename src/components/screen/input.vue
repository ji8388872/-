<template>
  <div class="block">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-date-picker v-model="yearValue" type="year" placeholder="选择年" value-format="yyyy">
        </el-date-picker>
      </el-col>
      <el-col :span="8">
        <el-cascader @change="changeMonth(monthValue)" :options="monthOpt" v-model="monthValue" clearable
          placeholder="选择月">
        </el-cascader>
      </el-col>
      <el-col :span="8">
        <el-cascader @change="changeDay(dayValue)" :options="dayOpt" v-model="dayValue" clearable placeholder="选择日">
        </el-cascader>
      </el-col>

    </el-row>
    <div>
      {{ monthValue }}---{{ dayValue }}---
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      yearValue: '',
      monthValue: '',
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
      dayValue: '',
    }
  },
  created() {
    this.yearValue = this.yearTime;
    this.monthValue = this.monthTime;
    this.updateDays(this.yearValue, this.monthValue);
    this.dayValue = this.day;
    console.log(this.monthValue, this.dayValue);

  },
  watch: {
    yearValue(newVal) {
      if (newVal) {
        this.monthValue = ''; // 清空月份
        this.dayValue = ''; // 清空日期
        this.updateDays(newVal, null);
        this.SET_YEARTIME(newVal);
      }
    },
    monthValue(newVal) {
      if (newVal.length > 0) {
        this.dayValue = ''; // 清空日期
        this.updateDays(this.yearValue, newVal[0]);
        this.SET_MONTHTIME(newVal[0]);
      }
    },
    dayValue(newVal) {
      if (newVal.length > 0) {
        this.SET_DAY(newVal[0]);
      }
    },
  },
  computed: {
    ...mapState("time", ["yearTime", "monthTime", "day"]),
  },
  methods: {
    ...mapMutations('time', ['SET_YEARTIME', 'SET_MONTHTIME', 'SET_DAY']),
    changeMonth(value) {
      this.SET_MONTHTIME(value[0]);
      this.updateDays(this.yearValue, value[0]);
    },
    changeDay(value) {
      this.SET_DAY(value[0]);
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
  left: 2%;

  ::v-deep .el-input__inner {
    background-color: rgb(17, 38, 55);
    border: 2px solid #409eff;
    height: 2.5rem;
    color: #fff;
  }
}
</style>
