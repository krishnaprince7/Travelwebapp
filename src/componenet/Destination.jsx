import React from 'react'

const Destination = () => {
  return (
    <div className='max-w-[1240px]  px-4 py-16 mx-auto text-center ' id='destination'>
    <h1 className='md:text-4xl font-bold  text-3xl' >All-Inclusive Resorts</h1>
    <p className='font-semibold'>on the Caribbean's Beast Beaches</p>

    <div className='grid   gap-2 md:gap-4 md:grid-cols-5  py-4'>
      <img className='w-full h-full object-cover col-span-2  md:col-span-3 row-span-2  ' src="/images/borabora.jpg" alt="/" />
      {/* <img className='w-full h-full object-cover' src="/images/borabora2.jpg" alt="/" /> */}
      <img className='w-full h-full object-cover' src="/images/keywest.jpg" alt="/" />
      <img className='w-full h-full object-cover'  src="/images/maldives.jpg" alt="/" />
      <img className='w-full h-full object-cover' src="/images/maldives2.jpg" alt="/" />
      <img className='w-full h-full object-cover' src="/images/maldives3.jpg" alt="/" />
    </div>

    </div>
  )
}

export default Destination