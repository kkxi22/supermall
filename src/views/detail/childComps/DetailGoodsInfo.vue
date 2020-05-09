<template>
  <div class="goods-info" v-if="Object.keys(goodsInfo).length">
    <div class="title">
      <span>{{goodsInfo.title}}</span>
    </div>
    <div class="about-price">
      <span class="price">{{goodsInfo.price}}</span>
      <span class="old-price" v-show="goodsInfo.oldPrice">{{goodsInfo.oldPrice}}</span>
      <span class="discountDesc"
            v-show="goodsInfo.discountDesc"
            :style="{backgroundColor: goodsInfo.discountBgColor}">
        {{goodsInfo.discountDesc}}</span>
    </div>
    <div class="sell-info">
      <div>{{goodsInfo.columns[0]}}</div>
      <div>{{goodsInfo.columns[1]}}</div>
      <div>{{goodsInfo.services[goodsInfo.services.length-1].name}}</div>
    </div>
    <div class="services-info">
      <div v-for="index in goodsInfo.services.length-1" :key="index">
        <img :src="goodsInfo.services[index-1].icon" alt="">
        <span>{{goodsInfo.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      goodsInfo: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    padding: 10px;
    border-bottom: 5px solid #eeebed;
  }
  .title {
    color: #43433f;
  }
  .about-price {
    height: 60px;
    line-height: 60px;
  }
  .price {
    color: #f75c8a;
    font-size: 20px;
  }
  .old-price {
    text-decoration:line-through;
    color: #d5d2d4;
    padding: 2px;
  }
  .discountDesc {
    /*background-color: #fa919a;*/
    color: #fff;
    font-size: 12px;
    border-radius: 10px;
    padding: 3px;
    position: relative;
    top: -10px;
  }
  .sell-info {
    display: flex;
    justify-content: space-between;
    text-align: center;
    border-bottom: 1px solid #e6e2df;
    color: #c2bfc1;
    font-size: 14px;
    padding-bottom: 5px;
  }
  .sell-info div {
    /*flex: 1;*/
  }
  .services-info {
    display: flex;
    /*justify-content: space-between;*/
    text-align: left;
    padding: 0;
  }
  .services-info img {
    width: 12px;
    vertical-align: text-after-edge;
  }
  .services-info div {
    flex: 1;
    margin: 10px 0;
  }
  .services-info span {
    font-size: 12px;
    /*padding-top: 5px;*/
  }
</style>
