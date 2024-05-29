import React, { useRef } from 'react';
import {  motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Services = () => {
   
  const ref = useRef();
  const isInView = useInView(ref, {margin: "-100px"});

  return (
    <motion.div
      className="services h-screen bg-[linear-gradient(180deg,_#0c0c1d,_#111132)] flex flex-col justify-between"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate = {isInView && "animate"}
    >
      <motion.div
        variants={variants}
        className="textContainer flex-1 self-end flex items-center gap-[20px] p-4"
      >
        <p className="text-[20px] font-[200] text-gray-600 text-right">
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr className="w-[500px] border-gray-700" />
      </motion.div>

      <motion.div
        variants={variants}
        className="titleContainer  flex-1 flex flex-col items-center justify-center"
      >
        <div className="title flex items-center gap-[50px] ">
          <img
            className="w-[250px] h-[70px] rounded-[50px] object-cover"
            src="/people.webp"
            alt=""
          />
          <h1 className="text-[55px] font-[100]">
            <motion.b whileHover={{color:"orange"}} >Unique </motion.b>Ideas
          </h1>
        </div>
        <div className="title flex items-center gap-[50px] mt-4">
          <h1 className="text-[55px] font-[100]">
            <motion.b whileHover={{color:"orange"}}>For Your </motion.b>Business.
          </h1>
          <button className="h-[70px] w-[250px] rounded-[50px] bg-orange-400 border-none text-[24px] cursor-pointer text-black">
            WHAT WE DO?
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={variants}
        className="listContainer flex-1 flex justify-around p-4 mx-[150px] mt-[70px] cursor-pointer "
      >
        <motion.div
          whileHover={{ background: 'lightgray', color: 'black' }}
          className="box box flex-1 max-w-[300px] m-2 p-4 border border-gray-600 rounded-lg shadow-lg "
        >
          <h2 className="text-xl font-bold mb-2">Branding</h2>
          <p className=" text-[14px] mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quidem deserunt dicta ut magnam voluptates ducimus maxime delectus,
            facere aliquid sed dolore est! Eos corporis nemo accusamus illo
            fugiat repudiandae!
          </p>
          <button className="bg-orange-400 w-full text-white px-4 py-2 rounded">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: 'lightgray', color: 'black' }}
          className="box flex-1 max-w-[300px] m-2 p-4 border border-gray-600  rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-bold mb-2">Branding</h2>
          <p className=" text-[14px] mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quidem deserunt dicta ut magnam voluptates ducimus maxime delectus,
            facere aliquid sed dolore est! Eos corporis nemo accusamus illo
            fugiat repudiandae!
          </p>
          <button className="bg-orange-400 w-full text-white px-4 py-2 rounded">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: 'lightgray', color: 'black' }}
          className="box flex-1 max-w-[300px] m-2 p-4 border border-gray-600 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-bold mb-2">Branding</h2>
          <p className=" text-[14px] mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quidem deserunt dicta ut magnam voluptates ducimus maxime delectus,
            facere aliquid sed dolore est! Eos corporis nemo accusamus illo
            fugiat repudiandae!
          </p>
          <button className="bg-orange-400 w-full text-white px-4 py-2 rounded">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: 'lightgray', color: 'black' }}
          className="box flex-1 max-w-[300px] m-2 p-4 border border-gray-600 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-bold mb-2">Branding</h2>
          <p className=" text-[14px] mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quidem deserunt dicta ut magnam voluptates ducimus maxime delectus,
            facere aliquid sed dolore est! Eos corporis nemo accusamus illo
            fugiat repudiandae!
          </p>
          <button className="bg-orange-400 w-full text-white px-4 py-2 rounded">
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
