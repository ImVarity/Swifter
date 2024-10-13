'use client'

import { useState } from "react";
import { useVoiceToText } from "react-speakup";

import Recording from "./components/recording";
import SOS from "./components/sos";

export default function Home() {
  const [listening, setListening] = useState<boolean>(false)

  const { startListening, stopListening, transcript } = useVoiceToText({
    continuous: true,
    lang: "en-US",
  });

  const start = () => {
    console.log("Start")
    setListening(true)
    startListening()  
  }

  const end = () => {
    console.log("END")
    console.log(transcript)
    setListening(false)
    stopListening()
  }

  return (
    <div className="flex flex-col">
      {
        
        (!listening) 
        ?
          <Recording handleClick={start}/>
        :
          listening && <SOS handleClick={end}/>
        
      }
    </div>
  );
}
