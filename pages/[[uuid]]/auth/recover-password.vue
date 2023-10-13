<script lang="ts">
export default {
  name: 'RecoverPassword',
  data () {
    return {
      routers: {
        changePassword: {to: '/auth/change-password', title: 'Alterar Senha'}
      }
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
  <div class="auth">
    <div>Recuperar Senha</div>
    <NuxtLink class="nuxt-link" :to="`${$route.params.uuid ? `/${$route.params.uuid}` : ''}${routers.changePassword.to}`">{{ routers.changePassword.title }}</NuxtLink>
  </div>
</template>
<style lang="pcss" scoped>
.auth {
  @apply flex flex-col items-center;
}
</style>