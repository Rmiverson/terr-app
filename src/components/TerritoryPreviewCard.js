import React from 'react'

const TerritoryPreviewCard = (props) => {
   const territory = props.territory
   console.log(props.territory)

   const parseEnum = () => {
      if (territory.territory_type === 0){
         return 'House'
      } else if (territory.territory_type === 1) {
         return 'Business'
      } else if (territory.territory_type === 2){
         return 'Writing'
      }
   }

   return (
      <div id={territory.id} className="m-12 p-4 border-2 border-black rounded-md">
         <h3 className='text-base font-medium'>Territory No. {territory.number}</h3>
         <p className='mt-1 text-sm'>{territory.name}</p>
         <p className='mt-1 text-sm'>{parseEnum()}</p>
      </div>
   )
}

export default TerritoryPreviewCard