"use client"
import React, { useState,createContext, useContext } from 'react'
import { links } from '@/lib/data'


type SectionName = typeof links[number]["name"]
type ActiveSectionContextProviderProps={children:React.ReactNode}
type ActiveSectionContexttype={activeSection:SectionName,
                               setActiveSection:React.Dispatch<React.SetStateAction<SectionName>>,
                              timeOfLastClick:number,
                              setTimeOfLastClick:React.Dispatch<React.SetStateAction<number>>}


//here we are creating the context for our scroll remembarance
export const ActiveSectionContext=createContext<ActiveSectionContexttype | null>(null)


//wrappinig the conext provider around the children component and then exporting it
const ActiveSectionContextProvider = ({children}:ActiveSectionContextProviderProps) => {

  const [activeSection,setActiveSection]=useState<SectionName>("Home")

  //this will solve the css problem of gliding from end to strt or vice versa when clicked on nav elements far from each other
  const [timeOfLastClick,setTimeOfLastClick]=useState(0)



  return (
    <ActiveSectionContext.Provider value={{activeSection,setActiveSection,timeOfLastClick,setTimeOfLastClick}}>
        {children}
    </ActiveSectionContext.Provider>
  )
}
//so rather than writing contextProvider in layout.tsx we are directly writting here



//we need to check if the context provided values are null or not because of 
//createContext<ActiveSectionContexttype | null>(null) type we have given
export function useActiveSectionContext(){

    const context=useContext(ActiveSectionContext)

    //checked for null alredy but not checking for undefined was cauysing problem
    if(context === undefined  || context===null){
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider")
    }
    console.log(context);
    return context
}


export default ActiveSectionContextProvider

//All this for 