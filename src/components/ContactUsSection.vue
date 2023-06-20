<template>
  <div class="container tracking-wider py-8 relative overflow-hidden">
    <h2 class="text-4xl font-semibold">Contact us</h2>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 py-12">
      <form class="flex flex-wrap">
        <div class="w-1/2 pb-4 pr-4">
          <input
            type="text"
            class="w-full border-0 bg-gray-600/40 placeholder:text-white/25"
            placeholder="Email Address"
          />
        </div>
        <div class="w-1/2 pb-4 pl-4">
          <input
            type="text"
            class="w-full border-0 bg-gray-600/40 placeholder:text-white/25"
            placeholder="Your Name"
          />
        </div>
        <div class="w-full py-4">
          <select
            id=""
            class="w-full border-0 bg-gray-600/40 text-white/25 flex items-center justify-between p-2.5"
          >
            <option selected disabled>Subject</option>
            <option value="0">Marketing</option>
            <option value="1">Desgin</option>
          </select>
          <!-- <div
            class="w-full border-0 bg-gray-600/40 text-white/25 flex items-center justify-between p-2.5 cursor-pointer"
          >
            Subject
            <svg
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              class="stroke-primary-400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9168 1.83333L9.00016 9.75L1.0835 1.83333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="bg-gray-600/60 p-4 flex flex-col space-y-4">
            <div>Marketing</div>
            <div>Desgin</div>
          </div> -->
        </div>
        <div class="w-full pt-4">
          <textarea
            id="message"
            rows="10"
            class="block p-2.5 w-full text-sm placeholder:text-white/25 bg-gray-600/40 border-0"
            placeholder="What’s in your mind . . . ?"
          ></textarea>
        </div>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232410.56251032208!2d39.617557500000004!3d24.471072399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbfaa728d4c15%3A0x39c9cca9e8b98e2f!2sAl%20Masjid%20an%20Nabawi!5e0!3m2!1sen!2seg!4v1686238017124!5m2!1sen!2seg"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full h-full min-h-[16rem]"
      ></iframe>
    </div>
  </div>
</template>
