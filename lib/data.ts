
import React from "react";

//enable if using experience section
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";



import portfolioapp from "@/public/portfolioapp.png";
import talkative from "@/public/talkative.png";
import netflixgpt from "@/public/netflixgpt.png";

import { Cloud, Laptop2 } from "lucide-react";//for Cloud and laptop Icons



//links will be used to navigate to different sections of the page
export const links = [
  {
    name: "Home",
    hash: "#home",
    
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  }
 
] as const;//as const in Typescript makes the value read-only mamke it non prone to accidental changes
           //which is kind of enum or final variable in Java






export const certificationsData = [
  {
    title: "AWS Cloud Practitioner",
    link : "https://www.credly.com/badges/44796d87-7908-4f7b-bad7-2b88a613b9f6/public_url",
    tech : 'AWS',
    description:
      "AWS Cloud Practitioner certified professional with foundational knowledge in cloud computing, demonstrating proficiency in AWS services and principles.",
    icon: React.createElement(Cloud),
    date: "2022",
  },
  {
    title: "Namaste React by Akshay Saini",
    link : "https://drive.google.com/file/d/1SpxtLNEVH_fhEfqYeH24csKOHVjNGsn5/view?usp=drive_link",
    tech : 'React',
    description:"Namaste React by Akshay Saini is an insightful online course that provides a comprehensive guide to mastering React.js for web development.",
    icon: React.createElement(Laptop2),
    date: "2023",
  },

] as const;



//Here are the Projects we wnat to display
export const projectsData = [

  {
    title: "Talk-A-Tive",
    description:
      "A Full-Stack MERN Chat app with features like Single/Group Chat, Real-Time Typing Indicator,Notification Bar,Group Member-Add/Remove/Admin.",
    tags: ["Socket.IO","Cloudinary","JWT","Chakra UI","axios","Context-API","Render-Deploy"],
    imageUrl: talkative,
    link : "https://talk-a-tive-nri4.onrender.com"
  },

  {
    title: "NetFlix GPT",
    description:
      "A NetFlix Frontend Clone where users can get custom movie recommendation",
    tags: ["React.js", "Firebase", "OpenAi APi", "Tailwind CSS","Redux ToolKit","TMDB API","Vercel-Deploy"],
    imageUrl: netflixgpt,
    link:"https://net-flix-21em5rvw1-surajthecreator003.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description:
      " implemented Framer Motion for Amazing Animations and has features like Dark Mode,Sending Email ",
    tags: [ "Next.js","React.js","TypeScript", "RESEND for email", "Tailwind CSS", "Framer MOtion","Vercel-Deploy"],
    imageUrl: portfolioapp,
    link:"https://port-folio-website-dusky.vercel.app/"
  },
] as const;


//this wil be used in skills section
export const skillsData = [
  "Node.js","Express.js","Mongo DB","Next.js","Postgre SQL","React JS","JavaScript","TypeScript","Java","Docker","HTML","CSS","Tailwind CSS",
  "AWS","Git","Git Hub","Redux ToolKit","Framer Motion","Chakra UI","FireBase","Linux"
] as const;


//using as const only didnt make sense only as we are just mapping data only not performing 
//any operation on it ut still good to practise...
