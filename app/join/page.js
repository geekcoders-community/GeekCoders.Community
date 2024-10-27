import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import qr from '../assets/qr.png'
import Link from 'next/link'

export const runtime="edge";

const join = () => {
  return (
    <>
    <div className="flex flex-col h-[800px] ">
        
      <Navbar/>
      <div className=" mt-28 flex flex-col items-center justify-center h-full ">
             <h1 className='font-clash text-[rgb(220,20,60)] text-3xl md:text-7xl font-semibold'>Join GeekCoders Now!</h1>
             <Link href="https://linktr.ee/geekcoders" target='_blank'><button className="text-xl md:text-4xl font-clash bg-black text-[#DC143C] font-medium rounded-full  mt-4 px-16 py-4 md:px-28">Click here to join!</button></Link>
        
      </div>
      
    </div>
    
    <div className="w-full px-6">
        <Footer />
      </div>
    </>
  )
}

export default join


