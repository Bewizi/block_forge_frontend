<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = '/images/Road_Construction.jpg'
  document.head.appendChild(link)
})
</script>

<template>
  <main
    class="bg-[url('/images/Road_Construction.jpg')] h-screen bg-cover bg-no-repeat grid place-items-center bg-slate-700/50 bg-blend-overlay mt-16"
    type="image/png"
  >
    <!-- hero text -->
    <div class="text-center text-white p-4 max-w-4xl mx-auto">
      <h1
        class="txt-sdw text-4xl md:text-6xl font-bold text-primary-heading mb-4 leading-tight font-saira"
      >
        Construct with Confidence
      </h1>
      <p
        class="txt-sdw font-medium lg:font-normal text-lg md:text-xl text-secondary-text mb-8 max-w-2xl mx-auto font-roboto_mono text-center"
      >
        Our robust concrete blocks are designed for lasting strength and exceptional results in any
        construction endeavor.
      </p>

      <!-- button -->
      <div class="flex gap-5 items-center justify-center">
        <a href="#products">
          <button
            class="bg-accent_btn text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-roboto_mono"
          >
            Explore Our Products
          </button>
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
.txt-sdw {
  text-shadow: 1px 1px 2px black;
}
</style>
