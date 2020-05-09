<template>
  <div class="shop-menu">
    <shop-menu-item v-for="item in goods"
                    :goodsItem="item"
                    class="item"/>
  </div>
</template>

<script>
  import ShopMenuItem from "./ShopMenuItem";
  export default {
    name: "ShopMenu",
    components: {
      ShopMenuItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .shop-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
  }
  .item {
    width: 48%;
  }
</style>
