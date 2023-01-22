import React from 'react';
// import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion'
import { BackgroundCircles } from '../../organisms';
import Link from 'next/link'
type Props = {
  language: string
}

export default function Hero({language}: Props) {
  // const [text,count] = useTypewriter({
  //   words: ['Im a 23 years old Full Stack Junior Developer based in Argentina that has been learning and working in projects since mid 2021.'],
  //   typeSpeed: 32
  // })
  return (
    <div className="flex flex-col relative">
      <div className="flex mx-auto mt-32 z-20 relative lg:max-w-4xl 2xl:max-w-7xl xl:max-w-6xl justify-center min-w-[400px] 2xl:items-center 2xl:pt-0 2xl:pb-28">
        <motion.div 
        initial={{
          opacity:0,
          x: -200
        }}
        viewport={{once:true}}
        whileInView={{
          opacity:1,
          x:0
        }}
        transition={{
          duration: 1
        }} 
        className="flex flex-col md:w-[60%] w-4/6 md:items-start items-center justify-center mt-[50px] md:mt-0">
            <div className="flex flex-col gap-1 wrap">
              <h1 className="font-bold text-2xl text-center md:text-4xl lg:text-5xl 2xl:text-6xl text-[#40474e]">Iván Conosciuto</h1>
              <motion.p 
              initial={{x:-20, opacity:0}}
              whileInView={{x:0, opacity:1}}
              viewport={{once:true}}
              transition={{duration:1, delay:.5}}
              className="font-light text-gray-600 text-center md:text-end 2xl:text-xl">
                {language==='english' ? 'based in Buenos Aires, Argentina.' : 'Ubicado en Buenos Aires, Argentina.'}
              </motion.p>
            </div> 
            <div className="flex flex-col mt-1">
              <motion.p 
              initial={{x:-20, opacity:0}}
              whileInView={{x:0, opacity:1}}
              transition={{duration:1, delay:.25}}
              className="md:text-xl text-lg font-light text-start text-gray-600 md:w-[70%] 2xl:text-2xl">
                {/* I'm a 23 years old <span className="font-normal">Full Stack Junior Developer</span> that has been learning and working on several projects using technologies such as ReactJS, Material UI, Bootstrap and more on the frontend side. <br /> On the backend side, i've worked with MongoDB, Express, Sequelize, PHP and Symfony. */}
                {language==='english' ? (<p>I'm a 23 years old <span className="font-normal">Full Stack Junior Developer</span> that has been learning and working on several projects using technologies such as ReactJS, Material UI, Bootstrap and more on the frontend side. <br /> On the backend side, i've worked with MongoDB, Express, Sequelize, PHP and Symfony.</p>) :
                 (<p>Soy un <span className="font-normal">Desarrollador Junior Full Stack</span> de 23 años que viene realizando diferentes proyectos usando tecnologías como ReactJS, Material UI, Bootstrap y más desde el lado del frontend. <br /> Desde el lado del backend, trabajé con MongoDB, Express, Sequelize, PHP y Symfony.</p>)}</motion.p>
              <motion.div 
              initial={{x:-20, opacity:0}}
              whileInView={{x:0, opacity:1}}
              transition={{duration:1, delay:.25}}
              className="mt-5">
                <p className="font-light text-gray-600 md:text-start text-center 2xl:text-xl">
                
                {language==='english' ? 'Navigate through sections' : 'Navegá por las siguientes secciones'}
                </p>
                <div className="flex md:flex-row flex-col space-x-2 justify-center items-center md:justify-start mt-1">
                  {language==='english' ? (
                    <>
                    <Link href="#skills" className="font-bold text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl filled-text cursor-pointer relative" data-text="SKILLS">SKILLS</Link>
                      <p className="font-light text-gray-600">|</p>
                    <Link href="#projects" className="font-bold text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl filled-text cursor-pointer relative" data-text="MY PROJECTS">MY PROJECTS</Link>
                    </>
                  ):(
                  <>
                    <Link href="#skills" className="font-bold text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl filled-text cursor-pointer relative" data-text="HABILIDADES">HABILIDADES</Link>
                      <p className="font-light text-gray-600">|</p>
                    <Link href="#projects" className="font-bold text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl filled-text cursor-pointer relative" data-text="MIS PROYECTOS">MIS PROYECTOS</Link>
                  </>
                  )}
                </div>
              </motion.div>
            </div>
        </motion.div>
        <div className="min-w-fit relative hidden md:flex items-center">
          <BackgroundCircles />
          <motion.img 
          initial={{x:40, opacity:0,}}
          whileInView={{x:0, opacity:1,}}
          viewport={{once:true}}
          transition={{duration:1, delay: .5}}
          src="/ivan4.png" className="flex-shrink-0 w-56 h-56 xl:w-[270px] xl:h-[270px] rounded-full object-cover object-bottom"/>
        </div>
      </div>
      <img src="darrow.png" alt="sdadsa" className="mx-auto mt-10 h-8 w-8" />
    </div>
  )
}