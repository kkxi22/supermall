<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
import router from './router/index'

export default {
  name: 'App',
  router,
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
