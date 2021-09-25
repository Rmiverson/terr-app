const API = "http://localhost:3000/api/v1/"

export const signup = (user) => {
   return async dispatch => {
      try {
         const resp = await fetch(API + 'signup', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               accept: 'application/json'
            },
            body: JSON.stringify({ user: user })
         })
         const data = await resp.json()
         localStorage.setItem('token', data.token)
         dispatch(loginUser(data))
      } catch (error) {
         console.error('Error:', error)
      }
   }
}

export const login = (user) => {
   return async dispatch => {
      try {
         const resp = await fetch(API + 'login', {
            method: "POST",
            headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json'
            },
            body: JSON.stringify(user)
         })
         const data = await resp.json()
         localStorage.setItem('token', data.token)
         dispatch(loginUser(data))
      } catch (error) {
         console.error('Error:', error)
      }
   }
}

export const userPersist = () => {
   return async dispatch => {
      const token = localStorage.token
      if (token) {
         try {
            const resp = await fetch(API + 'persist', {
               method: "GET",
               headers: {
                  Authorization: `Bearer ${token}`
               },
            })
            const data = await resp.json()
            dispatch(loginUser(data))
         } catch (error) {
            localStorage.removeItem("token")
            console.error('Error:', error)
         }
      }
   }
}

export const loginUser = (user) => ({
   type: 'LOGIN_USER',
   payload: user
})

export const logoutUser = () => ({
   type: 'LOGOUT_USER'
})