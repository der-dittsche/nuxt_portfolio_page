<script setup lang="ts">

</script>

<template>
  <div>
    <header>
      <div class=" container mx-auto max-w-5xl flex justify-between items-center">
        <div class="flex justify-between items-center w-full">
          <div class="text-xl font-semibold">
            <NuxtLink to="/">Dashbord</NuxtLink>
          </div>
          <MainNav/>
        </div>
        <ClientOnly>
          <ColorSwitch/>
        </ClientOnly>
      </div>
    </header>
    <main class="container mx-auto max-w-5xl mt-3.5">
      <slot/>
    </main>
  </div>
</template>

<style>
body {
  @apply bg-white dark:bg-gray-900 text-black dark:text-white
}

header {
  @apply bg-gray-300 dark:bg-gray-700
}
</style>