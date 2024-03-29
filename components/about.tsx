"use client";

import React from "react";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";


//we are gonkn aue useActiveSectionContext to find the current active section and 
//update the active section css in the header/navbar
//CURRENTLY TRANSFORMED THIS INTO A CUSTOM HOOK



export default function About() {
  
  const {ref}=useSectionInView("About",0.5);
 
  
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      
    >
      {/* Even without usind id when we click on About it takes on to the about section
          must be due to Link or because of app router */}
      
      <SectionHeading>About me</SectionHeading>


      <p className="mb-3">
        Am a{" "}
        <span className="font-medium">Computer Science</span> student from Centurion University of technology and Management.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB, Express.js, Java, AWS, Git, GitHub, Docker
        </span>
        . I am also familiar with TypeScript and Prisma and other cutting edge technolgies like GraphQl, OpenAI/ChatGpt, TRPC. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games 🎮, watching movies🍿,and Anime 🤷‍♂️. I also enjoy{" "}
        going to Gym 💪,Traveling ✈️ and playing Football⚽ .
      </p>
    </motion.section>
  );
}