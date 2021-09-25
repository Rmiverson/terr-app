import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/actions/userActions'
import { Redirect } from 'react-router-dom'
import UserForm from './UserForm'

const Login = () => {
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")

   const currentUser = useSelector((state) => state.currentUser)
   const dispatch = useDispatch()

   const handleChange = (e) => {
      if (e.target.name === 'password') {
         setPassword(e.target.value)
      } else if (e.target.name === 'username') {
         setUsername(e.target.value)
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(login(
         {
            username: username,
            password: password
         }
      ))
   }

   return (
      <div className="login">
         {!!currentUser.id && <Redirect to='/' />}
         <UserForm type="Login" username={username} password={password} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
   )
}

export default Login