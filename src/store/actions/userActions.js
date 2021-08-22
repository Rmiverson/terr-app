const API = "http://localhost:3000/api/v1/"

export const signup = (user) => {
   return async dispatch => {
      try {
         const resp = await fetch(API + "signup", {
            method: "POST",
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

export const loginUser = (userObj) => ({
   type: 'LOGIN_USER',
   payload: userObj
})