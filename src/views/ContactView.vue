<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'
import Button_UI from '@/components/ui/Button_UI.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <AppContainer class="mt-28">
    <h1 class="font-saira font-bold text-4xl mb-20">Contact Us</h1>
    <section class="flex flex-col lg:flex-row justify-between">
      <!-- block forge info -->
      <div class="mb-10 lg:mb-0">
        <!-- location -->
        <p class="flex items-center gap-2 mb-5 font-roboto_mono">
          <Icon
            icon="ion:location-outline"
            width="34"
            height="34"
            class="text-white bg-primary_heading p-2 rounded-full"
          />
          <span>Lagos Mainland, Nigeria</span>
        </p>

        <!-- tel -->
        <a href="tel:+2348012345678" class="flex items-center gap-2 mb-5">
          <Icon
            icon="ic:baseline-phone"
            width="34"
            height="34"
            class="text-white bg-primary_heading p-2 rounded-full"
          />
          <span>+234 801 234 5678</span>
        </a>

        <!-- email -->
        <a href="mailto:info@blockforge.com" class="flex items-center gap-2">
          <Icon
            icon="ic:baseline-email"
            width="34"
            height="34"
            class="text-white bg-primary_heading p-2 rounded-full"
          />
          <span>info@blockforge.com</span>
        </a>
      </div>

      <!-- send message through email -->
      <div>
        <form action="">
          <!-- company or users name -->
          <div class="mb-5">
            <label class="block mb-2" for="name">Name:</label>
            <input
              type="text"
              class="w-full lg:w-[500px] border border-primary_heading rounded-md p-2 font-roboto_mono text-lg placeholder:text-lg"
              placeholder="Enter your name"
            />
          </div>

          <!-- email address -->
          <div class="mb-5">
            <label class="block mb-2" for="email">Email:</label>
            <input
              type="email"
              class="w-full lg:w-[500px] border border-primary_heading rounded-md p-2 font-roboto_mono text-lg placeholder:text-lg"
              placeholder="Enter your email address"
            />
          </div>

          <!-- description -->
          <div>
            <label class="block mb-2" for="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="10"
              placeholder="Decription"
              class="w-full lg:w-[500px] border border-primary_heading rounded-md p-2 font-roboto_mono text-lg placeholder:text-lg resize-none"
            ></textarea>
          </div>

          <!-- submit button -->
          <div class="flex items-center justify-center mt-2">
            <Button_UI type="submit" class="rounded-md w-full font-roboto_mono text-lg">
              Send</Button_UI
            >
          </div>
        </form>
      </div>
    </section>
  </AppContainer>
</template>

<style scoped></style>
