import React from 'react'

const AddressPreviewCard = (props) => {

   return (
      <>
         <tr className='flex flex-row border-2 border-black border-b-0'>
            <td className='border-r-2 border-black w-24 p-1 text-blue-600 underline'><a  href={`https://www.skagitcounty.net/Search/Property/?id=${props.address.parcel_number}`} target='_blank' rel='noreferrer'>{props.address.parcel_number}</a></td>
            <td className='border-r-2 border-black w-72 p-1'>{props.address.name}</td>
            <td className='border-r-2 border-black w-24 p-1'>{props.address.po_box}</td>
            <td className='border-r-2 border-black w-32 p-1'>{props.address.address_number}</td>
            <td className='border-r-2 border-black w-72 p-1'>{props.address.street}</td>
            <td className='border-r-2 border-black w-32 p-1'>{props.address.city}</td>
            <td className='border-r-2 border-black w-16 p-1'>{props.address.zip_code}</td>
            <td className='border-r-2 border-black w-32 p-1'>{props.address.phone_1}</td>
            <td className='border-r-2 border-black w-32 p-1'>{props.address.phone_2}</td>
            <td className='border-black w-24 p-1'>{props.address.do_not_call.toString()}</td>
         </tr>
         <tr className='flex flex-row border-2 border-black border-b-0 bg-gray-200'>
            <td className='w-24 p-1 font-bold'>Notes</td>
            <td className='p-1 truncate'>{props.address.notes}</td>
         </tr>
      </>
   )
}

export default AddressPreviewCard