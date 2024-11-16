<script setup>
  const links = ['Home', 'About', 'Contact']
</script>

<template>
  <nav>
    <h1>Example</h1>
    <ul>
      <li v-for="link in links" :key="link">
        <a :href="`#${link}`" class="link">{{ link }}</a>
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
  .link {
    text-decoration: none;
  }
</style>
