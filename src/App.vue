<template>
  <div id="app">
    <Main></Main>
    <foooter></foooter>
  </div>
</template>

<script>
import Foooter from './components/Foooter.vue'
import Main from './components/Main.vue'
export default {
  components: { Foooter, Main }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
