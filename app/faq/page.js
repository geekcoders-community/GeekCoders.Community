import React from 'react'
import Footer from '../components/Footer' 
import Navbar from '../components/Navbar'
const faq = () => {
  return (
    <>
        <div className={`flex flex-col min-h-screen z-0 `}>
            <Navbar/>
        
        <div className = "mt-28 flex flex-col items-center justify-center h-full ">
                <h1 className='font-clash text-[rgb(220,20,60)] text-7xl font-semibold'>FAQs</h1>
                <h1 className='font-clash text-black font-semibold text-7xl'>Ask Your Questions here!</h1>
            
        </div>
        </div>
        <div className="w-full px-6">
            <Footer />
        </div>
    </>

  )
}

export default faq