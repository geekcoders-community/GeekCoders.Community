"use client";
import React, { useState } from 'react';
import Link from 'next/link';
export const runtime="edge";

import Image from 'next/image';
import logo from '../assets/logo.png';  
export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className='top-0 fixed flex justify-between w-full bg-white z-10'>
      <nav className="bg-white p-4 shadow-md w-full absolute">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={logo} className='h-14 w-auto' alt='logo' />
            <Link href="/"><span className="font-semibold text-lg font-clash ">Geek Coders</span></Link>
            
          </div>
  
          {/* Hamburger Button for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
  
          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <p className="text-gray-800 font-medium  font-clash hover:text-red-500">Home</p>
            </Link>
            <Link href="/about">
              <p className="text-gray-800 font-medium  font-clash hover:text-red-500">About us</p>
            </Link>
            <Link href="/geekevents">
              <p className="text-gray-800 font-medium  font-clash hover:text-red-500">Events</p>
            </Link>

            
           
          </div>
  
          {/* Join Button */}
          <div className="hidden md:block ">
            <Link href="/join">
              <p className="bg-[#DC143C]   font-semibold  font-clash text-white py-2 px-6 rounded-md hover:bg-black hover:text-[#DC143C] transition-all duration-500">
                Join GC
              </p>
            </Link>
          </div>
        </div>
  
        {/* Mobile Menu with Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300  ${isOpen ? 'ease-in max-h-96 opacity-100' : 'ease-in max-h-0 opacity-0'}`}
        > 
          <div className="mt-4 space-y-4 ">
            <Link href="/">
              <p className="block text-gray-800 hover:text-red-500">Home</p>
            </Link>
            <Link href="/about">
              <p className="block text-gray-800 hover:text-red-500">About us</p>
            </Link>
            <Link href="/geekevents">
              <p className="block text-gray-800 hover:text-red-500">Events</p>
            </Link>
          
            
            
            <Link href="/join">
              <p className="block bg-red-500 text-white py-2 px-4 rounded-md hover:bg-black hover:text-[#DC143C] ">
                Join GC
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
    );
  };
  