<script lang="ts">
export default {
  name: 'Footer',
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
  <footer class="footer">
    footer
    <!-- <div class="company">© XXXX - 2023 Certcode | CNPJ X.XXX.XXX/0001-XX</div>
    <div class="developer">© 2023 - Desenvolvido por Radiuere</div> -->
  </footer>
</template>
<style lang="pcss" scoped>
.footer {
  @apply bg-white border-t border-blue-10 flex flex-col items-center;
  @apply h-24 w-full;
}
.company {
  @apply flex items-center;
}
.developer {
  @apply flex items-center;
}
</style>
