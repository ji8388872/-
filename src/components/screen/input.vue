<template>
   <div class="block">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-date-picker v-model="yearValue" type="year" placeholder="选择年" value-format="yyyy">
            </el-date-picker>
          </el-col>
          <el-col :span="12">
            <el-cascader @change="changeMonth(monthValue)" :options="monthOpt" v-model="monthValue" :show-all-levels=" false" clearable
              placeholder="选择月"></el-cascader>
          </el-col>
        </el-row>
      </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      yearValue: '',
      monthValue: [],
      monthOpt: [
        {
          value: 'chun',
          label: '第一季度',
          children: [
            {
              value: 1,
              label: '一月',
            },
            {
              value: 2,
              label: '二月',
            },
            {
              value: 3,
              label: '三月',
            }
          ]
        },
        {
          value: 'xia',
          label: '第二季度',
          children: [
            {
              value: 4,
              label: '四月',
            },
            {
              value: 5,
              label: '五月',
            },
            {
              value: 6,
              label: '六月',
            }
          ]
        },
        {
          value: 'qiu',
          label: '第三季度',
          children: [
            {
              value: 7,
              label: '七月',
            },
            {
              value: 8,
              label: '八月',
            },
            {
              value: 9,
              label: '九月',
            }
          ]
        },
        {
          value: 'dong',
          label: '第四季度',
          children: [
            {
              value: 10,
              label: '十月',
            },
            {
              value: 11,
              label: '十一月',
            },
            {
              value: 12,
              label: '十二月',
            }
          ]
        }
      ]
    }
  },
  watch: {
    yearValue(newVal, oldVal) {
      if (newVal) {
        this.SET_YEARTIME(newVal)

      }
    },
   
  },
  methods: {
    ...mapMutations('time', ['SET_YEARTIME', 'SET_MONTHTIME']),
    changeMonth(value) {
      // console.log(value[1]);
      this.SET_MONTHTIME(value[1])
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