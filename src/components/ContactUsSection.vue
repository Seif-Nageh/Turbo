<template>
  <div
    class="container tracking-wider py-8 relative overflow-hidden"
    id="contactUs"
  >
    <h2 class="text-4xl font-semibold">Contact us</h2>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 py-8">
      <form class="flex flex-wrap">
        <div class="py-4 w-full md:pt-0 md:w-1/2 md:pr-4">
          <input
            required
            type="text"
            class="w-full border-0 bg-gray-600/40 placeholder:text-white/25 focus:ring-primary-700 focus:bg-gray-800"
            placeholder="Your Name"
          />
        </div>
        <div class="py-4 w-full md:pt-0 md:w-1/2 md:pl-4">
          <input
            required
            type="text"
            class="w-full border-0 bg-gray-600/40 placeholder:text-white/25 focus:ring-primary-700 focus:bg-gray-800"
            placeholder="Email Address"
          />
        </div>
        <div class="w-full py-4 md:pt-0 md:w-1/2 md:pr-4">
          <select
            required
            class="w-full border-0 bg-gray-600/40 text-white/25 flex items-center justify-between focus:bg-gray-800 focus:text-white focus:ring-primary-700"
          >
            <option selected disabled>Subject</option>
            <option value="0">Marketing</option>
            <option value="1">Desgin</option>
          </select>
        </div>
        <div class="py-4 w-full md:pt-0 md:w-1/2 md:pl-4">
          <input
            type="number"
            class="w-full border-0 bg-gray-600/40 placeholder:text-white/25 focus:ring-primary-700 focus:bg-gray-800"
            placeholder="Phone Number"
          />
        </div>
        <div class="w-full pt-4 relative">
          <textarea
            required
            id="message"
            rows="10"
            class="block p-2.5 w-full text-sm placeholder:text-white/25 bg-gray-600/40 border-0 focus:ring-primary-700 focus:bg-gray-800"
            placeholder="What's in your mind . . . ?"
          ></textarea>
          <button
            class="absolute bottom-0 right-0 btn-primary-outline bg-black m-4 py-2 px-8"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.1592444540365!2d39.6477419!3d24.4452598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf84d29478cd%3A0xd261be28d0cbb8af!2z2LTYsdmD2Kkg2KrZitix2KjZiCDZhNmE2K_Yudin2YrYqSDZiNin2YTYpdi52YTYp9mGINin2YTYsdmC2YXZig!5e0!3m2!1sen!2seg!4v1687424756587!5m2!1sen!2seg"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full h-full min-h-[16rem]"
      ></iframe>
    </div>
  </div>
</template>
