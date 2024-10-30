import Link from "next/link"
export default function aboutUs(){
    return(
    <main>
    <div>
        <div className="flex justify-center text-3xl font-medium mt-14">
          <h1>Sell Your Cars On PakWheels And Get The Best Price</h1></div>
        
          <div className="flex justify-center items-center">
            <div className="px-10 py-14">
            <h1 className="text-2xl font-medium text-blue-800 "> Post Your Ad On PakWheels </h1>
          <div  className="mt-5 text-lg text-black font-normal space-y-1">
            <p>Post Your Ad Free In 3 Easy Steps</p>
            <p>Get Genuine offers from Verified Buyers</p>
            <p>Sell your Cars Fast at the Best Price</p>
          </div>

        <div className=" mt-4 px-6 bg-red-500 border rounded-xl w-44 h-10 hover:bg-red-700">
            <button className="flex w-full h-full justify-center items-center font-medium"> POST YOUR AD</button>
        </div>
        </div>
        <div  className=" text-3xl text-black font-semibold">
            <h1>OR</h1>
        </div>
           <div className="px-10 py-14">
          <h1 className="text-2xl font-medium text-blue-800">Try PakWheels Sell It for Me</h1>
            <div className="mt-5 text-lg text-black font-normal space-y-1">
                <p>Dedicated Sales Expert To Sell Your Car </p>
                <p>We Bargain for you and share the Best Offer </p>
                <p>We ensure Safe & Secure Transaction</p>
                </div>
                
                <div className=" mt-4 px-6 bg-red-500 border rounded-xl w-52 h-10 hover:bg-red-700">
                  <button className="flex w-full h-full justify-center items-center font-medium"> REGISTER YOUR CAR </button>
                </div>
                </div></div>
        </div>
        </main>
    );
}
