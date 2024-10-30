import Link from "next/link"
export default function Form(){
    return(
    <div className="bg-slate-300 ml-96 mr-96 mt-5 mb-5 border rounded-2xl justify-center items-center ">
        <h1 className="p-6 text-3xl font-semibold text-center uppercase">
             enter your details 
        </h1>
    <div>
        <form className="flex justify-center items-center flex-col gap-4 ">
        <input type="email" className="p-2 rounded-xl w-2/4 h-10 border border-black text-2xl" placeholder="Enter Your Email"></input>
        <input type="password" className="p-2 rounded-xl w-2/4 h-10 border border-black text-2xl" placeholder="Enter Your Password"></input>
        <input type="cnic no" className="p-2 rounded-xl w-2/4 h-10 border border-black text-2xl" placeholder="Enter Your CNIC No"></input>
        <input type="address" className="p-2 rounded-xl w-2/4 h-10 border border-black text-2xl" placeholder="Enter Your Address"></input>
    
        <button className="px-7 py-2 rounded-xl border bg-blue-800 text-3xl mt-5 mb-16 hover:bg-blue-500 font-medium"><Link href="/Place-Order">Place-Order</Link></button>
        
        </form>
       </div>  
    </div>


    )
}