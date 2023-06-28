import React, {useState, useEffect} from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
type Props = {
  language: string
  setLanguage: any
  colorMode: string
  setColorMode: any
}

export default function Header({language, setLanguage, colorMode, setColorMode}: Props) {
  // const [language, setLanguage] = useState('english');

  
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
        <SocialIcon url="https://github.com/IvoFarid" fgColor={colorMode === "light" ? "black" : "white"} bgColor="transparent" className="hover:outline-1 hover:outline rounded-full transition"/>
        {/* <SocialIcon url="https://linkedin.com" fgColor="#26262c" bgColor="transparent"/> */}
        <SocialIcon url="mailto:ivan99edlp@gmail.com" network="google" fgColor={colorMode === "light" ? "black" : "white"} bgColor="transparent" className="hover:outline-1 hover:outline rounded-full transition"/>
        <a href="/CV.pdf" download className="flex items-center select-none transition rounded-full p-1 bg-slate-200 dark:bg-gray-900 dark:text-slate-50 hover:outline-1 hover:outline">
          <p className="text-2xl ml-2">{language==='english' ? 'Resume':'Ver CV'}</p>
          <img src="darrow.png" alt="arrow" className={`${colorMode === "light" ? "invert-0" : "invert"} h-8 w-8`} />
        </a>
        <button onClick={()=>setLanguage('english')} className={`${ language === 'english' ? colorMode === "light" ? "bg-gray-900 text-white":"bg-slate-50 text-zinc-900" : colorMode === "light" ? "text-zinc-900":"text-white" } text-2xl ml-2 py-1 px-2 hover:outline-1 hover:outline rounded-full transition`}>English</button>
        <button onClick={()=>setLanguage('spanish')} className={`${ language === 'spanish' ? colorMode === "light" ? "bg-gray-900 text-white":"bg-slate-50 text-zinc-900" : colorMode === "light" ? "text-zinc-900":"text-white" } text-2xl ml-2 py-1 px-2 hover:outline-1 hover:outline rounded-full transition`}>Español</button>
        <button onClick={()=> setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
          {colorMode === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          ):(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          )}</button>
        {/* <div className="absolute top-[30px] -left-[400px] gradient-01 w-[400px] h-[200px] z-0" /> */}
      </motion.div>
    </header>
  )
}