import { defineStore } from 'pinia'

export const useChangePasswordStore = defineStore('change-password', {
  state: () => ( {
      // for initially empty lists
      userExample: [] as UserInfo[],
      name: 'Amanda',
      age: 23,
      status: true,
      attributes: [ 'longHair', 'customSocks' ]
    }
  ),

  // Like computed
  getters: {
    // Options
  },

  // Like methods
  actions: {
    // Options
  },
})

interface UserInfo {
  name: string
  age: number
  status: boolean
  attributes: []
}

// persist the whole state to the local storage whenever it changes
// localStorage.setItem('cart', JSON.stringify(state))

// SSR Precisa de hydrate()