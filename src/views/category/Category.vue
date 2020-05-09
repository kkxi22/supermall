<template>
    <div class="wrapper">
      <ul class="content">
        <li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB</li><li>SB</li>
        <li>SB</li>
        <li>SB100</li>
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
