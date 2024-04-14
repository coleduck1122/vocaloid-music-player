<script setup lang="ts">



</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div style="height: 100%;position: relative;z-index: auto">
    <div id="box">
      <Aside></Aside>
      <div class="main">
        <Header></Header>
        <div class="body">
          <div class="top"></div>
          <router-view v-slot="{Component}">
            <!--          <keep-alive>-->
            <component :is="Component"></component>
            <!--          </keep-alive>-->
          </router-view>
        </div>
      </div>
    </div>
    <div style="height: 20px"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
