'use server'

import { getLLM } from "./main";

export const fetchLlama = async ({ prompt, latitude, longitude }: { prompt: string, latitude: number, longitude: number }) => {
    console.log(latitude + " " + longitude)
    const generatedText = await getLLM(
    prompt + ". in first person using 'I' list ONLY the top 3 things to do in this situation in one sentence each listed as 1 2 3 on different lines as a robot with control of internet of things. ( e.g. I have called the police, I haved turned on the home cameras, I have turned on the security system). If cant do anything say '1. Calling 911'. "
    );




    const located = await getLLM(
        `where am I with these latitude and longitude ${latitude}, ${longitude}? give me only the country`
    );
    return {
        generatedText,
        located
    }
}