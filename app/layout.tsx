
//This is the main Root layout Website

import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header";//@ stands for root import ./ that is gonnna help if we have large nested folders


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

    <html lang="en">

      <body className={`${inter.className} bg-gray-50`}>

      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]">
      </div>


      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]">
      </div>

      <Header/>
      {children} 
          
      </body>

    </html>

  )
}

//we are using type alias on children prop and normally we do type alias as
//type children={} and then use it like {children:children} but here we are doing inline type aliasing thats why {children}:{children:React.ReactNode}