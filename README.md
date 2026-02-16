# BrightPath Academy Website

A modern, responsive business website for "BrightPath Academy" with an integrated AI chatbot, built using Next.js, Tailwind CSS, and Vercel AI SDK.

## Features
- **Modern UI**: Clean, professional design with Tailwind CSS.
- **Mobile-First**: Fully responsive layout.
- **AI Chatbot**: Integrated floating chatbot powered by OpenAI/Gemini (via Vercel AI SDK).
- **Pages**: Home, Courses, About Us, Contact.
- **Components**: Navbar, Footer, WhatsApp Button, Testimonials, FAQ.

## Tech Stack
- Next.js 14+ (App Router)
- Tailwind CSS
- Lucide React (Icons)
- Framer Motion (Animations)
- Vercel AI SDK (@ai-sdk/openai, @ai-sdk/react)

## Setup Instructions

1.  **Clone the repository** (if not already done).
2.  **Install dependencies**:
    ```bash
    npm install
    ```
    *Note: If you encounter dependency conflicts, try `npm install --legacy-peer-deps`.*

3.  **Environment Variables**:
    Create a `.env.local` file in the root directory and add your OpenAI API Key:
    ```env
    OPENAI_API_KEY=sk-your-openai-api-key-here
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

Recommended deployment is via **Vercel**.

1.  Push your code to a GitHub repository.
2.  Import the project in Vercel.
3.  Add the `OPENAI_API_KEY` in Vercel Project Settings > Environment Variables.
4.  Deploy.

## Project Structure
- `src/app`: Page routes and API endpoints.
- `src/components`: Reusable UI components.
- `src/lib`: Utility functions and institute data.

## AI Chatbot
The chatbot uses `src/app/api/chat/route.ts` to communicate with OpenAI. The system prompt is defined in `src/lib/institute-data.ts` context injection within the route.
