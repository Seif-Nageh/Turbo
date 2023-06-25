<script setup>
import LoadingScreen from "./components/LoadingScreen.vue";
import NavBar from "@/components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import { onMounted, onUpdated, watch } from "vue";
import { initFlowbite } from "flowbite";
import router from "./router";
import { useGlobalStore } from "@/stores/global.js";
const global = useGlobalStore();
let path = router.options.history.location;

// update path whenever the route changes
watch(
  () => router.currentRoute.value,
  () => {
    path = router.options.history.location;
    scrollToHash();
  }
);

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
  scrollToHash();
});
onUpdated(() => {
  scrollToHash();
});
function scrollToHash() {
  if (path.includes("#")) {
    const idIndex = path.search("#");
    const idName = path.slice(idIndex + 1);
    const element = document.getElementById(idName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
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
