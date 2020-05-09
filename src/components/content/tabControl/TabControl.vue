<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :class="{active: currentIndex=== index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex:0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('changeclick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    z-index: 9;
    height: 40px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
    font: 14px/40px "Microsoft YaHei";
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 2px solid var(--color-tint);
    padding-bottom: 2px;
  }
</style>
