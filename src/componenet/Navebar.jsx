import React, { useState } from "react";
import { MdOutlinePerson } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Navebar = () => {
  const [show,setshow] =useState(false)

  function open(){
    setshow(!show)
  }
  return (
    <div className="w-full flex justify-between item py-4 h-20 px-4 absolute text-white ">
      <div>
        <h1 className="md:text-4xl font-bold text-3xl ">BEACHES.</h1>
      </div>
      <ul className="gap-6 hidden md:flex ">
        <li className="p-2  font-bold ">Home</li>
        <li className="p-2 font-bold">Destination</li>
        <li className="p-2 font-bold">Travel</li>
        <li className="p-2 font-bold">View</li>
        <li className="p-2 font-bold">Book</li>
      </ul>
      <div className="mf:flex hidden py-2 ">
        <GoSearch />
        <MdOutlinePerson />
      </div>
      <div className="block md:hidden cursor-pointer z-10" onClick={open} >
        {show ? <MdOutlineClose size={25}/>  : <RiMenu3Fill size={25}/>}
        
      </div>


      <div className={show ? "absolute text-black w-full left-0 top-0 p-4 px-4  bg-gray-100/30" : "absolute left-[-100%] transition ease-in-out duration-300 " }>
      <h1 className="md:text-4xl font-extrabold text-3xl px-[-1px]">BEACHES.</h1>        

<ul className="flex flex-col gap-8 p-5 ">
  <li className="border-b font-semibold  ">Home</li>
  <li className="border-b font-semibold  ">Destination</li>
  <li className="border-b font-semibold  ">Travel</li>
  <li className="border-b font-semibold  ">View</li>
  <li className="border-b font-semibold  ">Book</li>
</ul>
<div className="flex flex-col">
  <button className="border bg-gradient-to-r from-[#5651e5] to-[#709dff] my-3 py-2 text-white rounded-md font-semibold">Search</button>
  <button className="border bg-gradient-to-r from-[#5651e5] to-[#709dff] py-2 text-white rounded-md font-semibold">Account</button>
</div>
<div className="flex justify-between p-7">

  <MdFacebook size={25} className="icon"/>
  <FaInstagram size= {25} className="icon"/>
  <FaLinkedin size={25} className="icon"/>
  <FaGithub size={25} className="icon"/>
</div>
      </div>
    </div>
  );
};

export default Navebar;
