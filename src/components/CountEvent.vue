<script setup>
import { ref } from 'vue';

  const count = ref(0)
  const userInput = ref('')

  const showInput = () => {
    console.log(userInput.value)
  }

  const add = () => {
    count.value++
  }
</script>

<template>
  <div>
    <h1>CountEvent</h1>
    <button @click="add"> + </button>
      <span>{{ count }}</span>
    <button @click="count--"> - </button>
    <input type="text" v-model="userInput" placeholder="Enter text">
    <h1>{{ userInput }}</h1>
  </div>
</template>

<style scoped>

</style>
