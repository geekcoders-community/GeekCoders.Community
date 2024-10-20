import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const about = () => {
  return (
    <>
    <div className="flex flex-col h-[800px] ">
        
      <Navbar/>
      <div className=" mt-28 flex items-center justify-center h-full ">
             <h1 className='font-clash text-[rgb(220,20,60)] text-7xl font-semibold'>About us</h1>
      </div>
      
    </div>
    <div className="w-full px-6">
        <Footer />
      </div>
    </>
  )
}

export default about