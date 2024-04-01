import React from 'react'
import { GoSearch } from "react-icons/go";


const Home = () => {
  return (
    <div className='h-screen w-full'>
    <video src="/images/beachVid.mp4" autoPlay loop muted className='h-screen w-full object-cover  '></video>
<div className='absolute top-0 flex justify-center items-center h-screen w-full flex-col text-white '>
    <h1 className='font-bold text-xl sm:3xl md:text-4xl py-1'>First Class Travel</h1>
    <h2 className='font-bold text-xl sm:3xl md:text-4xl py-1'>Top 1% Location Worldwide</h2>
<form className='w-full md:w-[17cm]  flex justify-between border mx-auto items-center p-1 rounded-md bg-gray-100/90 text-black'>
  <div >
    <input type="text" placeholder='Search Destination' className='font-[poppins]
    focus:outline-none bg-transparent pl-2 max-w-[330px] sm:max-w[400px] ' />
  </div>
  <div>
    <button className="border bg-gradient-to-r from-[#5651e5] to-[#709dff] p-2 rounded-md" style={{color:"white"}}><GoSearch size={20}/></button>

  </div>
</form>
</div>
    </div>

  )
}

export default Home