<script setup>
import LogoT from "@/assets/icons/LogoT.vue";
</script>

<template>
  <div class="py-12 container flex flex-wrap" id="mission">
    <div class="md:w-5/12 relative">
      <img
        src="@/assets/images/mission.png"
        class="aspect-square pr-14 pb-10"
      />
      <LogoT
        class="absolute bottom-0 right-0 w-1/2 bg-primary-400 fill-white"
      />
    </div>
    <div class="md:w-7/12 md:pl-4">
      <h3 class="font-semibold text-3xl">Mission</h3>
      <p class="text-2xl pt-6">
        Our goal is to build a professional image for our clients that makes us
        their preferred partner who strives to reach exceptional results.
      </p>
    </div>
  </div>
</template>
