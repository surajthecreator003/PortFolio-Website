"use client";

//this compomnent is use server by default
//remember in React the client componnents are tried to keep at the dge of the tree
import React, { useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'
import {motion} from "framer-motion";




// type ProjectProps ={
//   title:string,
//   description:string,
//   tags:string[], 
//   imageUrl:string
// }
//
//or do this =>
type ProjectProps = typeof projectsData[number]//if you think da ais consistent for all the indexes
//give number in index as it can be any number of these



//this project should be a Clinet Component

export default function Project({title,description,tags,imageUrl}:ProjectProps) {


    //in the generic type we passed HTMLElement as beacaus the element we will reference can be of any HTML element
    const ref=useRef<HTMLDivElement>(null);// so ref will hold the reference to a HTML element even after reredner

    //this indicats how far we are scrolling in the page and will store even after subsequent rerender to reach the page where we left
    //whenver we reload
    const {scrollYProgress}=useScroll({target:ref,offset:["0 1","1.33 1"]})
    
    

    //scaleprogress and opacityProgress will make sure that the scroll animation dosent start from complet small
    //but will start from little big with respect to the projects shown
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
    <motion.div ref={ref} className=" mb-3 sm:mb-8 last:mb-0 group even:pl-8"
              style={{
                  scale: scaleProgess,
                  opacity: opacityProgess,
                      }}>
      
      <section className="mb-3 sm:mb-8 
                          
                          bg-gray-100 max-w-[42rem] 
                          border border-black/5 rounded-lg 
                          overflow-hidden sm:pr-8 
                          relative sm:h-[20rem]
                          hover:bg-gray-200 

                          transition sm:group-even:pl-8 
                          dark:text-white dark:bg-white/10 
                          dark:hover:bg-white/20 "
                          > 
  
      {/* Will represent each Project to be shown */}
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">


         {/* The Project Name */}
        <h3 className="text-2xl font-semibold">{title}</h3>
  

        {/*The Project Description */}
        <p>{description}</p>
         

         {/* all the Technologies used will be shown here */}
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag,index) => ( <li
          className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
          key={index}> 
          {tag} 
          </li> ) )}
        </ul>
  

        {/* The Project Image */}
        <Image src={imageUrl} 
               alt="Project I woked on" 
               quality={95}
               className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                          transition 
                          
                          group-hover:scale-[1.04]
                          group-hover:-translate-x-3
                          group-hover:translate-y-3
                          group-hover:-rotate-2
  
                          group-even:group-hover:translate-x-3
                          group-even:group-hover:translate-y-3
                          group-even:group-hover:rotate-2
  
                          group-even:right-[initial] group-even:-left-40"
                />

      </div>
  
      </section>
    
    </motion.div>
    )
  }
  