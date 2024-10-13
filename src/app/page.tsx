'use client'

import { useState } from "react";
import { useVoiceToText } from "react-speakup";
import { useRouter } from "next/navigation";

import Recording from "./components/recording";
import SOS from "./components/sos";
import { fetchLlama } from "@/bedrock/fetch-llama";
import { getLocation } from "@/tmobile/main";

export default function Home() {
  const router = useRouter();

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

  const end = async () => {
    console.log("END")
    setListening(false)
    stopListening()

    const loc = await getLocation()
    const data = await fetchLlama({ prompt: transcript, latitude: loc.latitude, longitude: loc.longitude})
    console.log(loc.latitude, loc.longitude)
    
    localStorage.setItem("generatedText", data.generatedText)
    localStorage.setItem("location", data.located)

    router.push('/result')
  }

  return (
    <div className="flex flex-col">
      {
        
        (listening) 
        ?
          <Recording handleClick={end}/>
        :
          <SOS handleClick={start}/>
      }
    </div>
  );
}
