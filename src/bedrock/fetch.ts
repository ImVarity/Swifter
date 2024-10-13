'use server'
import { getLLM } from "./main";
export const fetchLlama = async ({ prompt, profile }: { prompt: string; profile: { latitude: string; longitude: string };}) => {
    const generatedText = await getLLM(
    prompt + " list ONLY the top 3 things to do in this situation in 1. 2. 3."
    );
    const located = await getLLM(
    `where am I with these latitude and longitude ${profile.latitude}, ${profile.longitude}? only give the location`
    );
    return {
        generatedText,
        located
    }
}