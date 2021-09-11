import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const NavBar = (props) => {
   return (
      <nav className="navbar">
         {!props.currentUser.id ? (
            <>
               <NavLink to='/login' className='link'>Login</NavLink>
               <NavLink to='/signup' className='link'>Signup</NavLink>
            </>
         ) : (
            <>
               <NavLink exact to='/' className='link'>Home</NavLink>
               <a href={window.location.href} className='link' onClick={props.handleLogout}>Logout</a>
            </>
         )}
      </nav>
   )
}

const mapStateToProps = (state) => ({
   currentUser: state.currentUser
})

export default connect(mapStateToProps, null)(NavBar)