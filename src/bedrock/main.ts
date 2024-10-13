import { createAmazonBedrock } from '@ai-sdk/amazon-bedrock';
import { generateText } from 'ai';


export async function getLLM(prompt: string) {

    const bedrock = createAmazonBedrock({
        region: process.env.NEXT_PUBLIC_AWS_REGION!,
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
        sessionToken: '',
      });


    const model = bedrock('anthropic.claude-instant-v1');


    const fixedQ = prompt;

    const { text } = await generateText({
        model: model,
        prompt: fixedQ,
      });

    return text;
}




  
// generateRecipe().catch(console.error);