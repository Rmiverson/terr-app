import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
   const currentUser = useSelector((state) => state.currentUser)

   return (
      <div className='home'>
         <h3>{`Welcome ${currentUser.username}`}</h3>
      </div>
   )
}

export default Home