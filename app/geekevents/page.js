import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
export const runtime="edge";

const events = () => {
  return (
    <>
    <div className="flex flex-col h-[800px] ">
        
      <Navbar/>
      <div className="flex flex-col   items-center p-6 mt-28">
        <h1 className="text-black font-clash font-semibold text-4xl lg:text-5xl mb-2 sm:text-8xl">Hey <span className="text-[#DC143C]">Geek!</span> No Events Yet, But Stay Tuned!</h1>
        <p className="font-clash font-medium text-sm md:text-2xl text-justify xl:px-16 lg:text-4xl lg:mt-8"> We haven’t hosted any geek-tastic events just yet, but exciting things are on the horizon! 🚀 Keep an eye on this space for future gatherings, workshops, and hackathons that will spark your geeky creativity and connect you with fellow enthusiasts. Stay tuned—great geeky things are coming! <span className="text-[#DC143C]">#GeekCoders</span></p>
      </div>
      
    </div>
    <div className="w-full px-6">
        <Footer />
      </div>
    </>
  )
}

export default events

