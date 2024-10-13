import SpeechToText from "@/audio/speech-to-text";
import TextToSpeech from "@/audio/text-to-speech";
import { getLocation } from "@/tmobile/main";
import Image from "next/image";

export default async function Home() {
  await getLocation();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <SpeechToText />
      <TextToSpeech />
    </div>
  );
}
