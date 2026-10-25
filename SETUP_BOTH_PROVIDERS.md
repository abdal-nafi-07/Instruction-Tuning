# Complete Setup Guide - OpenAI + Google Gemini

This guide will help you get BOTH AI providers working with your instruction tuning simulator.

## 🚀 Quick Setup Summary

You'll end up with:

- ✅ OpenAI API key (gpt-3.5-turbo)
- ✅ Google Gemini API key (from Google Cloud)
- ✅ Easy way to switch between them
- ✅ Full instruction-tuned AI chatbox

---

## 📋 OPTION 1: Setup OpenAI (Takes ~5 minutes)

### Step 1: Create OpenAI Account

1. Go to: **https://platform.openai.com/signup**
2. Sign up with email or Google
3. Verify your email

### Step 2: Add Payment Method

1. Go to: **https://platform.openai.com/account/billing/overview**
2. Click **"Add to invoice"** or **"Add payment method"**
3. Add a credit card (or use $5 free trial)

### Step 3: Create API Key

1. Go to: **https://platform.openai.com/api-keys**
2. Click **"Create new secret key"**
3. Copy the key (starts with `sk-`)
4. **Save it somewhere safe** - you won't see it again!

### Step 4: Update Your .env.local

```
VITE_AI_PROVIDER=openai
VITE_API_KEY=sk_your_copied_key_here_1234567890
```

### Step 5: Restart Dev Server

```bash
npm run dev
```

### Step 6: Test in Chatbox

Open http://localhost:5174 and ask a question - you should get a REAL AI response! ✨

---

## 📋 OPTION 2: Setup Google Gemini (Takes ~10 minutes)

### Step 1: Create Google Cloud Account

1. Go to: **https://console.cloud.google.com**
2. Sign in with Google (or create account)
3. Click **"Select a project"** → **"New Project"**
4. Name it: `instruction-tuning`
5. Click **"Create"**

### Step 2: Enable Generative Language API

1. Go to: **https://console.cloud.google.com/apis/library**
2. Search for: **"Generative Language API"**
3. Click on it → Click **"Enable"**
4. Wait for it to enable (takes ~1 minute)

### Step 3: Create API Key

1. Go to: **https://console.cloud.google.com/apis/credentials**
2. Click **"Create Credentials"** → **"API Key"**
3. Copy the key (will start with `AIzaSy`)
4. **Save it somewhere safe**

### Step 4: Update Your .env.local

```
VITE_AI_PROVIDER=gemini
VITE_API_KEY=AIzaSyD_your_copied_key_here
```

### Step 5: Restart Dev Server

```bash
npm run dev
```

### Step 6: Test in Chatbox

Open http://localhost:5174 and ask a question - should work with Gemini! ✨

---

## 🔄 Using BOTH: Easy Switching

Once you have both keys, create a `.env.local.backup` file and keep multiple versions:

### `.env.local` (using OpenAI)

```
VITE_AI_PROVIDER=openai
VITE_API_KEY=sk_xxxxxxxxxxxxxxxxxxxx
```

### `.env.local.gemini` (using Gemini)

```
VITE_AI_PROVIDER=gemini
VITE_API_KEY=AIzaSyD_xxxxxxxxxxxxxxxxxxxx
```

**To switch between them:**

1. Copy the version you want to `.env.local`
2. Restart: `npm run dev`

---

## 💰 Cost Comparison

| Provider             | Cost                                       | Speed  | Quality    |
| -------------------- | ------------------------------------------ | ------ | ---------- |
| **OpenAI (gpt-3.5)** | $0.50 - $1 per 1M tokens                   | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ |
| **Google Gemini**    | Free tier then $0.05 - $0.10 per 1M tokens | ⚡⚡⚡ | ⭐⭐⭐⭐   |

### Free Options:

- **OpenAI**: $5 free trial credit
- **Gemini**: 60 requests/minute free tier

---

## ✅ Step-by-Step Checklist

### For OpenAI:

- [ ] Create OpenAI account
- [ ] Add payment method
- [ ] Create API key (copy it!)
- [ ] Update `.env.local` with OpenAI key
- [ ] Restart `npm run dev`
- [ ] Test in chatbox
- [ ] See real AI responses! ✨

### For Gemini:

- [ ] Create Google Cloud account
- [ ] Create project
- [ ] Enable Generative Language API
- [ ] Create API key (copy it!)
- [ ] Update `.env.local` with Gemini key
- [ ] Restart `npm run dev`
- [ ] Test in chatbox
- [ ] See real AI responses! ✨

---

## 🧪 Testing Your Setup

Once configured, try asking the chatbox:

**Test Questions:**

1. "What is artificial intelligence?"
2. "Explain machine learning to me"
3. "How does instruction tuning work?"
4. "What are large language models?"
5. "Tell me about natural language processing"

If you get a full educational response (not the setup message), **you're live!** 🎉

---

## ⚠️ Troubleshooting

### "Still showing setup message"?

- Make sure you updated `.env.local` with your ACTUAL key
- Make sure you restarted the dev server after updating
- Check that you copied the entire key (don't miss characters)

### "Getting errors"?

- Check browser console (F12) for the actual error
- Make sure your API key is valid
- Make sure you enabled the right API (for Gemini)
- Try the other provider to confirm it works

### "Rate limited"?

- You've hit request limits
- Free tiers have limits (60/min for Gemini, etc.)
- Wait a moment or upgrade plan

### "Can't find my API key"?

- **OpenAI**: https://platform.openai.com/api-keys
- **Gemini**: https://console.cloud.google.com/apis/credentials

---

## 🎯 Recommended Path

**I recommend starting with OpenAI** because:

1. ✅ Easier setup (fewer steps)
2. ✅ Better responses out-of-the-box
3. ✅ $5 free trial to test
4. ✅ Clear documentation

**Then add Gemini** as a backup/alternative provider once OpenAI is working.

---

## 🚀 You're Ready!

Once you complete both setups, you'll have:

- ✅ A working instruction-tuning simulator
- ✅ Two AI providers to choose from
- ✅ Real AI-powered responses
- ✅ Easy switching between providers
- ✅ Production-ready app!

**Get started now:**

1. Pick OpenAI or Gemini first
2. Follow the steps above
3. Update `.env.local`
4. Run `npm run dev`
5. Ask the chatbot a question
6. **Boom!** 🎉 Real AI responses!

---

## 📞 Need Help?

- **OpenAI Issues?** → https://help.openai.com
- **Gemini Issues?** → https://ai.google.dev/tutorials
- **General Help?** → Check browser console for error messages (F12)
