'use client'

import React from 'react'
import Link from 'next/link'
import {FaUser, FaHome, FaUsers} from 'react-icons/fa'

export default function Recording ({ handleClick }: { handleClick: () => void }) {
    return (
        <div>
        
        <header className="bg-white shadow-md sticky top-0 z-10">
          <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold"> NOTIFYING EMERGENCY CONTACTS</h2>
            </div>
          </section>
        </header>


        <main className= "max-w4x.mx-auto">
          <section id= "hero" className="flex flex-col-reverse justify-center sm:flex-row p-10 items-center gap-8 mt-8">
            <article className= "sm:w-1/2">
              <h2 className="max-w-md text-4xl font-bold text-center sm:text-3xl sm:text-left text-slate-900 dark:text-white">
              🔴 <span className="text-red-500"> Recording </span>
              </h2>
              <p className="text-gray-500">
                If you are unable to speak please stay on <br />
                the app or send us a message
              </p>
            </article>
          </section>


      {/* Emergency Button with more layers and custom pulsing */}
        <button onClick={() => handleClick()}>
            <RecordingCircle />
        </button>

        



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



        </main>

      </div>

    )
}

    const RecordingCircle = () => {
        return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="absolute top-20 inset-0 flex justify-center items-center">
                <div className="w-72 h-72 bg-red-300 rounded-full animate-pulse-slow"></div>  {/* Largest outer circle */}
            </div>
            <div className="absolute top-20 inset-0 flex justify-center items-center">
                <div className="w-64 h-64 bg-red-500 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white text-5xl tracking-wideset text-center">DOUBLE TAP TO CALL 911</span>    
                </div> {/* Center static circle */}
            </div>
            </div>
        )
    }