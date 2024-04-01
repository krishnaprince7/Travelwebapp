import React from 'react'
import data from "./data.json"     


const Select = () => {
  return (
    <div className='max-w-[1240px] grid gap-4 lg:grid-cols-3 sm:grid-cols-2  mx-auto py-4' id='home'>
    
   {
    data.map((value)=>{
      return(
        <div className='relative'>
        <img src={value.image} alt="" />
        <div className='absolute top-0 left-0 w-full h-full bg-gray-300/2'>
        <p className='absolute left-4 bottom-4 text-white font-bold text-4xl'>{value.name}</p>
        </div>
        </div>
      )
    })
   }

    
   

    </div>
  )
}

export default Select