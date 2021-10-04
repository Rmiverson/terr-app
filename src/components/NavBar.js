import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = (props) => {
   const currentUser = useSelector((state) => state.currentUser)
 
   return (
      <nav className="navbar">
         {!currentUser.id ? (
            <>
               <NavLink to='/login' className='link'>Login</NavLink>
               <NavLink to='/signup' className='link'>Signup</NavLink>
            </>
         ) : (
            <>
               <NavLink exact to='/' className='link'>Home</NavLink>
               <NavLink exact to='/territories' className='link'>Territories</NavLink>
               <a href={window.location.href} className='link' onClick={props.handleLogout}>Logout</a>
            </>
         )}
      </nav>
   )
}

export default NavBar