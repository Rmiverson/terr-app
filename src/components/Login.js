import React, { useState } from "react"
import { connect } from 'react-redux'
import { login } from '../store/actions/userActions'
import { Redirect } from 'react-router-dom'
import UserForm from './UserForm'

const Login = (props) => {
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")

   const handleChange = (e) => {
      if (e.target.name === 'password') {
         setPassword(e.target.value)
      } else if (e.target.name === 'username') {
         setUsername(e.target.value)
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      props.login({
         username: username,
         password: password
      })
   }

   return (
      <div className="login">
         {!!props.currentUser.id && <Redirect to='/' />}
         <UserForm type="Login" username={username} password={password} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
   )
}

const mapStateToProps = (state) => ({
   currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
   login: (userData) => dispatch(login(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)