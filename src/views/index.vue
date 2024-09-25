<template>
  <div id="app">
    <div v-if="internalShow">

      <div class="screenNav">
        <div class="largerScreen1 largerScreen" :class="{ 'active': layoutVisible }" @click="clickScreen(1)">
          怀柔一小生态教室项目大屏展示
        </div>
        <div class="largerScreen2 largerScreen" :class="{ 'active': !layoutVisible }" @click="clickScreen(2)">
          万科大梅沙生态园区项目大屏展示
        </div>

      </div>
      <div class="content">
        <ul class="layout1 layout" v-show="layoutVisible" @click="clickLayout">
          <li id="log">内部：运营日志1</li>
          <li id="situation1">历史情况（1）</li>
          <li id="situation2">历史情况（2）</li>
          <li id="screen">大屏展示</li>
          <li id="photo">照片替换</li>

        </ul>
        <ul class="layout2 layout" v-show="!layoutVisible">
          <li>内部：运营日志2</li>
          <li>历史情况（1）</li>
          <li>历史情况（2）</li>
          <li>大屏展示</li>
          <li>照片替换</li>
        </ul>

      </div>
    </div>
    <div v-else>
      <div class="screenNav">
        <div class="largerScreen1 largerScreen" :class="{ 'active': layoutVisible }" @click="clickScreen(1)">
          怀柔一小生态教室项目大屏展示
        </div>
        <div class="largerScreen2 largerScreen" :class="{ 'active': !layoutVisible }" @click="clickScreen(2)">
          万科大梅沙生态园区项目大屏展示
        </div>

      </div>
      <div class="content">
        <ul class="layout1 layout" v-show="layoutVisible" @click="clickLayout">

          <li id="photo">照片替换1</li>
        </ul>
        <ul class="layout2 layout" v-show="!layoutVisible">

          <li>照片替换2</li>
        </ul>

      </div>
    </div>


  </div>
</template>

<script>
// 导入echarts

export default {
  mounted() {
    console.log('首页的mounted被执行了');
    // 滚动条置顶
    window.scrollTo(0, 200);
    this.permission()
    //去除所有li的active


  },

  // watch: {
  //   // 监听路由的变化
  //   $route(to, from) {
  //     console.log('路由切换，执行相关逻辑');
  //     // 当路由变化时执行     
  //     this.removeLiActive();
  //   }
  // },
  name: "Index",
  data() {
    return {
      layoutVisible: true,
      internalShow: true,


    };
  },



  methods: {
    clickScreen(type) {
      if (type == 1) {
        this.layoutVisible = true
        console.log(111);
      }
      else {
        this.layoutVisible = false
        console.log(2222);
      }
    },

    clickLayout(event) {
      //去除所有li的active
      // this.removeLiActive()
      // //给当前li添加active

      // event.target.classList.add("active")


      const id = event.target.id

      if (id == "screen") {
        this.$router.push({ path: "/bigscreen" });

      }
      if (id == "log") {
        this.$router.push({ path: "/screen/LevelTwo" });

      }
      if (id == "situation1") {
        this.$router.push({ path: "/screen/LevelFour" });

      }
      if (id == "situation2") {
        this.$router.push({ path: "/screen/LevelThree" });

      }




    },
    removeLiActive() {
      //去除所有li的active
      const lis = document.querySelectorAll(".layout li")
      lis.forEach((li) => {
        li.classList.remove("active")
      })
    },
    permission() {


    }

  },
};
</script>

<style lang="less" scoped>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

}

.screenNav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  border: 2px solid #4472c4;
  width: 60vw;
  height: 25vh;
  border-radius: 20px;
  margin: 2vmin auto;
  padding: 0.5vmin;

  .largerScreen {
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    margin: 0 2%;
    padding: 1vmax;
    height: 80%;
    width: 45%;
    background-color: #4472c4;
    color: aliceblue;
    border-radius: 10px;
    font-size: 2rem;
    cursor: pointer;

  }

  .active {

    background-color: #7da7f0;
  }

}

.content .layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 2px solid #4472c4;
  width: 60vw;
  height: 60vh;
  border-radius: 20px;
  padding: 0%;

  li {
    margin: 1vmax;
    padding: 1vmax;
    height: 40%;
    width: 18%;
    background-color: #4472c4;
    color: aliceblue;
    border-radius: 10px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    cursor: pointer;

  }

  .active {

    background-color: #7da7f0;
  }
}
</style>