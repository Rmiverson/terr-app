import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allTerritoriesFetch } from '../store/actions/territoryActions'
import Territory from './TerritoryPreviewCard'

const Territories = () => {
   const fetchResponse = useSelector(state => state.allTerritories)
   const dispatch = useDispatch()

   // const loadStatus = fetchResponse.status
   const territories = fetchResponse.data

   useEffect(() => {
      dispatch(allTerritoriesFetch())
   }, [])

   if (territories.length === 0) {
      return (
         <div className='territories'> 
            <h4>Loading...</h4>
         </div>
      )
   } 

   const renderTerritories = territories.map(terr => {
      return ( <Territory key={terr.id} territory={terr} /> )
   })

   return (
      <div className='territories grid grid-cols-3 gap-4'>
         {renderTerritories}
      </div>
   ) 
   
}

export default Territories