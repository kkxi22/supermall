<template>
  <div class="shop-menu-item">
    <img :src="picAddress" alt="" @load="imgLoad" @click="itemClick(goodsItem)">
    <div class="item-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "ShopMenuItem",
    data() {
      return {
      }
    },
    props: {
      goodsItem: {
        type: Object,
        default: {}
      }
    },
    computed: {
      picAddress() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imgLoad() {
        // if (this.$route.path.indexOf('/home')) {
        //   this.$bus.$emit('imgLoad')
        // }
        this.$bus.$emit('itemImgLoad')
      },
      itemClick(goodsItem) {
        const iid = this.goodsItem.iid
        this.$router.push('/detail/'+ iid)
      }
    }
  }
</script>

<style scoped>
  .shop-menu-item {
    padding-bottom: 60px;
    position: relative;
  }
  .shop-menu-item img {
    width: 100%;
    border-radius: 10px;
  }
  .item-info {
    font-size: 12px;
    text-align: center;
    position: absolute;
    margin: 10px 0;
    bottom: 5px;
    left: 0;
    right: 0;
  }
  .item-info p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 10px 0;
  }
  .item-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .item-info .price::before {
    content: '￥';
  }
  .item-info .collect {
    position: relative;
  }
  .item-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
