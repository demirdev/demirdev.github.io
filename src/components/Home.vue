<script setup>
import Card from "./Card.vue";
import TimeLine from "./TimeLine.vue";
import Article from "./Article.vue";
import Header from "./Header.vue";
import ChangeLanguage from "./ChangeLanguage.vue";
import { get } from "lodash";

import { works_tr } from "../assets/i18n/works_tr";
import { works_en } from "../assets/i18n/works_en";

import { ref } from "vue";

defineProps({
  msg: String,
});

const lang = localStorage.getItem("lang") || "en";
const works = lang == "en" ? works_en : works_tr;

const workGroups = new Set([]);
works.forEach((e) => {
  if (Array.isArray(e.workGroups)) {
    e.workGroups.forEach((wG) => workGroups.add(wG));
  } else {
    if (e.workGroups === undefined) {
      // continue;
    } else {
      workGroups.add(e.workGroups);
    }
  }
});

console.log(workGroups);
</script>



<template>
  <div>

  </div>

 <div class="">
    <!-- content wrapper -->
    
    <!-- end nav -->

    <main class="px-4 ">
      <!-- <div class="bg-red-500 sm:bg-yellow-400 md:bg-secondary-200 h-10 w-10"></div> -->

      <div class="p-1">
        <div class="flex justify-between items-center hidden">
          <h1 class="text-2xl">{{ $t("works_title") }}</h1>
          <div class="invisible md:invisible">
            <ChangeLanguage />
          </div>
        </div>

        <div class="invisible p-2 mb-1 flex-wrap flex hidden">
          <div
            v-for="workGroup in workGroups"
            :key="workGroup"
            class="mr-2 bg-green-200 p-2 rounded-full"
          >
            {{ $t(workGroup) }}
          </div>
        </div>

        <div v-for="work in works" :key="work.id">
          <!-- {{work}} -->
          <a :id="work.id">
          <Article :work="work" />
          </a>
        </div>

        <!--
      <div class="pb-96"></div>
-->
        <!--
      <div>
        <PortfolioItem />
      </div>

      <div>
        <TimeLine content="# Heading" />
        <TimeLine />
      </div>        
  -->
        <!--
        <h2 class="text-2xl font-light border-b mb-2">Referanslar</h2>
        <div class="grid  lg:grid-cols-2 gap-8">
        
          <Card imageUrl="assets/logo.png"/>
            
        </div>
        -->
      </div>

      <!--
      <div>
         

         
        <div class="flex justify-center">
          <div class="btn  bg-secondary-100 text-secondary-200">Load more</div>
        </div>


      </div>

      <div class="my-6 border-b border-t border-r border-gray-300 rounded">
        <img class="rounded-tl rounded-bl" src="../assets/ref/avatar.webp" alt="">
      </div>
-->
    </main>
  </div>
</template>

<style scoped>
</style>
