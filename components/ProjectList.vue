<script setup lang="ts">
import {format} from 'date-fns';
import de from 'date-fns/locale/de';

const {error, pending, data} = await useFetch('https://api.github.com/users/der-dittsche/repos')

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, 'dd.MM.yyyy HH:mm:ss', {locale: de});
};

const repos = computed(
    () => data.value.filter(repo => repo.description)
        .sort((a, b) => {
          let dateA:any = new Date(b.created_at);
          let dateB:any = new Date(a.created_at);
          return dateA - dateB;
        })
)
</script>

<template>
  <div>
    <p>Projekteliste</p>
    <section v-if="pending">Loading....</section>
    <section v-else-if="error">Ein Fehler ist aufgetreten.</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4 my-4">
        <li v-for="repo in repos" :key="repo.id">
          <a :href="repo.html_url" target="_blank">
            <div class="flex items-center justify-between">
              <div class="font-semibold">{{ repo.name }}</div>
              <div>{{ formatDate(repo.updated_at) }}</div>
            </div>
            <p class="text-sm">
              {{ repo.description }}
            </p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
li {
  @apply border border-gray-300 rounded-lg p-4 hover:bg-gray-300 font-mono dark:hover:bg-gray-700
}
</style>