<script setup lang="ts">
useHead({
  bodyAttrs: { class: 'body' }
})

const layout = 'responsive'

</script>
<template>
  <NuxtLayout class="layout" :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="pcss">
.body {
  @apply m-0 h-full;
} 
.layout {
  @apply bg-blue-5;
}
</style>