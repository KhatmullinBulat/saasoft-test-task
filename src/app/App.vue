<script setup lang="ts">
import { onMounted } from 'vue'
import { useAccountStore } from '@/entities/account'
import { AccountsForm } from '@/widgets/accounts-form'
import { MainHeader } from '@/widgets/main-header'

const accountStore = useAccountStore()

onMounted(() => accountStore.loadAccounts())
</script>

<template>
  <v-app>
    <MainHeader />
    <v-main>
      <v-container class="d-flex flex-column ga-8">
        <AccountsForm />
      </v-container>
    </v-main>
  </v-app>
</template>
