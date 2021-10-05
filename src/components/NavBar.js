import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = (props) => {
   const currentUser = useSelector((state) => state.currentUser)
 
   return (
      <nav className="bg-black flex justify-end">
         {!currentUser.id ? (
            <>
               <NavLink to='/login' className='text-white p-2 w-32 text-center'>Login</NavLink>
               <NavLink to='/signup' className='text-white p-2 w-32 text-center'>Signup</NavLink>
            </>
         ) : (
            <>
               <NavLink exact to='/' className='text-white p-2 w-32 text-center'>Home</NavLink>
               <NavLink exact to='/territories' className='text-white p-2 w-32 text-center'>Territories</NavLink>
               <a href={window.location.href} className='text-white p-2 w-32 text-center' onClick={props.handleLogout}>Logout</a>
            </>
         )}
      </nav>
   )
}

export default NavBar