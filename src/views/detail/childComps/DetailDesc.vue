<template>
  <div class="detail-desc" v-if="Object.keys(detailInfo).length">
    <div class="descInfo">{{detailInfo.desc}}</div>
    <div class="showImg" v-for="item in detailInfo.detailImage">
      <div class="descInfo">{{item.key}}</div>
      <div v-for="imgItem in item.list">
        <img :src="imgItem" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailDesc",
    props: {
      detailInfo: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .detail-desc {
    padding: 10px;
  }
  .descInfo {
    font-size: 14px;
    letter-spacing: 4px;

  }
  .descInfo:after {
    content: ' ';
    display: block;
    text-align: right;
    width: 50%;
    border-bottom: 1px solid #e7e7e7;
    padding: 5px 0;
  }
  .showImg img {
    width: 100%;
  }
</style>
