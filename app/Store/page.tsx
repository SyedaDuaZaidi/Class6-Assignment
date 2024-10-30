import Link from "next/link"
export default function store(){
    return(
        <div>
            <div className="flex w-full">
         <h1 className="w-full h-10 py-2 ml-20 text-3xl text-black hover:text-gray-500 font-bold mt-14"><Link href="/">Featured New Cars</Link></h1>
         <h1 className="flex py-2 gap-4 w-full  justify-end text-xl px-3 mt-14 text-blue-500 hover:text-gray-500"><Link href="/View All New Cars">View All New Cars</Link></h1>
        </div>
        <nav>
            <div className="flex gap-10 ml-20 mt-7 text-2xl font-medium">
                <h1>Popular</h1>
                <h1>Upcoming</h1>
                <h1>Newly Launched</h1>
            </div>
        </nav>

        <div className="flex py-4 px-4 h-96 justify-between gap-8 w-full">
       
        <div className="flex gap-8 ml-16 w-full h-72 ">
          <Link href="/Toyota-corolla" className="w-full bg-slate-100 px-8 py-8"><img src ="toyota_corolla-removebg-preview.png"width="900"className="mt-7" alt="Image"></img>
          <div className="text-center text-blue-900 text-lg font-medium mt-3 hover:text-sky-500">
            <h1>Toyota-Corolla</h1>
            <h1 className="text-green-600 font-normal text-base">PKR 59.7-75.5 lacs</h1>
            <h1 className="text-black font-normal text-base">621 Reviews</h1></div></Link>
         
          <Link href="/Suzuki-alto" className="w-full bg-slate-100 px-8 py-8"><img src ="Suzuki_Alto-removebg-preview.png" className="min-w-[64px]" alt="Image"></img>
          <div className="text-center text-blue-900 text-lg font-medium hover:text-sky-500">
            <h1>Suzuki-Alto</h1>
            <h1 className="text-green-600 font-normal text-base">PKR 23.3-30.5 lacs</h1>
            <h1 className="text-black font-normal text-base">199 Reviews</h1></div>
          </Link>
          <Link href="/Honda-civic" className="w-full bg-slate-100 px-8 py-8"><img src ="Honda_Civic-removebg-preview.png" className="mt-7"alt="Image"></img>
          <div className="text-center text-blue-900 text-lg font-medium mt-12 hover:text-sky-500">
            <h1>Honda Civic</h1>
            <h1 className="text-green-600 font-normal text-base">PKR 86.6-99.0 lacs</h1>
            <h1 className="text-black font-normal text-base">357 Reviews</h1></div>
          </Link>
          <Link href="/Honda-city" className="w-full bg-slate-100 px-8 py-8"><img src ="pngimg.com - honda_PNG10355.png"className="mt-7" alt="Image"></img>
          <div className="text-center text-blue-900 text-lg font-medium mt-5 hover:text-sky-500">
            <h1>Honda City</h1>
            <h1 className="text-green-600 font-normal text-base">PKR 46.5-58.5 lacs</h1>
            <h1 className="text-black font-normal text-base">458 Reviews</h1></div>
          </Link> 
        </div></div></div>
    )
}