import React, { useEffect  } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, userPersist } from './store/actions/userActions'

import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Territories from './components/Territories'

const Routes = () => {
   const currentUser = useSelector((state) => state.currentUser)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(userPersist())
   }, [dispatch])

   const handleLogout = (e) => {
      e.preventDefault()
      localStorage.removeItem('token')
      dispatch(logoutUser())
   }

   return (
      <>
         <NavBar handleLogout={handleLogout}/>
         <Switch>
            <Route exact path='/login' render={() => <Login />} />
            <Route exact path='/signup' render={() => <Signup />} />
            {!currentUser.id && <Redirect to="/login" />}
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/territories' render={() => <Territories />} />
         </Switch>
      </>
   )
}

export default withRouter(Routes)