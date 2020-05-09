<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data() {
      return {
        scroll
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: true,
        probeType: 3
      });
      this.scroll.on('scroll', (position) => {
        // console.log(this.scroll.scrollerHeight);
        this.scroll && this.$emit('scroll', position)
      });
      this.scroll.on('pullingUp',() => {
        // console.log('jiazai')
        this.scroll && this.$emit('loadMore')
        // this.scroll.finishPullUp()
      })
    },
    methods: {
      backScroll(x, y, time) {
        this.scroll && this.scroll.scrollTo(x, y, time=500)
      },
      finishScroll() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        // console.log('++++');
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
