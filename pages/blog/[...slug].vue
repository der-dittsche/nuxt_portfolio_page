<script setup lang="ts">
// useHead({
//   title: 'Blog-Entry',
//   meta: [{
//     name: 'description',
//     content: 'one of the blog entries'
//   }]
// })
</script>

<template>
  <article>
    <ContentDoc  />
  </article>
</template>

<style scoped>
article {
  @apply prose max-w-none dark:prose-invert prose-pre:bg-gray-300 dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300;

}
</style>