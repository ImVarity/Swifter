'use server'

import { getLLM } from "./main";

export const fetchLlama = async ({ prompt, latitude, longitude }: { prompt: string, latitude: number, longitude: number }) => {
    const generatedText = await getLLM(
    prompt + " list ONLY the top 3 things to do in this situation in 1. 2. 3."
    );
    const located = await getLLM(
        "where am I with these latitude and longitude" + {latitude} + ", " + {longitude} + "? only give the location"
    );
    return {
        generatedText,
        located
    }
}