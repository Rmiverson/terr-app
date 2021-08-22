import React, { useState } from 'react'
import { Redirect } from 'react-router'
import UserForm from './UserForm'

const Signup = (props) => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

   const handleChange = (e) => {

   }
   return (
      <div className="signup">
         {!!props.currentUser.id && <Redirect to='/'/>}
         <UserForm type="Signup" username={username} password={password} handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>
   )
}

export default Signup