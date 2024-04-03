<script setup lang="ts">

</script>

<template>
  <div >
    <header class="bg-gray-300">
      <div class=" container mx-auto max-w-5xl flex justify-between items-center">
        <div class="text-xl font-semibold">
          <NuxtLink to="/" >Dashbord</NuxtLink>
        </div>
        <MainNav />
      </div>

    </header>
    <main class="container mx-auto max-w-5xl mt-3.5">
      <slot/>
    </main>
  </div>
</template>

<style scoped>

</style>