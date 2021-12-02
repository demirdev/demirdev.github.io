import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n';
import './index.css'

import en from './assets/i18n/en.json'
import tr from './assets/i18n/tr.json'

import Article from "./components/Article.vue";
import Fihrist from "./components/Fihrist.vue";
import { createRouter, createWebHashHistory } from 'vue-router';


// works
import { works_tr } from "./assets/i18n/works_tr";
import { works_en } from "./assets/i18n/works_en";

const lang = localStorage.getItem("lang") || "en";
const works = lang == "en" ? works_en : works_tr;

const workGroups = new Set([]);
works.forEach((e) => {
  if (Array.isArray(e.workGroups)) {
    e.workGroups.forEach((wG) => workGroups.add(wG));
  } else {
    if (e.workGroups != undefined) {
      workGroups.add(e.workGroups)
    }
  }
});

const routes = [
  {path:'/', component: Fihrist, props:{works: works}},
  {path:'/work/:id', name:'work', component: Article},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export const i18n = createI18n({
    legacy: true,
    locale: lang, // set locale
    fallbackLocale: 'en', // set fallback locale
    globalInjection: true,
    messages: {
      en: en,
      tr: tr,
    }
    // If you need to specify other options, you can set other options
    // ...
  })

  
  const app = createApp(App).use(i18n).use(router);
  app.config.globalProperties.$lang = lang
  app.config.compilerOptions.isCustomElement = tag => (tag === 'rdf:RDF' || tag === 'cc:Work' )
  app.provide('$works', works);
  app.mount('#app')
// app.use(VueI18n)