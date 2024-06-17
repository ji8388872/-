<template>
  <div style="width: 100%; height: 80%;">
    <el-carousel :interval="4000" type="card" height="20rem">
      <el-carousel-item v-for="item in images" :key="item.id" >
        <img :src="item.url" alt="" @dblclick="showImage(item.url)"/>
      </el-carousel-item>
    </el-carousel>
    <div class="btn">
      <el-button type="success" round size="medium" @click="ToggleEvent(1)">生态课堂</el-button>
      <el-button type="success" round size="medium" @click="ToggleEvent(2)">活动瞬间</el-button>
      <el-button type="success" round size="medium" @click="ToggleEvent(3)">随手小记</el-button>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="50%" >
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
        { id: 1, url: require('@/assets/images/st1.png') },
        { id: 2, url: require('@/assets/images/st2.png') },
        { id: 3, url: require('@/assets/images/st3.png') },
        { id: 4, url: require('@/assets/images/st4.png') },
        { id: 5, url: require('@/assets/images/st5.png') },
        { id: 6, url: require('@/assets/images/st6.png') },
        { id: 7, url: require('@/assets/images/st7.png') },
        { id: 8, url: require('@/assets/images/st8.png') },
        { id: 9, url: require('@/assets/images/st9.png') },


      ],
      images2: [
        { id: 1, url: require('@/assets/images/hd1.png') },
        { id: 2, url: require('@/assets/images/hd2.png') },
        { id: 3, url: require('@/assets/images/hd3.png') },
        { id: 4, url: require('@/assets/images/hd4.png') },
        { id: 5, url: require('@/assets/images/hd5.png') },
        { id: 6, url: require('@/assets/images/hd6.png') },
        { id: 7, url: require('@/assets/images/hd7.png') },

      ],

      images3: [
        { id: 1, url: require('@/assets/images/ss1.png') },
        { id: 2, url: require('@/assets/images/ss2.png') },
        { id: 3, url: require('@/assets/images/ss3.png') },
        { id: 4, url: require('@/assets/images/ss4.png') },
        { id: 5, url: require('@/assets/images/ss5.png') },
        { id: 6, url: require('@/assets/images/ss6.png') },
        { id: 7, url: require('@/assets/images/ss7.png') },
        { id: 8, url: require('@/assets/images/ss8.png') },
        { id: 9, url: require('@/assets/images/ss9.png') },
        { id: 10, url: require('@/assets/images/ss10.png') },
        { id: 11, url: require('@/assets/images/ss11.png') },

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
  height: 50rem;
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