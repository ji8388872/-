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
      <div class="box bac">
        <div class="title">设备情况</div>
        <div class="value">正常</div>
      </div>
      <div class="box bac">
        <div class="title">环境情况</div>
        <div class="value fontColor">异常</div>
      </div>
      <div class="box bac">
        <div class="title">安全情况</div>
        <div class="value">正常</div>
      </div>
      <div class="box bac">
        <div class="title">成本情况</div>
        <div class="value">正常</div>
      </div>
      <div class="box bac">
        <div class="title">外部检查参观情况</div>
        <div class="value">正常</div>
      </div>
    </div>


    <el-button @click="show2 = !show2" style="width: 100px;">Click Me</el-button>
    <div class="flip-container" :class="{ flipped: !show2 }">
      <div class="flipper">
        <div class="front transition-box">
          .el-zoom-in-center
        </div>
        <div class="back transition-box">
          111111111111
        </div>
      </div>
    </div>

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
      show2: true,
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
      font-size: 4.5rem;
      /* 字体大小 */
      text-align: center;
      /* 垂直方向上居中对齐 */
      letter-spacing: 1.6rem;
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
      height: 90%;
      display: flex;
      justify-content: center;
      /* 水平居中对齐容器内的内容 */
      align-items: center;
      /* 垂直居中对齐容器内的内容 */
      gap: 50px;
    }

    .title,
    .value {
      text-shadow: 0 0 5px #00FFFF;
      /* Text glow effect */
      writing-mode: vertical-rl;
      /* 文字竖排 */
      font-size: 2.5rem;
      /* 字体大小 */
      // text-align: center;
      /* 垂直方向上居中对齐 */
      letter-spacing: 10px;
    }

    .value {
      font-size: 2.9rem;
      letter-spacing: 15px;
    }

  }

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


.flip-container {
  perspective: 1000px;
  width: 200px;
  height: 100px;
}

.flipper {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.flipped .flipper {
  transform: rotateY(180deg);
}

.transition-box {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
}

.back {
  transform: rotateY(180deg);
  background-color: #67C23A; /* 可选的不同背景色 */
}
</style>
