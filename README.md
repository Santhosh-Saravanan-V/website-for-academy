# BrightPath Academy Website

A modern, responsive business website for "BrightPath Academy" with an integrated AI chatbot, built using Next.js, Tailwind CSS, and Vercel AI SDK.

## Key Features

### 1. Modern Web Design
- **Technology**: Built with Next.js 14 (App Router) & Tailwind CSS.
- **Responsive**: Fully mobile-first design ensuring great experience on all devices.
- **Pages**: Home, Courses, About Us, Contact.
- **Components**: Polished UI components including Testimonials, FAQ Accordion, and Floating Buttons.

### 2. AI Enquiry Chatbot (Smart Assistant)
- **Strict Business Logic**: The chatbot is engineered to answer questions **only** based on the provided institute data. It will politey decline unrelated queries (e.g., "General knowledge", "Coding help").
- **Lead Generation**: Detects user interest (e.g., "I want to join", "Fee structure") and proactively asks for:
  - Full Name
  - Phone Number
  - Course of Interest
- **Anti-Hallucination**: If the answer isn't in its database, it admits "I don't know" and directs the user to official contacts, rather than making up facts.

### 3. Contact Integration
- **WhatsApp**: Floating button for instant direct messaging.
- **Contact Form**: Functional frontend form with validation states.

---

## Restrictions & Limitations

### 1. AI Model Constraints (Free Tier)
- **Model Used**: `meta-llama/llama-3.3-70b-instruct:free` (via OpenRouter).
- **Rate Limits**: Since we are using a **free API tier**, you may occasionally encounter `429 Too Many Requests` errors if many requests are sent rapidly.
- **Solution**: For production, switch to a paid OpenAI (`gpt-4o`) or Gemini API key to remove these limits.

### 2. Context Window
- The chatbot has a limited "memory" of the conversation. Very long conversations may result in the bot forgetting earlier details.

### 3. Knowledge Base
- The bot *only* knows what is defined in `src/lib/institute-data.ts`. It does not have real-time internet access or knowledge outside this file.

---

## Setup Instructions

1.  **Clone the repository**.
2.  **Install dependencies**:
    ```bash
    npm install
    # If errors occur, try: npm install --legacy-peer-deps
    ```

3.  **Environment Variables**:
    Create a `.env.local` file in the root directory and add your OpenRouter/OpenAI API Key:
    ```env
    OPENAI_API_KEY=sk-or-v1-your-api-key-here
    ```
    *(Note: We use the OpenAI SDK compatibility layer for OpenRouter)*

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000).

## Deployment

Recommended deployment is via **Vercel**.

1.  Push code to GitHub.
2.  Import project in Vercel.
3.  Add `OPENAI_API_KEY` in Vercel Environment Variables.
4.  Deploy.

## Project Structure
- `src/app/api/chat/route.ts`: API handler for AI logic (System Prompt defined here).
- `src/lib/institute-data.ts`: The "Brain" of the institute (Values, Courses, Fees).
- `src/components/Chatbot.tsx`: The floating UI widget.
