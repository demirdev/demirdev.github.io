<script setup>
import { inject, ref } from "vue";
import { useRoute } from "vue-router";
import ImageGallery from "./ImageGallery.vue";
import BackButton from "./BackButton.vue";

const $works = inject('$works')

const route = useRoute();
const work = $works[route.params.id]

const currentImageIndex = ref(0);
const showImageGallery = ref(false);
</script>

<template>
  <!-- <div v-if="showImageGallery">    
      <ImageGallery :showGallery="showImageGallery" :images="work.images" 
      :currentIndex="currentImageIndex"/>
    </div> -->
    <BackButton />
  <article class="card dark:bg-darkCardBg py-8 px-6 sm:px-8 my-3 relative dark:text-darkText">
    <div class="absolute right-3 pr-4">
      <div>
        {{ work.date }}
      </div>

      <div
        v-if="work.clientCount"
        class="items-center text-right text-gray-500 dark:text-darkText"
      >
        {{ work.clientCount }}
        <!--   
      <span class="flex h-3 w-3">
      <span class="absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
    </span> -->

        <span class="pl-1 dark:text-gray-200">
          {{ $t("reference") }}
          <div class="flex justify-end">
            <div class="h-4 w-4 animate-pulse rounded-full bg-green-400"></div>
          </div>
        </span>
      </div>
    </div>

    <header>
      <h1 class="flex flex-col items-start">
        <span class="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
          {{ work.workType }}</span
        >
        <span
          class="
            mt-2
            text-2xl
            font-extrabold
            tracking-tight
            text-gray-900
            dark:text-gray-200
            sm:text-3xl
          "
        >
          {{ work.title }}</span
        >
      </h1>

      <!-- <hr class="mt-8 w-20 mx-auto border-t-2" /> -->
    </header>

    <p class="my-6" v-html="work.description">      
    </p>

          <div class="" v-if="work.link">
        <a :href="work.link" target="_blank" class="font-semibold text-indigo-600 dark:text-indigo-300">{{
          work.link
        }}</a>
      </div>

    <div class="mt-4 w-full">
      <div class=" bg-yellow-100 p-2 rounded-lg mb-2" v-if="work.photosRepresentative" >{{ $t('photosRepresentative') }}</div>
      <div class="bg-gray-300 flex justify-center items-center">
        <img class="rounded-2xl"
          v-if="work.images"
          @click="showImageGallery = true"
          :src="work.images[currentImageIndex]"
        />
      </div>
      <div class="flex flex-wrap items-start pt-1">
        <img
          class="pr-2 w-32 rounded-2xl"
          v-for="(image, index) in work.images"
          :key="index"
          :src="image"
          @click="currentImageIndex = index"
        />
      </div>

      <div class="mt-6">
        <div class="block pb-1 text-lg font-semibold">
          {{ $t("features") }}:
        </div>
        <ul class="list-none md:list-disc">
          <li v-for="feature in work.features" :key="feature" class="ml-1 p-1">
            {{ feature }}
          </li>
        </ul>
      </div>

      <!-- <div class="mt-6">
        <div class="block pb-2">{{$t('capabilities')}} :</div>
        <span v-for="capability in work.capabilities" :key="capability" class="mr-2 bg-gray-100 rounded-full p-2 text-sm">{{capability}}</span>
      </div> -->

      <div class="mt-6">
        <div class="block pb-3 text-lg font-semibold">
          {{ $t("used_programming_technologies") }} :
        </div>
        <span
          v-for="tech in work.techs"
          :key="tech"
          class="mr-2 bg-gray-100 dark:bg-gray-700 rounded-full p-2 text-sm"
        >
          {{ tech }}</span
        >
      </div>

      <div class="mt-6" v-if="work.video">
        <div class="block pb-1 text-lg font-semibold">{{ $t("video") }}:</div>
        <div v-html="work.video"></div>
      </div>

      
    </div>
  </article>
</template>

<style scoped>
</style>
