<template>
  <div class="content">
    <div class="nav">
      <div class="navTitle">质量</div>
      <ul>
        <li v-for="(item, index) in chonData" :key="index" class="bac">
          <div class="name">{{ item.name }}</div>
          <div class="value">{{ item.value }}</div>
        </li>
      </ul>
    </div>
    <div class="center">
      <div
        class="box bac"
        :class="{ flipped: flippedStatus[0] }"
        @click="toggleFlip(0,'正常')"
      >
        <div class="flipper">
          <!-- 正面 -->
          <div class="front">
            <div class="title">设备情况</div>
            <div class="value">正常</div>
          </div>
          <!-- 背面 -->
          <div class="back backText back-bac">
            <div class="value">目前是否解决:<span class="spanTitle">是</span></div>
            <div class="value">故障设备名称:<span class="spanText">摄像机</span></div>
            <div class="value">故障维修人员:<span class="spanText">李宁则</span></div>
            <div class="value">维修时间:<span class="spanText">1h</span></div>
          </div>
        </div>
      </div>

      <div
        class="box bac"
        :class="{ flipped: flippedStatus[1] }"
        @click="toggleFlip(1,'异常')"
      >
        <div class="flipper">
          <!-- 正面 -->
          <div class="front">
            <div class="title">环境情况</div>
            <div class="value">异常</div>
          </div>
          <!-- 背面 -->
          <div class="back backText back-bac">
            <div class="value">目前是否解决:<span class="spanTitle">是</span></div>
            <div class="value">环境问题:<span class="spanText">水污染</span></div>
            <div class="value">解决人员:<span class="spanText">李宁则</span></div>
            <div class="value">解决时间:<span class="spanText">1h</span></div>
          </div>
        </div>
      </div>

      <div
        class="box bac"
        :class="{ flipped: flippedStatus[2] }"
        @click="toggleFlip(2,'正常')"
      >
        <div class="flipper">
          <!-- 正面 -->
          <div class="front">
            <div class="title">安全情况</div>
            <div class="value">正常</div>
          </div>
          <!-- 背面 -->
          <div class="back backText back-bac">
            <div class="value">目前是否解决:<span class="spanTitle">是</span></div>
            <div class="value">隐患问题:<span class="spanText">水污染</span></div>
            <div class="value">解决办法:<span class="spanText">换水</span></div>
            <div class="value">解决时间:<span class="spanText">1h</span></div>
          </div>
        </div>
      </div>

      <div
        class="box bac"
        :class="{ flipped: flippedStatus[3] }"
        @click="toggleFlip(3,'正常')"
      >
        <div class="flipper">
          <!-- 正面 -->
          <div class="front">
            <div class="title">成本情况</div>
            <div class="value">正常</div>
          </div>
          <!-- 背面 -->
          <div class="back backText back-bac">
            <div class="value">人数:<span class="spanTitle">100</span></div>
            <div class="value">工时:<span class="spanText">8h/d</span></div>
          </div>
        </div>
      </div>

      <div
        class="box bac"
        :class="{ flipped: flippedStatus[4] }"
        @click="toggleFlip(4,'异常')"
      >
        <div class="flipper">
          <!-- 正面 -->
          <div class="front">
            <div class="title">外部检查参观情况</div>
            <div class="value">异常</div>
          </div>
          <!-- 背面 -->
          <div class="back backText back-bac">
            <div class="value">单位:<span class="spanTitle">中科智禾有限公司</span></div>
            <div class="value">人数:<span class="spanText">2</span></div>
            <div class="value">问题情况:<span class="spanText">没问题</span></div>

          </div>
        </div>
      </div>

    </div>


<!--    <el-button @click="show2 = !show2" style="width: 100px;">Click Me</el-button>-->
<!--    <div class="flip-container" :class="{ flipped: !show2 }">-->
<!--      <div class="flipper">-->
<!--        <div class="front transition-box">-->
<!--          .el-zoom-in-center-->
<!--        </div>-->
<!--        <div class="back transition-box">-->
<!--          111111111111-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

  </div>




</template>

<script>
import chart1 from "@/views/screen/LevelTwo/TwoCharts//chart1.vue";
import chart2 from "@/views/screen/LevelTwo/TwoCharts//chart2.vue";
import chart3 from "@/views/screen/LevelTwo/TwoCharts//chart3.vue";
import chart4 from "@/views/screen/LevelTwo/TwoCharts//chart4.vue";
import chart5 from "@/views/screen/LevelTwo/TwoCharts//chart5.vue";
import chart6 from "@/views/screen/LevelTwo/TwoCharts/chart6.vue";
import topBot from "@/components/screen/top-Bot";

export default {
  data() {
    return {
      // 使用对象来记录每个盒子的 flipped 状态
      flippedStatus: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
      },
      chonData: [
        {
          name: "日产日清", value: "是"
        },
        {
          name: "处理量: 100kg", value: "正常"
        },
        {
          name: "减量化率: 90%", value: "正常"
        },
        {
          name: "减重率: 60%", value: "正常"
        },
        {
          name: "吨垃圾用卵量", value: "正常"
        },
        {
          name: "老虫产率: 100%", value: "正常"
        },
        {
          name: "虫沙产率: 100%", value: "正常"
        },
        {
          name: "老虫体长: 100%", value: "正常"
        },
        {
          name: "老虫体重: 100%", value: "正常"

        },
      ],
      title1: "日废弃物处理量明细图",
      title2: "日产率明细图",
      title3: "日老虫体征信息明细图",
      title4: "日能源消耗明细图",
      title5: "日单位工时明细图",
    };
  },
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    chart6,
    topBot,
  },
  mounted() { },
  methods: {
    toggleFlip(index,value) {

      // 判断是否为异常状态，如果是则不执行反转
      if (value === '正常') {
        return
      }
        // 切换盒子的 flipped 状态
      this.flippedStatus[index] = !this.flippedStatus[index]
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: bold;
  text-shadow: 0 0 .01rem #006aff;
  padding: 0 5%;

  .nav {
    flex: 3;
    display: flex;
    border: 2px solid #00FFFF;
    border-radius: 10px 10px;
    padding: 10px 0px;

    .navTitle {
      flex: 1;
      text-shadow: 0 0 5px #00FFFF;
      /* Text glow effect */
      writing-mode: vertical-rl;
      /* 文字竖排 */
      font-size: 3rem;
      /* 字体大小 */
      text-align: center;
      /* 垂直方向上居中对齐 */
      letter-spacing: 1rem;
    }

    ul {
      flex: 9;
      width: 100%;
      height: 100%;
      padding: 0 .6rem;

      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-around;

      li {
        flex-basis: 26%;
        padding: 0.8% 0.5%;
        cursor: pointer;
        // margin: 15px 0;

        &:last-child {
          margin-right: 0;
        }

        .name {
          font-size: 1.6rem;
          color: rgb(14, 241, 245);
          padding-left: 5%;
        }

        .value {
          font-size: 2.1rem;
          text-align: center;
          text-shadow: 0 0 8px white;
        }
      }
    }
  }
  .center {
    flex: 4;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .box {
      width: 18%;
      height: 90%; /* 固定高度 */
      perspective: 1000px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
      //background-color: #1f2d3d; /* 背景颜色 */
      border-radius: 10px;
    }

    .flipper {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    .box.flipped .flipper {
      transform: rotateY(180deg);
    }

    .front {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      flex-direction: row; /* 水平排列，确保文字左右分布 */
      justify-content: space-around; /* 平均分布内容 */
      align-items: center; /* 垂直居中 */
      padding: 10px;
      border-radius: 10px;
      text-align: center;

      .title,
      .value {
        text-shadow: 0 0 5px #00FFFF;
        /* Text glow effect */
        writing-mode: vertical-rl;
        /* 文字竖排 */
        font-size: 2.5rem;
        /* 字体大小 */
         //text-align: center;
        /* 垂直方向上居中对齐 */
        letter-spacing: 10px;
      }
    }

    .backText{
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column; /* 垂直排列子元素 */
      //align-items: center;
      //justify-content: center;
      padding: 10px;
      border-radius: 10px;
      //text-align: center; /* 水平居中对齐 */
      font-size: 1.6rem; /* 根据需求调整字体大小 */
      //line-height: 2rem; /* 调整行高，确保文字正常排列 */
      //color: #00ffff; /* 保持字体颜色 */


      .value {
        padding-top: 40px;
        padding-left: 15px;
        //text-shadow: 0 0 5px #00FFFF;
        /* Text glow effect */
        //writing-mode: vertical-rl;
        /* 文字竖排 */
        font-size: 1.5rem;
        /* 字体大小 */
         //text-align: center;
        /* 垂直方向上居中对齐 */
        //letter-spacing: 10px;
        .spanTitle{
          padding-left: 10px;
          color: red;
          font-weight: 500;
        }
        .spanText{
          padding-left: 10px;
          color: #1a9ca0;
          font-weight: 500;
        }
      }
    }

    .back-bac {
      background-color: rgba(57, 93, 141, 0.3);
      /* Base background color */
      background-image:
        linear-gradient(to right, #10455d, rgba(0, 0, 50, 0) 10%),
          /* Left border */
        linear-gradient(to left, #10455d, rgba(0, 0, 50, 0) 10%),
          /* Right border */
        linear-gradient(to top, #10455d, rgba(0, 0, 50, 0) 20%),
          /* Bottom border */
        linear-gradient(to bottom, #10455d, rgba(0, 0, 50, 0) 20%);
      /* Top border */
      border-radius: 5px;
      /* Rounded corners */
      box-shadow: 0 0 5px #00FFFF;
    }

    .back {
      transform: rotateY(180deg);
      background-color: #1f2d3d; /* 保持背景一致 */
    }

    //.transition-box {
    //  color: #00ffff; /* 字体颜色 */
    //  text-shadow: 0 0 5px #00ffff; /* 字体阴影 */
    //  font-size: 2.5rem;
    //  writing-mode: vertical-rl; /* 竖排文字 */
    //  letter-spacing: 10px;
    //}

    //.title,
    //.value {
    //    //text-shadow: 0 0 5px #00FFFF;
    //    /* Text glow effect */
    //    writing-mode: vertical-rl;
    //    /* 文字竖排 */
    //    font-size: 2.5rem;
    //    /* 字体大小 */
    //    // text-align: center;
    //    /* 垂直方向上居中对齐 */
    //    letter-spacing: 10px;
    //  }

    //.value {
    //    font-size: 2.9rem;
    //    letter-spacing: 15px;
    //  }
  }



  //.center {
  //  flex: 4;
  //  display: flex;
  //  flex-direction: row;
  //  flex-wrap: wrap;
  //  justify-content: space-between;
  //  align-items: center;
  //
  //  .box {
  //    width: 18%;
  //    height: 90%;
  //    display: flex;
  //    justify-content: center;
  //    /* 水平居中对齐容器内的内容 */
  //    align-items: center;
  //    /* 垂直居中对齐容器内的内容 */
  //    gap: 50px;
  //  }
  //
  //  .title,
  //  .value {
  //    text-shadow: 0 0 5px #00FFFF;
  //    /* Text glow effect */
  //    writing-mode: vertical-rl;
  //    /* 文字竖排 */
  //    font-size: 2.5rem;
  //    /* 字体大小 */
  //    // text-align: center;
  //    /* 垂直方向上居中对齐 */
  //    letter-spacing: 10px;
  //  }
  //
  //  .value {
  //    font-size: 2.9rem;
  //    letter-spacing: 15px;
  //  }
  //
  //}

  .bac {
    border: 2px solid #6997e7;
    background-color: rgba(57, 93, 141, 0.3);
    /* Base background color */
    background-image:
      linear-gradient(to right, #10455d, rgba(0, 0, 50, 0) 10%),
      /* Left border */
      linear-gradient(to left, #10455d, rgba(0, 0, 50, 0) 10%),
      /* Right border */
      linear-gradient(to top, #10455d, rgba(0, 0, 50, 0) 20%),
      /* Bottom border */
      linear-gradient(to bottom, #10455d, rgba(0, 0, 50, 0) 20%);
    /* Top border */
    border-radius: 5px;
    /* Rounded corners */
    box-shadow: 0 0 5px #00FFFF;
    /* Outer glow effect */
  }

  .fontColor {
    color: #f4522e;
    text-shadow: 0 0 2px #f5cabb;
  }

}




//.flip-container {
//  perspective: 1000px;
//  width: 200px;
//  height: 100px;
//}
//
//.flipper {
//  position: relative;
//  width: 100%;
//  height: 100%;
//  transform-style: preserve-3d;
//  transition: transform 0.6s;
//}
//
//.flipped .flipper {
//  transform: rotateY(180deg);
//}
//
//.transition-box {
//  position: absolute;
//  width: 100%;
//  height: 100%;
//  backface-visibility: hidden;
//  border-radius: 4px;
//  background-color: #409EFF;
//  text-align: center;
//  color: #fff;
//  padding: 40px 20px;
//  box-sizing: border-box;
//}
//
//.back {
//  transform: rotateY(180deg);
//  background-color: #67C23A; /* 可选的不同背景色 */
//}
</style>
