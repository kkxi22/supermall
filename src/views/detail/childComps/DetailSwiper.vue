<template>
  <swiper>
    <swiper-item v-for="item in topImg" class="swiperItem">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper/index"
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImg: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .swiperItem {
    margin-top: 44px;
    height: 300px;
  }
</style>
