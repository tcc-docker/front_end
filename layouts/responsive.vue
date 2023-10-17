<script lang="ts">
export default {
  name: 'Responsive',
  data () {
    return {
      
    }
  },
  computed: {
    // ...mapState(useAuthStore, ['loggedIn', 'showRegister']),
  },
  methods: {
    // ...mapActions(useAuthStore, ['toggleAuthenticationMode']),
  },
  setup() {
    
  }
}
</script>
<template>
  <div class="layout">
    <Header></Header>
    <main>
      <slot></slot>
    </main>
    <Footer></Footer>
  </div>
</template>
<style lang="pcss" scoped>
.layout {
  @apply h-full;
  @apply space-y-10;
  @apply flex flex-col justify-between;
}
</style>