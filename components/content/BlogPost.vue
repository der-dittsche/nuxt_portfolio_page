<script setup lang="ts">
const props = defineProps({
  limit: {
    type: Number,
    default: null
  }
})

const {data} = await useAsyncData(
    'blog-list',
    () => {
      const query = queryContent('/blog')
          .where({_path: {$ne: '/blog'}})
          .only(['_path', 'title', 'publishedAt'])
          .sort({publishedAt: -1})

      if (props.limit) {
        query.limit(props.limit)
      }

      return query.find()
    }
)

const posts = computed(() => {
  if (!data.value) {
    return []
  }

  const result = []
  let lastYear = null

  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear()

    let displayYear: boolean;
    displayYear = year !== lastYear;
    post.displayYear = displayYear
    post.year = year
    result.push(post)
    lastYear = year
  }
  return result
})
</script>

<template>
  <slot :posts="posts">
    <section class="not-prose">
      <div class="column">
        <div>Datum</div>
        <div>Titel</div>
      </div>
      <ul>
        <li v-for="item in posts" :key="item._path">
          <NuxtLink
              class="column hover:bg-gray-200 dark:hover:bg-gray-700"
              :to="item._path">
            <div :class="{'invisible': !item.displayYear }">{{ item.year }}</div>
            <div class="pl-4">{{ item.title }}</div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-600
}
</style>