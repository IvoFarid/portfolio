import Head from 'next/head'
import { useState } from 'react';
// import Image from 'next/image'
import { Header, Hero, Skills, Projects } from '../components/organisms'
import useColorMode from '../hooks/useColorMode'

export default function Home() {
  const [language, setLanguage] = useState('english');
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className="bg-slate-200 dark:bg-gray-900 text-dark h-screen overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-thumb-[#40474e] scrollbar-thin">
      <Head>
        <title>Conosciuto Ivan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://api.fontshare.com/v2/css?f[]=red-hat-display@900,300,700,400,800,200&display=swap" rel="stylesheet" />
      </Head>
      <Header language={language} setLanguage={setLanguage} colorMode={colorMode} setColorMode={setColorMode}/>
      <section id="hero">
        <Hero language={language} colorMode={colorMode}/>
      </section>
      <section id="skills">
        <Skills language={language} colorMode={colorMode}/>
      </section>
      <section id="projects" className="h-full">
        <Projects language={language}/>
      </section>
    </div>
  )
}
