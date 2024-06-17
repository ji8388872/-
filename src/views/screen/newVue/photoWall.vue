<template>
  <div class="photo-wall">
    <div class="column scroll-container1" ref="scrollContainer">
      <div v-for="photo in firstColumn" :key="photo.id" class="photo" @click="handleSmallPhotoClick(photo)"
        @mouseover="handleSmallPhotoHover(photo)" @mouseout="handleSmallPhotoHoverEnd">
        <img :src="photo.url" alt="photo">
      </div>
    </div>
    <div class="column">
      <transition name="fade" mode="out-in">
        <div class="photo big-photo" :key="currentBigPhoto.id" @click="handleBigPhotoClick"
          @mouseover="handleBigPhotoHover" @mouseout="handleBigPhotoHoverEnd">
          <img :src="currentBigPhoto.url" alt="big-photo">
        </div>
      </transition>
    </div>
    <div class="column scroll-container2" ref="scrollContainer">
      <div v-for="photo in thirdColumn" :key="photo.id" class="photo" @click="handleSmallPhotoClick(photo)"
        @mouseover="handleSmallPhotoHover(photo)" @mouseout="handleSmallPhotoHoverEnd">
        <img :src="photo.url" alt="photo">
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      allPhotos: [
        // { id: 1, url: require('@/assets/images/a1.jpg') },
        // { id: 2, url: require('@/assets/images/a2.jpg') },
        { id: 3, url: require('@/assets/images/a3.jpg') },
        { id: 4, url: require('@/assets/images/a4.jpg') },
        { id: 5, url: require('@/assets/images/a5.jpg') },
        { id: 6, url: require('@/assets/images/a6.jpg') },
        { id: 7, url: require('@/assets/images/a7.jpg') },
        { id: 8, url: require('@/assets/images/a8.jpg') },
        { id: 9, url: require('@/assets/images/a9.png') },
        { id: 10, url: require('@/assets/images/a10.png') },
        { id: 11, url: require('@/assets/images/a11.png') },
        { id: 12, url: require('@/assets/images/a12.png') },
        { id: 13, url: require('@/assets/images/a13.png') },
        { id: 14, url: require('@/assets/images/a14.png') },
      
      ],
      // 定时器
      timer: null,
      transitionName: "fade",
      isHovered: false,
      hoveredPhoto: null,
      bigPhotoHover: false,
      firstColumn: [],   // 五张小照片
      currentBigPhotoIndex: 0,  // 当前大照片的编号
      thirdColumn: [],    // 五张小照片
      currentBigPhoto: {}, // 当前展示的大照片对象
      scrollContainer1Interval: null,
      scrollContainer2Interval: null,
    };
  },
  mounted() {
    // 初始化照片数据
    this.firstColumn = this.allPhotos.slice(0, this.allPhotos.length / 2);
    this.thirdColumn = this.allPhotos.slice((this.allPhotos.length / 2) + 1, this.allPhotos.length);
    this.updateBigPhoto();

    // 设置定时器，每三秒更新大照片
    this.timer = setInterval(() => {
      this.updateBigPhoto();
    }, 3000);
    this.startScrolling();
  },
  beforeDestroy() {
    clearInterval(this.scrollContainer1Interval);
    clearInterval(this.scrollContainer2Interval);
  },
  methods: {
    updateBigPhoto() {
      // 将当前大照片的编号加1
      this.currentBigPhotoIndex++;
      this.transitionName = this.transitionName === "fade" ? "fade-reverse" : "fade";
      // 如果编号超过小照片数组的长度，重新开始
      if (this.currentBigPhotoIndex >= this.thirdColumn.length) {
        // 将编号重置为0
        this.currentBigPhotoIndex = 0;
      }

      // 设置当前大照片为对应编号的小照片
      this.currentBigPhoto = this.thirdColumn[this.currentBigPhotoIndex];
    },
    handleSmallPhotoClick(clickedPhoto) {
      // 获取大照片的索引
      const bigPhotoIndex = this.currentBigPhotoIndex;

      // 将点击的小照片与大照片交换位置
      this.thirdColumn[bigPhotoIndex] = clickedPhoto;
      this.thirdColumn[this.currentBigPhotoIndex] = this.currentBigPhoto;

      // 更新大照片为点击的小照片
      this.currentBigPhoto = clickedPhoto;
    },
    handleBigPhotoClick() {
      // 处理点击大照片的事件，您可以根据需要添加您的逻辑
      // console.log('Clicked on big photo:', this.currentBigPhoto);
    },
    handleSmallPhotoHover(photo) {
      if (!this.isHovered) {
        this.isHovered = true;
        this.hoveredPhoto = photo;
      }
    },
    handleSmallPhotoHoverEnd() {
      if (this.isHovered) {
        this.isHovered = false;
        this.hoveredPhoto = null;
      }
    },
    handleBigPhotoHover() {
      this.bigPhotoHover = true;
      clearInterval(this.timer); // Pause the timer when hovering over the big photo
    },

    handleBigPhotoHoverEnd() {
      this.bigPhotoHover = false;
      this.timer = setInterval(() => {
        this.updateBigPhoto();
      }, 3000); // Resume the timer when leaving the big photo
    },
    startScrolling() {
      this.scrollContainer1Interval = setInterval(() => {
        this.scrollSmallPhotos("up", this.firstColumn);
      }, 2000); // 根据需要调整间隔

      this.scrollContainer2Interval = setInterval(() => {
        this.scrollSmallPhotos("down", this.thirdColumn);
      }, 2000); // 根据需要调整间隔
    },


    stopScrolling() {
      clearInterval(this.scrollContainer1Interval);
      clearInterval(this.scrollContainer2Interval);
    },
    scrollSmallPhotos(direction, column) {
      if (direction === "up") {
        const removedPhoto = column.shift();  // 使用 shift 从头部移除第一个元素
        column.push(removedPhoto);           // 使用 push 将移除的元素追加到末尾
      } else if (direction === "down") {
        const removedPhoto = column.pop();   // 使用 pop 从末尾移除最后一个元素
        column.unshift(removedPhoto);         // 使用 unshift 将移除的元素插入到头部
      }
    },
  },
}
</script>

<style lang="less" scoped>
.photo-wall {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 1%;
  overflow: hidden;

  .column {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    .photo {
      flex: 1;
      height: 20%;
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      align-items: center;
      padding: 2%;

      img {
        width: 90%;
        height: 90%;
      }
    }
  }

  .column:nth-child(2) {
    flex: 4;

    .photo {
      padding: 2% 4% 2% 2% !important;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .column:nth-child(3) {
    .big-photo {
      padding-bottom: 3%;
    }
  }
}

img {
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}

.fade-reverse-enter-active,
.fade-reverse-leave-active {
  transition: opacity 1s;
}

.fade-reverse-enter,
.fade-reverse-leave-to

/* .fade-reverse-leave-active in <2.1.8 */
  {
  opacity: 0;
}

.photo:hover {
  transform: scale(1.1);
  /* 鼠标悬浮时放大 */
  filter: brightness(1.2);
  /* 鼠标悬浮时提高亮度 */
}

.photo.shaking {
  animation: shake 0.3s ease-in-out;
  /* 抖动动画 */
}

@keyframes shake {

  0%,
  100% {
    transform: translateX(0);
  }

  25%,
  75% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px);
  }
}

.scroll-container1 {

  .photo {
    animation: scrollSmallPhotosAnimation1 5s linear infinite;
  }
}

.scroll-container2 {
  .photo {
    animation: scrollSmallPhotosAnimation2 5s linear infinite;
  }
}

@keyframes scrollSmallPhotosAnimation1 {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes scrollSmallPhotosAnimation2 {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(100%);
  }
}
</style>
