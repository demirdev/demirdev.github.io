<script setup>
import { ref } from "vue";
import WhatsAppIcon from "./WhatsAppIcon.vue";

defineProps({
  works: Object,
});

</script>

<template>
  <div class="pt-8 pl-4 dark:bg-gray-800 dark:text-gray-200">
      <nav class="p-2">
        <div
          class="pb-4 flex items-center justify-start md:flex-wrap md:relative"
        >
        <router-link to= "/" tag="a">
        <div class="flex items-center">

          <img class="rounded-full w-32" src="/images/profile.png" alt="" />
          <div class="ml-6 items-center">
            <h1 class="text-gray-600 dark:text-gray-100 text-3xl">
              Mehmet Demir
            </h1>
            <span>{{ $t("work_title") }}</span>
          </div>

        </div>
        </router-link>
          <div class="invisible md:invisible right-5 top-5 absolute">
            <ChangeLanguage />
          </div>
        </div>
        <ul
          class="
            flex
            space-x-4
            flex-wrap
            items-center
            md:items-start
          "
        >
        <!-- md:space-x-0 md:flex-none md:flex-col -->
            
          <li class="p-2">
            <a href="https://wa.me/905457307677" target="_blank">
              <div class="flex items-center">
                <WhatsAppIcon />

                <span class="invisible sm:visible w-0 sm:w-auto">
                  {{ $t("contact_me") }}
                </span>
              </div>
            </a>
          </li>

          <li class="p-2">
            <a href="https://github.com/demirdev" target="_blank">
              <div class="flex items-center">
                <svg
                  class="h-7 pr-2 pl-2 fill-current text-github dark:text-gray-100"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                    
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"                  
                  />
                </svg>
                <span class="invisible sm:visible w-0 sm:w-auto">
                  demirdev
                </span>
              </div>
            </a>
          </li>

          <li class="p-2">
            <a href="https://twitter.com/demirdevv" target="_blank">
              <div class="flex items-center">
                <svg
                  class="h-7 pr-1 pl-1"
                  version="1.1"
                  id="Logo"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 248 204"
                  style="enable-background: new 0 0 248 204"
                  xml:space="preserve"
                >
                  <g id="Logo_1_">
                    <path
                      id="white_background"
                      class="twitter"
                      d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
                  C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
                  c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
                  c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
                  c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
                  c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                    />
                  </g>
                </svg>
                <span class="invisible sm:visible w-0 sm:w-auto">
                  demirdevv
                </span>
              </div>
            </a>
          </li>
          <li class="p-2">
            <a href="https://t.me/demirdev" target="_blank">
              <div class="flex items-center">
                <svg
                  class="h-8 pr-1 pl-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 240 240"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1=".667"
                      x2=".417"
                      y1=".167"
                      y2=".75"
                    >
                      <stop offset="0" stop-color="#37aee2" />
                      <stop offset="1" stop-color="#1e96c8" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1=".66"
                      x2=".851"
                      y1=".437"
                      y2=".802"
                    >
                      <stop offset="0" stop-color="#eff7fc" />
                      <stop offset="1" stop-color="#fff" />
                    </linearGradient>
                  </defs>
                  <circle cx="120" cy="120" r="120" fill="url(#a)" />
                  <path
                    fill="#c8daea"
                    d="M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80"
                  />
                  <path
                    fill="#a9c9dd"
                    d="M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035"
                  />
                  <path
                    fill="url(#b)"
                    d="M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258"
                  />
                </svg>
                <span class="invisible sm:visible w-0 sm:w-auto">
                  demirdev
                </span>
              </div>
            </a>
          </li>
        </ul>
      </nav>


    </div>
</template>

<style scoped>
</style>

