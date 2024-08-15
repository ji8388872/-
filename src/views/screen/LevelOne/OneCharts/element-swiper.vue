<template>
  <div style="width: 100%; height: 80%;">
    <el-carousel :interval="4000" type="card" height="20rem">
      <el-carousel-item v-for="item in images" :key="item.id">
        <img :src="item.url" alt="" @dblclick="showImage(item.url)" />
      </el-carousel-item>
    </el-carousel>
    <div class="btn">
      <el-button type="success" round size="medium" @click="ToggleEvent(1)">产品展示</el-button>
      <el-button type="success" round size="medium" @click="ToggleEvent(2)">场景溯源</el-button>
      <el-button type="success" round size="medium" @click="ToggleEvent(3)">用户报告</el-button>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="50%">
      <img :src="currentImageUrl" alt="" style="width: 100%;" />
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [],
      images1: [
        { id: 1, url: require('@/assets/images/str1.png') },
        { id: 2, url: require('@/assets/images/str2.png') },
        { id: 3, url: require('@/assets/images/str3.png') },
        { id: 4, url: require('@/assets/images/str4.png') },
        { id: 5, url: require('@/assets/images/str5.png') },
        { id: 6, url: require('@/assets/images/str6.png') },
        { id: 7, url: require('@/assets/images/str7.png') },
        { id: 8, url: require('@/assets/images/str8.png') },


      ],
      images2: [
        { id: 1, url: require('@/assets/images/hds1.png') },
        { id: 2, url: require('@/assets/images/hds2.png') },
        { id: 3, url: require('@/assets/images/hds3.png') },
        { id: 4, url: require('@/assets/images/hds4.png') },

      ],

      images3: [
        { id: 1, url: require('@/assets/images/sss1.png') },
        { id: 2, url: require('@/assets/images/sss2.png') },
        { id: 3, url: require('@/assets/images/sss3.png') },

      ],
      dialogVisible: false,
      currentImageUrl: ''
    }
  },
  mounted() {
    this.images = this.images1
  },
  methods: {
    // 图片切换
    ToggleEvent(type) {
      if (type == 1) {
        this.images = this.images1
      } else if (type == 2) {
        this.images = this.images2
      } else {
        this.images = this.images3
      }
    },
    showImage(url) {
      this.currentImageUrl = url;
      this.dialogVisible = true;
    }
  }
}
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;

}

::v-deep .el-carousel__container {
  height: 26rem !important;
}

::v-deep .el-carousel__button {
  background-color: #fff;
  width: 1.5625rem;
}

::v-deep .el-dialog__body {
  height: 60rem;
  overflow: hidden;
  padding: 1rem;
}

::v-deep .el-dialog:not(.is-fullscreen) {
  margin-top: 15vh !important;

}

.btn {
  display: flex;
  justify-content: space-around;
  border: none;

  .el-button {
    width: 10rem;
    height: 4.2rem;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
}
</style>