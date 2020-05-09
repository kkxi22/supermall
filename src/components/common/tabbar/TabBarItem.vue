<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-active"></slot></div>
      <div :style="activeClass"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#ff70a3'
      }
    },
    data() {
      return {
        // isActive: true,
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeClass() {
        return this.isActive ? {color: this.activeColor}: {}
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path).catch(err => {err.message})
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
  }
  .tab-bar-item img {
    width: 24px;
    /*vertical-align: middle;*/
  }
  .active {
    color: #ff70a3;
  }
</style>
