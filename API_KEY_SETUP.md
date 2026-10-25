# API Key Setup Guide - How to Get Your Key Working

## ðŸŽ¯ Current Status

âœ… **Your app is running** and the chatbox is working with **simulated responses**  
âœ… **Instruction tuning is implemented** - ready for real AI responses  
âŒ **API key issue**: The key you provided doesn't match the expected format

## ðŸ” What Happened

The API key you provided was rejected by the Google Gemini API, so the credential has been removed from this guide. This could mean:

1. **Wrong key format** - Gemini keys from makersuite.google.com should start with `AIzaSy`
2. **Different service** - The key might be from a different Google service
3. **API changes** - Google's API format might have changed

## âœ… How to Get a Working API Key

### Option 1: Google Gemini (Recommended - Free)

**Step-by-step:**

1. Go to: **https://makersuite.google.com/app/apikey**
2. Sign in with your Google account
3. Click **"Create API key"**
4. Click **"Create API key in new project"**
5. Google will generate a key starting with `AIzaSy...` - **Copy this**
6. Paste it into `.env.local`:
   ```
   VITE_AI_PROVIDER=gemini
   VITE_API_KEY=AIzaSyD_your_copied_key_here
   ```
7. Restart server: `npm run dev`

### Option 2: OpenAI (More Powerful)

**Step-by-step:**

1. Go to: **https://platform.openai.com/api-keys**
2. Sign up or log in
3. Click **"Create new secret key"**
4. Copy the key starting with `sk-...`
5. Paste it into `.env.local`:
   ```
   VITE_AI_PROVIDER=openai
   VITE_API_KEY=sk_your_copied_key_here
   ```
6. Restart server: `npm run dev`

### Option 3: Hugging Face

**Step-by-step:**

1. Go to: **https://huggingface.co/settings/tokens**
2. Sign in or create account
3. Click **"New token"**
4. Copy the token
5. Paste it into `.env.local`:
   ```
   VITE_AI_PROVIDER=huggingface
   VITE_API_KEY=hf_your_copied_key_here
   ```
6. Restart server: `npm run dev`

## ðŸ“ Current Configuration

Your `.env.local` is currently set to:

```
VITE_AI_PROVIDER=openai
VITE_API_KEY=demo-mode-fallback
```

This shows **simulated responses** - great for testing the UI, but not real AI.

## ðŸš€ Next Steps

1. **Choose a provider** (I recommend Gemini for free tier)
2. **Get your API key** from the provider's website
3. **Update `.env.local`** with your real key
4. **Restart** the development server: `npm run dev`
5. **Test** by asking a question in the chatbox
6. **Watch it respond** with real AI-powered answers!

## âš ï¸ Troubleshooting

### Still showing "simulated response"?

- Make sure you replaced the placeholder with your ACTUAL key
- Make sure the key format matches the provider:
  - Gemini: starts with `AIzaSy`
  - OpenAI: starts with `sk-`
  - Hugging Face: starts with `hf_`
- Restart the server after updating `.env.local`

### Getting errors?

- Check the browser console (F12) for error messages
- Make sure the API key is valid and has quota remaining
- Try using a different provider if one fails

### Rate limited?

- Free tiers have request limits
- Wait a moment between messages
- Consider upgrading to a paid plan

## ðŸŽ“ How Instruction Tuning Works in Your App

Once you add a valid API key, here's what happens:

1. **User types question** â†’ "What is machine learning?"
2. **System prompt (instruction)** â†’ Tells AI: "Be educational and clear"
3. **AI receives both** â†’ The instruction + the question
4. **AI responds** â†’ Follows the instruction to answer your question
5. **Response appears** â†’ In the chatbox

### The System Prompt

Your app uses this instruction to train the AI's behavior:

```
"You are a helpful AI assistant for an Instruction Tuning simulator.
Provide clear, concise, and educational responses about AI and machine learning concepts."
```

You can customize this in [src/services/aiService.js](src/services/aiService.js) to change how the AI responds!

## ðŸ’¡ Example Configuration

After getting your key, your `.env.local` should look like:

**For Google Gemini:**

```
VITE_AI_PROVIDER=gemini
VITE_API_KEY=AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**For OpenAI:**

```
VITE_AI_PROVIDER=openai
VITE_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Then:

```bash
npm run dev
```

## âœ¨ What You'll Get

Once configured with a real API key:

- âœ… Real AI responses to any question
- âœ… Context-aware conversations
- âœ… Understanding of instruction tuning concepts
- âœ… Responses beyond predefined dataset
- âœ… Working example of instruction-tuned AI

## ðŸ“ž Still Need Help?

- Check the error message in browser console (F12)
- Verify your API key is correct
- Try a different provider
- Make sure your API key has access to the models (not expired or disabled)

Your app is ready - just needs the right API key! ðŸŽ‰
