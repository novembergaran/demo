<template>
  <div id="app" class="app">
    <Header></Header>
    <router-view></router-view>

   <m-tabbar v-model="select">
      <m-tabbar-item id='tab1' @click.native="$router.push('/')">
        <img src="./assets/Home.png" alt="" slot="icon-normal"> 
        <img src="./assets/Home1.png" alt="" slot="icon-active"> 
        首页
      </m-tabbar-item>
      <m-tabbar-item id='tab2' @click.native="$router.push('/M')">
        <img src="./assets/Music.png" alt="" slot="icon-normal"> 
        <img src="./assets/Music1.png" alt="" slot="icon-active"> 
        音乐
      </m-tabbar-item>
      <m-tabbar-item id='tab3' @click.native="$router.push('/V')">
        <img src="./assets/TV.png" alt="" slot="icon-normal"> 
        <img src="./assets/TV1.png" alt="" slot="icon-active"> 
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
.app {
  overflow-y:auto;
  display: block;
  max-height:42rem;
}
</style>
