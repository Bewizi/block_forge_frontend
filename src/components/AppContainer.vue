<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>

<template>
  <section :class="'max-w-7xl mx-auto px-5 lg:px-8'">
    <slot></slot>
  </section>
</template>

<style scoped></style>
