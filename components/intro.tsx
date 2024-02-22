"use client"

import React from 'react'
import Image from 'next/image';
import {animate, motion} from 'framer-motion'

const Intro = () => {

  const localImage = require('../public/INDARANIL_PHOTO.jpg').default;
  return (
    <section>
      <div className='flex items-center justify-center'>
      <div className='relative'>
        <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1, scale:1}}>
          <Image alt="profile_pic" src={localImage} width={192} height={192} quality={100} priority={true} className='h-21 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl'></Image>
        </motion.div>
        <span className='text-2xl absolute bottom-0 right-0'>
          👋🏼
        </span>
      </div>
      </div>
    </section>
  )
}

export default Intro