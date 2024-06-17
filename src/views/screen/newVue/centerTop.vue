<template>
  <div class="centerTop">
    <img src="@/assets/images/生态故乡.png" alt="">
    <a href="#" class="a1" @click="dialogVisible1 = true"><img src="@/assets/images/xh-removebg-preview.png" alt=""
        class="img"></a>
    <a href="#" class="a2" @click="dialogVisible2 = true"><img src="@/assets/images/sx-removebg-preview.png" alt=""
        class="img"></a>
    <a href="#" class="a3" @click="dialogVisible3 = true"><img src="@/assets/images/bzd-removebg-preview.png" alt=""
        class="img"></a>
    <el-dialog title="价值再生" :visible.sync="dialogVisible1" width="70%" :style="{ 'vertical-align': 'middle' }" top="0">
      <span style="height: 8rem;padding: 0.2rem;">

        <!-- <el-carousel height="700px" direction="vertical" :autoplay="true">
          <el-carousel-item v-for="(item,i) in imgs" :key="i">
            <img :src="item.url" alt="">
          </el-carousel-item>
        </el-carousel> -->
        <price-2-vue></price-2-vue>
      </span>
    </el-dialog>
    <el-dialog title="转化—废弃物资源化处理" :visible.sync="dialogVisible2" width="70%" style="margin-top: 6%;">
      <div class="zhuanhuanImg">
        <!-- <img :src="item.url" alt="" style="width: 100%;padding: 0.5rem;height: 100%;" v-for="(item, i) in zhuanhuaImgs"
          :key="i"> -->
          <el-carousel height="60rem" direction="vertical" :autoplay="true">
          <el-carousel-item v-for="(item,i) in zhuanhuaImgs" :key="i">
            <img :src="item.url" alt="" style="width: 100%;padding: 0.5rem;height: 100%;">
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-dialog>
    <el-dialog title="纯化—垃圾分类全覆盖体系" :visible.sync="dialogVisible3" width="70%"  style="overflow: hidden;margin-top: 7%;">
    
      <!-- <div class="chunahuaImg">
        <img :src="item.url" alt="" v-for="(item, i) in chunhuaImgs" :key="i"
          style="width: 100%;height: 100%;padding: 0.5rem;">
      </div> -->
      <el-carousel height="60rem" direction="vertical" :autoplay="true">
          <el-carousel-item v-for="(item,i) in chunhuaImgs" :key="i">
            <img :src="item.url" alt="" style="width: 100%;padding: 0.5rem;height: 100%;">
          </el-carousel-item>
        </el-carousel>
    </el-dialog>
    <el-button class="enter" type="success" @click="enter">开启生态智慧之旅</el-button>

    <el-dialog title="答题小游戏" :visible.sync="dialogVisible4" width="50%" @close="dialogVisible4 = false"
      style="margin-top: 10%;">
      <ChoiceGames v-if="dialogVisible4"></ChoiceGames>
      <!-- <qq></qq> -->

    </el-dialog>
  </div>
</template>

<script>
import ChoiceGames from '@/views/screen/newVue/choiceGames.vue'
import qq from '@/views/screen/newVue/1.vue'
import price from '@/views/screen/newVue/test/price.vue'

import price2Vue from './test/price2.vue'
export default {
  data() {
    return {
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
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
        {
          url: require("@/assets/images/img6.png")
        },
        {
          url: require("@/assets/images/img7.png")
        },
        {
          url: require("@/assets/images/img8.png")
        },
        {
          url: require("@/assets/images/img9.png")
        },
      ],
      chunhuaImgs: [
      
        {
          url: require("@/assets/images/chunhua1.png")
        },
        {
          url: require("@/assets/images/chunhua2.png")
        },
        {
          url: require("@/assets/images/chunhua3.png")
        },
        {
          url: require("@/assets/images/chunhua4.png")
        },
        {
          url: require("@/assets/images/chunhua5.png")
        },
        {
          url: require("@/assets/images/chunhua6.png")
        },
        {
          url: require("@/assets/images/chunhua7.png")
        }
      ],
      zhuanhuaImgs: [
        {
          url: require("@/assets/images/zhuanhua1.png")
        },
        {
          url: require("@/assets/images/zhuanhua.png")
        },
        {
          url: require("@/assets/images/zhuanhua2.png")
        },
        {
          url: require("@/assets/images/zhuanhua3.png")
        },
        {
          url: require("@/assets/images/zhuanhua4.png")
        },
        {
          url: require("@/assets/images/zhuanhua5.png")
        },
      ]
    }
  },
  components: {
    ChoiceGames,
    qq,
    price,
    price2Vue

  },
  methods: {
    enter() {
      /* this.$confirm('想和我一起进入大卫的知识世界吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '游戏开始!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '游戏取消'
        });
      });
      */
      this.dialogVisible4 = true
    },
    handleDialogClose() {
      // 在对话框关闭时触发，用于停止视频播放
      const videoPlayer = this.$refs.videoPlayer;
      if (videoPlayer) {
        videoPlayer.pause();
      }
    },
  }
}
</script>

<style lang="less" scoped>
.centerTop {
  text-align: center;
  position: relative;

  img {
    width: 95%;
    height: 95%;

  }

  .a1 {
    position: absolute;
    top: 75.8%;
    left: 25.4%;
    width: 4.9rem;
    height: 4.9rem;
  }

  .a2 {
    position: absolute;
    top: 82%;
    left: 44.8%;
    width: 4.9rem;
    height: 4.9rem;
  }

  .a3 {
    position: absolute;
    top: 75.2%;
    left: 64.8%;
    width: 4.9rem;
    height: 4.9rem;
  }

  .img {
    width: 100%;
    height: 100%;
    z-index: 999;
  }

  .enter {
    position: absolute;
    left: 50%;
    bottom: -7rem;
    transform: translate(-50%);
    z-index: 999;
    border-radius: 5%;
    width: 20rem;
    height: 5rem;
    font-size: 2.2rem;

  }
}

.chunahuaImg,
.zhuanhuanImg {
  width: 100%;
  height: 60rem;
  overflow-y: auto;
  border: 1px solid rgb(95, 203, 113);

  &::-webkit-scrollbar {
    display: none;
    /* Chrome、Safari和Opera中隐藏滚动条 */
  }
}
::v-deep .el-dialog:not(.is-fullscreen) {
  // margin-top: 12vh !important;
  
}
::v-deep .el-dialog__body {
  background-color: rgb(215, 246, 195);

}

::v-deep .el-dialog__header {
  background-color: rgb(215, 246, 195);

}

::v-deep .el-dialog__title {
  color: #000;
  font-size: 2.125rem;
  font-weight: 700;
}

::v-deep .el-carousel__button {
  background-color: green;
}

::v-deep .el-dialog__body {
  padding: 5px 20px;
}
</style>