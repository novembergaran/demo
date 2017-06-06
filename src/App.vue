<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>

   <m-tabbar style="z-index:1000;">
      <m-tabbar-item id='tab1' @click.native="$router.push('/M')">
        <img src="./assets/Home.png" alt="" slot="icon-normal"> 
        首页
      </m-tabbar-item>
      <m-tabbar-item id='tab2'>
        <img src="./assets/Music.png" alt="" slot="icon-normal"> 
        音乐
      </m-tabbar-item>
      <m-tabbar-item id='tab3'>
        <img src="./assets/TV.png" alt="" slot="icon-normal"> 
        视频
      </m-tabbar-item>
    </m-tabbar>

  </div>
</template>

<script>
import Mainer from './components/Mainer.vue'
import Header from './components/Header.vue'
import mTabbar from './components/tabbar'
import mTabbarItem from './components/tabbar-item'
export default {
  components: { Mainer, Header, mTabbar, mTabbarItem },
      data() {
      return {
        select:"tab1"
      }
    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
