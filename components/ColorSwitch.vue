<script setup lang="ts">
const showNextModeLabel = ref(false)
const colorMode = useColorMode()

const modes: Array<string> = [
  'system',
  'light',
  'dark'
]

interface NextModeIcons {
  [key: string]: string;
}

const nextModeIcons: NextModeIcons = {
  system: '🌓',
  light: '🌕',
  dark: '🌑'
}

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference)
  let nextModeIndex;
  if (currentModeIndex + 1 === modes.length) {
    nextModeIndex = 0
  } else {
    nextModeIndex = currentModeIndex + 1
  }

  return modes[nextModeIndex]
})

const nextModeIcon = computed(() => nextModeIcons[nextMode.value])

const toggleMode = () => colorMode.preference = nextMode.value
</script>

<template>
  <div class="flex relative">
    <div class="text-xs absolute -bottom-10 right-0 w-20" v-if="showNextModeLabel">Theme: {{ nextMode }}</div>
    <button @click="toggleMode"
            @mouseenter="showNextModeLabel = true"
            @mouseleave="showNextModeLabel = false"
            class="hover:bg-gray-400 dark:hover:bg-gray-900 p-1.5 rounded-full">
      {{
        nextModeIcon
      }}
    </button>
  </div>

</template>

<style scoped>

</style>