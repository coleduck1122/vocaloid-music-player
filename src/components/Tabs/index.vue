<script setup name="Tabs">
import { computed, onMounted } from "vue";

const props = {
  modelValue: String
};

const emit = (event, ...args) => {
  if (typeof event === 'string') {
    event = `update:${event}`;
  }
  return $emit(event, ...args);
};

const activeName = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('modelValue', val);
  }
});

// 可选的，在组件挂载时触发一次 modelValue 的更新事件
onMounted(() => {
  emit('modelValue', props.modelValue);
});
</script>


<template>
  <el-tabs class="bass-tabs" v-model="activeName" v-bind="$attrs">
    <slot></slot>
  </el-tabs>
</template>

<style lang="less">
.bass-tabs.el-tabs {
  .el-tabs__active-bar {
    background-color: @subject;
    transition: 0.3s ease !important;
  }
  .el-tabs__item.is-active {
    font-size: 18px !important;
    color: white !important;
    font-weight: 800;
  }
  .el-tabs__content {
    overflow: inherit;
  }
  .el-tabs__item {
    color: @darkText;
    font-size: 16px;
    transition: font-size 0.1s;
  }
  .el-tabs__nav-wrap::after {
    content: none;
  }

  .el-tabs__content {
    padding-top: 20px;
    text-align: left;
  }
}
</style>