import React, { useEffect } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser, userPersist } from './store/actions/userActions'

import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import NavBar from './components/NavBar'

const Routes = (props) => {
   // useEffect(() => {
   //    props.userPersist()
   // }, [props])

   const handleLogout = (e) => {
      e.preventDefault()
      localStorage.removeItem('token')
      props.logoutUser()
   }

   return (
      <>
         <NavBar handleLogout={handleLogout}/>
         <Switch>
            <Route exact path='/login' render={() => <Login />} />
            <Route exact path='/signup' render={() => <Signup />} />
            {!props.currentUser && <Redirect to="/login" />}
            <Route exact path='/' render={() => <Home />} />
         </Switch>
      </>
   )
}

const mapStateToProps = (state) => {
   return{
      currentUser: state.currentUser
   }
}

const mapDispatchToProps = (dispatch) => ({
   userPersist: () => dispatch(userPersist()),
   logoutUser: () => dispatch(logoutUser())
})

export default withRouter(connect(mapDispatchToProps, mapStateToProps)(Routes))