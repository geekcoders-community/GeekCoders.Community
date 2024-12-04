import React from 'react'
import Script from 'next/script';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from "next/image";
import luma from "../assets/Luma.png";



const register = () => {
  return (
    <>
    <div className="flex flex-col h-[800px] md:h-[1000px] lg:h-screen bg-[#2A2E33]">
        
      <Navbar/>
      {/* <div className=" mt-28 flex flex-col items-center justify-center h-full ">
             <h1 className='font-clash text-[rgb(220,20,60)] text-xl md:text-5xl font-semibold'>Registration will open soon!</h1>
             <h1 className='font-clash text-black font-semibold text-5xl md:text-7xl'>Stay tuned!</h1>
        
      </div>
       */}
       <div className='mt-28 md:px-8  flex  flex-col lg:flex-row justify-center items-center'>
  <div className='h-full flex items-center justify-center mt-10 px-4 mb-2 md:mb-0'>
    <Image
      src={luma} // You can replace this with the actual path to your logo
      alt="RenderX Logo"
      width={500}
      height={500}
      className='  rounded-3xl shadow-2xl'
    />
  </div>
  <div className="flex flex-col gap-2 w-full max-w-screen-md">
    <div className="">
      <div className="font-clash font-semibold px-6 md:px-24 md:py-10">
        <h1 className=" text-white text-lg md:text-3xl long">
          RenderX:
        </h1>
        <p className='text-white text-lg md:text-2xl mb-4 long'> Build Your First Landing Page!</p>
        <div className="flex flex-row w-full items-center gap-3   bg-black text-white rounded-lg shadow-md ">
          <div className="flex flex-col items-center justify-center w-12 h-12 bg-gray-700 rounded-lg p-8  md:mb-0">
            <div className="text-lg font-semibold mb-0">Dec</div>
            <div className="text-lg font-semibold">11</div>
          </div>
          <div className="flex flex-col text-center md:text-left px-2 ">
            <span className="text-sm font-semibold">Wednesday, December 11</span>
            <span className="text-[0.6rem] text-gray-400">
              4:00 PM - Dec 12, 3:00 PM GMT+5:30
            </span>
          </div>
        </div>
        <div className='flex justify-center items-center '>
          <a
            href="https://lu.ma/event/evt-rUadkQ45jJpar0N"
            className="luma-checkout text-sm md:text-xl font-clash bg-black text-[#DC143C] font-bold rounded-full mt-4 px-16 py-4 md:px-28   lg:mb-0 w-full items-center text-center"
            data-luma-action="checkout"
            data-luma-event-id="evt-rUadkQ45jJpar0N"
          >
            Register for Event
          </a>

          <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    
    <div  className="w-full px-6 bg-[#2A2E33]">
        <Footer />
      </div>
    </>
  )
}

export default register


