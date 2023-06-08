<template>
  <div
    class="min-h-screen flex flex-col-reverse items-center justify-evenly tracking-widest pt-4 md:relative"
  >
    <div
      id="default-carousel"
      class="md:absolute -z-0 inset-0 bg-cover bg-no-repeat w-full"
      data-carousel="slide"
    >
      <!-- Carousel wrapper -->
      <div class="relative overflow-hidden md:h-screen">
        <!-- Item 1 -->
        <div
          class="hidden duration-700 ease-in-out"
          data-carousel-item
          v-for="n of 4"
          :key="n"
        >
          <img
            src="@/assets/images/heroSection.png"
            class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Carousel"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <!-- <img
      src="@/assets/images/heroSection.png"
      alt=""
      srcset=""
      class="md:absolute inset-0 bg-cover bg-no-repeat w-full md:h-screen"
      loading="lazy"
    /> -->
    <div class="container mt-16 mb-4 md:z-10">
      <p class="text-6xl font-semibold">
        The Power
        <span class="font-light"><br />Of Creativty</span>
      </p>
      <button class="btn-primary-outline mt-10 text-lg">
        Download Portfolio
      </button>
    </div>
  </div>
</template>
