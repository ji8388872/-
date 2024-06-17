<template>
  <div class="littleExpert">
    <div class="conlumn1 conlumn">

      <h4>
        大卫虻宝
      </h4>
      <dv-border-box-2 ref="box">
        <div class="context">

          我是一小大卫，我没有病菌，我的胃口很大，爱吃厨余垃圾，我已经吃了<span style=" color: rgb(255, 255, 0);">500kg</span> 的厨余垃圾了！

        </div>
      </dv-border-box-2>
    </div>
    <div class="conlumn2 conlumn">
      <img src="@/assets/images/dawei1.png" alt="">
      <span class="iconfont">1</span>
      <div class="text">
        今天吃了<span>100kg</span>“食物”，不停的吃6天，我就能长大6000倍.
      </div>
    </div>
    <div class="conlumn3 conlumn">
      <img src="@/assets/images/dawei2.png" alt="">
      <span class="iconfont">2</span>
      <div class="text">
        虻宝变身<span>20kg</span>“蛋白饲料”，动物们吃的很香！
      </div>
    </div>
    <div class="conlumn4 conlumn col4">
      <img src="@/assets/images/dawei3.png" alt="">
      <span class="iconfont">3</span>
      <div class="text">
        虫粪变身<span>25kg</span>“营养土”，瓜果蔬菜营养又好吃！
      </div>
    </div>
  </div>
</template>

<script>
import { getCyljData } from '@/api/screen/configData.js'
export default {
  data() {
    return {
      // imgs: [
      //   { url: require("@/assets/images/c2.png") },
      //   { url: require("@/assets/images/c1.png") },
      //   { url: require("@/assets/images/c3.png") },
      // ],
      cyljData: [],
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.box.initWH()
    }, 100)
    this.getCyljData()
  },
  updated() {
    setTimeout(() => {
      this.$refs.box.initWH()
    }, 100)
  },
  methods: {
    async getCyljData() {
      const res = await getCyljData()
      if (res.code === 200) {
        this.cyljData = res.rows
      }
      // console.log(res);
    }
  }

}
</script>

<style lang="less" scoped>
.littleExpert {
  width: 100%;
  max-height: 100%;
  padding: 0.1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;



  .conlumn1 {
    display: grid;
    grid-template-rows: 1fr 3fr;
    align-items: center;
    justify-content: center;

    padding: 0.5rem 1rem;

    h4 {
      width: 70%;
      font-size: 2rem;
      font-weight: 600;
      color: rgb(237, 225, 162);
      text-align: center;
      // border: 3px double rgba(253, 241, 80, 1);
      padding: 0.1rem 1rem;
      margin-left: 50%;
      transform: translate(-50%);
    }

    .context {
      font-size: 1.5rem;
      padding: 1rem;

      box-shadow: rgb(237, 225, 162);
      text-align: justify;
      color: rgb(237, 225, 162);
      // color: #fff;

      font-weight: 600;
    }
  }

  .conlumn2,
  .conlumn3,
  .conlumn4 {
    border: 3px solid rgb(253, 241, 80);
    border-radius: 20%;
    margin-right: 8rem;
    // padding-bottom: 6rem;
    padding: 1rem;
    position: relative;

    img {
      object-fit: contain;
      transform: scale(0.8);
    }

    .iconfont {
      position: absolute;
      top: -8%;
      right: -8%;
      font-size: 2.5rem;
      background: rgb(255, 241, 0);
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      text-align: center;
      line-height: 4rem;
    }

    .text {
      position: absolute;
      top: 70%;
      left: 50%;
      font-size: 1.2rem;
      border: 3px solid rgb(253, 241, 80);
      border-radius: 4rem;
      color: #fff;

      font-weight: 600;
      padding: 0.6rem 1.2rem;
      background: linear-gradient(to top, #14b484, #4cc065);
      width: 16rem;
      height: 6.9rem;
      text-align: center;

      span {
        // text-shadow: 0 0 8px white;
        font-size: 1.25rem;
        color: rgb(253, 241, 80);
      }
    }
  }

  .conlumn3 {
    margin-top: 2.2rem;
    margin-left: 2rem;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    transform: translateX(138%) !important;

    .text {
      height: 5rem;
      top: 77%;
      width: 17rem;
    }

    .iconfont {
      top: -1%;
    }
  }

  .conlumn4 {

    margin-top: 1.8rem;

    margin-bottom: 3rem;
    padding-bottom: 2rem;
    padding: 0;
    transform: translateX(-140%) !important;



    img {
      position: absolute;
      width: 70%;
      height: 100%;

    }

  }
}
</style>