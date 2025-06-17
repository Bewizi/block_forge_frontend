<script setup lang="ts">
import { Icon } from '@iconify/vue'
import AppContainer from '../AppContainer.vue'
import AppLink from '../AppLink.vue'
</script>

<template>
  <footer class="mt-32 bg-primary_heading text-primary_bg py-20">
    <AppContainer>
      <section class="flex lg:items-center justify-between flex-col lg:flex-row flex-wrap">
        <div class="mb-20 lg:mb-0">
          <!-- logo -->
          <div class="mb-5">
            <img
              src="/images/Logo.png"
              alt="Block Forge Logo"
              class="bg-primary_bg rounded-full w-[100px]"
            />
          </div>
          <!-- logo -->
          <!-- text  -->
          <p class="font-roboto_mono mb-5 max-w-xs">
            Block Forge: Your trusted partner for high-quality concrete blocks designed for lasting
            strength and exceptional results in all your construction projects.
          </p>
          <!-- text  -->

          <!-- icons -->
          <div class="flex items-center gap-2">
            <!-- facebook -->
            <Icon icon="ic:baseline-facebook" width="24" height="24" class="text-white" />

            <!-- Instagram -->
            <Icon icon="mdi:instagram" width="24" height="24" class="text-white" />

            <!-- X(formerly twitter) -->
            <Icon icon="ri:twitter-x-fill" width="24" height="24" class="text-white" />
          </div>
          <!-- icons -->
        </div>

        <!-- navigation -->
        <div class="mb-20 lg:mb-0">
          <nav class="flex flex-col space-y-3 font-roboto_mono">
            <!-- Home -->
            <AppLink to="/">Home</AppLink>

            <!-- About us -->
            <AppLink to="/about">About</AppLink>

            <!-- Contract Hub -->
            <AppLink to="/contaract-hub">Contract Hub</AppLink>

            <!-- Contact -->
            <AppLink to="/contact">Contact Us</AppLink>
          </nav>
        </div>

        <!-- companies details -->
        <div>
          <!-- location -->
          <p class="flex items-center gap-2 mb-5 font-roboto_mono">
            <Icon icon="ion:location-outline" width="24" height="24" class="text-white" />
            <span>Lagos Mainland, Nigeria</span>
          </p>

          <!-- tel -->
          <a href="tel:+2348012345678" class="flex items-center gap-2 mb-5">
            <Icon icon="ic:baseline-phone" width="24" height="24" class="text-white" />
            <span>+234 801 234 5678</span>
          </a>

          <!-- email -->
          <a href="mailto:info@blockforge.com" class="flex items-center gap-2">
            <Icon icon="ic:baseline-email" width="24" height="24" class="text-white" />
            <span>info@blockforge.com</span>
          </a>
        </div>
      </section>
    </AppContainer>
  </footer>
</template>

<style scoped></style>
