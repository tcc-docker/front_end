import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ( {
      user: {} as User[],
      token: '' as string
    }
  ),

  getters: {
  },

  actions: {
    async login(user: User) {
      try {
        // const response = fetch('', {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     email: user.email,// user.email, // test@certcode.radiure,
        //     password: user.password// user.password// 123456
        //   }),
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'client-platform': 'browser',
        //   }
        // })
        // .then(response => response.json())
        // .then(data => console.log(data.body));
        
        console.log(user);
      } catch (error) {
        alert(error)
      }
    },
  },
})

interface User {
  email: string
  password: string
}

// persist the whole state to the local storage whenever it changes
// localStorage.setItem('cart', JSON.stringify(state))

// SSR Precisa de hydrate()