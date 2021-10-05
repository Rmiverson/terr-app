import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = (props) => {
   const currentUser = useSelector((state) => state.currentUser)
 
   return (
      <nav className="navbar bg-black flex justify-end">
         {!currentUser.id ? (
            <>
               <NavLink to='/login' className='link text-white w-32 text-center'>Login</NavLink>
               <NavLink to='/signup' className='link text-white w-32 text-center'>Signup</NavLink>
            </>
         ) : (
            <>
               <NavLink exact to='/' className='link text-white w-32 text-center'>Home</NavLink>
               <NavLink exact to='/territories' className='link text-white w-32 text-center'>Territories</NavLink>
               <a href={window.location.href} className='link text-white w-32 text-center' onClick={props.handleLogout}>Logout</a>
            </>
         )}
      </nav>
   )
}

export default NavBar