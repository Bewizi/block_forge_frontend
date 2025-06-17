<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'
import AppLink from '@/components/AppLink.vue'
</script>

<template>
  <AppContainer class="py-16">
    <div class="grid place-items-center">
      <h1 class="text-primary_heading text-9xl font-saira font-extrabold mb-5">404</h1>
      <p class="text-secondary_text font-roboto_mono mb-5 text-2xl">Not Found Page</p>
      <AppLink to="/" class="hover:text-blue-500 text-secondary_text font-roboto_mono"
        >Go Home</AppLink
      >
    </div>
  </AppContainer>
</template>

<style scoped></style>
