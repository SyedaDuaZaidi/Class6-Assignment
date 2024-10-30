import Link from "next/link"
export default function City(){
    return(<div>
        <div className="flex flex-col text-4xl items-center text-black mt-4 font-bold font-mono">
            <h1>Honda City 2024 Price In Pakistan</h1>
            <h1>Images , Reviews & Specs</h1>
            <Link href="/img"><img src="Honda-City-e1677843203401.jpg" width="300" className="mt-4 hover:scale-110" alt="Image"></img></Link>
            
        </div>
      <button className="flex justify-center w-full gap-5 py-5 bg-white font-normal text-blue-950 ">
            <h1 className="flex justify-center w-36 h-7 bg-blue-800 text-white border-blue-950 border rounded-xl">Book a test drive</h1>
            <h1 className="flex justify-center w-44 h-7 bg-white border-blue-950 border rounded-xl">Request Bank Finance</h1>
            <h1 className="flex justify-center w-36 h-7 bg-white border-blue-950 border rounded-xl">Visit Place</h1>
            <h1 className="flex justify-center w-36 h-7 bg-white border-blue-950 border rounded-xl">Car Inspection</h1>
        </button>
        <div>
        <h1 className="flex text-3xl justify-center mt-4 font-medium">Vehicle Description</h1></div>
      <div className="flex flex-wrap w-full px-64 mt-4">
        <h1 className="text-xl font-medium ">Number Of Doors</h1><h1 className="ml-2 text-xl ">4</h1>
        <h1 className="text-xl font-medium ml-16">Engine</h1><h1 className="ml-2 text-xl">1497 cc</h1>
        <h1 className="text-xl font-medium ml-16">Condition</h1><h1 className="ml-2 text-xl">9/10</h1>
        <h1 className="text-xl font-medium ml-16">Driven</h1><h1 className="ml-2 text-xl">180 KM/H</h1>
        <h1 className=" text-xl font-medium mt-3 ml-20">Suspension Type</h1><h1 className="ml-2 mt-3 text-xl">Soft Suspension</h1>
        <h1 className=" text-xl font-medium mt-3 ml-16">Transmission</h1><h1 className="ml-2 mt-3 text-xl">Automatic & Manual</h1>
        <h1 className=" text-xl font-medium mt-3 ml-56">Avg</h1><h1 className="ml-2 mt-3 text-xl">15 Km Per ltr</h1>
        <h1 className=" text-xl font-medium mt-3 ml-14">Fuel Type</h1><h1 className="ml-2 mt-3 text-xl">High Octane</h1>
      </div>
      <div className=" flex justify-center text-2xl text-green-600 font-medium mt-7">
        <h1>PKR 5,439,000</h1></div>
      <div className="flex justify-center w-full mt-5 mb-8" ><button className=" w-60 h-12 bg-blue-800 text-white text-3xl text-center border-blue-950 border rounded-xl hover:bg-blue-500"
      ><Link href="/Make-Payment">Make-Payment</Link></button></div>
      </div>
    );
}