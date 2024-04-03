<script setup lang="ts">
const route = useRoute()
useHead({
  title: 'Blog-Entry',
  meta: [{
    name: 'description',
    content: 'one of the blog entries'
  }]
})
</script>

<template>
  <div>
    <p>
      You are on the Post {{ route.params.id }}
    </p>
  </div>
</template>

<style scoped>

</style>