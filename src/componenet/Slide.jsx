import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const sliderdata = [
    {
        "url":"https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "url":"https://images.unsplash.com/photo-1532921982367-0c75fe322456?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "url":"https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
   
    {
        "url":"https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "url":"https://media.istockphoto.com/id/1154893066/photo/key-west-florida.jpg?s=1024x1024&w=is&k=20&c=smWOlo082Y7ZFcWIYN5htmA8fdDfE_1XLkBw1wKtPPY="
    },
   
]


const Slide = () => {
    const [data,setdata] =useState(0)
    const length = sliderdata.length
    

    function prvice(){
        setdata(data === length -1 ? 0 : data+1)
        
    }
    function next(){
        setdata(data === 0 ? length -1 : data-1)

    }
  return (
    <div className='relative max-w-[1240px]  mx-auto py-16 flex justify-center items-center'>
    <FaArrowRight onClick={prvice} size={30} className='absolute right-1 text-white cursor-pointer'/>
    <FaArrowLeft onClick={next} size={30} className='absolute left-2 text-white cursor-pointer'/>
   
{
    sliderdata.map((item,index)=>{
        return(
             <div className={data === index ? "opacity-100" : "opacity-0"}>
             {data === index ? <img className='w-full rounded-md' src={item.url} alt="" /> : null }
            
            
             </div>
        )

    })
}
    </div>
  )
}

export default Slide