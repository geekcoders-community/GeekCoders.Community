"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import badri from "../assets/badri.png";
import amal from "../assets/amal.png";
import aarif from "../assets/aarif.png";
import vansh from "../assets/vansh.png";
import anurag from "../assets/anurag.png";
import harish from "../assets/harish.png";
import kabilan from "../assets/kabilan.png";
import bhavna from "../assets/bhavna.png";
import ashvika from "../assets/ashvika.png";
import mukundan from "../assets/mukundan.png";
import darshan from "../assets/darshan.png";
import tech from "../assets/laptop.png";
import design from "../assets/design.png";
import pvp from "../assets/crown.png";
import market from "../assets/speaker.png";
import vidip from "../assets/vidip.png"; // Import the image
import Image from "next/image";
import Link from "next/link";
import { IoMdCloseCircle } from "react-icons/io";

export const runtime="edge";

const About = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    {
      id: 1,
      name: "Badri M S",
      title: "President",
      image: badri,
      description: "Guiding the team with passion and purpose!",
      icon:pvp
    },
    {
      id: 2,
      name: "Amal Francis",
      title: "Vice-President",
      image: amal,
      description: "Empowering growth, inspiring leadership.",      
      icon:pvp

    },
    {
      id: 3,
      name: "Mukundan",
      title: "Technical Lead",
      image: mukundan,
      description: "Leading the way in tech excellence.",    
      icon:tech
    },
    {
      id: 4,
      name: "Darshan",
      title: "Design Lead",
      image: darshan,
      description: "Inspiring creativity, setting design standards",     
      icon:design
    },
    {
      id: 5,
      name: "Harish",
      title: "Management Lead",
      image: harish,
      description: "Empowering teams to achieve greatness.",     
      icon:market
    },
  ];
  const techteam=[
    
      {id: 1,
      name: "Vidip",
      title: "Technical Member",
      image: vidip,
      description: "Transforming ideas into functional tech.",  
      icon:tech    
    },
    {
      id: 2,
      name: "Aarif",
      title: "Technical Member",
      image: aarif,
      description: "Coding pathways to smarter futures.",    
      icon:tech    

    },
    
    {
      id: 3,
      name: "Vansh",
      title: "Technical Member",
      image: vansh,
      description: "Innovating solutions, one line at a time.",   
      icon:tech    

    },
    {
      id: 4,
      name: "Anurag",
      title: "Technical Member",
      image: anurag,
      description: "Building tomorrow through  code.",   
      icon:tech    

    },
    
  ]

  const Designteam=[
    
    {id: 1,
    name: "Bhavna",
    title: "Design Member",
    image: bhavna,
    description: "Creating visuals that tell stories",  
    icon:design    
  },
  {
    id: 2,
    name: "Kabilan",
    title: "Design Member",
    image: kabilan,
    description: "Designing the future, one pixel at a time.",
    icon:design      
  },
  

  
]

const manageteam=[
    
  {id: 1,
    name: "Ashvika",
    title: "Management Member",
    image: ashvika,
    description: "Building synergy through strong leadership.",
    icon:market      
  }



]

  // Function to handle image click
  const handleImageClick = (member) => {
    setSelectedMember(member);
    setShowDetails(true);
  };

  // Function to close the details div
  // const closeDetails = () => {
  //   setShowDetails(false);
  // };
  const [closing, setClosing] = useState(false);

  const closeDetails = () => {
    setClosing(true);
    setTimeout(() => {
      setShowDetails(false);
      setClosing(false);
    }, 500); // match duration with animation time
  };
  
  const detailClass = closing ? 'animate-slideDown' : 'animate-slideUp';
  return (
    <>
      <div className={`flex flex-col min-h-screen z-0 `}>
        <Navbar />

        {/* Header Section */}
        <div className={`relative flex  flex-col font-clash justify-start items-center p-6 h-screen bg-[#DC143C] transition-all duration-100 text-white ${showDetails ? 'blur' : ''}`}>
          <div className="flex items-center mt-20 space-x-2">
            <span className="text-black font-bold text-[80px]  leading-none">A</span>
            <div className="text-left">
              <h1 className="text-black text-2xl font-semibold">bout&nbsp; the</h1>
              <h1 className="text-white text-2xl font-semibold">Community</h1>
            </div>
            
          </div>
          <div className="p-4 lg:p-6 xl:p-10  mt-5">
              <p className="font-clash text-sm sm:text-lg md:text-xl min-[1440px]:text-2xl xl:text-2xl 2xl:text-4xl   font-medium text-justify ">Welcome to <span className="text-black">Geek Coders</span>, a vibrant tech community in Chennai where developers and enthusiasts come together to learn, grow, 
                and innovate. Our mission is to create an inclusive space for skill development, networking, and knowledge-sharing, 
                welcoming members of all levels and expertise. <span className="text-black">Geek Coders</span> keeps members engaged with updates on hackathons, competitions,
                 and tech events, along with hands-on workshops and meetups to build practical skills. Whether you're a coder, designer,
                  or tech enthusiast, <span className="text-black">Geek Coders</span> offers a collaborative platform to connect, explore new trends, and grow in the world of
                   technology. Join us in driving innovation forward!</p>
            </div>
            <div className="">
          <Link href="/join"><button className="text-xl font-jb font-semibold bg-white text-[#DC143C]  rounded-full  mt-4 px-16 py-2 md:px-28">Join Us</button></Link>

          </div>
        </div>
        

        {/* Main Content */}
        <div className={`text-center mt-10 font-clash flex flex-col p-6 items-start lg:items-center transition-all duration-100 ${showDetails ? 'blur' : ''}`}>
          <h1 className="text-black text-5xl  md:text-7xl xl:text-9xl font-bold">The Innovators</h1>
          <h1 className="text-[#DC143C]  text-5xl md:text-7xl xl:text-9xl font-bold">Behind It All</h1>
          <p className="text-black md:text-2xl xl:text-4xl text-left lg:text-center font-clash font-medium text-xl">Get to know the talented team working together to inspire and elevate <span className="text-[#DC143C]">Geek Coders</span>.</p>
        </div>

        <div className={`max-w-8xl mx-auto px-4 py-10 transition-all duration-100 ${showDetails ? 'blur' : ''}`}>
<h1 className="font-clash text-[#DC143C]  text-center text-4xl md:text-6xl lg:text-8xl mt-8 font-semibold">Core Team</h1>

  <div className="flex flex-wrap gap-16 justify-center pb-0 mt-8">
     {members.map((member) => (
     
      <div
        key={member.id}
        className="overflow-hidden cursor-pointer bg-[url('./assets/herobg.png')] bg-cover bg-center flex flex-col justify-center items-center text-white md:w-[200px] mx-6 rounded-3xl h-[250px]
                   basis-full sm:basis-1/2  lg:basis-1/5 p-4"
                   onClick={() => handleImageClick(member)}
                   >
        <h2 className="text-2xl font-clash font-semibold mt-5">{member.name}</h2><span></span>
        <p className="text-xl font-medium font-clash text-white">{member.title}</p>
        <Image
          
          src={member.image}
          alt={member.name}
          width={200}
          height={200}
          
          className="h-35 w-35 object-cover cursor-pointer"
        />
      </div>
    ))}
  </div>
</div>
<h1 className={`font-clash text-[#DC143C]  text-center text-4xl md:text-6xl lg:text-8xl mt-8 font-semibold ${showDetails ? 'blur' : ''}`}>Technical Team</h1>
{/* tech */}
<div className={`max-w-8xl mx-auto px-4 py-10 ${showDetails ? 'blur' : ''}`}>
  <div className="flex flex-wrap gap-16 justify-center">
  {techteam.map((member) => (
     
     <div
       key={member.id}
       className="overflow-hidden cursor-pointer bg-[url('./assets/herobg.png')] bg-cover bg-center flex flex-col justify-center items-center text-white md:w-[200px] mx-6 rounded-3xl h-[250px]
                  basis-full sm:basis-1/2  lg:basis-1/5 p-4"
                  onClick={() => handleImageClick(member)}
                  >
       <h2 className="text-2xl font-clash font-semibold mt-5">{member.name}</h2><span></span>
       <p className="text-xl font-medium font-clash text-white">{member.title}</p>
       <Image
         src={member.image}
         alt={member.name}
         width={200}
         height={200}
         className="h-35 w-35 object-cover cursor-pointer"
       />
     </div>
   ))}
  </div>
</div>
{/* design */}

<h1 className={`font-clash text-[#DC143C]  text-center text-4xl md:text-6xl lg:text-8xl mt-8 font-semibold ${showDetails ? 'blur' : ''}`}>Design Team</h1>
{/*  */}
<div className={`max-w-8xl mx-auto px-4 py-10 ${showDetails ? 'blur' : ''}`}>
  <div className="flex flex-wrap gap-16 justify-center">
  {Designteam.map((member) => (
     
     <div
       key={member.id}
       className="overflow-hidden cursor-pointer pb-0 bg-[url('./assets/herobg.png')] bg-cover bg-center flex flex-col justify-center items-center text-white md:w-[400px] mx-6 rounded-3xl h-[250px]
                  basis-full sm:basis-1/2 min-[1440px]:basis-1/3  lg:basis-1/5 p-4"
                  onClick={() => handleImageClick(member)}
                  >
       <h2 className="text-2xl font-clash font-semibold mt-5">{member.name}</h2><span></span>
       <p className="text-xl font-medium font-clash text-white">{member.title}</p>
       <Image
         src={member.image}
         alt={member.name}
         width={200}
         height={200}
         className="h-35 w-35 object-cover pb-0 cursor-pointer"
       />
     </div>
   ))}
  </div>
</div>

{/* Manage */}

<h1 className={`font-clash text-[#DC143C]  text-center text-4xl md:text-6xl lg:text-8xl mt-8 font-semibold ${showDetails ? 'blur' : ''}`}>Management Team</h1>
{/*  */}
<div className={`max-w-8xl mx-auto px-4 py-10 ${showDetails ? 'blur' : ''}`}>
  <div className="flex flex-wrap gap-16 justify-center ">
  {manageteam.map((member) => (
     
     <div
       key={member.id}
       className="overflow-hidden cursor-pointer bg-[url('./assets/herobg.png')] bg-cover bg-center flex flex-col justify-center items-center text-white   md:w-[400px] mx-6 rounded-3xl h-[250px]
                  basis-auto sm:basis-1/3 min-[1440px]:basis-4/5 md:basis-10/12  lg:basis-2/5 p-4"
                  onClick={() => handleImageClick(member)}
                  >
       <h2 className="text-2xl font-clash font-semibold mt-10">{member.name}</h2><span></span>
       <p className="text-xl font-medium font-clash text-white">{member.title}</p>
       <Image
         src={member.image}
         alt={member.name}
         width={200}
         height={200}
         
         className="h-35 w-35 object-cover cursor-pointer"
       />
     </div>
   ))}
  </div>
</div>

 {/* Sliding Details Section */}
 {showDetails && (  // Only render the div after click
  <div
  className={`z-10 fixed bg-[url('./assets/herobg.png')] bg-cover bg-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8 pt-8 pb-0 rounded-xl shadow-lg w-[80%] max-w-lg md:w-full ${detailClass}`}
  style={{ zIndex: 1000 }}
  >
    {selectedMember && (
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="font-clash">
          <h2 className="text-2xl flex  items-center font-semibold">{selectedMember.name} <span className="ml-4">
          <Image
            src={selectedMember.icon}
            alt={selectedMember.name}
            width={35}
            height={35}
            className="full h-35 w-35 object-cover cursor-pointer"
          />
        </span></h2>
          <p className="text-white text-4xl font-semibold">{selectedMember.title}</p>
          <p className="text-[#560818] font-semibold text-xl w-full mt-4">{selectedMember.description}</p>
        </div>
        <div>
          <Image
            src={selectedMember.image}
            alt={selectedMember.name}
            width={400}
            height={400}
            className="full "
          />
        </div>
      </div>
    )}
    {/* Close button */}
    <button
      className="absolute top-5 right-5 text-gray-300"
      onClick={closeDetails}
    >
      <IoMdCloseCircle size={25} />
    </button>
  </div>
)}
<div className="px-6"><Footer /></div>

        
      </div>
    </>
  );
};

export default About;
