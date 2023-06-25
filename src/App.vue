<script setup>
import LoadingScreen from "./components/LoadingScreen.vue";
import NavBar from "@/components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

import { useGlobalStore } from "@/stores/global.js";
const global = useGlobalStore();

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="font-Montserrat bg-black text-white">
    <transition leave-active-class="ease-in">
      <LoadingScreen v-show="global.loadingScreen" />
    </transition>
    <div class="min-h-screen flex flex-col">
      <NavBar />
      <RouterView />
    </div>
    <FooterBar />
  </div>
</template>
