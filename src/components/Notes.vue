<script setup>
  defineOptions({
    name: 'MainNotes'
  })

  const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
</script>

<template>
  <div>
    <h1>Notes</h1>
    <ul>
      <li v-for="day in days" :key="day">{{ day }}</li>
    </ul>
  </div>
</template>
