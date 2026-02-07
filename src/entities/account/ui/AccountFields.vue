<script setup lang="ts">
import type { AccountForm, AccountLabel } from '../model/account.types'
import { mdiDeleteOutline } from '@mdi/js'
import { computed } from 'vue'
import { AccountTypeItems, AccountTypes } from '../model/account.types'

const props = defineProps<{
  account: AccountForm
}>()

const emit = defineEmits<{
  (e: 'remove', id: number): void
}>()

const labelsRules = [
  (v: string | null | undefined) => (v?.trim().length ?? 0) <= 50 || 'Максимум 50 символов',
]
const loginRules = [
  (v: string | null | undefined) => !!v || 'Обязательное поле',
  (v: string | null | undefined) => (v?.trim().length ?? 0) <= 100 || 'Максимум 100 символов',
]
const passwordRules = [
  (v: string | null | undefined) => !!v || 'Обязательное поле',
  (v: string | null | undefined) => (v?.trim().length ?? 0) <= 100 || 'Максимум 100 символов',
]

const labelsProxy = computed({
  get: () => (props.account.labels ?? []).map(label => label.text).join('; '),
  set: (value: string) => {
    const labels: AccountLabel[] = value
      .split(';')
      .map(v => v.trim())
      .filter(Boolean)
      .map(text => ({ text }))
    props.account.labels = labels
  },
})
const showPassword = computed(() => props.account.type === AccountTypes.LOCAL)
</script>

<template>
  <div class="account-grid">
    <div class="account-grid__cell">
      <v-text-field
        v-model="labelsProxy"
        label="Значение"
        :rules="labelsRules"
        variant="outlined"
      />
    </div>
    <div class="account-grid__cell">
      <v-select
        v-model="account.type"
        item-title="title"
        item-value="value"
        :items="AccountTypeItems"
        variant="outlined"
        @update:model-value="account.password = null"
      />
    </div>
    <div
      class="account-grid__cell"
      :class="{ 'account-grid__cell--span-2': !showPassword }"
    >
      <v-text-field
        v-model="account.login"
        label="Значение"
        :rules="loginRules"
        variant="outlined"
      />
    </div>
    <div
      v-if="showPassword"
      class="account-grid__cell"
    >
      <v-text-field
        v-model="account.password"
        label="Значение"
        :rules="passwordRules"
        variant="outlined"
      />
    </div>
    <div class="account-grid__cell">
      <v-btn
        color="error"
        :icon="mdiDeleteOutline"
        size="large"
        variant="text"
        @click="emit('remove', account.id)"
      />
    </div>
  </div>
</template>
