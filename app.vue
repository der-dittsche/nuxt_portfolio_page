<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  titleTemplate: 'Der-Dittsche - %s',
})
</script>