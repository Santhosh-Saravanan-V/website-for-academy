import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { instituteData } from '@/lib/institute-data';

export const maxDuration = 30;

const openai = createOpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages, prompt } = await req.json();

  const systemPrompt = `You are a helpful AI assistant for ${instituteData.name}.
  Your goal is to answer student enquiries about courses, fees, timings, and other institute details.
  
  Institute Details:
  Name: ${instituteData.name}
  Description: ${instituteData.description}
  Contact: ${JSON.stringify(instituteData.contact)}
  Courses: ${JSON.stringify(instituteData.courses)}
  FAQs: ${JSON.stringify(instituteData.faqs)}
  
  Guidelines:
  - Be professional, polite, and encouraging.
  - Answer questions based ONLY on the provided data.
  - If the user asks something not in the data, politely ask them to contact the institute directly at ${instituteData.contact.phone} or ${instituteData.contact.email}.
  - Keep answers concise.
  `;

  // Check for API Key (handled by SDK defaults to process.env.OPENAI_API_KEY)
  // We use gpt-4o-mini for cost effectiveness and speed.

  const result = await streamText({
    // Valid free model (ensure "Allow data usage" is on in OpenRouter settings)
    model: openai('openai/gpt-oss-120b:free'),
    // Backup models if the above is rate limited:
    // model: openai('meta-llama/llama-3-8b-instruct:free'),
    // model: openai('microsoft/phi-3-mini-128k-instruct:free'),
    ...(messages ? { messages } : { prompt }),
    system: systemPrompt,
  });

  return result.toTextStreamResponse();
}
