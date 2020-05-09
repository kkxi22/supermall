<template>
  <div id="detail">
    <nav-bar class="home-nav">
      <div slot="left" class="backImg" @click="backImg"><img src="~assets/img/common/back.svg" alt=""></div>
      <div slot="center" class="itemBox">
        <div v-for="(item, index) in navTitles"
             class="item"
             @click="itemClick(index)"
             :class="{active: currentIndex === index}">{{item}}</div>
      </div>
    </nav-bar>
    <scroll class="content" ref="scroll" @scroll="detailScroll">
      <detail-swiper :topImg="topImg"/>
      <detail-goods-info :goodsInfo="goodsInfo"/>
      <detail-store-info :storeInfo="storeInfo"/>
      <detail-desc  ref="detailDesc"  :detailInfo="detailInfo"/>
      <item-params :itemParams="itemParams"/>
      <detail-recommends  ref="commit"  :rate="rate"/>
      <shop-menu  ref="recommends"  :goods="recDataList"/>
    </scroll>
    <back-top @click.native="backClick" v-show="showOrNot"/>
    <detail-bottom-bar/>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import ShopMenu from "components/common/shopmenu/ShopMenu";
  import NavBar from "components/common/navbar/NavBar";
  import BackTop from "components/content/backtop/BackTop";

  import DetailSwiper from "views/detail/childComps/DetailSwiper"
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailStoreInfo from "./childComps/DetailStoreInfo";
  import DetailDesc from "./childComps/DetailDesc";
  import ItemParams from "./childComps/ItemParams";
  import DetailRecommends from "./childComps/DetailRecommends";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import {getDetailData, GoodsInfo, getRecommend} from "network/detail";
  import {debouce} from "common/utils";
  import {itemImgListenerMixIn, backTopMixIn} from "common/mixin"

  export default {
    name: "Detail",
    components: {
      BackTop,
      DetailBottomBar,
      ShopMenu,
      DetailRecommends,
      ItemParams,
      DetailDesc,
      Scroll,
      DetailStoreInfo,
      DetailGoodsInfo,
      NavBar,
      DetailSwiper
    },
    data() {
      return{
        iid: null,
        navTitles: ['商品', '详情', '评论', '推荐'],
        currentIndex: 0,
        topImg: [],
        goodsInfo: {},
        storeInfo: {},
        detailInfo: {},
        itemParams: {},
        rate: {},
        recDataList: [],
        tagPosition: [],
        getPositionY: null
      }
    },
    created() {
      //点击详情保存iid
      this.iid = this.$route.params.iid;
      // console.log(this.iid);
      //请求数据
      getDetailData(this.iid).then((res) => {
        // console.log(res.result)
        const data = res.result
        this.topImg = data.itemInfo.topImages;
        // console.log(this.topImg);
        //请求商品基本信息
        this.goodsInfo = new GoodsInfo(data.columns, data.itemInfo, data.shopInfo.services)
        //请求商店基本信息
        this.storeInfo = data.shopInfo
        //请求商品展示信息
        this.detailInfo = data.detailInfo
        //请求商品参数信息
        this.itemParams = data.itemParams
        //请求评论信息
        this.rate = data.rate
      });
      getRecommend ().then(res => {
        // console.log(res)
        this.recDataList = res.data.list
      });
    },
    mixins: [itemImgListenerMixIn, backTopMixIn],
    updated() {
      // 更新页面offsetTop的值
      this.getPositionY = debouce(() => {
        this.tagPosition = [0, this.$refs.detailDesc.$el.offsetTop - 50,
          this.$refs.commit.$el.offsetTop - 50, this.$refs.recommends.$el.offsetTop - 50]
        // console.log(this.tagPosition);
      }, 200);
      this.getPositionY()
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        // console.log(index);
        this.$refs.scroll.backScroll(0, -this.tagPosition[index], 0)
      },
      backImg() {
        this.$router.back()
      },
      //详情页滚动时，得到position.y
      detailScroll(position) {
        this.showOrNot = (-position.y) > 1000
        if (this.currentIndex !==0 && (position.y <= -this.tagPosition[0] && position.y > -this.tagPosition[1])) {
          this.currentIndex = 0
          // console.log(this.currentIndex);
        } else if (this.currentIndex !==1 && (position.y <= -this.tagPosition[1] && position.y > -this.tagPosition[2])) {
          this.currentIndex = 1
          // console.log(this.currentIndex);
        } else if (this.currentIndex !==2 && (position.y <= -this.tagPosition[2] && position.y > -this.tagPosition[3])) {
          this.currentIndex = 2
          // console.log(this.currentIndex);
        } else if (this.currentIndex !==3 && (position.y <= -this.tagPosition[3])) {
          this.currentIndex = 3
          // console.log(this.currentIndex);
        }
        // console.log(position.y);
      }
    },
    destroyed() {
      // 取消全局监听事件
      this.$bus.$off('itemImgLoad', this.funcListener)
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;
    z-index: 1;
    background-color: #fff;
  }
  .home-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 49px);
    overflow: hidden;
  }
  .itemBox {
    display: flex;
  }
  .item {
    flex: 1;
    font-size: 13px;
  }
  .active {
    color: var(--color-high-text);
  }
  .backImg img {
    margin: 13px 22px;
    width: 18px;
  }

</style>
