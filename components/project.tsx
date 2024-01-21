'use client'
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";



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

function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
  
    //in the generic type we passed HTMLElement as beacaus the element we will reference can be of any HTML element
    const ref=useRef<HTMLDivElement>(null);// so ref will hold the reference to a HTML element even after reredner


    //this indicats how far we are scrolling in the page and will store even after subsequent rerender to reach the page where we left
    //whenver we reload
    const {scrollYProgress} = useScroll({target:ref,offset:["0 1", "1.33 1"]})
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.7,1])
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6,1])
  return (
    <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0"style={{ scale:scaleProgress, opacity:opacityProgress}}>
    <section  className=" bg-gray-100 max-w-[42rem] relative  border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20"
    >

      {/* Will represent each Project to be shown */}
      <Link href={link} target="_blank" className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 cursor-pointer sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[21rem] sm:group-even:-mr-7 hover:bg-gray-200 transition">

        {/* The Project Name */}
        <h3 className="text-2xl  font-semibold">{title}</h3>

        {/*The Project Description */}
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>

        {/* all the Technologies used will be shown here */}
        <ul className="flex flex-wrap  mt-4  gap-2 sm:mt-auto ">
          {tags.map((tag, index) => {
            return (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </Link>

      {/* The Project Image */}
      <Image
        className="absolute hidden sm:block top-8  -right-40 w-[28.25rem] rounded-t-lg shadow-2xl  transition
            group-even:-left-40 
          
            group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2
        
        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2
        group-hover:scale-[1.04] 
        group-even:right-[initial]
        "
      
        src={imageUrl}
        alt="Project i worked on"
        quality={95}
      />
    </section>
    </motion.div>
  );
}

export default Project;