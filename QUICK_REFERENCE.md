# Quick Reference Card - AI Integration Commands

## 🚀 One-Minute Setup

```bash
# 1. Get an API key from one of these:
# OpenAI: https://platform.openai.com/api-keys
# Gemini: https://makersuite.google.com/app/apikey
# Hugging Face: https://huggingface.co/settings/tokens

# 2. Edit .env.local in project root:
VITE_AI_PROVIDER=openai
VITE_API_KEY=your_key_here

# 3. Run dev server:
npm run dev

# 4. Visit http://localhost:5173
# 5. Go to "Chat with AI Assistant" section
# 6. Start asking questions!
```

## 📋 File Reference

| File                                | Purpose            | Status     |
| ----------------------------------- | ------------------ | ---------- |
| `src/services/aiService.js`         | AI API integration | ✨ NEW     |
| `src/components/Chatbox.jsx`        | Chat UI component  | ✨ NEW     |
| `src/components/InstructionBox.jsx` | Enhanced Q&A       | 📝 UPDATED |
| `src/App.jsx`                       | Main app           | 📝 UPDATED |
| `.env.local`                        | Configuration      | 📝 UPDATED |
| `QUICK_START.md`                    | Getting started    | ✨ NEW     |
| `AI_SETUP.md`                       | Detailed setup     | ✨ NEW     |
| `ARCHITECTURE.md`                   | System design      | ✨ NEW     |
| `IMPLEMENTATION_SUMMARY.md`         | What was built     | ✨ NEW     |

## 🔑 API Provider Comparison

| Provider    | Cost        | Free? | Quality    | Speed  | Setup |
| ----------- | ----------- | ----- | ---------- | ------ | ----- |
| OpenAI      | $0.0002/req | ❌    | ⭐⭐⭐⭐⭐ | Fast   | Easy  |
| Gemini      | Pay per use | ✅    | ⭐⭐⭐⭐   | Fast   | Easy  |
| HuggingFace | Pay per use | ✅    | ⭐⭐⭐     | Medium | Easy  |

## 🎯 Common Tasks

### Switch AI Provider

```env
# In .env.local:
VITE_AI_PROVIDER=gemini        # Change to Gemini
VITE_AI_PROVIDER=huggingface   # Change to Hugging Face
VITE_API_KEY=new_key_here      # Update API key
```

### Change Response Length

```javascript
// In src/services/aiService.js
// OpenAI - change max_tokens
max_tokens: 1000,  // Longer responses

// Gemini - change maxOutputTokens
maxOutputTokens: 1000,

// HuggingFace - change max_length
max_length: 1000,
```

### Customize System Message

```javascript
// In src/services/aiService.js
// Find the system role message and edit:
role: 'system',
content: 'You are an expert in [YOUR TOPIC]...',
```

### Test API Connection

```javascript
// In browser console:
import { callAI } from "./services/aiService";
callAI("Hello, test this").then(console.log);
```

## ⚡ Hot Fixes

### Chatbox shows "Configure API"

→ Check API key in `.env.local`, restart server

### CORS errors

→ Normal in development, use backend proxy for production

### Slow responses

→ API might be busy, wait and retry

### Wrong provider responses

→ Verify VITE_AI_PROVIDER matches your API key provider

## 📱 Component Props Reference

### Chatbox Component

```jsx
<Chatbox />
// No props required
// Self-contained with internal state
```

### InstructionBox Component

```jsx
<InstructionBox />
// No props required
// Uses aiService internally
```

## 🔐 Security Checklist

- [ ] API key is in `.env.local` (not committed)
- [ ] `.env.local` is in `.gitignore`
- [ ] No API keys in code files
- [ ] Using environment variables
- [ ] Backend proxy for production
- [ ] Rate limiting implemented
- [ ] Error messages don't leak API details

## 🧪 Testing Checklist

- [ ] Local topics work (shows predefined response)
- [ ] Unknown topics work (uses AI)
- [ ] Chatbox receives and sends messages
- [ ] Loading indicators appear
- [ ] Error messages display correctly
- [ ] API key validation works
- [ ] All buttons are clickable
- [ ] Mobile responsive

## 📊 Monitoring & Debugging

### Check if API works

```bash
# In terminal:
curl -X POST https://api.openai.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"Hi"}]}'
```

### View browser logs

```javascript
// Open DevTools (F12)
// Console tab shows:
// - API calls
// - Errors
// - Response times
```

### Check .env loading

```javascript
// In browser console:
console.log(import.meta.env.VITE_API_KEY);
console.log(import.meta.env.VITE_AI_PROVIDER);
```

## 📚 Documentation Map

```
Start Here → QUICK_START.md
    │
    ├─ How to setup → AI_SETUP.md
    ├─ How it works → ARCHITECTURE.md
    ├─ What was built → IMPLEMENTATION_SUMMARY.md
    └─ Code details → See source files
```

## 🔗 Quick Links

- **OpenAI Dashboard**: https://platform.openai.com
- **Gemini AI Studio**: https://makersuite.google.com
- **Hugging Face**: https://huggingface.co
- **React Docs**: https://react.dev
- **Vite Guide**: https://vitejs.dev

## 💬 Getting Help

**Issue: Not sure which API to choose?**
→ Start with Google Gemini (free tier)

**Issue: Don't know what API key to use?**
→ Visit the provider's dashboard from Quick Links

**Issue: Code not working?**
→ Check IMPLEMENTATION_SUMMARY.md troubleshooting section

**Issue: Want to customize?**
→ See ARCHITECTURE.md for system design

## 🎉 You're All Set!

Next steps:

1. ✅ Get API key
2. ✅ Update `.env.local`
3. ✅ Run `npm run dev`
4. ✅ Test the chatbox
5. ✅ Enjoy! 🚀

---

**Pro Tip**: Start with a free API tier (Gemini) to test everything works, then upgrade if needed.
