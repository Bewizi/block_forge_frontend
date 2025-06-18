<script setup lang="ts">
import AppContainer from './AppContainer.vue'
import AppLink from './AppLink.vue'
import { motion } from 'motion-v'
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

const isVisible = ref<boolean>(false)
const sectionRef = ref<HTMLElement | null>(null)

useIntersectionObserver(
  sectionRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = isIntersecting
    }
  },
  {
    threshold: 0.3,
  },
)
</script>

<template>
  <section class="py-16 mt-32">
    <AppContainer class="text-center">
      <motion.section
        ref="sectionRef"
        v-show="true"
        :initial="{ opacity: 0, y: 20 }"
        :animate="isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
        :transition="{ duration: 0.8, ease: 'easeInOut' }"
        class="bg-[url('/images/Ground_level_view.png')] h-screen bg-cover bg-no-repeat bg-primary_heading/80 bg-blend-multiply w-full flex items-center justify-center flex-col"
      >
        <h2 class="text-4xl md:text-5xl font-saira font-bold text-white mb-6">
          Ready to Build with Confidence?
        </h2>
        <p class="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto">
          Explore our full range of high-quality concrete blocks designed for superior strength,
          durability, and every construction need.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <AppLink
            to="/contact"
            class="px-8 py-4 border-2 border-accent_btn text-accent_btn font-roboto_mono font-bold rounded-lg hover:bg-accent_btn hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Get in touch with us
          </AppLink>
        </div>
      </motion.section>
    </AppContainer>
  </section>
</template>

<style scoped></style>
