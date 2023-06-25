<script setup>
import ContactUsSection from "@/components/ContactUsSection.vue";
import PortfolioSection from "@/components/portfolioPage/PortfolioSection.vue";
</script>

<template>
  <div class="mt-20">
    <img
      src="@/assets/images/portfolio.png"
      class="bg-cover bg-no-repeat w-full -z-0 min-h-[10rem]"
      loading="lazy"
    />
    <div class="container py-12">
      <PortfolioSection />
    </div>
    <ContactUsSection />
  </div>
</template>
