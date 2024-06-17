<template>
  <div class="bjRank2">
    <img src="@/assets/images/jiangtai.png" alt="" class="img">
    <span class="first">{{ rank[0] }}</span>
    <span class="scend">{{  rank[1]}}</span>
    <span class="third">{{  rank[2]}}</span>
  </div>
</template>

<script>
export default {
props: {
  rank:{
    type: Array,
    required: true

  }
}
}
</script>

<style lang="less" scoped>
.bjRank2 {
  width: 100%;
  height: 100%;
  padding: .0167rem;
  position: relative;
  cursor: pointer;
  .img {
    position: absolute;
    top: -35%;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    height: 150%;
  }
  .first,.scend,.third {
    position: absolute;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    text-shadow: 0 0 0.5rem rgb(206, 103, 19);
    &:hover {
      text-shadow: 0 0 0.5rem rgb(206, 103, 19);
      color: rgba(0, 255, 255);
    }
  }
  .first {
    top: -7%;
    left: 50%;
    transform: translate(-50%);
  }
  .scend {
    top: 0%;
    left: 5%;
  }
  .third {
    top: -4%;
    left: 65%;
  }
}
</style>