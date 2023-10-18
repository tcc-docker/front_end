<script lang="ts">
export default {
  name: 'Responsive',
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
  <div class="layout">
    <main class="background">
      <div class="modal">
        <div class="logo">
          <svg height="100">
            <use xlink:href="../header.svg#logo" />
          </svg>
        </div>
        <slot></slot>
      </div>
    </main>
  </div>
</template>
<style lang="pcss" scoped>
.layout {
  @apply h-full;
  @apply space-y-10;
  @apply flex flex-col justify-between;
}
.background {
  @apply relative top-0 left-0 right-0 z-10;
  @apply w-full h-full;
  @apply flex items-center justify-center;
  @apply bg-black bg-opacity-70;
  .modal {
    @apply absolute;
    @apply flex flex-col items-center z-20;
    @apply w-2/6 rounded-3xl p-10;
    @apply bg-white;
  }
}
</style>