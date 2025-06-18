<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import { motion } from 'motion-v'
import { userProducts } from '@/composables/useProducts'
import { onMounted, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import AppContainer from './AppContainer.vue'

const isVisible = ref<boolean>(false)
const sectionRef = ref<HTMLElement | null>(null)
const { allBlocks, initializeData } = userProducts()

onMounted(async () => {
  await initializeData()
})

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
  <AppContainer class="py-16 mt-32">
    <motion.div
      ref="sectionRef"
      v-show="true"
      :initial="{ opacity: 0, y: 20 }"
      :animate="isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
      :transition="{ duration: 0.8, ease: 'easeInOut' }"
    >
      <h1 id="products" class="text-4xl text-center lg:text-6xl lg:text-start font-saira mb-8">
        All Block
      </h1>
      <div
        class="grid grid-cols-1 place-items-center md:grid-cols-2 items-center lg:grid-cols-3 gap-4"
      >
        <ProductCard v-for="blocks in allBlocks" :key="blocks.id" :block="blocks" />
      </div>
    </motion.div>
  </AppContainer>
</template>

<style scoped></style>
