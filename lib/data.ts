import React from "react";


//enable if using experience section
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";


import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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




//Add this if you have experience section
// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;


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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;


//this wil be used in skills section
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;


//using as const only didnt make sense only as we are just mapping data only not performing 
//any operation on it ut still good to practise...