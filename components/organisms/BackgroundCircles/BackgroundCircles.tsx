import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
      initial={{
      opacity:0
      }}
      animate={{
        scale: [1,1.05,1],
        y: [0,-10,0],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{
        duration: 1.5
      }}
      className="w-full h-full relative flex justify-center items-center">
      <div className="absolute border border-[#ef233c] rounded-full w-64 h-64 xl:w-[320px] xl:h-[320px] motion-safe:animate-pulse ml-[224px] xl:ml-[270px] 2xl:ml-[270px]" />
      <div className="absolute border border-[#333333] rounded-full w-56 h-56 xl:w-[270px] xl:h-[270px] ml-[224px] xl:ml-[270px] 2xl:ml-[270px]" />
    </motion.div>
  )
}