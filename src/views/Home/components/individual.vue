<script setup>
import { reactive } from "vue";
import { recommendSongList } from "@/api/home";
import CardChunk from '@/components/CardChunk/index.vue'
import { useRouter } from "vue-router";

const recommendSongs = 'recommendSongs';

const state = reactive({
  recommend: [],
  loading: false,
});

const router = useRouter();

async function init() {
  state.loading = true;
  const { recommend } = await recommendSongList();
  state.loading = false;
  state.recommend = recommend;
}
init();

const playDetailList = (item) => {
  const id = item.id || item;
  router.push(`/daily-recommend?id=${id}`);
};
</script>


<template>
  <div v-loading="state.loading" class="container">
    <CardChunk @click="playDetailList" :recommend="state.recommend" title="推荐歌单">
      <Card :is-click="true" @click="playDetailList(recommendSongs)" name="每日歌曲推荐" pic-url="/src/assets/test.png"></Card>
    </CardChunk>
  </div>
</template>

<style lang="less" scoped>
.container {

}
</style>