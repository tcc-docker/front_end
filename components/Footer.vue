<script>
  export default defineComponent({
    name: 'Footer',
    data () {
      return {
        routers: [
          {to: '/', title: 'Facebook'},
          {to: '/', title: ' Instagram'},
          {to: '/', title: 'Linkedin'},
          {to: '/', title: 'Youtube'},
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
  <footer class="footer">
    <div class="company">© XXXX - 2023 Certcode | CNPJ X.XXX.XXX/0001-XX</div>
    <div class="developer">© 2023 - Desenvolvido por Radiuere</div>
  </footer>
</template>
<style lang="pcss" scoped>
.footer {
  @apply h-24 divide-y-2 space-y-3 py-5 bg-white border-t border-blue-10 flex flex-col items-center;
}
.company {
  @apply flex items-center;
}
.developer {
  @apply flex items-center;
}
</style>
