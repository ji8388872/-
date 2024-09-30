<template>
  <div id="app">
    <div v-show="rolesData.includes('admin') || rolesData.includes('common')">

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
          <li id="log">怀柔一小：运营日志</li>
          <li id="situation1">历史情况（1）</li>
          <li id="situation2">历史情况（2）</li>
          <li id="screen1">怀柔一小大屏展示</li>
          <li id="photo">照片替换</li>

        </ul>
        <ul class="layout2 layout" v-show="!layoutVisible" @click="checkScreen">
          <li id="log2">万科大梅沙：运营日志</li>
          <li>历史情况（1）</li>
          <li>历史情况（2）</li>
          <li id="screen2">万科大梅沙大屏展示</li>
          <li>照片替换</li>
        </ul>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Index",
  data() {
    return {
      rolesData:'',
      layoutVisible: true,
      // internalShow: true,
    };
  },
  mounted() {
    // 滚动条置顶
    window.scrollTo(0, 200);
    this.permission()
    this.getList()
  },

  methods: {
    // 获取用户权限
    getList(){
      this.$store.dispatch('GetInfo').then(res => {
        console.log(778899,res.roles);
        this.rolesData= res.roles;
        //res.roles.includes("admin")
        // console.log(77889900,this.rolesData);
      });
    },

    clickScreen(type) {
      this.layoutVisible = type === 1;
    },
    checkScreen(event){
      // console.log(event.target)
      let id = event.target.id
      if(id === 'screen2') {
        this.$router.push({ path: "/bigscreen2" })
        let elem = document.documentElement; // 获取整个文档对象

        if (elem.requestFullscreen) {
          elem.requestFullscreen(); // 进入全屏
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen(); // Firefox
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen(); // Chrome 和 Safari
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen(); // IE
        }
      }
    },
    clickLayout(event) {

      const id = event.target.id

      if (id === "screen1") {
        this.$router.push({ path: "/bigscreen" });
        let elem = document.documentElement; // 获取整个文档对象

        if (elem.requestFullscreen) {
          elem.requestFullscreen(); // 进入全屏
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen(); // Firefox
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen(); // Chrome 和 Safari
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen(); // IE
        }
      }

      if (id === "log") {
        this.$router.push({ path: "/screen/LevelTwo" });

      }
      if (id === "situation1") {
        this.$router.push({ path: "/screen/LevelFour" });

      }
      if (id === "situation2") {
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
  padding: 0;

  li {
    flex-basis: 25%;
    box-sizing: border-box;
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
   li:nth-child(4),
   li:nth-child(5) {
    flex-basis: 25%;
  }

  .active {

    background-color: #7da7f0;
  }
}
</style>
