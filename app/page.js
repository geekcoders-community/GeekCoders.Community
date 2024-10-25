import Link from "next/link";
import Navbar from "./components/Navbar";
import Login from "./login/page";
import { HiSpeakerphone } from "react-icons/hi";
import Footer from "./components/Footer";

 
export default function Home() {
  return (
    <>
      <div className="w-full overflow-hidden ">
      <Navbar/>
      <div className="lg:mt-28 xl:mt-36  mt-36 flex items-center justify-center ">
        <div className="bg-[url('./assets/herobg.png')] bg-cover bg-center flex flex-col justify-center items-center  text-white w-full mx-6 rounded-3xl lg:h-[500px] xl:h-[700px] h-[700px]">
          <h1 className=" text-4xl md:text-8xl  font-clash font-semibold ">Welcome to</h1>
          <h1 className="text-4xl sm:text-5xl md:text-8xl  font-clash font-semibold ">Geek Coders!</h1>
          <h1 className="text-2xl    font-jb mt-2">Where geeks innovate!</h1>
          <div className="">
          <Link href="/join"><button className="text-xl font-jb font-semibold bg-white text-[#DC143C]  rounded-full  mt-4 px-16 py-2 md:px-28">Join Us</button></Link>

          </div>
        </div>
        
      </div>
      <div className="flex flex-col   items-center p-6 mt-24">
        <h1 className="text-[#DC143C] font-clash font-semibold text-4xl lg:text-6xl mb-2 sm:text-8xl">Collaboration, Learning, and Innovation</h1>
        <p className="font-clash font-medium text-sm md:text-2xl text-justify xl:px-16 lg:text-3xl lg:mt-8"><span className="text-[#DC143C]">GeekCoders</span> is a thriving community focused on skill development and growth in the tech industry. Our mission is to empower 
          passionate individuals by fostering a culture of collaboration, continuous learning, and networking. Whether you're a 
          beginner or an experienced professional, <span className="text-[#DC143C]" >GeekCoders</span> provides a platform where members can enhance their technical skills, 
          exchange innovative ideas, and connect with like-minded peers. Together, we aim to shape the future of technology by creating 
          opportunities for hands-on learning, mentorship, and real-world problem-solving. Join us and become part of a dynamic, inclusive
           community committed to driving change in the tech world.</p>
      </div>
      {/* announcements */}
      <div>
      <div className="flex flex-col w-full  items-center relative mt-24  h-44 md:h-64">
        <h1 className="text-[rgb(220,20,60)] font-clash font-semibold text-4xl md:text-5xl lg:text-7xl mb-2 ">Announcements</h1>
        <div className="w-screen mt-10 md:mt-14">
            <div className="bg-[#DC143C] absolute py-2 overflow-hidden border-y-2 shadow-2xl border-black rotate-[8deg] md:rotate-6 md:mt-5  w-[120vw] -mx-4">
              <div className="flex whitespace-nowrap scrolling-container">
              <p className="font-clash md:text-xl flex justify-center items-center text-sm md:word-spacing word-spacing-m scrolling-text-right mr-16 md:mr-36">
              <HiSpeakerphone className="mr-4"/> Be ready for our upcoming event! Don’t miss out! - Register Now! - #GeekCoders</p>
                 <p className="font-clash md:text-xl flex justify-center items-center text-sm md:word-spacing word-spacing-m scrolling-text-right mr-16 md:mr-36">
                 <HiSpeakerphone className="mr-4"/> Be ready for our upcoming event! Don’t miss out! - Register Now! - #GeekCoders</p>
                   <p className="font-clash  md:text-xl flex justify-center items-center text-sm md:word-spacing word-spacing-m scrolling-text-right">
                   <HiSpeakerphone className="mr-4" /> Be ready for our upcoming event! Don’t miss out! - Register Now! - #GeekCoders</p>
              </div>
            </div>
        </div>
        <div className="w-screen">
            <div className="bg-[#DC143C] py-2  absolute overflow-hidden border-y-2 shadow-2xl border-black -rotate-[8deg] md:-rotate-6 -my-2  w-[120vw] -mx-4 ">
              <div className="flex whitespace-nowrap scrolling-container">
              <p className="font-clash flex justify-center items-center md:text-xl text-sm md:word-spacing word-spacing-m scrolling-text mr-16 md:mr-36">
              <HiSpeakerphone className="mr-4"/> Be ready for our upcoming event! Don’t miss out! - Register Now! - #GeekCoders</p>
                 <p className="font-clash flex justify-center items-center md:text-xl text-sm md:word-spacing word-spacing-m scrolling-text mr-16 md:mr-36">
                 <HiSpeakerphone className="mr-4"/> Be ready for our upcoming event! Don’t miss out! - Register Now! - #GeekCoders</p>
                   <p className="font-clash flex justify-center items-center text-sm md:text-xl md:word-spacing word-spacing-m scrolling-text">
                   <HiSpeakerphone className="mr-4 " /> Be ready for our upcoming event! Don’t miss out! - Register Now! - #GeekCoders</p>
              </div>
            </div>
        </div>

      </div>

      <div className="flex justify-center">
      
          <Link href="/register"><button className="text-xl md:text-4xl font-clash bg-black text-[#DC143C] font-bold rounded-full  mt-4 px-16 py-4 md:px-28">Register Now!</button></Link>

      </div>
      </div>

      {/* member benefits */}
      <div className="flex flex-col   items-center  p-6 mt-36 mb-28">
          <h1 className="text-[rgb(220,20,60)] font-clash font-semibold text-4xl md:text-5xl lg:text-7xl mb-10 ">Member Benefits</h1>
          <div className="w-full bg-[#191A23] lg:flex justify-center items-center rounded-3xl">
              <div className="p-10 ">
              <h1 className="text-[rgb(220,20,60)] mb-4 md: text-xl font-clash font-semibold">&#123;Skill Development&#125;</h1>
              <p className="text-white md:text-lg font-clash font-light ">Gain practical experience through hands-on learning opportunities, workshops, and projects designed to sharpen your tech skills and prepare you for real-world challenges.</p>
              </div>
              <div className="h-36 hidden lg:block border-l-[1px] border-white mx-4"></div> 
              <div className="p-10">
              <h1 className="text-[rgb(220,20,60)] mb-4 md: text-xl font-clash font-semibold">&#123;Networking&#125;</h1>
              <p className="text-white md:text-lg font-clash font-light ">Connect with fellow tech enthusiasts, industry professionals, and mentors to expand your network, collaborate on projects, and open doors to new opportunities.</p>
              </div>
              <div className="h-36 border-l-[1px] hidden lg:block border-white mx-4"></div> 

              <div className="p-10">
              <h1 className="text-[rgb(220,20,60)] mb-4 md: text-xl font-clash font-semibold">&#123;Leadership and Mentorship&#125;</h1>
              <p className="text-white md:text-lg font-clash font-light ">Opportunities to take on leadership roles within the community or become a mentor, helping others while developing your own leadership skills.</p>
              </div>  
          </div>
          
      </div>
      {/* footer */}
      <div className="w-full px-6">
            <Footer/>
          </div>
      </div>

    </>
  );
}

