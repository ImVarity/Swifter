'use client'

import React, { useState } from "react";
import { Mic, MicOff } from "lucide-react";
import { useVoiceToText } from "react-speakup";

export default function SpeechToText () {
  const [listening, setListening] = useState<boolean>(false)

  const { startListening, stopListening, transcript } = useVoiceToText({
    continuous: true,
    lang: "en-US",
  });

  const start = () => {
    setListening(true)
    startListening()
  }

  const end = () => {
    setListening(false)
    stopListening()
  }

  return (
    <div className="flex flex-col gap-6">
      {" "}
      <div className="flex gap-6">
        <Mic onClick={start} role="button" />
        <MicOff onClick={end} role="button" />
      </div>
      <h1>{listening ? "Listening" : "Not listening"}</h1>
      <h2>{transcript}</h2>
    </div>
  );
};