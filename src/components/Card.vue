<script setup>
import { ref } from "vue";

defineProps({
  imageUrl: String,
});

const count = ref(0);
</script>

<template>
  <div class="card m-2">
    <img class="rounded-tl rounded-bl w-full h-64 sm:h-96 object-cover"  :src="imageUrl" alt="Mina Reader">
    <div class="p-6">
      <span class="font-bold text-xl" >Mina Reader22</span>
      <span class="block" >Mina Reader</span>
    </div>
    <div class="flex flex-wrap"><!-- programming languages -->
      <div class="bg-secondary-100 rounded-full p-2 m-2">Flutter</div>
      <div class="bg-secondary-100 rounded-full p-2 m-2">Dart</div>
      <div class="bg-secondary-100 rounded-full p-2 m-2">Android</div>
      <div class="bg-secondary-100 rounded-full p-2 m-2">iOS</div>
      <div class="bg-secondary-100 rounded-full p-2 m-2">GitHub</div>
    </div>
  </div>
</template>

<style scoped>
</style>

