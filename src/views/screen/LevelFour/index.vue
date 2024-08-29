<template>
  <div id="app">
    <header>
      <div class="title">黑水虻场站管理大屏</div>
      <span class="time">{{ today }} </span>
      <span class="weather">天气:晴</span>
      <span class="day">{{ currentTime }}</span>
      <Input></Input>
    </header>
    <nav>
      <div class="container">
        <ThreeCharts></ThreeCharts>
      </div>
    </nav>
  </div>
</template>

<script>
import ThreeCharts from '@/views/screen/LevelFour/FourCharts/index.vue'
import Input from '@/components/screen/input.vue'
export default {
  data() {
    return {
      currentTime: '',
      today: '',
    }
  },
  components: {
    ThreeCharts,
    Input
  },
  mounted() {
    window.scrollTo(0, 200);
    this.updateTime()
    setInterval(this.updateTime, 1000); // 每秒钟更新一次时间
    this.getDayOfWeek()
    setInterval(this.getDayOfWeek, 10000);
  },
  updated() {
    window.scrollTo(0, 200);
  },
  methods: {
    updateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      this.currentTime = `${year}年${month}月${day}日  ${hours}:${minutes}`;
    },
    getDayOfWeek() {
      const daysOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

      const currentDate = new Date();
      const dayIndex = currentDate.getDay();

      this.today = daysOfWeek[dayIndex];
    },
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@media screen and (min-width: 1200px) {
  html {
    font-size: 85px !important;
  }

  .container {
    max-width: 100% !important;
  }
}

@media screen and (min-width: 761px) {
  .container {
    max-width: 100% !important;
  }

}

@media screen and (max-width: 760px) {
  .container {
    max-width: 890px;
  }
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: url('~@/assets/images/bg.png') no-repeat center;
  background-size: cover;
  overflow: hidden;
}

#app header {
  position: relative;
  /* width: 100%; */
  transform: scale(1);
  flex: 1;
  background: url('~@/assets/images/极简风格1.png') no-repeat center;
  background-size: cover;
  z-index: 999;
  margin-bottom: 0.2rem;

  .btn {
    position: absolute;
    right: 1.5%;
    top: 84%;

    .el-button {
      background: transparent;
      font-weight: 800;
      border: 2px solid rgb(14, 227, 219);
    }
  }
}

#app header .title {
  text-align: center;
  color: #ffffff;
  font-size: 2.2rem;
  font-weight: bold;
  text-shadow: 0 0 .2rem #00ff5e;
  line-height: 6.45rem;
  padding-top: 0.2rem;

  margin-top: 0.15rem;
  font-family: Arial, Helvetica, sans-serif;

}

#app header .time,
.weather {
  position: absolute;
  right: 4%;
  top: 19%;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: 0 0 .02rem #006aff;
  /* background-color: rgba(26, 158, 191, .3); */
  padding: 0.2% 0.5%;
  border-radius: 10%;
}

#app header .weather {
  right: 10%;
}

#app header .day {
  position: absolute;
  left: 5%;
  top: 19%;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: 0 0 .05rem #0062ff;
}

nav {
  width: 100%;
  flex: 15;
  margin-top: 0.1rem;

}

.container {

  height: 100%;
  width: 100%;
  padding: 0 0.5%;
}
</style>