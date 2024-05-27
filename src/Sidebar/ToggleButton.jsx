import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export const ToggleButton = ({setOpen, open}) => {
  return (
    <button className='w-[50px] h-[50px] fixed top-[25px] left-[25px] bg-transparent border-none cursor-pointer'
    onClick={()=> setOpen(prev => !prev)}
    >
     { open ?
        <IoClose className='text-3xl absolute top-[11px] left-[9px]' />
        : 
        <IoMdMenu className='text-3xl absolute top-[11px] left-[9px]' />
    }
        
    </button>
  )
}
