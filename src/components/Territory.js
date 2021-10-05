import React from 'react'
import AddressPreviewCard from './AddressPreviewCard'

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

   const renderAddresses = (addressArr) => {
      return addressArr.map(address => {
         return <AddressPreviewCard key={address.id} address={address} />
      })
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
         <div>
            <ul className='m-4'>
               <li className='flex flex-row border'>
                  <p className='border-r-2 w-24 p-1'>Parcel No.</p>
                  <p className='border-r-2 w-72 p-1'>Name</p>
                  <p className='border-r-2 w-16 p-1'>PO Box</p>
                  <p className='border-r-2 w-24 p-1'>Address No.</p>
                  <p className='border-r-2 w-72 p-1'>Street</p>
                  <p className='border-r-2 w-32 p-1'>City</p>
                  <p className='border-r-2 w-16 p-1'>Zip</p>
                  <p className='border-r-2 w-24 p-1'>Phone 1</p>
                  <p className='border-r-2 w-24 p-1'>Phone 2</p>
                  <p className='border-r-2 w-24 p-1'>Do Not Call</p>
                  <p className='p-1 truncate'>Notes</p>
               </li>
               {renderAddresses(territory.addresses)}
            </ul>
         </div>
      </div>
   )
}

export default Territory