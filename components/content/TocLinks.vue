<script setup lang="ts">
const route = useRoute()
defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0
  },
  activeId: {
    type: String,
    default: null
  }
})
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink :to="{ path: route.path, hash: `#${link.id}` }" :class="{'ml-4':level, 'underline': activeId === link.id}">
        {{ link.text }}
      </NuxtLink>
      <TocLinks :links="link.children" :level="level + 1" class="ml-0.5" :active-id="activeId"/>
    </li>
  </ul>
</template>

<style scoped>

</style>