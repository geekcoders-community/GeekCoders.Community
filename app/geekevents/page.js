"use client";
import { useState } from "react";
import React from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export const runtime="edge";
import Carousel from "./carousel";
import "../geekevents/events.css";
import Frame from "../assets/Frame.png";
import Image from "next/image";
import Link from 'next/link';

const events = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // Sample data to search
  const items = [
    { name: "Innovaite", link: "https://lu.ma/m7kepwxr" },
    { name: "RenderX", link: "https://lu.ma/shgy4rwu" },
  ];

  // Handle search logic
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      const matches = items
        .filter((item) =>
          item.name.toLowerCase().includes(term.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name
      setFilteredItems(matches);
    } else {
      setFilteredItems([]);
    }
  };
  
  return (
    <>
      <div className="min-h-screen flex flex-col">
  <header className="fixed top-0 w-full z-20">
    <Navbar />
  </header>

  <main className="flex-grow pt-16 pb-16 m-10">
    <div className="flex flex-col justify-center">
     <Image src={Frame} className="h-15 w-25 object-cover"/>
     <div className="relative mt-5">
      <input
        type="text"
        placeholder="Search here..."
        className="bg-gray-300 text-gray-800 border border-gray-300 rounded-lg pl-3 pr-10 py-2 w-full"
        value={searchTerm}
        onChange={handleSearch}
      />
      <span className="absolute inset-y-0 right-2 flex items-center text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
          />
        </svg>
      </span>

      {filteredItems.length > 0 && (
        <div className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-2 w-full">
          {filteredItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
      <div className="flex flex-row justify-between mt-20">
        <h1 className="text-2xl font-bold">Upcoming Events</h1>
        <Link href="/geekevents/AllEvents" className="text-[rgb(220,20,60)] cursor-pointer text-2xl">See all</Link>
      </div>
      <div className="flex justify-center mt-20" >
      <Carousel/>
      </div>
      <h1 className="text-2xl  font-bold mt-20">Events</h1>
      <div className="flex flex-col mt-10 gap-y-4">
        <div id="eventclass" className="flex flex-row flex-wrap p-5 border-2 border-red-500 rounded-lg shadow-[4px_4px_0px_2px_rgba(255,0,0,0.5)]">
          <div id="classimg2" className="w-[22vw] h-[22vw] bg-[url('./assets/innovaiteluma.png')] bg-cover rounded-lg">
          </div>
          <div className="m-5 flex flex-col">
            <h1 className="text-3xl  font-bold">Innovaite</h1>
            <h1 className="mt-5 mb-5">Join to Build AI skills, network, and win amazing prizes</h1>
            <div className="flex mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-7 h-7 text-gray-500">
               <rect x="1" y="3" width="14" height="10" rx="1" ry="1" stroke="currentColor" fill="none"/>
              <line x1="1" y1="6" x2="15" y2="6" stroke="currentColor"/>
              <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor"/>
              <line x1="1" y1="10" x2="15" y2="10" stroke="currentColor"/>
              <line x1="1" y1="12" x2="15" y2="12" stroke="currentColor"/>
              <line x1="3" y1="3" x2="3" y2="5" stroke="currentColor"/>
              <line x1="13" y1="3" x2="13" y2="5" stroke="currentColor"/>
              </svg>
            <h1 className="font-bold">11-01-2025</h1>
            </div>
            <div className="flex mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 text-gray-500">
            <path d="M12 2C8.13 2 5 5.13 5 8.5c0 3.88 7 11.5 7 11.5s7-7.62 7-11.5C19 5.13 15.87 2 12 2zm0 12c-1.1 0-2-1.2-2-2s.9-2 2-2 2 1.2 2 2-.9 2-2 2z"/>
            </svg>
            <h1 className="font-bold">Yuniq, 4th Floor, TICEL, BIOPARK, Tharamani, Chennai</h1>
            </div>
            <a href="https://lu.ma/m7kepwxr" target="_blank" rel="noopener noreferrer" className="text-white bg-gradient-to-r from-red-500 to-red-800 rounded-lg p-2">
            <center> Register Here</center>
            </a>
            <Link href="/geekevents/innovaite" className="text-[red] p-2">
                  more info
            </Link>

          </div>
        </div>
        <div id="eventclass2" className="flex flex-row flex-wrap p-5 border-2 border-red-500 rounded-lg shadow-[4px_4px_0px_2px_rgba(255,0,0,0.5)]">
          <div id="classimg" className="w-[22vw] h-[22vw] bg-[url('./assets/renderx.jpg')] bg-cover rounded-lg">
          </div>
          <div className="m-5 flex flex-col">
            <h1 className="text-3xl  font-bold">RenderX</h1>
            <h1 className="mt-5 mb-5">Learn Web development Basics and Develop you own Landing page!!!</h1>
            <div className="flex mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-7 h-7 text-gray-500">
               <rect x="1" y="3" width="14" height="10" rx="1" ry="1" stroke="currentColor" fill="none"/>
              <line x1="1" y1="6" x2="15" y2="6" stroke="currentColor"/>
              <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor"/>
              <line x1="1" y1="10" x2="15" y2="10" stroke="currentColor"/>
              <line x1="1" y1="12" x2="15" y2="12" stroke="currentColor"/>
              <line x1="3" y1="3" x2="3" y2="5" stroke="currentColor"/>
              <line x1="13" y1="3" x2="13" y2="5" stroke="currentColor"/>
              </svg>
            <h1 className="font-bold">11-12-2024</h1>
            </div>
            <div className="flex mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 text-gray-500">
            <path d="M12 2C8.13 2 5 5.13 5 8.5c0 3.88 7 11.5 7 11.5s7-7.62 7-11.5C19 5.13 15.87 2 12 2zm0 12c-1.1 0-2-1.2-2-2s.9-2 2-2 2 1.2 2 2-.9 2-2 2z"/>
            </svg>
            <h1 className="font-bold">Online - GMeet</h1>
            </div>
            <a href="https://lu.ma/shgy4rwu" target="_blank" rel="noopener noreferrer" className="text-[red] p-2 font-bold">
              Completed
            </a>
            <Link href="/geekevents/renderx" className="text-[red] p-2">
                  more info
            </Link>

          </div>
        </div>
      </div>
    </div>
  </main>

  <footer className="mt-auto">
    <Footer />
  </footer>
</div>

    </>
  )
}

export default events

