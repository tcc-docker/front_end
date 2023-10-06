<script lang="ts">
export default {
  data () {
    return {
      layout: 'responsive'
    }
  },
  setup() {
    useHead({
      bodyAttrs: { class: 'body' }
    })
  }
}
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