import { getLocation } from "@/tmobile/main";
import Image from "next/image";
import { getLLM } from "@/bedrock/main";
import TextBox from "@/app/components/TextBox";
import SpeechToText from "@/audio/speech-to-text";
import TextToSpeech from "@/audio/text-to-speech";

export default async function Home() {
  const location = await getLocation();

  console.log(location)



  return (
    <div className="flex justify-center items-center flex-col">
      <SpeechToText />
      <TextToSpeech />
      <TextBox />
    </div>

  );
}
