import React from 'react'

const Territory = (props) => {
   const territory = props.location.state.territory
   // const last_worked = new Date(territory.last_worked)
   // const last_audited = new Date(territory.last_audited).getDate()

   console.log(territory)

   const parseEnum = (input) => {
      if (input === 0){
         return 'House to house'
      } else if (input === 1) {
         return 'Business'
      } else if (input === 2){
         return 'Writing'
      }
   }

   
   const formatTime = (input) => {
      const dateObj = new Date(input)
      const year = dateObj.getFullYear()
      const month = dateObj.getMonth()
      const date = dateObj.getDate()

      return `${month}/${date}/${year}`
   }

   return (
      <div>
         <div>
            <p>{`Territory No. ${territory.number}`}</p>
            <p>{`Locality: ${territory.name}`}</p>
            <p>{`Type: ${parseEnum(territory.territory_type)}`}</p>
            <p>{`Last worked: ${formatTime(territory.last_worked)}`}</p>
            <p>{`Last audited: ${formatTime(territory.last_audited)}`}</p>
            <p>{`Notes: ${territory.notes}`}</p>
         </div>
      </div>
   )
}

export default Territory