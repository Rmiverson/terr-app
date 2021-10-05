import React from 'react'
import AddressPreviewCard from './AddressPreviewCard'

const Territory = (props) => {
   const territory = props.location.state.territory

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
      <div className='flex flex-col'>
         <div className='border-2 border-black m-4 w-1/3 flex flex-col self-center'>
            <div className='flex justify-center gap-x-10 mt-4'>
               <h3 className='text-lg font-medium'>{`Territory No. ${territory.number}`}</h3>
               <h3 className='text-lg font-medium'>{`Locality: ${territory.name}`}</h3>               
            </div>

            <div className='m-4'>
               <p className='mt-1 text-sm'>{`Type: ${parseEnum(territory.territory_type)}`}</p>
               <p className='mt-1 text-sm'>{`Last worked: ${formatTime(territory.last_worked)}`}</p>
               <p className='mt-1 text-sm'>{`Last audited: ${formatTime(territory.last_audited)}`}</p>
               <p className='mt-1 text-sm'>{`Notes: ${territory.notes}`}</p>               
            </div>
         </div>
         <div className='self-center'>
            <table className='m-4 border-black border-b-2'>
               <tr className='flex flex-row border-2 border-black border-b-0 bg-blue-300'>
                  <th className='border-r-2 border-black w-24 p-1 font-bold'>Parcel No.</th>
                  <th className='border-r-2 border-black w-72 p-1 font-bold'>Name</th>
                  <th className='border-r-2 border-black w-24 p-1 font-bold'>PO Box</th>
                  <th className='border-r-2 border-black w-32 p-1 font-bold'>Address No.</th>
                  <th className='border-r-2 border-black w-72 p-1 font-bold'>Street</th>
                  <th className='border-r-2 border-black w-32 p-1 font-bold'>City</th>
                  <th className='border-r-2 border-black w-16 p-1 font-bold'>Zip</th>
                  <th className='border-r-2 border-black w-32 p-1 font-bold'>Phone 1</th>
                  <th className='border-r-2 border-black w-32 p-1 font-bold'>Phone 2</th>
                  <th className='border-black w-24 p-1 font-bold'>Do Not Call</th>
               </tr>
               {renderAddresses(territory.addresses)}
            </table>
         </div>
      </div>
   )
}

export default Territory