export const initialState = {
   currentUser: {},
   allTerritories: {
      status: 'idle', //or: 'loading', 'succeeded', 'failed'
      data: []
   }
}

export default function reducer(state = initialState, action) {
   switch (action.type) {
      case 'LOGIN_USER':
         return {...state, currentUser: action.payload}
      case 'LOGOUT_USER':
         return {...state, currentUser: {}}
      case 'UPDATE_USER':
         return {...state, currentUser: action.payload}
      case 'ALL_TERRITORIES':
         return {...state, allTerritories: action.payload} 
      default:
         return state
   }
}