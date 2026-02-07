export interface AccountForm {
  id: number
  labels?: AccountLabel[]
  type: AccountType
  login: string
  password: string | null
}

export interface AccountLabel {
  text: string
}

export const AccountTypes = {
  LDAP: 'LDAP',
  LOCAL: 'LOCAL',
} as const

export type AccountType = typeof AccountTypes[keyof typeof AccountTypes]

export const AccountTypeItems = [
  { title: 'LDAP', value: AccountTypes.LDAP },
  { title: 'Локальная', value: AccountTypes.LOCAL },
] as const
