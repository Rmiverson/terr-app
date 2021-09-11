import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import UserForm from './UserForm'
import { signup } from '../store/actions/userActions'

const Signup = (props) => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

   const handleChange = (e) => {
      if (e.target.name === 'password') {
         setPassword(e.target.value)
      } else if (e.target.name === 'username') {
         setUsername(e.target.value)
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      props.signup({
         username: username,
         password: password
      })
   }

   return (
      <div className="signup">
         {!!props.currentUser.id && <Redirect to='/'/>}
         <UserForm type="Signup" username={username} password={password} handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>
   )
}

const mapStateToProps = (state) => ({
   currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
   signup: (userData) => dispatch(signup(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)