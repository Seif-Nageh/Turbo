<script setup>
import LogoFull from "@/assets/icons/LogoFull.vue";
import HeroSection from "@/components/aboutPage/HeroSection.vue";
import AboutSection from "../../components/aboutPage/AboutSection.vue";
import MissionSection from "../../components/aboutPage/MissionSection.vue";
import ContactUsSection from "../../components/ContactUsSection.vue";
</script>

<template>
  <HeroSection />
  <div class="container">
    <LogoFull class="w-3/4 p-12 m-auto" />
    <AboutSection />
    <MissionSection />
    <ContactUsSection />
  </div>
</template>
