import { motion } from 'framer-motion';
import React from 'react';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration:2,
      repeat:Infinity
    }
  }
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeatType: "mirror",
      repeat:Infinity,
      duration: 30,
    },
  },

};

export const Hero = () => {
  return (
    <div className="h-[603px] bg-[linear-gradient(180deg,_#0c0c1d,_#111132)] relative overflow-hidden">
      <div className="mx-[15%] md:mx-[20%] lg:mx-[150px]">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="h-full w-[50%] flex flex-col justify-center gap-[40px]"
        >
          <motion.h2
            variants={textVariants}
            className="text-purple-600 text-[30px] tracking-[10px] mt-[100px]"
          >
            Michael Jackson
          </motion.h2>
          <motion.h1
            variants={textVariants}
            className="text-[88px] leading-none"
          >
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="flex gap-6">
            <motion.button
              variants={textVariants}
              className="p-[20px] border border-white border-solid rounded-[10px] font-bold"
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              className="p-[20px] border border-white border-solid rounded-[10px] bg-white text-black font-bold"
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate = "scrollButton"
            className="w-[50px]"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div className="absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] w-full font-bold "
      variants={sliderVariants}
      initial = "initial"
      animate = "animate"
      >
        Writer Content Creator Influencer
      </motion.div>

      <div className="h-[100%] absolute top-0 right-0 overflow-hidden">
        <img className="w-full h-full object-cover" src="./hero.png" alt="" />
      </div>
    </div>
  );
};
