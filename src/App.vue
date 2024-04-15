<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useRoute} from "vue-router";
// import '@/utils/shortcutKey'
// import {getUserAccountFn} from "@/utils/userInfo"
// import {useFlags} from "@/store/flags";
// import {useMusicAction} from "@/store/music";
// import Header from '@/layout/BaseHeader/index.vue'
// import Aside from '@/layout/BaseAside/index.vue'
// import Bottom from '@/layout/BaseBottom/index.vue'
// import MusicDetail from '@/components/MusicDetail/index.vue'
// import MusicPlayer, {MusicPlayerInstanceType} from '@/components/MusicPlayer/index.vue'
// import Login from '@/components/Login/index.vue'
// import {useUserInfo} from "@/store";
// import PlayListDrawer from '@/components/PlayListDrawer/index.vue'
// import {useAnonimousLogin} from "@/utils/useLogin";

// const audioInstance = ref<MusicPlayerInstanceType>()
// const login = ref()
// const music = useMusicAction()
// const flags = useFlags()
const route = useRoute()
// const store = useUserInfo()
// // 初始化全局属性
// onMounted(() => {
//   if(audioInstance.value !== undefined) {
//     window.$audio = audioInstance.value!
//     console.log('初始化全局$audio：', window.$audio)
//   }
//   window.$login = login.value!
//   useAnonimousLogin()
//   document.addEventListener('click', () => {
//     flags.isOpenDrawer = false
//   })
// })
// getUserAccountFn()

</script>

<template>
  <div style="height: 100%;position: relative;z-index: auto">
    <div id="box">
      <!-- <Aside></Aside> -->
      <div class="main">
        <!-- <Header></Header> -->
        <div class="body">
          <div class="top"></div>
          <router-view v-slot="{Component}">
            <component :is="Component"></component>
          </router-view>
        </div>
      </div>
    </div>
    <div style="height: 20px"></div>
  </div>
</template>

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
