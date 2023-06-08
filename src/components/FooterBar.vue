<script setup>
import LogoFull from "@/assets/icons/LogoFull.vue";
import { ref } from "vue";

const navLinks = ref([
  {
    name: "Home",
    path: "/",
    routerLink: true,
  },
  {
    name: "About",
    path: "about",
    routerLink: true,
  },
  {
    name: "Services",
    path: "#services",
    routerLink: false,
  },
  {
    name: "Mission",
    path: "/about#mission",
    routerLink: false,
  },
]);

const socialLinks = ref([
  {
    icon: "fa-instagram",
    link: "#",
  },
  {
    icon: "fa-facebook-f",
    link: "#",
  },
  {
    icon: "fa-twitter",
    link: "#",
  },
  {
    icon: "fa-linkedin-in",
    link: "#",
  },
  {
    icon: "fa-snapchat",
    link: "#",
  },
  {
    icon: "fa-whatsapp",
    link: "#",
  },
]);
</script>

<template>
  <footer class="bg-primary-950">
    <div
      class="container grid gap-4 md:gap-16 py-12 md:grid-cols-2 lg:grid-cols-4"
    >
      <div class="flex items-center justify-center">
        <LogoFull class="max-h-64" />
      </div>
      <div class="flex flex-wrap content-center justify-center text-center">
        <template v-for="link of navLinks" :key="link.name">
          <RouterLink :to="link.path" class="w-1/2 p-2" v-if="link.routerLink">
            {{ link.name }}
          </RouterLink>
          <a :href="link.path" class="w-1/2 p-2" v-else>{{ link.name }}</a>
        </template>
      </div>
      <div class="flex flex-col items-center justify-center">
        <h6 class="text-lg font-semibold pb-6">Contacts</h6>
        <div class="flex items-center">
          <a
            :href="social.link"
            v-for="social of socialLinks"
            :key="social.icon"
          >
            <font-awesome-icon
              :icon="`fa-brands ${social.icon}`"
              size="xl"
              class="px-3"
            />
          </a>
        </div>
        <p class="text-base py-3">
          <font-awesome-icon icon="fa-solid fa-envelope" class="pr-4" />
          sales@turbo.net
        </p>
        <p class="text-base">
          <font-awesome-icon icon="fa-solid fa-phone" class="pr-4" />
          +966 56 123 9211
        </p>
      </div>
      <div class="flex flex-col justify-center">
        <h6 class="text-lg font-semibold pb-6">Newsletter</h6>
        <form>
          <label
            for="search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Newsletter
          </label>
          <div class="relative">
            <input
              type="search"
              id="search"
              class="block w-full p-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder:text-black placeholder:font-semibold"
              placeholder="Email Address"
              required
            />
            <button
              type="submit"
              class="absolute right-2.5 bottom-2.5 bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm p-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7825 0.217449C17.6813 0.116704 17.5534 0.046952 17.4139 0.0163941C17.2744 -0.0141638 17.1291 -0.00425713 16.995 0.0449493L0.495001 6.04495C0.352702 6.09892 0.230191 6.19491 0.143739 6.32016C0.0572872 6.44542 0.0109863 6.59401 0.0109863 6.7462C0.0109863 6.89839 0.0572872 7.04698 0.143739 7.17223C0.230191 7.29749 0.352702 7.39348 0.495001 7.44745L6.9375 10.0199L11.6925 5.24995L12.75 6.30745L7.9725 11.0849L10.5525 17.5275C10.6081 17.667 10.7043 17.7866 10.8286 17.8709C10.953 17.9551 11.0998 18.0001 11.25 17.9999C11.4016 17.9968 11.5486 17.9479 11.6718 17.8595C11.795 17.7711 11.8885 17.6475 11.94 17.5049L17.94 1.00495C17.9911 0.872257 18.0034 0.727772 17.9755 0.588342C17.9477 0.448912 17.8807 0.320282 17.7825 0.217449Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </footer>
</template>
