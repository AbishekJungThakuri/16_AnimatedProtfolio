import React from 'react'
import { motion } from 'framer-motion'

const items = [ "Homepage", "Services", "Portfolio", "Contact", "About"  ]


export const Links = () => {
  return (
    <motion.div className='absolute w-full h-full flex flex-col items-center justify-center gap-[20px]' > {
        items.map(item => 
            <motion.a href={`#${item}`} key={item} 
             whileHover={{scale:1.1}} whileTap={{scale:0.95}} > {item} </motion.a>
        ) 
    } </motion.div>
  )
}

