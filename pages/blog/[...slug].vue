<script setup lang="ts">
const activeId = ref(null)

onMounted(() => {
  let elements:any = []
  const callback = (entries:any) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
        break;
      }
    }
  }
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5
  })

  setTimeout(() => {
    elements = document.querySelectorAll('h2, h3')

    for (const element of elements) {
      observer.observe(element)
    }
  }, 150)

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element)
    }
  })
})
</script>

<template>
  <article class="prose dark:prose-invert max-w-none">
    <ContentDoc >
      <template #not-found>
        <h1 class="text-2xl font-normal">Document not found</h1>
      </template>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="{'col-span-4': doc.toc, 'col-span-6': !doc.toc}">
            <ContentRenderer :value="doc"/>
          </div>
          <div class="col-span-2 not-prose" v-if="doc.toc">
            <aside class="sticky top-28">
              <div class="font-semibold mb-2">
                Inhalt
              </div>
              <nav>
                <TocLinks :links="doc.body.toc.links" :active-id="activeId"/>
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<style scoped>

</style>