'use client'

import React, { useState, useEffect } from "react";
import { Mic, MicOff } from "lucide-react";
import { useVoiceToText } from "react-speakup";
import { getLLM } from "@/bedrock/main";
import { randomProfile } from "@/profiles/main";
import { fetchLlama } from "@/bedrock/fetch";

export default function SpeechToText () {
  const [listening, setListening] = useState<boolean>(false);
  const [profile, setProfile] = useState<{
    latitude: string;
    longitude: string;
  } | null>(null);


  const [located, setLocation] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const { startListening, stopListening, transcript } = useVoiceToText({
    continuous: true,
    lang: "en-US",
  });

  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
    setListening(!listening);
  };

  const handleClick = async () => {
    toggleListening();
    const newProfile = randomProfile();
    setProfile(newProfile);
  };

  const feedLLM = async () => {
    if (profile && transcript) {
      const data = await fetchLlama({ prompt: transcript, profile });

      setLocation(data.located)
      setResponse(data.generatedText)

    }
  };

  useEffect(() => {
    if (profile && transcript) {
      feedLLM();
    }
  }, [profile, transcript]);

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="flex min-w-[40rem] min-h-[40rem] border-2">
        test
      </div>
      <div className="flex gap-6 w-[40rem] h-[40rem]">
        <button className="rounded-full border-2">
          {listening ? (
            <Mic onClick={toggleListening} role="button" />
          ) : (
            <MicOff onClick={handleClick} role="button" />
          )}
        </button>
      </div>
      <h1>{listening ? "Listening" : "Not listening"}</h1>
      <h2>{transcript}</h2>
      <div>
        {located ? (
          <div> {located} </div>
        ) : (
          <div> Loading... </div>
        )}
      </div>
      <div>
        {response ? (
          <pre> {response} </pre>
        ) : (
          <div> Loading... </div>
        )}
      </div>
    </div>
  );
};