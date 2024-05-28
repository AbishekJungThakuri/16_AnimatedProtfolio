import React from 'react'
import { motion } from 'framer-motion'
import { Sidebar } from '../Sidebar/Sidebar'

export const Navbar = () => {
  return (
    <div className='h-[100px]'>
      <Sidebar />
        <div className='  flex items-center justify-between h-full mx-[15%] md:mx-[20%] lg:mx-[150px]'>
            <motion.span className='font-bold'
            initial = {{opacity: 0, scale: 0.5 }}
            animate = {{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            >Jung Dev</motion.span>
            <div className='flex gap-5'>
                <a href="#"><img className='w-[18px] h-[18px]' src="/facebook.png" alt="" /></a>
                <a href="#"><img className='w-[18px] h-[18px]' src="/instagram.png" alt="" /></a>
                <a href="#"><img className='w-[18px] h-[18px]' src="/youtube.png" alt="" /></a>
                <a href="#"><img className='w-[18px] h-[18px]' src="/dribbble.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}
