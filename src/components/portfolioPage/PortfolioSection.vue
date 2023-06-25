<script setup>
import { ref } from "vue";

const tabs = ref([
  {
    title: "Design",
    value: true,
  },
  {
    title: "Marketing",
    value: false,
  },
]);

function tabToggle(tab) {
  tabs.value.forEach((item) => {
    item.value = false;
  });
  tabs.value[tab].value = true;
}
</script>

<template>
  <div class="flex flex-wrap items-center">
    <div
      class="bg-gray-800 mt-3 px-3 md:px-6 py-2 md:py-4 mx-2 md:mx-5 font-semibold text-base md:text-xl cursor-pointer first:ml-0 last: mr-0"
      v-for="(tab, index) of tabs"
      :key="tab.title"
      :class="{ 'bg-primary-400': tab.value }"
      @click="tabToggle(index)"
    >
      <span class="px-2 border mr-2 font-semibold" v-if="tab.value">x</span>
      {{ tab.title }}
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
    <div class="relative h-full group" v-for="n of 9" :key="n">
      <img
        src="@/assets/images/portfolio-card.png"
        alt="golden"
        class="w-full h-full"
        loading="lazy"
      />
      <div
        class="absolute bg-black/80 inset-0 p-4 h-full text-3xl font-semibold flex flex-col overflow-auto invisible transition-all ease-in-out group-hover:visible"
      >
        Saudi German Hospital
        <ul class="pl-4 text-base py-4 my-auto">
          <li class="list-disc list-inside" v-for="n of 6" :key="n">
            Service {{ n }}
          </li>
        </ul>
        <button class="btn-primary-outline bg-black w-fit mx-auto text-lg py-2">
          See More
        </button>
      </div>
    </div>
  </div>
</template>
