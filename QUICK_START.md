# Quick Start Guide - AI Integration

## What's New ✨

Your Instruction Tuning Simulator now has full AI chatbox integration! Here's what was added:

### New Components

1. **Chatbox Component** - A full-featured AI chat interface
2. **Enhanced InstructionBox** - Now uses AI for unknown topics
3. **AI Service Module** - Flexible integration with multiple AI providers

### New Features

- 💬 Interactive chatbox with message history
- 🤖 AI-powered responses for unknown questions
- 🔄 Support for OpenAI, Google Gemini, and Hugging Face
- ⚡ Real-time loading indicators
- 🎨 Professional UI with message timestamps

## Setup (5 minutes)

### 1️⃣ Get an API Key

**Option A: OpenAI (Best quality)**

- Visit: https://platform.openai.com/api-keys
- Create a new secret key and copy it

**Option B: Google Gemini (Free tier)**

- Visit: https://makersuite.google.com/app/apikey
- Create API key and copy it

**Option C: Hugging Face (Free)**

- Visit: https://huggingface.co/settings/tokens
- Create a token and copy it

### 2️⃣ Add API Key to `.env.local`

Open `.env.local` in the project root and add:

```env
VITE_AI_PROVIDER=openai    # or 'gemini' or 'huggingface'
VITE_API_KEY=your_key_here
```

### 3️⃣ Restart Dev Server

```bash
npm run dev
```

## Using the Features

### Chat with the Chatbox

1. Scroll to "Chat with AI Assistant" section
2. Type your question (supports multi-line with Shift+Enter)
3. Click Send or press Enter
4. Get instant AI responses with chat history

### Enhanced Instruction Box

1. Type a question in "Try Instruction Tuning"
2. The simulator first checks its local knowledge base
3. If found → shows the predefined response
4. If not found → uses AI to generate a smart response
5. Clear indicator shows if response is local or AI-generated

## File Changes Summary

### New Files

- `src/services/aiService.js` - AI API integration
- `src/components/Chatbox.jsx` - Chat interface component
- `AI_SETUP.md` - Detailed setup documentation

### Modified Files

- `src/components/InstructionBox.jsx` - Added AI fallback
- `src/App.jsx` - Added Chatbox component
- `src/components/Navbar.jsx` - Added Chatbox navigation link
- `.env.local` - Added AI configuration

## Pricing Info

| Provider     | Cost                           | Free Tier         |
| ------------ | ------------------------------ | ----------------- |
| OpenAI       | Pay per use (~$0.0002/request) | ❌                |
| Gemini       | Pay per use                    | ✅ 50 req/min     |
| Hugging Face | Pay per use                    | ✅ (limits apply) |

## Troubleshooting

**Q: Chatbox shows placeholder text?**

- A: Make sure your API key is in `.env.local` and restart the server

**Q: Getting CORS errors?**

- A: This is normal for development. For production, use a backend proxy

**Q: Want to switch providers?**

- A: Just change `VITE_AI_PROVIDER` and `VITE_API_KEY` in `.env.local` and restart

## Next Steps

1. ✅ Configure your chosen AI provider
2. ✅ Test the chatbox
3. ✅ Try asking questions outside the knowledge base
4. ✅ Consider setting up a backend proxy for production

## Support Files

- 📖 Full setup guide: See `AI_SETUP.md`
- 📝 Implementation details: Check `src/services/aiService.js`
- 🎨 Chat UI: Check `src/components/Chatbox.jsx`

Happy chatting! 🚀
