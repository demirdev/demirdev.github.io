<script setup>
import { ref } from "vue";

defineProps({
  imageUrl: String,
});

const handleLanguage = (event) => {
  localStorage.setItem('lang', event.target.value)
  window.location.reload()
}
const lang = localStorage.getItem('lang') || 'en';

const count = ref(0);
</script>

<script>
// const lang = localStorage.getItem('lang') || 'en';
  
// export default {
//       lang: lang,
// }
</script>


<template>


<div class="flex">
<select v-model="$i18n.locale" @change="handleLanguage" name="" id="">
  <option value="en">{{$t('english')}}</option>
  <option value="tr">{{$t('turkish')}}</option>
</select>
        <svg class="pl-1 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
</div>
      
</template>

<style scoped>
</style>
