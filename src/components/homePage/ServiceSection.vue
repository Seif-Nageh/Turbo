<script setup>
import { ref } from "vue";
import Pattern from "@/assets/icons/Pattern.vue";

const services = ref([
  {
    title: "Marketing",
    description:
      "Turbo provides market research, social media management, email marketing, and PPC advertising services to help businesses increase brand awareness and drive sales.Their marketing experts work closely with clients to tailor their approach to each business's unique needs and goals.",
  },
  {
    title: "Design",
    description:
      "Turbo's graphic design team offers logo design, brand identity, packaging design, and other visual design services to help businesses stand out in the market.Using the latest tools and techniques, they create high-quality designs that align with the client's vision and resonate with customers.",
  },
  {
    title: "Photography",
    description:
      "Turbo is a Saudi-based marketing agency offering comprehensive photography services, covering product, event, portrait, and landscape photography. Their professional team uses the latest technology, providing customizable services completed efficiently, to showcase personalities with high-quality images.",
  },
  {
    title: "Customized Survice",
    description:
      "You can tell us what your vision and we will provide a service that suites your business ",
  },
]);
</script>

<template>
  <div
    id="services"
    class="container tracking-wider py-8 relative overflow-hidden"
  >
    <Pattern class="absolute" />
    <Pattern class="absolute right-0 top-1/4" />
    <Pattern class="absolute right-5 bottom-32" />
    <Pattern class="absolute left-12 bottom-10" />
    <h2 class="text-4xl font-semibold">Services</h2>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:container py-12">
      <div
        v-for="service of services"
        :key="service.title"
        class="flex flex-col justify-center"
      >
        <div class="border border-primary-400 p-2 md:p-5">
          <h3
            class="text-3xl font-semibold first-letter:text-primary-400 first-letter:text-6xl"
          >
            {{ service.title }}
          </h3>
          <p class="py-5 text-sm md:text-lg lg:text-2xl">
            {{ service.description }}
          </p>
          <button class="btn-primary bg-primary-700 md:text-lg md:px-10">
            Contact us
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
