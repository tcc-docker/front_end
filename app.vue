<script lang="ts">
export default defineComponent({
  data () {
    return {
      // layout: 'responsive'
    }
  },
  setup() {
    useHead({
      bodyAttrs: { class: 'body' },
    })
  }
})
</script>
<template>
  <NuxtLayout class="layout" name="responsive">
    <NuxtPage class="page" />
  </NuxtLayout>
</template>

<style lang="pcss">
.body {
  @apply h-screen;
  @apply m-0 p-0; 
  @apply bg-blue-5;
} 

#__nuxt {
  @apply h-screen;
}
</style>