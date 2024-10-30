import Link from "next/link"
export default function navBar(){
    return(
       <nav>

       <div className="flex bg-blue-800 w-screen">
      <div className="h-32">
        <div className=" flex w-full ">      
            <h1 className=" w-full h-10 py-2 px-3 text-2xl text-slate-300 hover:text-gray-400 "><Link href="/">Download App</Link></h1>
        <div className="flex py-2 gap-4 w-full justify-end -mr-28 text-2xl text-slate-300">
            <h1><Link href="/Sign Up" className=" hover:text-gray-400">Sign Up</Link></h1>
            <h1><Link href="/Sign In" className=" hover:text-gray-400">Sign In</Link></h1></div></div>

        <div className="flex justify-center w-full h-36  text-black gap-9 text-3xl font-semibold">  
              <img src="PakWheels-Logo.png"alt="Logo"className="w-34 h-16 bg-slate-500 rounded-xl ml-4"></img>
              <h1><Link href="/" className="hover:text-gray-400">Home</Link></h1>
            <h1><Link href="/New Car" className="hover:text-gray-400">New Car</Link></h1>
            <h1><Link href="/Used Car" className="hover:text-gray-400">Used Car</Link></h1>
            <h1><Link href="/Service" className="hover:text-gray-400">Service</Link></h1>
            <h1><Link href="/About-us" className="hover:text-gray-400">About-us</Link></h1>
            <h1><Link href="/Store" className="hover:text-gray-400">Store</Link></h1>
            <h1><Link href="/Forums" className="hover:text-gray-400">Forums</Link> </h1>
            </div>
        </div></div>
        </nav>
    );  
}