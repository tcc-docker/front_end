<script lang="ts">
import { useLoginStore } from "~/stores/auth/login";

export default defineComponent({
  name: 'Login',
  data () {
    return {
      routers: {
        register: {to: '/auth/register', title: 'Cadastrar'},
        recoverPassword: {to: '/auth/recover-password', title: 'Recuperar Senha'},
      },
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    // ...mapState(useAuthStore, ['loggedIn', 'showRegister']),
  },
  methods: {
    ...mapActions(useLoginStore, ['login']),
    
    userLogin() {
      this.login(this.user)
    }
  },
  mounted() {
    console.log(this.$config.public.apiBase)
  },
  async setup() {

  }
})
</script>
<template>
  <div class="auth">
    <!-- ? Verificar TAG -->
    <h1 calss="title">Entrar</h1>

    <div class="">
      <form action="#" method="POST">
        
        <div>
          <label for="email">E-mail</label>
          <input 
          id="email" 
          v-model="user.email" 
          name="email" 
          type="email" 
          autocomplete="email"  
          placeholder=""
          required>
          {{ user.email }}
        </div>

        <div>
          <label for="password">Senha</label>
          <input 
          id="password" 
          v-model="user.password" 
          name="password" 
          type="password" 
          autocomplete="current-password" 
          placeholder=""
          required>
          {{ user.password }}
        </div>

        <div class="recover-password">
          <NuxtLink class="nuxt-link" :to="`${$route.params.uuid ? `/${$route.params.uuid}` : ''}${routers.recoverPassword.to}`">{{ routers.recoverPassword.title }}</NuxtLink>
        </div>
        
        <div>
          <button type="submit" @click.prevent="userLogin()">Entrar</button>
        </div>
      </form>

      <div class="register">
        <NuxtLink class="nuxt-link" :to="`${$route.params.uuid ? `/${$route.params.uuid}` : ''}${routers.register.to}`">{{ routers.register.title }}</NuxtLink>
      </div>

    </div>
  </div>
</template>
<style lang="pcss" scoped>
.auth {
  @apply flex flex-col items-center;
  /* @apply bg-white; */
}
</style>