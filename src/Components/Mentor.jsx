import React from 'react'
import image2 from '../utils/image2.png'
function Mentor(props) {
  return (
    <div className='my-5'>
    <div className='flex justify-center text-center'>
        <div className="w-full flex justify-center p-0">
        <div className="h-48 w-48 p-0"><img className='p-0 bg-auto' src={props.img}/></div>
      
        </div>
        
      
    </div>
    <div className="flex justify-center">

         <h2 className='text-xl font-bold'>{props.name}</h2>
         
     
        </div>
        <div className="flex justify-center">

         <h2 className='text-sm font-semibold'>{props.org}</h2>
         
     
        </div>
    </div>
  )
}

export default Mentor
