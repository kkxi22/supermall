<template>
     <div id="tab-bar">
       <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    height: 49px;
    font-size: 12px;
    padding-top: 5px;
    background-color: #f6f6f6;
    box-shadow: 0 -2px 5px rgba(100,100,100,0.15);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
