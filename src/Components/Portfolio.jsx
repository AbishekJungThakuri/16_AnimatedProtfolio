import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://i.ibb.co/5MY82nF/React-Js-e-Commerce.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laborum!',
  },
  {
    id: 2,
    title: 'React Commerce',
    img: 'https://i.ibb.co/5MY82nF/React-Js-e-Commerce.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laborum!',
  },
  {
    id: 3,
    title: 'React Commerce',
    img: 'https://i.ibb.co/5MY82nF/React-Js-e-Commerce.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laborum!',
  },
  {
    id: 4,
    title: 'React Commerce',
    img: 'https://i.ibb.co/5MY82nF/React-Js-e-Commerce.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laborum!',
  },
];

const Single = ({ item }) => {
  return <section> {item.title} </section>;
};

export const Portfolio = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  });

  return (
    <div className="portfolio relative" ref={ref}>
      <div className="progress sticky top-0 left-0 pt-[40px] text-center text-orange-400 text-[36px] ">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar h-[10px] bg-white "></motion.div>
      </div>
      {items.map((item) => 
        <Single item={item} key={item.id} />
      )}
    </div>
  );
};
