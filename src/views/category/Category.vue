<template>
    <div class="wrapper">
      <ul class="content">
        <li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
        <li>测试better-scroll</li><li>测试better-scroll</li>
        <li>测试better-scroll</li>
      </ul>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Categroy",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'), {
      })
    }
  }
</script>

<style scoped>
  .wrapper {
    background-color: #ffb8ef;
    height: 200px;
    overflow: hidden;
  }
</style>
