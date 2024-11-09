<script setup>

</script>

<template>
  <nav>
    <h1>Example</h1>
    <ul>
      <li>
        Home
      </li>
      <li>
        About
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    padding-inline:60px ;
  }
  ul {
    display: flex;
    gap: 20px;
    list-style-type: none;
    align-items: center;
  }
  h1 {
    font-family: 'Courier New', Courier, monospace;
    font-size: 3rem;
  }
</style>
