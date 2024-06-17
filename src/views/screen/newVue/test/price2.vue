<template>
  <div class="main">
    <div class="left" v-show="show">
      <el-button name="弗莱农庄有机果蔬粮茶" type="success" size="medium" round @click="getImg1">循环种植业</el-button>
      <el-button name="循环养殖业" type="success" @click="getImg2" round>循环养殖业</el-button>
      <div class="swiper" style="height: 50rem">
        <!-- <img src="@/assets/images/price1.png" alt="">
        <img src="@/assets/images/price3.png" alt=""> -->
        <el-carousel height="50rem" direction="vertical" :autoplay="true">
          <el-carousel-item v-for="(item, i) in img" :key="i">
            <img :src="item.url" alt="" style="width: 100%;padding: 0.5rem;height: 100%;">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="container" v-show="show == false && showImg1 == true">
      <h4 style="font-weight: 600;color: #000;font-size: 2rem">循环种植业(弗莱农庄有机果蔬粮茶)</h4>
      <i class="iconfont icon-exit-full" name="退出" @click="outImg1"></i>
      <div class="content">
        <div class="column">
          <img src="@/assets/images/img1.png" alt="Image 1">
        </div>
        <div class="column">
          <img src="@/assets/images/img2.png" alt="Image 2">
          <img src="@/assets/images/img3.png" alt="Image 3">
        </div>
        <div class="column">
          <img src="@/assets/images/img4.png" alt="Image 4">
          <img src="@/assets/images/img5.png" alt="Image 5">
        </div>
      </div>
    </div>
    <!-- <div class="right" v-show="show">
      <el-button name="循环养殖业" type="primary" @click="getImg2">循环养殖业</el-button>
      <div class="swiper">
       
      </div>
    </div> -->
    <div class="container2" v-show="show == false && showImg2 == true">
      <h4 style="font-weight: 600;color: #000;font-size: 2rem">循环养殖业</h4>
      <i class="iconfont icon-exit-full" name="退出" @click="outImg2"></i>

      <div class="content3" style="width: 100%;max-height: max-content;">
        <img src="@/assets/images/allimg.png" alt=""
          style="width: 100%;margin-top: 2rem;display: flex; justify-content: center;align-items: center;">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        {
          url: require("@/assets/images/price1.png")
        },
        {
          url: require("@/assets/images/price3.png")
        }
      ],
      imgs: [
        {
          url: require("@/assets/images/img1.png")
        },
        {
          url: require("@/assets/images/img2.png")
        },
        {
          url: require("@/assets/images/img3.png")
        },
        {
          url: require("@/assets/images/img4.png")
        },
        {
          url: require("@/assets/images/img5.png")
        },

      ],
      imgs2: [

        {
          url: require("@/assets/images/img7.png")
        },
        {
          url: require("@/assets/images/img8.png")
        },
        {
          url: require("@/assets/images/img9.png")
        },
        {
          url: require("@/assets/images/img6.png")
        },
        {
          url: require("@/assets/images/img10.png")
        },
        {
          url: require("@/assets/images/img11.png")
        },
      ],
      show: true,
      showImg1: false,
      showImg2: false
    }
  },
  methods: {
    getImg1() {
      this.show = false,
        this.showImg1 = true
    },
    outImg1() {
      this.show = true,
        this.showImg1 = false
    },
    getImg2() {
      this.show = false,
        this.showImg2 = true
    },
    outImg2() {
      this.show = true,
        this.showImg2 = false
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  .el-button {
    margin-bottom: 10px;
    font-weight: 600;
    padding: 1rem;
    font-size: 1.5rem;
    margin: 1rem 10rem;
  }

  .left,
  .right {
    flex: 1;
    padding: 1rem;
  }


  .swiper {

    position: relative;
    width: 100%;
    height: 55rem;
    overflow-y: auto;
    border: 1px solid rgb(95, 203, 113);

    &::-webkit-scrollbar {
      display: none;
      /* Chrome、Safari和Opera中隐藏滚动条 */
    }
  }

  .container {
    position: relative;

    .icon-exit-full {
      position: absolute;
      top: 0rem;
      right: 1rem;
      font-size: 2rem;
      color: red;
      cursor: pointer;
    }

    .content {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }

    .column img {
      width: 100%;
      height: 50%;
      margin-bottom: 1rem;
    }

    .column:nth-of-type(1) img {
      height: 100%;
    }
  }

  .container2 {
    position: relative;

    .icon-exit-full {
      position: absolute;
      top: 0rem;
      right: 1rem;
      font-size: 2rem;
      color: red;
      cursor: pointer;
    }

    .content2 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      /* 两列 */
      gap: 1rem;
      /* 间隙 */
    }

    .column {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      /* 间隙 */

    }

    .column img {
      width: 100%;
      height: 50%;
      max-width: 100%;
      /* 确保图像不超过容器宽度 */
      object-fit: cover;
    }
  }
}

::v-deep .el-dialog__body {
  padding: 0;
}
</style>