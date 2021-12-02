<script setup>
import { ref } from "vue";

defineProps({
  showGallery: Boolean,
  images: Array,
  currentIndex: Number,
});

// const currentIndex = ref(0);

</script>

<template>
   <div class="mt-4 mx-auto z-0">
     
      <img class="w-screen" v-if="images" :src="images[currentIndex]" />
      
   </div> 
</template>

<style scoped>
</style>
