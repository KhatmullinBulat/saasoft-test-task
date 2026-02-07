<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { AccountFields, AccountHeader, useAccountStore } from '@/entities/account'

const accountStore = useAccountStore()
const { accounts } = storeToRefs(accountStore)

const isValid = ref<boolean>(false)

function submit() {
  if (!isValid.value)
    return

  accountStore.saveAccounts()
}
</script>

<template>
  <v-form
    v-model="isValid"
    @submit.prevent="submit"
  >
    <AccountHeader />

    <div class="accounts-form__list">
      <AccountFields
        v-for="account in accounts"
        :key="account.id"
        :account="account"
        @remove="accountStore.deleteAccountForm"
      />
    </div>

    <v-btn
      v-if="accounts.length"
      type="submit"
    >
      Сохранить
    </v-btn>
  </v-form>
</template>

<style scoped>
.accounts-form__list {
  max-height: 70vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 12px;
  padding-right: 4px;
  margin-bottom: 12px;
}
</style>
