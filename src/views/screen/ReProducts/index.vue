<template>
  <layout>
    <template #title>
      再生产品出入库
    </template>
    <template #oneLevel>
      一级
    </template>
    <template #back>
      返回
    </template>
    <dv-border-box-2 :color="['rgb(4, 155, 214)', 'green']">
      <div class="mainChart">
        <Re_charts>

        </Re_charts>
      </div>
    </dv-border-box-2>
  </layout>
</template>

<script>
import layout from '@/components/screen/layout.vue'
import Re_charts from '@/views/screen/ReProducts/Re_charts/index.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    layout,
    Re_charts

  }
}
</script>

<style lang="less" scoped>
.mainChart {
  width: 100%;
  height: 100%;
  padding: 0.5rem;
}
</style>