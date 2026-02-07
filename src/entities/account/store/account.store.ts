import type { AccountForm } from '../model/account.types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { AccountTypes } from '../model/account.types'

const ACCOUNTS_KEY = 'accounts'

export const useAccountStore = defineStore('account-store', () => {
  const accounts = ref<AccountForm[]>([])
  const currentIndex = ref<number>(0)

  function loadAccounts() {
    const stored = localStorage.getItem(ACCOUNTS_KEY)
    if (!stored)
      return

    try {
      const parsed = JSON.parse(stored) as AccountForm[]
      if (Array.isArray(parsed)) {
        accounts.value = parsed
        const maxId = parsed.reduce((max, account) => (
          typeof account.id === 'number' && account.id > max ? account.id : max
        ), -1)
        currentIndex.value = maxId + 1
      }
    }
    catch (e) {
      console.error(e)
    }
  }

  function addNewAccountForm() {
    accounts.value.push({
      id: currentIndex.value++,
      type: AccountTypes.LOCAL,
      login: '',
      password: null,
    })
  }

  function deleteAccountForm(id: number) {
    accounts.value = accounts.value.filter(
      account => account.id !== id,
    )
    saveAccounts()
  }

  function saveAccounts() {
    const accountsJSON = JSON.stringify(accounts.value)
    // eslint-disable-next-line no-console
    console.log(accountsJSON)
    localStorage.setItem(ACCOUNTS_KEY, accountsJSON)
  }

  return {
    accounts,
    loadAccounts,
    addNewAccountForm,
    deleteAccountForm,
    saveAccounts,
  }
})
