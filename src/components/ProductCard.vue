<script setup lang="ts">
import { ref } from 'vue'
import AppLink from './AppLink.vue'
import { Icon } from '@iconify/vue'

const viewMore = ref<boolean>(false)

defineProps<{
  block: {
    id: string
    name: string
    image: string
    price: number
    category: string
    description: string
    use: string
    size: string
  }
}>()
</script>

<template>
  <div
    class="bg-primary_bg rounded-md shadow border border-accent_btn p-10 relative hover:scale-105 transition-all duration-300 w-[400px] h-full"
  >
    <AppLink :to="block.id">
      <div class="flex justify-center">
        <img :src="block.image" :alt="block.name" class="w-[200px] h-[200px] object-cover" />
      </div>
    </AppLink>

    <!-- badge -->
    <div
      class="bg-secondary_text text-white text-center absolute top-3.5 right-3.5 px-4 py-1 font-roboto_mono rounded-full"
    >
      {{ block.category }}
    </div>

    <div class="grid place-items-center text-center mt-2">
      <h1 class="font-saira text-2xl font-semibold mb-2">{{ block.name }}</h1>
      <!-- <span>{{ block.category }}</span> -->
      <div class="mb-4">
        <p class="font-roboto_mono mb-2 text-sm"><strong>Size:</strong> {{ block.size }}</p>
        <p class="font-roboto_mono text-sm">
          <strong>Use:</strong>
          {{
            viewMore ? block.use : block.use.substring(0, 50) + (block.use.length > 50 ? '...' : '')
          }}
          <span
            v-if="block.use.length > 50"
            class="cursor-pointer ml-2 uppercase hover:underline transition-all duration-500"
            @click="viewMore = !viewMore"
            >{{ viewMore ? 'less' : 'more' }}</span
          >
        </p>
      </div>
      <p class="flex items-center gap-1 font-roboto_mono">
        <Icon icon="tabler:currency-naira" width="24" height="24" style="color: #000000" />
        {{ block.price.toFixed(2) }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
