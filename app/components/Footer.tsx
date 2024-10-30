import React from 'react'
import Link from "next/link"
export default function Footer(){
    return(
        <div className="flex bg-gray-600 w-screen h-96 justify-center text-center text-4xl text-black font-medium">
          <h1 className="mt-16 font-serif ">Made By<Link href="https://www.linkedin.com/in/syeda-dua-zaidi-7b6ba02bb">
          <h1 className="text-5xl hover:scale-110 hover:text-slate-400">&quot;@Syeda Dua &quot;</h1> </Link> </h1> 
        </div>
    )

}