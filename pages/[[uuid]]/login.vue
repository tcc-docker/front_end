<script lang="ts">
import { useLoginStore } from "~/stores/auth/login";

export default defineComponent({
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {},
  methods: {
    ...mapActions(useLoginStore, ['login']),
    
    userLogin() {
      this.login(this.user)

      const router = useRouter()
      router.push('/profile') // Redireciona após o login bem-sucedido
    }
  },
  mounted() {
    console.log(this.$config.public.apiBase)
  }
})
</script>
<template>
  <div class="auth">

    <h1 class="title">Entrar</h1>

    <div class="card">
      <form action="#" method="POST">
        
        <div class="field">
          <label for="email">E-mail</label>
          <input 
          id="email" 
          v-model="user.email" 
          name="email" 
          type="email" 
          autocomplete="email"  
          placeholder="gatinho@gmail.com"
          required>
          {{ user.email }}
        </div>

        <div class="field">
          <label for="password">Senha</label>
          <input 
          id="password" 
          v-model="user.password" 
          name="password" 
          type="password" 
          autocomplete="current-password" 
          placeholder="**********"
          required>
          {{ user.password }}
        </div>
        
        <div>
          <button type="submit" class="button-primary" @click.prevent="userLogin()">ENTRAR</button>
        </div>
      </form>

      <div class="register">
        <NuxtLink class="button-secondary" to="/register">CADASTRAR</NuxtLink>
      </div>

    </div>
  </div>
</template>
<style lang="pcss" scoped>
.auth {
  @apply flex flex-col items-center;
  /* @apply bg-white; */
  .title {
    @apply text-indigo-900 text-base font-semibold;
  }
  .card {
    @apply w-full flex flex-col;
  
    form {
      @apply w-full flex flex-col;
      @apply space-y-5;
    
      .field{
        @apply w-full flex flex-col space-y-1;
        
        label {
          @apply text-indigo-800;
          @apply font-medium;
        }
    
        input {
          @apply border-2 rounded-lg border-indigo-900;
          @apply px-4 py-2;
        }
      }
    
      .button-primary {
        @apply w-full flex justify-center;
        @apply py-3;
        @apply cursor-pointer rounded-lg;
        @apply text-white font-semibold;
        @apply border-none bg-indigo-900;
        @apply hover:bg-indigo-700;
      }
    }
    .button-secondary {
      @apply flex justify-center;
      @apply mt-3;
      @apply px-2 py-1;
      @apply cursor-pointer rounded-lg;
      @apply text-indigo-800 font-semibold;
      @apply hover:text-indigo-700 hover:underline;
    }
  }
}
</style>