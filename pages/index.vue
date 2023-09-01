<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useExampleStore } from '@/stores/example'

// access the `store` variable anywhere in the component ✨
const store = useExampleStore()

// Usando o estado da loja sem chamar ação
const { name, age, status, attributes } = storeToRefs(store)
// const { action } = store
</script>

<template>
  <div>
    HOME PAGE
    <!-- Access the state directly from the store -->
    <div>User: {{ store.name }}</div>
  </div>
</template>
