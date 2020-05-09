<template>
  <div class="recommends" v-if="Object.keys(rate).length">
    <div class="recHeader">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="name" v-for="item in rate.list">
      <img :src="item.user.avatar" alt="" class="header">
      <span class="uname">{{item.user.uname}}</span>
      <div class="content">
        <div class="text">{{item.content}}</div>
        <div class="date">
          <span>{{item.created | dateChange}}</span>
          <span>{{item.style}}</span>
        </div>
        <div class="showImg" v-for="imgItem in item.images">
          <img :src="imgItem" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {dateFormat} from "common/utils";
  export default {
    name: "DetailRecommends",
    props: {
      rate: Object,
      default() {
        return {}
      }
    },
    filters: {
      dateChange(time) {
        let data = new Date(time)
        return dateFormat(data, 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  .recommends {
    padding: 10px;
    border-bottom: 5px solid #eee;
  }
  .recHeader {
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
  }
  .recHeader span:nth-child(2) {
    /*background-color: #d8a9ff;*/
    float: right;
  }
  .name {
    margin: 5px 0;
  }
  .name .header {
    width: 50px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .name .uname {
    font-weight: bold;
    font-size: 18px;
    padding-left: 10px;
  }
  .content .text {
    margin: 10px 0;
    font-size: 14px;
    letter-spacing: 2px;
    text-indent: 20px;
  }
  .content .date {
    margin: 10px 0;
    font-size: 14px;
  }
  .content .date span {
    padding-right: 10px;
  }
  .content .showImg {
    display: inline-block;
  }
  .content .showImg img {
    height: 80px;
    padding-right: 5px;
  }
</style>
