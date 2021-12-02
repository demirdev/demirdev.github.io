<script setup>
// import Card from './Card.vue'
import { ref } from "vue";

defineProps({
  content: String,
});

</script>

<template>
  
  <div class="grid grid-cols-12">
      
      <div class="col-span-8 my-4">
          <div class="prose">
            {{content}}
          </div>
      </div>
      
      <div class="col-span-4 flex items-stretch">
        <div class="h-1 bg-gray-300 w-1/4 self-center ml-4"></div>
        <div class="w-1 bg-gray-300"></div>
        <div class="w-3/4 text-right pr-4 self-center">10.12.2019</div>
      </div>
      <!-- <div class="col-span-1 flex items-stretch" >
        <div class="w-3 bg-gray-400 flex">
          <div class="w-3 h-3 bg-red-300 rounded-full m-auto ml-0 hidden">
          </div>
        </div>
      </div> -->
    </div>


  

 
  
</template>

<style scoped>
</style>
