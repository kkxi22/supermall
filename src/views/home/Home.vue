<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <tab-control class="tab-control"
                     ref="tabOffset2"
                     :titles="['流行','新款','精选']"
                     @changeclick="changeclick"
                   :class="{fixed: isFixed}" v-show="isFixed"/>
      <scroll class="wrapper" ref="scroll" @scroll="scroll" @loadMore="loadMore">
        <home-swiper :banners="banners" @swiperLoad="swiperLoad"/>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control class="tab-control"
                     ref="tabOffset"
                     :titles="['流行','新款','精选']"
                     @changeclick="changeclick"/>
        <shop-menu :goods="goods[currentType].list"/>
      </scroll>
      <back-top @click.native="backClick" v-show="showOrNot"/>
    </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import ShopMenu from "components/common/shopmenu/ShopMenu";
  import Scroll from "components/common/scroll/Scroll";

  import {getHomeMultidata, getHomeGoods} from "network/home";
  import {debouce} from "common/utils";
  import {itemImgListenerMixIn, backTopMixIn} from  "common/mixin"

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page:0, list: []},
          'new': {page:0, list: []},
          'sell': {page:0, list: []},
        },
        currentType: 'pop',
        // showOrNot: false,
        disTop: 0,
        flag: true,
        isFixed: false,
        leavePosition: 0
      }
    },
    components: {
      Scroll,
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      ShopMenu
    },
    created() {
      this.getHomeMultidata()
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mixins: [itemImgListenerMixIn, backTopMixIn],
    mounted() {
    },
    activated() {
      // console.log('----');
      // console.log(this.leavePosition);
      this.$refs.scroll.backScroll(0, this.leavePosition)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 得到离开home时的位置y
      this.leavePosition = this.$refs.scroll.scroll.y
      // console.log(this.leavePosition);
      // 离开时取消全局时间监听
      this.$bus.$off('itemImgLoad', this.funcListener)
    },
    methods: {
      /*事件监听*/
      changeclick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabOffset2.currentIndex = index
      },
      /* 网络请求*/
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const pages = this.goods[type].page +1;
        getHomeGoods(type, pages).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishScroll()
        })
      },
      scroll(position) {
        this.showOrNot = (-position.y) > 1000
        this.isFixed = (-position.y) > this.disTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperLoad() {
        if (this.flag) {
          this.disTop =  this.$refs.tabOffset.$el.offsetTop
          this.flag = false
        }
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
  }
  .home-nav {
    background-color:  var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    /*position: sticky;*/
    /*top: 44px*/
  }
  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }
</style>
