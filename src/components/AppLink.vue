<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <RouterLink :to="to">
    <slot></slot>
  </RouterLink>
</template>

<style scoped></style>
