import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
export const runtime="edge";
import "../events.css";

const renderx = () =>{

    return(<>
    <div className="min-h-screen flex flex-col">
       <header className="fixed top-0 w-full z-20">
            <Navbar />
        </header>
        <main className="flex-grow pt-16 pb-16 m-10">  
            <div className="flex flex-col justify-center">
                <div className="flex flex-col mt-10 gap-y-4">
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

          </div>
        </div>
                    <div id="eventclass" className="flex flex-col flex-wrap p-5 border-2 border-red-500 rounded-lg shadow-[4px_4px_0px_2px_rgba(255,0,0,0.5)]">
                        <h1 className='text-3xl font-bold text-[rgb(220,20,60)] mb-10'>Description</h1>
                        <p className='text-1xl mb-10'>Join <b>RenderX</b>,an exclusive workshop by <b>GeekCoders</b>, designed for beginners and aspiring web developers! Gain hands-on experience in building a fully functional landing page using HTML, CSS, and JavaScript, and earn a <b>Participation Certificate</b> to boost your portfolio.</p>
                        <h1 className='text-2xl font-bold text-[rgb(220,20,60)] mb-10'>Why Attend?</h1>
                        <p>- <b>Build Your Portfolio:</b> Take home a functional project and a recognized certificate.</p>
                        <p>- <b>Hands-On Learning:</b> Build and deploy your first landing page.</p>
                        <p className='mb-10'>- <b>Beginner-Friendly:</b> Perfect for students and coding enthusiasts.</p>
                        <h1 className='text-2xl font-bold text-[rgb(220,20,60)] mb-10'>What to expect?</h1>
                        <p>1. <b>Interactive Workshop:</b> Learn and create in real-time.</p>
                        <p>2. <b>Participation Certificate:</b> Showcase your web development skills.</p>
                    </div>
             </div>
        </div>
        </main>
        <footer className="mt-auto">
    <Footer />
  </footer>
    </div>
    </>);
}


export default renderx;