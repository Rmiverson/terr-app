import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allTerritoriesFetch } from '../store/actions/territoryActions'

const Territories = () => {
   const fetchResponse = useSelector(state => state.allTerritories)
   const dispatch = useDispatch()

   const loadStatus = fetchResponse.status
   const territories = fetchResponse.data

   useEffect(() => {
      dispatch(allTerritoriesFetch())
   }, [])

   console.log(territories, loadStatus)



   if (territories.length === 0) {
      return (
         <div className='territories'> 
            <h4>Loading...</h4>
         </div>
      )
   } 

   const renderTerritories = territories.map(terr => {
      return (<p key={terr.id}>{terr.id}</p>)
   })

   return (
      <div className='territories'>
         {renderTerritories}
      </div>
   ) 
   
}

export default Territories