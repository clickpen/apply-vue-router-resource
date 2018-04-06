<template>
  <div id="app">
    <div class="appnav">
      <span class="nav">Navigation Bar</span>
      <router-link class="link" to="/">To home</router-link>
      <router-link class="link" to="/usermsg">To record usersmsg</router-link>
      <router-link class="link" to="/translate">To Translate</router-link> 
    </div>
   <router-view class="router"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#app .appnav {
  position: fixed;
  width: 100%;
  height: 20px;
  top: 0;
  text-align: center;
  background-color: #eee;
  z-index: 999;
}
#app .appnav .link {
  position: relative;
  text-decoration: none;
  margin: 0 15px;
  line-height: 20px;
  cursor: pointer;
}
#app .appnav .nav {
  position: absolute;
  left: 0;
  top: 0;
  height: 20px;
  background-color: lightgreen;
  line-height: 20px;
  cursor: default;
}
#app .router {
  margin-top: 20px;
}
</style>
