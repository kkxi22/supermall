<template>
  <div class="storeInfo" v-if="Object.keys(storeInfo).length">
    <div class="storeName">
      <a :href="storeInfo.shopUrl">
        <img :src="storeInfo.shopLogo" alt="">
        <span>{{storeInfo.name}}</span>
      </a>
    </div>
    <div class="baseInfo">
      <div class="sellDesc">
        <table>
          <tr>
            <td>{{storeInfo.cSells}}</td>
            <td>{{storeInfo.cGoods}}</td>
          </tr>
          <tr>
            <td>总售量</td>
            <td>全部宝贝</td>
          </tr>
        </table>
      </div>
      <div class="shopDesc">
        <div class="descContent" v-for="index in storeInfo.score.length">
          <span>{{storeInfo.score[index-1].name}}</span>
          <span class="score" :class="{itLevel: storeInfo.score[index-1].isBetter}">{{storeInfo.score[index-1].score}}</span>
          <span class="isBetterTrue" v-if="storeInfo.score[index-1].isBetter">高</span>
          <span class="isBetter" v-else>低</span>
        </div>
      </div>
    </div>
    <div class="inStore">
      <a :href="storeInfo.allGoodsUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailStoreInfo",
    props: {
      storeInfo: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        isTrue: false
      }
    },
    mounted() {
      // this.isTrue = this.storeInfo.score[index-1].isBetter
    },
    computed: {
     //  getLevel() {
     //   return this.storeInfo.score[index-1].isBetter
     // }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .storeInfo {
    padding: 10px;
    border-bottom: 1px solid #e7e7e7;
  }
  .storeName img {
    width: 50px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .storeName span {
    margin-left: 10px;
    font-weight: bold;
    font-size: 16px;
  }
  .baseInfo {
    display: flex;
    margin-top: 20px;
    text-align: center;
    justify-content: space-around;
    padding: 10px;
  }
  .sellDesc table {
    border-right: 1px solid #c6beb3;
  }
  .sellDesc table td {
    padding-right: 10px;
    font-size: 14px;
  }
  .shopDesc {
    font-size: 14px;
    text-align: left;
    position: relative;
    top: -22px;
  }
  .descContent {
    font-size: 14px;
  }
  .descContent span {
    display: inline-block;
    margin: 5px 2px;
  }
  .descContent .isBetter {
    float: right;
    background-color: green;
    color: #fff;
  }
  .descContent .isBetterTrue {
    float: right;
    background-color: red;
    color: #fff;
  }
  .descContent .score{
    color: green;
  }
  .descContent .itLevel {
    color: red;
  }

  .inStore {
    text-align: center;
  }
  .inStore a {
    background-color: #b7b7b7;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    top: -10px;
  }
</style>
