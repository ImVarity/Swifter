import React from 'react'
import profileImage from 'profile.png';



const page = () => {
    return (
      <div>
        
        <header className="bg-pink-700 text-white sticky top-0 z-10">
          <section className="max-w-4x1 mx-auto p-4 flex justify-between items-center">
            <h1 className="text-3x1 font-medium">
              WELCOME *NAME*
            </h1>

            <div className="w-12 h-12 rounded-full overflow-hidden">
              {/* Replace this with the actual image */}
              <img src="/profile.png" alt="Profile" className="w-full h-full" />
            </div>
          </section>

        </header>


        <main className= "max-w4x.mx-auto">
          <section id= "hero" className="flex flex-col-reverse justify-center sm:flex-row p-10 items-center gap-8 mt-20">
            <article className= "sm:w-1/2">
              <h2 className="max-w-md text-4xl font-bold text-center sm:text-3xl sm:text-left text-slate-900 dark:text-white">
                PRESS IF IN AN <span className="text-red-500"> EMERGENCY  </span>
              </h2>
            </article>
          </section>


          <div className="flex justify-center items-center">
            {/* Emergency Button */}
            <div className="relative">
              <div className="w-64 h-64 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-44 h-44 bg-red-700 rounded-full"></div>
              </div>
            </div>   
          </div>

          <section id= "hero" className="flex flex-col-reverse justify-center sm:flex-row p-10 items-center gap-8 mt-5">
            <article className= "sm:w-1/2">
              <h2 className="max-w-md text-2xl font-bold text-center sm:text-3xl sm:text-left text-slate-900 dark:text-white">
                n EMERGENCY CONTACTS
              </h2>
              <button className="flex items-center justify-center mt-4 bg-gray-200 py-2 px-4 rounded-md mx-auto">
                <span className=" text-xl font-bold">+</span> <span className="ml-2">ADD CONTACTS</span>
              </button>
            </article>
          </section>

        </main>

      </div>
    )
}


export default page;