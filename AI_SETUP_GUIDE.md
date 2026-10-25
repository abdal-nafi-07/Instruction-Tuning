# AI Setup Guide - Google Gemini Integration

Your instruction tuning simulator is now configured to use **Google Gemini AI** for intelligent responses to user questions!

## 🚀 Quick Start - Get Your Free API Key

### Step 1: Get Your Gemini API Key

1. Go to: **https://makersuite.google.com/app/apikey**
2. Click on **"Create API key"**
3. Click on **"Create API key in new project"**
4. Copy the generated API key

### Step 2: Add API Key to Your Project

1. Open the file: `.env.local` in the project root
2. Replace `your_gemini_api_key_here` with your actual API key
3. Save the file

Example:

```
VITE_AI_PROVIDER=gemini
VITE_API_KEY=AIzaSyD_example_key_here_1234567890
```

### Step 3: Restart Your Dev Server

```bash
npm run dev
```

## ✨ Features Enabled

Once configured, your chatbox will:

- ✅ Answer questions using instruction-tuned AI responses
- ✅ Understand context and provide relevant answers
- ✅ Handle questions beyond the predefined dataset
- ✅ Learn from instruction patterns to improve responses
- ✅ Support advanced NLP queries

## 🎯 How Instruction Tuning Works

Your AI is configured with a system prompt that:

1. **Sets the context**: Knows it's helping with an instruction tuning simulator
2. **Defines behavior**: Returns clear, educational, concise responses
3. **Ensures quality**: Focuses on AI and machine learning topics
4. **Follows instructions**: Responds appropriately to user requests

## 🔧 Customizing AI Behavior

To change how the AI responds, edit [src/services/aiService.js](src/services/aiService.js):

```javascript
role: 'system',
content: 'You are a helpful AI assistant for an Instruction Tuning simulator. Provide clear, concise, and educational responses about AI and machine learning concepts.'
```

Modify this prompt to instruct the AI differently!

## 🆘 Troubleshooting

### "No API Key" Error?

- Make sure your `.env.local` file has the correct API key
- Restart your development server after adding the key
- Check that the key is valid at makersuite.google.com

### Still Getting Default Responses?

- Clear your browser cache
- Check the browser console for error messages
- Verify the API key has not expired

### Rate Limiting?

- Gemini's free tier has request limits
- Wait a moment before sending another message
- Consider upgrading to a paid plan for higher limits

## 📚 Supported Providers

You can also use other AI providers by changing `.env.local`:

### OpenAI (GPT-3.5-turbo)

```
VITE_AI_PROVIDER=openai
VITE_API_KEY=sk-xxxxxxx...
```

Get key: https://platform.openai.com/api-keys

### Hugging Face

```
VITE_AI_PROVIDER=huggingface
VITE_API_KEY=hf_xxxxxxx...
```

Get key: https://huggingface.co/settings/tokens

## 📖 Learn More

- [Google Gemini Documentation](https://ai.google.dev/)
- [Instruction Tuning in AI](https://www.deeplearning.ai/)
- [LLM Fine-tuning Best Practices](https://platform.openai.com/docs/guides/fine-tuning)
