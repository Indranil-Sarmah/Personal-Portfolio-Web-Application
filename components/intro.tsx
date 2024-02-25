"use client"

import React from 'react'
import Image from 'next/image';
import { animate, motion } from 'framer-motion'
import GitHubCalendar from 'react-github-calendar';
import { Typewriter } from 'react-simple-typewriter'

const Intro = () => {

  const localImage = require('../public/INDARANIL_PHOTO.jpg').default;
  {console.log(window.innerWidth)}
  return (
    <section className='mb max-w-[50rem] text-center sm:mb-0'>
      {/* image and icon section */}
      <div className='flex items-center justify-center '>
        <motion.div className=" absolute -z-1 mb-8 bg-opacity-10 hidden md:block" style={{color:"#a39e9e"}} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2 }}>
          <GitHubCalendar username="Indranil-Sarmah" hideTotalCount={true} hideColorLegend={true} />
        </motion.div>
        <div className='relative'>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2 }}>
            <Image alt="profile_pic" src={localImage} width={192} height={192} quality={100} priority={true} className='h-21 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl'></Image>
          </motion.div>
          <motion.span className='text-2xl absolute bottom-0 right-1' initial={{ opacity: 0, scale: 0, rotate: 0 }}
            // Add rotate property for waving motion
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [0, -20, 0, 35, 0], // Rotate back and forth for waving effect
            }}
            transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}>
            👋🏼
          </motion.span>

        </div>
      </div>

      {/* Intro text */}
      <motion.h4
        className="mb-10 mt-4 text-center px-12 text-2xl font-medium !leading-[1.5] sm:text-1xl sm:text-justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-extrabold block"><Typewriter
            words={['Hello', 'Hi', 'Namaste']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={60}
            deleteSpeed={50}
            
          />
        <br/></span>
        <span> I am {" "}<span className='font-extrabold'>Indranil.</span></span><br/>
        
        I am a{" "}
        <span className="font-bold">Front-end developer</span> with{" "}
        <span className="underline font-bold">2 years</span> of experience.<br/>Love to work with{" "}
        <span className="underline font-bold">ReactJS </span>
        <span> & Currently learning NextJS.</span>
      </motion.h4>
    

    </section>
  )
}

export default Intro