# AI Integration Setup Guide

## Overview

Your Instruction Tuning Simulator now has AI integration that enables:

- **Chatbox Component**: Full conversational AI interface for chat-like interactions
- **Smart Responses**: The simulator uses predefined responses for known topics and AI for unknown topics
- **Multiple AI Providers**: Support for OpenAI, Google Gemini, and Hugging Face

## Features Added

### 1. **AI Chatbox Component** (`Chatbox.jsx`)

- Real-time chat interface
- Message history with timestamps
- Loading indicators
- Support for multi-line input (Shift+Enter)
- Responsive design

### 2. **Enhanced Instruction Box** (`InstructionBox.jsx`)

- Falls back to AI for questions outside the predefined dataset
- Shows loading state while generating responses
- Distinguishes between local and AI-generated responses
- Error handling for API failures

### 3. **AI Service Module** (`services/aiService.js`)

- Flexible API provider system
- Support for OpenAI, Google Gemini, and Hugging Face
- Graceful fallback when API is unavailable
- Easy to extend with new providers

## Setup Instructions

### Step 1: Choose an AI Provider

Choose one of the following options:

#### Option A: OpenAI (Recommended for best results)

1. Go to https://platform.openai.com/api-keys
2. Sign up or log in to your OpenAI account
3. Click "Create new secret key"
4. Copy the API key

#### Option B: Google Gemini (Free tier available)

1. Go to https://makersuite.google.com/app/apikey
2. Click "Create API key in new project"
3. Copy the API key

#### Option C: Hugging Face (Free option)

1. Go to https://huggingface.co/settings/tokens
2. Create a new access token
3. Copy the token

### Step 2: Configure Environment Variables

Edit the `.env.local` file in the project root:

```env
# Choose your provider
VITE_AI_PROVIDER=openai    # or 'gemini' or 'huggingface'

# Add your API key
VITE_API_KEY=your_api_key_here
```

### Step 3: Restart the Development Server

```bash
npm run dev
```

The app will now use your AI provider for unknown questions in the Instruction Box and the Chatbox component.

## Usage

### Using the Chatbox

1. Navigate to the "Chat with AI Assistant" section
2. Type your question
3. Press Enter or click the Send button
4. The AI will respond with real-time messages

### Using the Enhanced Instruction Box

1. Enter a question or topic
2. Click "Generate response"
3. If the topic is in the predefined dataset, you'll get the local response
4. If not, the AI will generate a response

## API Costs

- **OpenAI**: Pay-as-you-go (costs vary based on model and usage)
- **Google Gemini**: Free tier with generous limits (50 requests per minute)
- **Hugging Face**: Free tier available (rate limits apply)

## Troubleshooting

### Issue: "API Key is invalid"

- Check that your API key is correctly copied
- Make sure there are no extra spaces or quotes
- Verify the key is active on the provider's dashboard

### Issue: "CORS Error"

- This might indicate the API provider doesn't support direct browser calls
- Consider using a backend proxy for production

### Issue: "Chatbox shows placeholder responses"

- Check that `.env.local` has the correct VITE_API_KEY
- Restart the development server after updating `.env.local`
- Check the browser console for error messages

## Adding a New AI Provider

To add a new AI provider:

1. Edit `src/services/aiService.js`
2. Add a new function like `callMyProvider(prompt)`
3. Update the `callAI()` function to handle the new provider
4. Update the `.env.local` with the new provider name

Example:

```javascript
const callMyProvider = async (prompt) => {
  const response = await fetch("https://api.myprovider.com/generate", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: prompt }),
  });
  const data = await response.json();
  return data.result;
};
```

## Production Deployment

For production:

1. **Use a Backend Proxy**: Don't expose API keys in frontend code
2. **Set Environment Variables**: Use your hosting provider's environment variable settings
3. **Rate Limiting**: Implement rate limiting on your backend
4. **Error Handling**: Implement user-friendly error messages

Example backend proxy (Node.js):

```javascript
app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;
  const response = await callAI(prompt);
  res.json({ response });
});
```

## File Structure

```
src/
├── components/
│   ├── Chatbox.jsx          (New: AI chatbox component)
│   ├── InstructionBox.jsx   (Updated: now uses AI for unknown topics)
│   └── ... (other components)
├── services/
│   └── aiService.js         (New: AI API integration service)
├── data/
│   └── responses.js
└── App.jsx                  (Updated: includes Chatbox)

.env.local                    (Updated: AI configuration)
```

## Next Steps

1. Choose and configure your AI provider
2. Test the Chatbox component
3. Test the enhanced Instruction Box with unknown topics
4. Deploy with proper backend security for production

Enjoy your AI-powered instruction tuning simulator! 🚀
