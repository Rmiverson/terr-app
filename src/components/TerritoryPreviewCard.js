import React from 'react'
import { Link } from 'react-router-dom'

const TerritoryPreviewCard = (props) => {
   const territory = props.territory

   const parseEnum = (input) => {
      if (input === 0){
         return 'House to house'
      } else if (input === 1) {
         return 'Business'
      } else if (input === 2){
         return 'Writing'
      }
   }

   return (
      <div id={territory.id} className="m-12 p-4 border-2 border-black rounded-md flex flex-col">
         <h3 className='text-base font-medium'>Territory No. {territory.number}</h3>
         <p className='mt-1 text-sm'>{territory.name}</p>
         <p className='mt-1 text-sm'>{parseEnum(territory.territory_type)}</p>
         <Link to={{
            pathname: `/territories/${territory.id}`,
            state: {territory}
         }} className='p-2 border-2 border-black rounded-md text-center'>Open</Link>
      </div>
   )
}

export default TerritoryPreviewCard