<script setup lang="ts">
import { mdiHelp } from '@mdi/js'
</script>

<template>
  <v-tooltip text="для указания нескольких меток для одной пары логин/пароль используйте разделитель ;">
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        :icon="mdiHelp"
        size="small"
      />
    </template>
  </v-tooltip>
</template>
