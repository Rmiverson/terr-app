import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import UserForm from './UserForm'
import { signup } from '../store/actions/userActions'

const Signup = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

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
      dispatch(signup(
         {
            username: username,
            password: password
         }
      ))
   }

   return (
      <div className="signup">
         {!!currentUser.id && <Redirect to='/'/>}
         <UserForm type="Signup" username={username} password={password} handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>
   )
}

export default Signup