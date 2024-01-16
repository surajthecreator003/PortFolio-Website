"use client";

import React from 'react';
import {motion} from "framer-motion"

const header = () => {
  return (
    <header className="z-[999] relative">

        <motion.div className="fixed top-0 left-1/2 h-[4.5rem]
         w-full rounded-none border border-white
         border-opacity-40 bg-white bg-opacity-80 shadow-lg
       shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6
         sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950
        dark:border-black/40 dark:bg-opacity-75
        -translate-x-1/2"
        
        initial={{y:-100,x:"-50%" ,opacity:0}}
        animate={{y:0,x:"-50%",opacity:1}}
        >
                

        </motion.div>

    </header>
  )
}

//rather than using normaml div we are using motion.div whichi we imported from framer motion
//and the initial and animate props are use to give the nav/header a fallinig down like look
//when the page is loaded

//the initial a nd animate props are gonna override the -translate-x-1/2 class
//so we need

//and remember framermotion components uses useEffect inside them so we need to use "use client"
//as its a client  component
export default header