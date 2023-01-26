import React, {useState} from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
type Props = {
  language: string
  setLanguage: any
}

export default function Header({language, setLanguage}: Props) {
  return (
    <header className="flex sticky top-0 items-start justify-between max-w-7xl mx-auto z-30 xl:items-center py-5">
      <motion.div 
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1,
        }}
        transition={{
          duration: 1
        }}
        className="flex flex-row items-center gap-2">
        {/* <SocialIcon url="https://slack.com" fgColor="#26262c" bgColor="transparent"/> */}
        <SocialIcon url="https://github.com/IvoFarid" fgColor="#26262c" bgColor="transparent" className="hover:outline-1 hover:outline rounded-full transition"/>
        {/* <SocialIcon url="https://linkedin.com" fgColor="#26262c" bgColor="transparent"/> */}
        <SocialIcon url="mailto:ivan99edlp@gmail.com" network="google" fgColor="#26262c" bgColor="transparent" className="hover:outline-1 hover:outline rounded-full transition"/>
        <a href="/CV.pdf" download className="flex items-center select-none transition rounded-full p-1 bg-white hover:outline-1 hover:outline">
          <p className="text-2xl ml-2">{language==='english' ? 'Resume':'Ver CV'}</p>
          <img src="darrow.png" alt="dasds" className="h-8 w-8" />
        </a>
        <button onClick={()=>setLanguage('english')} className={`${ language === 'english' ? 'bg-[#40474e] text-white' : 'bg-white' } text-2xl ml-2 py-1 px-2 hover:outline-1 hover:outline rounded-full transition`}>English</button>
        <button onClick={()=>setLanguage('spanish')} className={`${ language === 'spanish' ? 'bg-[#40474e] text-white' : 'bg-white' } text-2xl ml-2 py-1 px-2 hover:outline-1 hover:outline rounded-full transition`}>Español</button>
        {/* <div className="absolute top-[30px] -left-[400px] gradient-01 w-[400px] h-[200px] z-0" /> */}
      </motion.div>
    </header>
  )
}