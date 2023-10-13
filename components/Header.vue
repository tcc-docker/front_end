<script lang="ts">
export default {
  name: 'Header',
  data () {
    return {
      routers: [
        {to: '/', title: 'Home Page'},
        {to: '/auth/login', title: 'Login'},
        {to: '/auth/register', title: 'Register'},
        {to: '/auth/recover-password', title: 'Recover Password'},
        {to: '/auth/change-password', title: 'Change Password'},
        // {to: '/certificate', title: 'Certificado Digital'},
        // {to: '/products', title: 'Produtos'},
        // {to: '/partnership', title: 'Parceria'},
        // {to: '/units', title: 'Unidades'},
        // {to: '/support', title: 'Suporte'},
        // {to: '/account', title: 'Minha Conta'},
        // {to: '/cart', title: 'Carrinho'},
      ]
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
  <header class="header">
    <nav class="navigation">
      <NuxtLink class="page" v-for="(nav, index) in routers" :to="`${$route.params.uuid ? `/${$route.params.uuid}` : ''}${nav.to}`">{{ nav.title }}</NuxtLink>
    </nav>
  </header>
</template>
<style lang="pcss" scoped>
.header {
  @apply flex items-center ;
  @apply h-24;
  @apply bg-white;
  @apply sm:px-5;
  @apply border-b border-blue-10;
}
.navigation {
  @apply h-full flex items-center justify-center space-x-10;
}
</style>
