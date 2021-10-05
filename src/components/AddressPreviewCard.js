import React from 'react'

const AddressPreviewCard = (props) => {

   return (
      <li className='flex flex-row border'>
         <a className='border-r-2 w-24 p-1' href={`https://www.skagitcounty.net/Search/Property/?id=${props.address.parcel_number}`} target='_blank' rel='noreferrer'>{props.address.parcel_number}</a>
         <p className='border-r-2 w-72 p-1'>{props.address.name}</p>
         <p className='border-r-2 w-16 p-1'></p>
         <p className='border-r-2 w-24 p-1'>{props.address.address_number}</p>
         <p className='border-r-2 w-72 p-1'></p>
         <p className='border-r-2 w-32 p-1'>{props.address.city}</p>
         <p className='border-r-2 w-16 p-1'>{props.address.zip_code}</p>
         <p className='border-r-2 w-24 p-1'></p>
         <p className='border-r-2 w-24 p-1'></p>
         <p className='border-r-2 w-24 p-1'>{props.address.do_not_call.toString()}</p>
         <p className='p-1 truncate'>{props.address.notes}</p>
      </li>
   )
}

export default AddressPreviewCard