<script lang="ts">
// import { useLoginStore } from "~/stores/auth/login";

export default defineComponent({
  name: 'LoggedIn',
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
    // ...mapActions(useLoginStore, ['login']),

  },
  mounted() {
    console.log(this.$config.public.apiBase)
  }
})
</script>
<template>
  <div class="auth">

    <h1 class="title">Profile</h1>

    <div class="login">
      <NuxtLink class="button-secondary" to="/login">SAIR</NuxtLink>
    </div>

  </div>
</template>
<style lang="pcss" scoped>
.auth {
  @apply flex flex-col items-center;

  .title {
    @apply text-indigo-900 text-base font-semibold;
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
</style>