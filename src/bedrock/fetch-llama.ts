'use server'

import { getLLM } from "./main";

export const fetchLlama = async ({ prompt, latitude, longitude }: { prompt: string, latitude: number, longitude: number }) => {
    console.log(latitude + " " + longitude)
    const generatedText = await getLLM(
    prompt + ". list ONLY the top 3 things to do in this situation in one sentence each"
    );
    const located = await getLLM(
        `where am I with these latitude and longitude ${latitude}, ${longitude}? give me only the country`
    );
    return {
        generatedText,
        located
    }
}