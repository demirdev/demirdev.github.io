<script setup>
import { ref } from "vue";
import WhatsAppIcon from "./WhatsAppIcon.vue";

defineProps({
  works: Object,
});

</script>

<template>
  <div class="pt-8">
      <div id="fihrist" class="card m-4 p-1 dark:bg-darkBg ">
        <h1 class="text-lg p-4 pb-0 pl-6 font-light">Geliştirdiğim Yazılımlar</h1>
        <div v-for="(work, index) in works" :key="index" class=" p-2 bg-white dark:bg-gray-900 m-4">
          <router-link :to="{name:'work', params: {id: index}}" class="flex items-center" tag="a"> 
            <div class="w-1/12">
              <img :src="work.icon == null ? work.images[0] : work.icon"  />
            </div>
          <div class="pl-2">
            <div class="text-normal text-indigo-500 dark:text-indigo-400 font-bold">
            {{ work.workType }} - <span class=" text-gray-700 dark:text-gray-200"> {{work.date}} </span>
            </div>
          <div class=" text-xl font-semibold">
           {{ work.title }} 
          </div>
          </div>
          </router-link>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>

