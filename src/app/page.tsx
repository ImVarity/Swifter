import { getLocation } from "@/tmobile/main";
import Image from "next/image";
import { getLLM } from "@/bedrock/main";
import TextBox from "@/app/components/TextBox";

export default async function Home() {
  const location = await getLocation();



  return (
    <div className="flex justify-center items-center flex-col">
      <TextBox />
    </div>

  );
}
