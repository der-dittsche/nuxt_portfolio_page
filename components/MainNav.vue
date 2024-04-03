<script setup lang="ts">

</script>

<template>
  <nav class="font-mono text-lg">
    <ul class="flex gap-2 items-center h-full">
      <li>
        <NuxtLink to="/">Main</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Kontakt</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects">Projekte</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
li {
  @apply hover:bg-gray-500 h-full flex items-center px-2.5
}

nav {
  @apply h-10
}
</style>