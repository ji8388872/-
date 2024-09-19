<template>
  <div class="content">
    <div class="nav">
      <div class="navTitle-jin">进料</div>
      <ul>
        <!--        修改后的代码-->
        <li v-for="(item, index) in chonData1" :key="index" class="bac" @mouseover="handleMouseOver1(index)"
            @mouseleave="handleMouseLeave1(index)"
        >
          <div class="content-wrapper">
            <transition name="fade">
              <div v-if="!item.isHovered" key="default" class="contentIsHovered">
                <div class="name">{{ item.name }}</div>
                <div class="value">{{ item.value }}</div>
              </div>
              <div v-else key="hovered" class="content hover-text">
                正常的范围是 xxx-xxx
              </div>
            </transition>
          </div>
        </li>
      </ul>

      <div class="navTitle">出料</div>
      <ul>
        <!--        修改后的代码-->
        <li v-for="(item, index) in chonData2" :key="index" class="bac" @mouseover="handleMouseOver2(index)"
            @mouseleave="handleMouseLeave2(index)"
        >
          <div class="content-wrapper">
            <transition name="fade">
              <div v-if="!item.isHovered" key="default" class="contentIsHovered">
                <div class="name">{{ item.name }}</div>
                <div class="value">{{ item.value }}</div>
              </div>
              <div v-else key="hovered" class="content hover-text">
                正常的范围是 xxx-xxx
              </div>
            </transition>
          </div>
        </li>
      </ul>

      <ul>
        <!--        修改后的代码-->
        <li v-for="(item, index) in chonData3" :key="index" class="bac" @mouseover="handleMouseOver3(index)"
            @mouseleave="handleMouseLeave3(index)"
        >
          <div class="content-wrapper">
            <transition name="fade">
              <div v-if="!item.isHovered" key="default" class="contentIsHovered">
                <div class="name">{{ item.name }}</div>
                <div class="value">{{ item.value }}</div>
              </div>
              <div v-else key="hovered" class="content hover-text">
                正常的范围是 xxx-xxx
              </div>
            </transition>
          </div>
        </li>
      </ul>
    </div>
    <div class="center">
      <div class="box bac" :class="{ flipped: flippedStatus[0] }" @click="toggleFlip(0, downData.sbqk)">
        <div class="flipper">
          <!-- 正面 -->
          <div class="front">
            <div class="title">设备情况</div>
            <div class="value" :style="{color: downData.sbqk === '异常' ? 'red' : ''}">{{ downData.sbqk }}</div>
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

      <div class="box bac" :class="{ flipped: flippedStatus[1] }" @click="toggleFlip(1, downData.hjqk)">
        <div class="flipper">
          <!-- 正面 -->
          <div class="front">
            <div class="title">环境情况</div>
            <div class="value" :style="{color: downData.hjqk === '异常' ? 'red' : ''}">{{ downData.hjqk }}</div>
          </div>
          <!-- 背面 -->
          <div class="back backText back-bac">
            <div class="value">目前是否解决:<span class="spanTitle">{{ downData.hjmqsfjj }}</span></div>
            <div class="value">环境问题:<span class="spanText">{{ downData.hjhjwt }}</span></div>
            <div class="value">解决人员:<span class="spanText">{{ downData.hjjjry }}</span></div>
            <div class="value">解决时间:<span class="spanText">{{ downData.hjjjsj }}h</span></div>
          </div>
        </div>
      </div>

      <div class="box bac" :class="{ flipped: flippedStatus[2] }" @click="toggleFlip(2, downData.aqqk)">
        <div class="flipper">
          <!-- 正面 -->
          <div class="front">
            <div class="title">安全情况</div>
            <div class="value" :style="{ color: downData.aqqk === '异常' ? 'red' : '' }">{{ downData.aqqk }}</div>
          </div>
          <!-- 背面 -->
          <div class="back backText back-bac">
            <div class="value">目前是否解决:<span class="spanTitle">{{ downData.aqmqsfjj }}</span></div>
            <div class="value">隐患问题:<span class="spanText">{{ downData.aqyhwt }}</span></div>
            <div class="value">解决办法:<span class="spanText">解决方法待定</span></div>
            <div class="value">解决时间:<span class="spanText">{{ downData.aqjjsj }}h</span></div>
          </div>
        </div>
      </div>

      <div class="box bac">

        <!-- 正面 -->
        <div>
          <p style="font-size: 2.0rem;">成本情况</p>
          <p>人数:{{ downData.cbrs }}人</p>
          <p>工时:{{ downData.cbgs }}h/天</p>
        </div>
        <!-- 背面 -->
        <!--          <div class="back backText back-bac">-->
        <!--            <div class="title">成本情况</div>-->
        <!--            <div class="value">人数:<span class="spanTitle">100</span></div>-->
        <!--            <div class="value"></div>-->
        <!--          </div>-->
      </div>

      <div class="box bac">

        <!-- 正面 -->
        <div>
          <p style="font-size: 2.0rem;">外部检查参观情况</p>
          <p>单位:{{ downData.wbdw }}</p>
          <p>人数:{{ downData.wbrs }}人</p>
          <p>问题情况:{{ downData.wbwtqk }}</p>
        </div>
        <!-- 背面 -->
        <!--          <div class="back backText back-bac">-->
        <!--            <div class="value">单位:<span class="spanTitle">中科智禾有限公司</span></div>-->
        <!--            <div class="value">人数:<span class="spanText">2</span></div>-->
        <!--            <div class="value">问题情况:<span class="spanText">没问题</span></div>-->
        <!--          </div>-->
      </div>

    </div>


  </div>


</template>

<script>
import chart1 from '@/views/screen/LevelTwo/TwoCharts//chart1.vue'
import chart2 from '@/views/screen/LevelTwo/TwoCharts//chart2.vue'
import chart3 from '@/views/screen/LevelTwo/TwoCharts//chart3.vue'
import chart4 from '@/views/screen/LevelTwo/TwoCharts//chart4.vue'
import chart5 from '@/views/screen/LevelTwo/TwoCharts//chart5.vue'
import chart6 from '@/views/screen/LevelTwo/TwoCharts/chart6.vue'
import topBot from '@/components/screen/top-Bot'

import { getOperationLogListDown, getOperationLogListUp } from '@/api/screen/operationLog'

export default {
  data() {
    return {
      upData: {},
      downData: {},
      // 使用对象来记录每个盒子的 flipped 状态
      flippedStatus: {
        0: false,
        1: false,
        2: false
      },
      chonData1: [],

      chonData2: [],
      chonData3: [],
      title1: '日废弃物处理量明细图',
      title2: '日产率明细图',
      title3: '日老虫体征信息明细图',
      title4: '日能源消耗明细图',
      title5: '日单位工时明细图'
    }
  },
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    chart6,
    topBot
  },
  mounted() {
    this.getDataUp()
    this.getDataDown()
  },
  methods: {
    async getDataUp() {
      const res = await getOperationLogListUp()
      console.log(res)
      if (res.code === 200) {
        this.chonData1.push(
          { name: '日产日清：', value: res.data.rcrq },
          { name: '处理量：' + Number(res.data.cll).toFixed(2) + 'Kg', value: '正常', isHovered: false },
          { name: '吨垃圾用卵量：' + Number(res.data.dljyll).toFixed(2) + 'g', value: '正常', isHovered: false }
        )
        this.chonData2.push(
          { name: '减量化率：' + res.data.jlhl[0].res, value: '正常', isHovered: false },
          { name: '老虫产率：' + res.data.lccl[0].total, value: '正常', isHovered: false },
          { name: '老虫体长：' + Number(res.data.lctc).toFixed(2) + 'mm', value: '正常', isHovered: false }
        )
        this.chonData3.push(
          {
            name: '减重率：' + res.data.jzl[0].res, value: '正常', isHovered: false
          },
          {
            name: '虫沙产率：' + res.data.cscl[0].total, value: '正常', isHovered: false
          },
          {
            name: '老虫体重：' + Number(res.data.lctz).toFixed(2) + 'mg/条', value: '正常', isHovered: false

          }
        )
      }
    },
    async getDataDown() {
      const res = await getOperationLogListDown()
      // console.log(res)
      if (res.code === 200) {
        this.downData = res.data
      }
    },
    handleMouseOver3(index) {
      this.chonData3[index].isHovered = true
    },
    handleMouseLeave3(index) {
      this.chonData3[index].isHovered = false
    },
    handleMouseOver2(index) {
      this.chonData2[index].isHovered = true
    },
    handleMouseLeave2(index) {
      this.chonData2[index].isHovered = false
    },
    handleMouseOver1(index) {
      this.chonData1[index].isHovered = true
    },
    handleMouseLeave1(index) {
      this.chonData1[index].isHovered = false
    },

    // 控制盒子的翻转
    toggleFlip(index, value) {

      // 判断是否为异常状态，如果是则不执行反转
      if (value === '正常') {
        return
      }
      // 切换盒子的 flipped 状态
      this.flippedStatus[index] = !this.flippedStatus[index]
    }
  }
}
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
    padding: 10px 0;

    .navTitle-jin {
      margin-right: 50px;
      margin-left: 20px;
      //flex: 1;
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

    .navTitle {
      margin-right: 50px;
      margin-left: 20px;
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
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      //align-content: space-between;
      margin-right: 30px;

      li {
        flex-basis: 28%;
        //width: calc(33.33% - 10px);

        //width: 250px;
        padding: 0.8% 0.5%;
        cursor: pointer;
        // margin: 15px 0;
        // 固定高度
        height: 110px;

        .bac {
          border: 2px solid #6997e7;
          background-color: rgba(57, 93, 141, 0.3);
          border-radius: 5px;
          box-shadow: 0 0 5px #00FFFF;
          transition: all 0.3s ease-in-out;
          /* 固定大小，防止内容切换时撑开 */
          width: 150px;
          /* 根据需要设置宽度 */
          height: 100px;
          /* 根据需要设置高度 */
          position: relative;
        }

        .content-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .contentIsHovered {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          //text-align: center;
          width: 100%;

        }

        .hover-text {
          font-size: 1.8rem;
          color: deepskyblue;
          text-shadow: 0 0 1px #ff0;
          text-align: center;
          display: flex;
          /* 使用 Flexbox 布局 */
          justify-content: center;
          /* 水平居中 */
          align-items: center;
          /* 垂直居中 */
          height: 100%;
          /* 使元素高度充满父容器 */
          width: 100%;
          /* 使元素宽度充满父容器 */
        }


        .fade-enter-active,
        .fade-leave-active {
          transition: opacity 0.5s ease;
        }

        .fade-enter,
        .fade-leave-to {
          opacity: 0;
        }

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
      height: 90%;
      /* 固定高度 */
      perspective: 1000px;
      display: flex;
      justify-content: center;
      //align-items: center;
      gap: 50px;
      //background-color: #1f2d3d; /* 背景颜色 */
      border-radius: 10px;

      //.peopleRes{
      //
      //}
      p {
        padding: 25px 0;
        text-shadow: 0 0 5px #00FFFF;
        //background-color: #1f2d3d;
        font-size: 1.7rem;
      }


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
      flex-direction: row;
      /* 水平排列，确保文字左右分布 */
      justify-content: space-around;
      /* 平均分布内容 */
      align-items: center;
      /* 垂直居中 */
      padding: 10px;
      border-radius: 10px;
      text-align: center;

      .title,
      .value {
        text-shadow: 0 0 5px #00FFFF;
        color: white;
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

    .backText {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      /* 垂直排列子元素 */
      //align-items: center;
      //justify-content: center;
      padding: 10px;
      border-radius: 10px;
      //text-align: center; /* 水平居中对齐 */
      font-size: 1.6rem;
      /* 根据需求调整字体大小 */
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
        .spanTitle {
          padding-left: 10px;
          color: red;
          font-weight: 500;
        }

        .spanText {
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
      background-color: #1f2d3d;
      /* 保持背景一致 */
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
//}</style>
