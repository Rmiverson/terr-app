const API = "http://localhost:3000/api/v1/"

export const allTerritoriesFetch = () => {
   return async dispatch => {
      const token = localStorage.token
      if (token) {
         try {
            dispatch(allTerritories({
               status: 'loading',
               data: []
            }))

            const resp = await fetch(API + 'territories', {
               method: 'GET',
               headers: {
                  Authorization: `Bearer ${token}`
               },
            })
            const data = await resp.json()


            dispatch(allTerritories({
               status: 'idle',
               data: data
            }))
         } catch (error) {
            console.error('Error:', error)
         }
      }
   }
}

export const allTerritories = dataObj => ({
   type: 'ALL_TERRITORIES',
   payload: dataObj
})
