<script setup lang="ts">
import { mdiPlus } from '@mdi/js'

defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <v-btn
    :icon="mdiPlus"
    variant="outlined"
    @click="$emit('click')"
  />
</template>
