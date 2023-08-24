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
      // initial={{opacity:0}}
      // whileInView={{opacity:1}}
      // transition={{duration:1}} 
      className="min-h-screen relative flex flex-col lg:max-w-4xl 2xl:max-w-7xl xl:max-w-6xl min-w-[400px] mx-auto z-0 items-center">
      <h3 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold absolute xl:top-[4.5rem] 2xl:top-20 text-[#40474e] dark:text-slate-300">{language==='english'?"Projects":'Proyectos'}</h3>
      {/* CAMBIE DIV ABAJO y H ARRIBA*/}
      <div className="absolute top-10 md:top-32 xl:top-[7.5rem] 2xl:top-40 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 grid-flow-row px-6 pt-0 pb-5">
        {
          language==='english' ? (
            allProjectsEn.map((project,idx)=>{
              return (
                <Link href={`${project.link}`} key={idx} className="relative overflow:hidden flex flex-col xl:gap-2 gap-3 border border-slate-300 hover:bg-[#40474e] dark:border-slate-800 transition duration-300 cnt-photo rounded-lg hover:text-white items-center dark:text-slate-200">
                {/* cambie link arriba */}
                  <div className="max-w-full max-h-full overflow-hidden rounded-md mt-3">
                    {/* cambie imagen abajo */}
                    <img src={project.imgUrl} alt={`project photo of ${project.title}`} className="hover:scale-[1.15] transition duration-500 object-fill h-[160px] 2xl:h-[170px]"/>
                  </div>
                  <div className="flex flex-col items-center pb-5 px-5">
                    {/* CAMBIE 2 P ABAJO*/}
                    <p className="2xl:text-xl xl:text-normal">{project.title}</p>
                    <p className="text-center xl:text-sm 2xl:text-normal font-light">{project.description}</p>
                  </div>
                </Link>
              )
            })
          )
          :
          (
            allProjectsEs.map((project,idx)=>{
              return (
                <Link href={`${project.link}`} key={idx} className="relative overflow:hidden flex flex-col xl:gap-2 gap-3 border border-slate-300 hover:bg-[#40474e] dark:border-slate-800 transition duration-300 cnt-photo rounded-lg hover:text-white items-center dark:text-slate-200">
                {/* cambie link arriba */}
                  <div className="max-w-full max-h-full overflow-hidden rounded-md mt-3">
                    {/* cambie imagen abajo */}
                    <img src={project.imgUrl} alt={`project photo of ${project.title}`} className="hover:scale-[1.15] transition duration-500 object-fill h-[160px] 2xl:h-[170px]"/>
                  </div>
                  <div className="flex flex-col items-center pb-5 px-5">
                    {/* CAMBIE 2 P ABAJO*/}
                    <p className="2xl:text-xl xl:text-normal">{project.title}</p>
                    <p className="text-center xl:text-sm 2xl:text-normal font-light">{project.description}</p>
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