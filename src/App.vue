<script setup>
import NavBar from "@/components/NavBar.vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import FooterBar from "./components/FooterBar.vue";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="font-Montserrat bg-black text-white">
    <NavBar />
    <RouterView />
    <FooterBar />
  </div>
</template>
