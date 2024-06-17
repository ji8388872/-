<template>
  <div class="content">
    <div class="title">
      <slot name="Title">
        
      </slot>
    </div>
    <div class="btn">
      <slot name="btn"></slot>
    </div>
    <div class="chartMap">
      <slot name="charts"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .title {
    position: absolute;
    top: -5%;
    left: 50%;
    transform: translate(-50%);
    font-size: 1.8rem;
    font-family: Arial, sans-serif;
    color: #fff; 
    text-align: center; 
    text-transform: uppercase; 
    letter-spacing: 1px; 
  }

  .btn {
    flex: 1;
    border: none;
   

    .el-row {
      width: 100%;
      height: 100%;
      padding-bottom: 3rem;
      padding-left: 3rem;
    }

  }

  .chartMap {
    flex: 20;
  }
}
</style>