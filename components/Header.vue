<script>
  export default defineComponent({
    name: 'Header',
    data () {
      return {
        routers: [
          {to: '/', title: 'Home Page'},
          {to: '/certificate', title: 'Certificado Digital'},
          {to: '/products', title: 'Produtos'},
          {to: '/partnership', title: 'Parceria'},
          {to: '/units', title: 'Unidades'},
          {to: '/support', title: 'Suporte'},
          {to: '/account', title: 'Minha Conta'},
          {to: '/cart', title: 'Carrinho'},
        ]
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
    <nav class="navigation">
      <NuxtLink class="page" v-for="(nav, index) in routers" :to="nav.to">
        {{ index }} {{ nav.title }}
      </NuxtLink>
    </nav>
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
