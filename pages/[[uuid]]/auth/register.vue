<script lang="ts">
export default {
  name: 'Register',
  data () {
    return {
      routers: {
        login: {to: '/auth/login', title: 'Login'}
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
    <div>Cadastrar</div>
    <NuxtLink class="nuxt-link" :to="`${$route.params.uuid ? `/${$route.params.uuid}` : ''}${routers.login.to}`">{{ routers.login.title }}</NuxtLink>
  </div>
</template>
<style lang="pcss" scoped>
.auth {
  @apply flex flex-col items-center;
}
</style>