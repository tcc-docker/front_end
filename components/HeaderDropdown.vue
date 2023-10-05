<script>
  export default defineComponent({
    name: 'HeaderDropdown',
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
  })
</script>
<template>
  <header class="header">
    Header Dropdown
  </header>
</template>
<style lang="pcss" scoped>
.header {
  @apply h-24 bg-white border-b border-blue-10 flex items-center;
}
.navigation {
  @apply h-full flex items-center justify-center space-x-10;
}
</style>
