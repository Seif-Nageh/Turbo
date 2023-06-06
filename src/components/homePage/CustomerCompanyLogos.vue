<script setup>
import { ref } from "vue";

const basicUrl = ref("/src/assets/images/customerLogos/");
const companies = ref([
  {
    name: "castello",
    url: `${basicUrl.value}castello.png`,
  },
  {
    name: "saudi",
    url: `${basicUrl.value}saudi.png`,
  },
  {
    name: "golden",
    url: `${basicUrl.value}golden.png`,
  },
  {
    name: "brulee",
    url: `${basicUrl.value}brulee.png`,
  },
  {
    name: "meridien",
    url: `${basicUrl.value}meridien.png`,
  },
]);
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-5 gap-12 container py-8">
    <div
      v-for="company of companies"
      :key="company.name"
      class="flex items-center justify-center"
    >
      <img
        :src="company.url"
        :alt="company.name"
        class="grayscale hover:grayscale-0 transition-all duration-500"
        loading="lazy"
      />
    </div>
  </div>
</template>
