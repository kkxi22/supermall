<template>
  <div class="bottomBar">
    <div class="talker item">
      <i class="icon service"></i>
      <span class="text">客服</span>
    </div>
    <div class="shop item">
      <i class="icon shopIcon"></i>
      <span class="text">店铺</span>
    </div>
    <div class="star item">
      <i class="icon starIcon"></i>
      <span class="text">收藏</span>
    </div>
    <div class="cart item">
      <span class="text2">加入购物车</span>
    </div>
    <div class="buy item">
      <span class="text2">购买</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar"
  }
</script>

<style scoped>
  .bottomBar {
    /*height: 49px;*/
    display: flex;
    font-size: 14px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
  }
  .item {
    flex: 1;
    text-align: center;
    height: 49px;
    line-height: 49px;
  }
  .cart {
    flex: 1.5;
    background-color: yellow;
  }
  .buy {
    flex: 1.5;
    background-color: #ff70a3;
    color: white;
  }
  .icon {
    display: block;
    width: 20px;
    height: 20px;
    margin: 5px auto 0;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 0/100%;
  }
  .service {
    background-position: 0 -48px;
  }
  .shopIcon {
    background-position: 0 -90px;
  }
  .starIcon {
    background-position: 0 1px;
  }
  .text {
    display: block;
    margin: -15px auto;
  }
</style>
