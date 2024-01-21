
//This is the main Root layout Website
//and will contain the Nav bar for Home,About,Projects,Contact

import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header";//@ stands for root import ./ that is gonnna help if we have large nested folders
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from "@/context/theme-context";

import { Toaster } from "react-hot-toast";
import ThemeSwitch from '@/components/theme-switch';//for toggling dark and Light mode

const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: "Portfolio | Suraj Mallick",
  description: ' Suraj Mallick is a Full Stack Devloper and a CSE Student at Centurion University of Technology and Management',//this will appear on google search description
}

export default function RootLayout({
  children,//this child component will get rendered iside layout.tsx
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" className="!scroll-smooth">

      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>

      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]">
      </div>


      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]">
      </div>


      <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <Header/>
        {children} 
        <Toaster position="top-right" />
        <ThemeSwitch/>
      </ActiveSectionContextProvider>
      </ThemeContextProvider>

      </body>

    </html>

  )
}

//we are using type alias on children prop and normally we do type alias as
//type children={} and then use it like {children:children} but here we are doing inline type aliasing thats why {children}:{children:React.ReactNode}