import React from 'react'
import { motion } from 'framer-motion'
import { allProjectsEn, allProjectsEs } from '../../../constants';
import Link from 'next/link';
type Props = {
  language: string
}

export default function Projects({
  language
}: Props) {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}} 
      className="min-h-screen relative flex flex-col lg:max-w-4xl 2xl:max-w-7xl xl:max-w-6xl min-w-[400px] mx-auto z-0 items-center">
      <h3 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold absolute top-20 text-[#40474e]">{language==='english'?"Projects":'Proyectos'}</h3>
      <div className="absolute top-40 grid lg:grid-cols-2 xl:grid-cols-3 gap-4 grid-flow-row px-6 py-0">
        {
          language==='english' ? (
            allProjectsEn.map((project,idx)=>{
              return (
                <Link href={`${project.link}`} key={idx} className="relative overflow:hidden flex flex-col gap-3 border hover:bg-[#40474e] bg-white transition duration-300 cnt-photo rounded-lg hover:text-white items-center">
                  <div className="max-w-full max-h-full overflow-hidden rounded-md mt-5">
                    <img src={project.imgUrl} alt={`project photo of ${project.title}`} className="hover:scale-[1.15] transition duration-500 object-fill h-[160px]"/>
                  </div>
                  <div className="flex flex-col items-center pb-5 px-5">
                    <p className="text-xl">{project.title}</p>
                    <p className="text-center font-light">{project.description}</p>
                  </div>
                </Link>
              )
            })
          )
          :
          (
            allProjectsEs.map((project,idx)=>{
              return (
                <Link href={`${project.link}`} key={idx} className="relative overflow:hidden flex flex-col gap-3 border hover:bg-[#40474e] bg-white transition duration-300 cnt-photo rounded-lg hover:text-white items-center">
                  <div className="max-w-full max-h-full overflow-hidden rounded-md mt-5">
                    <img src={project.imgUrl} alt={`project photo of ${project.title}`} className="hover:scale-[1.15] transition duration-500 object-fill h-[160px]"/>
                  </div>
                  <div className="flex flex-col items-center pb-5 px-5">
                    <p className="text-xl">{project.title}</p>
                    <p className="text-center font-light">{project.description}</p>
                  </div>
                </Link>
              )
            })
          )
        }
      </div>
    </motion.div> 
  )
}