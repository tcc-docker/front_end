import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useRegisterStore = defineStore('register', {
  state: () => ( {
      user: {} as User[],
      token: '' as string
    }
  ),

  getters: {
  },

  actions: {
    async register(user: User) {
      try {
        // const response = fetch('', {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     name: user.name,
        //     birthday: user.birthday,
        //     email: user.email,
        //     username: user.username,
        //     password: user.password
        //   }),
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'client-platform': 'browser',
        //   }
        // })
        // .then(response => response.json())
        // .then(data => console.log(data.body));
        
        console.log(user);
        return('ok')
      } catch (error) {
        alert(error)
      }
    },
  },
})

interface User {
  name: string
  birthday: string
  email: string
  username: string
  password: string
}

// persist the whole state to the local storage whenever it changes
// localStorage.setItem('cart', JSON.stringify(state))

// SSR Precisa de hydrate()