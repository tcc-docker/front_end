<script lang="ts">
export default {
  name: 'ChangePassword',
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
  <div class="auth">
    Alterar Senha
  </div>
</template>
<style lang="pcss" scoped>
.auth {
  @apply flex flex-col items-center;
}
</style>