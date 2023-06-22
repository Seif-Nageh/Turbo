<script setup>
import { ref } from "vue";

const basicUrl = ref(`assets/images/portfolio/`);
const companies = ref([
  {
    title: "Saudi German Hospital",
    description: `Saudi German Health is a representation of how far we have come, a celebration of our Saudi roots, our international partnerships, our commitment to Subspecialty Clinics, Mayo Clinic Care`,
    imgSrc: `${basicUrl.value}saudi.png`,
    pathName: "portfolio",
  },
  {
    title: "Gold’s Gym Madina",
    description: `Al Madunah branch is a part of the Gold's Gym chain located in Saudi Arabia. The gym offers state-of-the-art fitness equipment, group classes, and personal training services.`,
    imgSrc: `${basicUrl.value}golds.png`,
    pathName: "portfolio",
  },
  {
    title: "Castello Coffee Madina",
    description: `Castello Coffee is a specialty coffee shop chain based in Saudi Arabia. It was founded in 2015 with a focus on providing high-quality coffee made from premium beans sourced from around the world`,
    imgSrc: `${basicUrl.value}castello.png`,
    pathName: "portfolio",
  },
  {
    title: "Golden Travel Agency",
    description: `The Golden International Agency for Travel and Tourism is a Saudi company established in 2011. It operates in the field of domestic and foreign tourism and travel.`,
    imgSrc: `${basicUrl.value}golden.png`,
    pathName: "portfolio",
  },
]);
</script>

<template>
  <div class="container tracking-widies py-8">
    <h2 class="text-4xl font-semibold">Portfolio</h2>
    <div
      v-for="company of companies"
      :key="company.title"
      class="flex flex-wrap xl:container md:py-12 group"
    >
      <div
        class="md:w-5/12 md:group-odd:order-2 md:group-even:order-1 bg-primary-400 aspect-square"
      >
        <img
          :src="company.imgSrc"
          alt="saudi"
          class="w-full h-full transition-all duration-300 group-odd:hover:translate-x-2 group-even:hover:-translate-x-2 hover:-translate-y-2"
          loading="lazy"
        />
      </div>
      <div
        class="flex flex-col justify-center py-6 md:py-0 md:w-7/12 md:group-even:pl-6 md:group-odd:pr-6 lg:group-even:pl-20 lg:group-odd:pr-20 md:group-even:order-2 md:group-odd:order-1"
      >
        <h3 class="text-6xl font-semibold">{{ company.title }}</h3>
        <p class="py-8 text-xl leading-8 font-medium">
          {{ company.description }}
        </p>
        <RouterLink
          :to="{ name: company.pathName }"
          class="btn-primary-outline w-fit px-12 py-3"
        >
          See More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
