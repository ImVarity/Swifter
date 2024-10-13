'use client'

import React from 'react'
import Link from 'next/link'
import {FaUser, FaHome, FaUsers} from 'react-icons/fa'
import Infobox from './Infobox'
import TextBox from './TextBox'



export default function SOS ({ handleClick, outerSubmit }: { handleClick: () => void, outerSubmit : (p: string) => void}) {
    return (
        <div>
        <header className="bg-white shadow-md sticky top-0 z-10">
          <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <div>
              <h1 className="text-lg text-gray-500">Welcome,</h1>
              <h2 className="text-2xl font-bold">Mary-Anne</h2>
            </div>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
              <div className="w-full h-full bg-purple-500 flex justify-center items-center text-white text-xl rounded-full">
                <img className="rounded-full w-10 h-10" src="/oldLadyPFP.jpg"></img>
              </div>
            </div>
          </section>
        </header>


        <div className= "">
          <section id= "hero" className="flex flex-col-reverse justify-center sm:flex-row p-10 items-center gap-8 mt-8">
            <article className= "sm:w-1/2">
              <h2 className="max-w-md text-4xl font-bold text-center sm:text-3xl sm:text-left text-slate-900 dark:text-white">
                Are you in an <span className="text-red-500"> emergency  </span> ? 
              </h2>

              <p className="text-gray-500">
                Tap once for emergency contacts <br />
                Tap twice for emergency hotline
              </p>
            </article>
          </section>


      {/* Emergency Button with more layers and custom pulsing */}
      <div className="flex justify-center items-center mt-2">
          <div className="absolute top-20 inset-0 flex justify-center items-center">
            
              <div className="w-72 h-72 bg-red-300 rounded-full animate-pulse-slow"></div>  {/* Largest outer circle */}
            
          </div>
          <div className="absolute top-20 inset-0 flex justify-center items-center">
            <div className="w-64 h-64 bg-red-400 rounded-full animate-pulse-slow"></div>  {/* Second layer */}
          </div>
          <div className="absolute top-20 inset-0 flex justify-center items-center">
            <div className="w-56 h-56 bg-red-500 rounded-full animate-pulse-slow"></div>  {/* Third layer */}
          </div>
          <div className="absolute top-20 inset-0 flex justify-center items-center">
            <div className="w-48 h-48 bg-red-600 rounded-full animate-pulse-slow"></div> {/* Fourth layer */}
          </div>
          <div className="absolute top-20 inset-0 flex justify-center items-center">
            <div className="w-44 h-44 bg-red-650 rounded-full flex items-center justify-center relative z-10">
              <button className="p-20" onClick={handleClick}>
                <span className="text-white text-5xl tracking-wideset">
                  SOS
                </span>
              </button>
              
            </div> {/* Center static circle */}
          </div>
        </div>
        
      

        <div className='relative flex justify-center items-center w-auto min-h-screen'>          
            <TextBox outerSubmitFunc={outerSubmit}/>
        </div>



      <footer className="bg-white shadow-lg rounded-t-lg fixed bottom-0 left-0 right-0 flex justify-around p-3">
        <Link href="/profile">
          <div className="flex flex-col items-center">
            <FaUser className="text-gray-500" />
            <span className="text-sm text-gray-500">Profile</span>
          </div>
        </Link>
        <Link href="/home">
          <div className="flex flex-col items-center">
            <FaHome className="text-red-500" />
            <span className="text-sm text-red-500">Home</span>
          </div>
        </Link>
        <Link href="/contacts">
          <div className="flex flex-col items-center">
            <FaUsers className="text-gray-500" />
            <span className="text-sm text-gray-500">Contacts</span>
          </div>
        </Link>
      </footer>



        </div>

      </div>

    )
}

const Circle = () => {
    return (
      <div className="flex justify-center items-center mt-2">
          <div className="absolute top-20 inset-0 flex justify-center items-center">
            <div className="w-72 h-72 bg-red-300 rounded-full animate-pulse-slow"></div>  {/* Largest outer circle */}
          </div>
          <div className="absolute top-20 inset-0 flex justify-center items-center">
            <div className="w-64 h-64 bg-red-400 rounded-full animate-pulse-slow"></div>  {/* Second layer */}
          </div>
          <div className="absolute top-20 inset-0 flex justify-center items-center">
            <div className="w-56 h-56 bg-red-500 rounded-full animate-pulse-slow"></div>  {/* Third layer */}
          </div>
          <div className="absolute top-20 inset-0 flex justify-center items-center">
            <div className="w-48 h-48 bg-red-600 rounded-full animate-pulse-slow"></div> {/* Fourth layer */}
          </div>
          <div className="absolute top-20 inset-0 flex justify-center items-center">
            <div className="w-44 h-44 bg-red-650 rounded-full flex items-center justify-center relative z-10">
              <span className="text-white text-5xl tracking-wideset border-2 border-black">S O S</span>
            </div> {/* Center static circle */}
          </div>
        </div>
    )
  }