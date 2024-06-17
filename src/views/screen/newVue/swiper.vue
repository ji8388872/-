<template>
 <div style="width: 100%; height: 100%;">
    <!-- Swiper -->
    <div
      style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
      class="swiper mySwiper2"
      ref="swiperContainer"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image) in images" :key="image.id">
          <img :src="image.url" />
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <div thumbsSlider="" class="swiper mySwiper" ref="thumbsContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image) in images" :key="image.id">
          <img :src="image.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


export default {
  data() {
    return {
      images: [
      { id: 1, url: require('@/assets/images/a1.jpg') },
        { id: 2, url: require('@/assets/images/a2.jpg') },
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
      swiper: null,
      swiper2: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initSwiper();
    });
  },
  watch: {
    images: {
        handler: 'initSwiper',
        deep: true,
    },
},

  methods: {
    initSwiper() {
      this.swiper = new Swiper(this.$refs.swiperContainer, {
        loop: true,
        
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      this.swiper2 = new Swiper(this.$refs.thumbsContainer, {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        thumbs: {
          swiper: this.swiper,
        },
      });
    },
  },
};
</script>

<style scoped>
 /* 您的调整后的样式放在这里 */
 body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
    
  }

  .swiper {
    width: 100%;
    height: 70vh; /* 调整后的高度 */
  }

  .mySwiper2 {
    height: 35vh; /* 调整后的高度 */
    width: 100%;
  }

  .mySwiper {
    height: 10vh;
    box-sizing: border-box;
    padding: 5px 0;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.7;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
