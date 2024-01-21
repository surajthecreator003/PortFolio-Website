"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks';




//this Project should be a Server Component
export default function Projects() {



  //inView will tell us wheteher the About section is in view or not
  //const {ref, inView}=useInView({threshold:0.5});//if the About section is even little bit in view it will show yes or else false
  //console.log(inView);//will mlog the element in the main view 
  
//transformed the entire code to custom-hook in hookst.ts
  // useEffect(()=>{
  //   if(inView){
  //     setActiveSection("About");
  //   }//esilint error
  // },[inView,setActiveSection]);

  const {ref}=useSectionInView("Projects",0.5);//the current custom hook




  return (
    <section id="projects" ref={ref} className='scroll-mt-28 mb-28'>

        <SectionHeading>My Projects</SectionHeading>

        <div>
            {
              projectsData.map((project,index) => (

              <React.Fragment  key={index}>

                <Project {...project} />

              </React.Fragment>
                
              ))
            }
        </div>

    </section>
  )
}





