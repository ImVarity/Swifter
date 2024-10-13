'use client'

import { useEffect, useState } from "react"
import { Phone } from 'lucide-react'

export default function Page () {
    const [location, setLocation] = useState<string>("Seattle, Washington")
    const [instructions, setInstructions] = useState<string>(
        "This is where your text will go. The box has a sleek design with clean lines, rounded corners, and a soft gradient background. You can add more content here to suit your needs."
    )
    const [phoneArray, setPhoneArray] = useState<string[]>([
        "911",
        "+13422340303",
        "+19083028182"
    ])
    
    useEffect(() => {
      if (typeof window !== 'undefined' && window.localStorage) {
        let loc = localStorage.getItem("location") || "";
        setLocation(loc)
        let generatedText = localStorage.getItem("generatedText") || "";
        setInstructions(generatedText);
      }
    }, []);

    return (
        <div className="flex flex-col w-full h-screen bg-white items-center justify-center">
            {
                phoneArray.map((num) => {
                    return (
                        <div key={num}>
                            <AlertBox number={num} />
                        </div>
                    )
                })
            }
            <ModernBox bodyText={instructions} location={location}/>
        </div>
    )
}

function AlertBox({ number }: { number: string }) {
    return (
      <div className="w-[25rem] bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 animate-shake">
        <div className="flex flex-row justify-between">
          <div>
            <p className="font-bold">Alerting {number}...</p>
            <i>Click to cancel</i>
          </div>
          <div className="flex flex-row items-center">
            <Phone />
          </div>
        </div>
      </div>
    );
  }

function ModernBox ({bodyText, location} : {bodyText: string, location: string}) {
    return (
      <div className="flex justify-center items-center mt-2">
        <div className="h-[30rem] w-[25rem] bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-black">
                <b>{location}</b>
            </h2>
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">
                Instructions
            </h1>
            <div className="h-[20rem] flex flex-row items-center text-gray-600">
                {bodyText}
            </div>
        </div>
      </div>
    );
  }