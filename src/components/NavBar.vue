<script setup>
import ArrowRight from "@/assets/icons/ArrowRight.vue";
import LogoT from "@/assets/icons/LogoT.vue";
import { ref } from "vue";

const navLinks = ref([
  {
    name: "Home",
    pathName: "home",
  },
  {
    name: "About",
    pathName: "about",
  },
  {
    name: "Portfolio",
    pathName: "portfolio",
  },
]);
</script>

<template>
  <nav class="bg-gray-700 sticky w-full z-20 top-0 left-0 text-white">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <RouterLink :to="{ name: 'home' }" class="flex items-center">
        <LogoT class="w-12 fill-primary-400" />
      </RouterLink>
      <div class="flex md:order-2">
        <a
          href="#contactUs"
          class="btn-primary-outline mr-3 md:mr-0 md:flex items-center hidden"
        >
          Contact Us <ArrowRight class="w-12 inline ml-4" />
        </a>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col px-4 py-2 md:p-0 mt-4 border border-gray-800 bg-gray-700 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent"
        >
          <li v-for="link of navLinks" :key="link.name">
            <RouterLink
              :to="{ name: link.pathName }"
              class="block py-2 pl-3 pr-4 bg-transparent md:p-0"
              exact-active-class="text-primary-400 border-b border-primary-400"
            >
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
