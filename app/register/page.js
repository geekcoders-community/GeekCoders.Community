import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const register = () => {
  return (
    <>
    <div className="flex flex-col h-[800px] ">
        
      <Navbar/>
      <div className=" mt-28 flex flex-col items-center justify-center h-full ">
             <h1 className='font-clash text-[rgb(220,20,60)] text-xl md:text-5xl font-semibold'>Registration will open soon!</h1>
             <h1 className='font-clash text-black font-semibold text-5xl md:text-7xl'>Stay tuned!</h1>
        
      </div>
      
    </div>
    <div  className="w-full px-6">
        <Footer />
      </div>
    </>
  )
}

export default register


