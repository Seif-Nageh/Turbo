<script setup>
import ErrorPattern from "../assets/icons/ErrorPattern.vue";
</script>

<template>
  <div class="container flex-grow flex flex-col justify-center text-center">
    <img
      class="mx-auto w-36 md:w-96 py-4 md:py-8"
      width="400"
      src="@/assets//images//404.gif"
      alt="Not Found"
    />
    <h2 class="font-semibold text-3xl md:text-6xl">Something went wrong !!!</h2>
    <p class="text-base py-6 md:text-xl">
      We couldn’t find this page. Don’t let this stop you and keep browsing
    </p>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <button class="btn-primary-outline ml-auto w-full md:w-44">
        Go to home
      </button>
      <button class="btn-primary w-full md:w-44">Previous page</button>
    </div>
  </div>
</template>
