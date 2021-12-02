<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "@vue/reactivity";
import Header from "./components/Header.vue";
import ThemeSwitch from "./components/ThemeSwitch.vue";

var theme = ref((localStorage.theme === 'dark') ? 'dark' : '');

const fromLocalStorage = localStorage.theme;

function toggleTheme() {
  theme.value = (theme.value === 'dark') ? '' : 'dark';
  localStorage.theme = theme.value;
  setTheme()
}

function setTheme(){
  document.querySelector('body').className = (theme.value === 'dark') ? 'dark-theme' : 'light-theme';
}

setTheme()

</script>

<template>
<div class="text-gray-700 font-body bg-gray-50 max-w-screen-lg mx-auto">
  <!-- <div :class=" (theme === 'dark') ? 'dark' : ''"> -->
  <!-- <div :class=" (theme === 'dark') ? 'dark' : ''"> -->
    <div
      class="dark:bg-gray-800 dark:text-darkText text-gray-900 w-full h-full"
    >
    <div class="text-center">
<!--       
   fromLocalStorage is Dark: {{fromLocalStorage}} <br>
   isDark: {{isDark}}<br> -->

    </div>
      <div class="max-w-screen-lg mx-auto">
        <div class="m-0">
          <a @click="toggleTheme">
            <div class="float">
              <div class="float-right p-6" id="dark-icon">
                <svg
                  v-if="!(theme === 'dark')"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-moon w-5"
                >
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  ></path>
                </svg>
                <svg
                  v-if="(theme === 'dark')"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-sun text-gray-200 w-5"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </div>
            </div>
          </a>
        </div>
        <Header />
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>

 
</template>

<style>
#app {
}
</style>
