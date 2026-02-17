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

  const systemPrompt = `You are the official AI enquiry assistant for BrightPath Academy.

  STRICT RULES:
  - Answer questions based ONLY on the provided Institute Details below.
  - Do NOT provide general knowledge, opinions, or information outside of BrightPath Academy's scope.
  - If a question is unrelated to the institute (e.g., "Who is the president?", "How to cook pasta?"), politely decline and redirect them to the contact page or ask them to ask about courses/admissions.
  - Keep responses short, professional, and business-focused.
  - Your primary goal is to convert visitors into enquiries.
  
  LEAD COLLECTION SCRIPT:
  - If a user shows interest in a specific course, fees, or admission, you MUST politely ask for their details in this format:
    "To help you better, could you please share your Full Name, Phone Number, and the Course you are interested in?"
  - Once the user provides these details (or any contact info), confirm with:
    "Thank you! A senior counselor will contact you shortly to guide you further."
  
  INSTITUTE DETAILS:
  Name: ${instituteData.name}
  Description: ${instituteData.description}
  Contact: ${JSON.stringify(instituteData.contact)}
  Courses: ${JSON.stringify(instituteData.courses)}
  FAQs: ${JSON.stringify(instituteData.faqs)}
  
  IMPORTANT: Never hallucinate. If you don't find the answer in the data, say:
  "I don't have that specific information right now. Please contact us at ${instituteData.contact.phone} for more details."
  `;

  // Check for API Key (handled by SDK defaults to process.env.OPENAI_API_KEY)
  // We use gpt-4o-mini for cost effectiveness and speed.

  const result = await streamText({
    // Valid free model (ensure "Allow data usage" is on in OpenRouter settings)
    model: openai('meta-llama/llama-3.3-70b-instruct:free'),
    // Backup models if the above is rate limited:
    // model: openai('meta-llama/llama-3-8b-instruct:free'),
    // model: openai('microsoft/phi-3-mini-128k-instruct:free'),
    ...(messages ? { messages } : { prompt }),
    system: systemPrompt,
  });

  return result.toTextStreamResponse();
}
