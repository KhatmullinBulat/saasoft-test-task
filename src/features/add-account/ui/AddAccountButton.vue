<script setup lang="ts">
import { useAccountStore } from '@/entities/account'
import CreateButton from '@/shared/ui/CreateButton.vue'

const accountStore = useAccountStore()
</script>

<template>
  <CreateButton @click="accountStore.addNewAccountForm" />
</template>
