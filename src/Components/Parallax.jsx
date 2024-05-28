import { motion,useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export const Parallax = ({ type }) => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start","end start"]
  })


  const yText = useTransform(scrollYProgress, [0,1],["0%","500%"]);
  const yBg = useTransform(scrollYProgress, [0,1],["0%","100%"]);

  return (
    <div
    ref={ref}
      className={`relative w-full h-full flex items-center justify-center overflow-hidden ${
        type === 'services'
          ? 'bg-[linear-gradient(180deg,_#111132,_#0c0c1d)]'
          : 'bg-[linear-gradient(180deg,_#111132,_#505064)]'
      }`}
    >
      <motion.h1 style={{ y: yText }} className="text-[100px]">
        {type === 'services' ? 'What We Do?' : 'What We Did?'}
      </motion.h1>
      <motion.div className='w-full h-full bg-[url("/mountains.png")] bg-cover bg-bottom absolute z-30'></motion.div>
      <motion.div style={{ y: yBg,
        backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png" })`
       }} className='w-full h-full bg-[url("/planets.png")] bg-cover bg-bottom absolute z-20'></motion.div>
      <motion.div style={{ x: yBg }} className='w-full h-full bg-[url("/stars.png")] bg-cover bg-bottom absolute z-0'></motion.div>
      
    </div>
  );
};
