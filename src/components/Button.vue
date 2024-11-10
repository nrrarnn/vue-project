<script setup>
import { ref } from 'vue';

  defineOptions({
    name: 'MainButton'
  })

  const isLoading = ref(false)
</script>

<template>
  <button>
    {{ isLoading ? 'Loading...' : 'Click me' }}
  </button>
</template>

<style scoped>

</style>
