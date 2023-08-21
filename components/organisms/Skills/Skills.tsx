import React from 'react'

import { motion } from 'framer-motion'
import { allSkills } from '../../../constants';
type Props = {
  language: string
  colorMode: string
}

export default function Skills({language, colorMode}: Props) {
  return (
    <div className="min-h-screen flex flex-col md:w-[60%] w-4/6 mx-auto relative xl:pt-12 2xl:pt-[20px] items-center justify-center text-center md:text-start min-w-[280px]">
      {/* CAMBIE DIV DE ARRIBA */}
      <h3 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-[#40474e] dark:text-slate-300">{language==='english'? (<p>Technologies i&apos;ve worked with</p>):(<p>Tecnologías con las que trabajé</p>)}</h3>
      <div className="w-full flex flex-col justify-center 2xl:mt-7 mt-7 gap-5">
        <div className="md:grid-cols-5 md:grid gap-1 md:gap-3 relative flex flex-wrap">
            {
              allSkills.map((e,idx)=>{
                return (
                  <motion.div 
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  transition={{duration:1,delay:idx*0.03}}
                  viewport={{once:true}}
                  key={idx} className="flex w-[48%] md:w-auto md:flex-col gap-2 items-center p-2 rounded-md border border-slate-300 dark:text-slate-300 dark:border-slate-800 hover:bg-[#40474e] hover:scale-105 duration-200 transition hover:text-white">
                    <img src={e.imgUrl} className="md:w-[45px] md:h-[45px] w-[30px] h-[30px] 2xl:h-[50px] 2xl:w-[50px] object-fit"/>
                    <p className="font-light lg:text-normal text-sm 2xl:text-lg">{e.name}</p>
                  </motion.div>
                )
              })
            }
        </div>
      </div>
      {/* CAMBIE IMAGEN */}
      <img src="darrow.png" alt="arrow" className={`${colorMode === "light" ? "invert-0" : "invert"} 2xl:mt-[5rem] xl:mt-[2rem] mt-10 h-8 w-8`} />
    </div>
  )
}