<script setup name="Home">
import { ref } from 'vue';
import { tabsConfig } from './config';
import List from '@/components/List/index.vue';

const activeName = ref(tabsConfig[0].name);

const handleClick = (tab, event) => {
  // 在此处添加处理点击事件的逻辑
};
</script>


<template>
  HEwdlawdlwa
<!-- <div class="padding-container">
    <List :count="2">
      <div>
        <div class="test">111</div>
        <div class="test">222</div>
      </div>
    </List>
    <tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <tab-pane :name="item.name" :label="item.label" v-for="item in tabsConfig">
        <component v-if="item.name === activeName" :is="item.component"></component>
      </tab-pane>
    </tabs>
  </div> -->
</template>

<style lang="less" scoped>

</style>