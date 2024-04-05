<script setup>
defineProps({error: Object})
</script>

<template>
<NuxtLayout>
  <section>
    <template v-if="error.statusCode === 404">
      <p>Page not found</p>
    </template>
    <template v-else>
      <p>An error occurred</p>
    </template>
  </section>
</NuxtLayout>
</template>

<style scoped>

</style>