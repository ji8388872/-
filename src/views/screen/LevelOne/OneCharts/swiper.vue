<template>
  <div class="main">
    <div class="title">
      <dv-border-box-12>
        <div class="content">
          <i class="iconfont icon-zuixindongtai">
          </i>
          <span class="text">
            <span>
              获得“全国生态文明校园”荣誉称号!
            </span>
          </span>
        </div>
      </dv-border-box-12>
    </div>

    <div style="width: 100%; height: 90%;flex: 20;">
      <el-carousel :interval="4000" height="25rem">
        <el-carousel-item v-for="item in images" :key="item.id">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        { id: 1, url: require('@/assets/images/hd1.png') },
        { id: 2, url: require('@/assets/images/hd2.png') },
        { id: 3, url: require('@/assets/images/hd3.png') },
        { id: 4, url: require('@/assets/images/hd4.png') },
        { id: 5, url: require('@/assets/images/hd5.png') },
        { id: 6, url: require('@/assets/images/hd6.png') },
        { id: 7, url: require('@/assets/images/hd7.png') },

      ],
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .title {
    flex: 3;
    overflow: hidden;
    transform: translateY(-10%);
    margin: 0 1rem;

    .content {
      width: 100%;
      height: 100%;
      flex-direction: row;
      display: flex;
      align-items: center;
      padding: 0 0.5rem;

      .iconfont {
        flex: 1;
        line-height: 170%;
        font-weight: 400;
        color: #fff;

        font-size: 3rem;
        z-index: 999;
      }

      .text {
        flex: 6;
        //  background-color: #fff;
        font-size: 1.5rem;
        // 
        // white-space: nowrap;
        /* 防止文本换行 */
        z-index: -1;
        overflow: hidden;

        span {
          //  width: 30rem;;
          animation: moveLeft 10s linear infinite;
          display: inline-block;
          white-space: nowrap;

        }
      }
    }
  }
}



@keyframes moveLeft {
  0% {
    transform: translateX(100%);
    /* 初始位置，向右移动超出盒子外 */
  }

  100% {
    transform: translateX(-100%);
    /* 终点位置，向左移动超出盒子外 */
  }
}

img {
  width: 100%;
  height: 100%;

}

::v-deep .el-carousel__container {
  height: 34rem !important;
}

::v-deep .el-carousel__button {
  background-color: #fff;
  width: 1.5625rem;
}
</style>