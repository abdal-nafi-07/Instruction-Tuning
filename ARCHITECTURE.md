# System Architecture & Flow Diagrams

## Overall System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    INSTRUCTION TUNING SIMULATOR                  │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                       APP.JSX (Main)                      │   │
│  │  Renders all components in a single page application     │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                    │
│        ┌─────────────────────┼─────────────────────┐             │
│        │                     │                     │             │
│   ┌────▼────┐         ┌──────▼──────┐       ┌────▼────┐        │
│   │ Navbar  │         │InstructionBox│       │ Chatbox │   ✨NEW│
│   │         │         │    + AI      │   ✨  │   + AI  │        │
│   └─────────┘         │              │       │         │        │
│                       └──────┬───────┘       └────┬────┘        │
│                              │                    │              │
│        ┌─────────────────────┴────────────────────┘              │
│        │                                                          │
│   ┌────▼──────────────────────────────────────┐                │
│   │          AI Service Module                │            ✨NEW│
│   │   (aiService.js)                          │                │
│   │                                           │                │
│   │  ┌─────────────────────────────────────┐ │                │
│   │  │  API Provider Selector              │ │                │
│   │  │  ├─ OpenAI (gpt-3.5-turbo)         │ │                │
│   │  │  ├─ Google Gemini (gemini-pro)     │ │                │
│   │  │  └─ Hugging Face (Mistral-7B)      │ │                │
│   │  └─────────────────────────────────────┘ │                │
│   │           │                               │                │
│   │  ┌────────▼────────────────────────────┐ │                │
│   │  │  Environment Variables (.env.local) │ │                │
│   │  │  ├─ VITE_AI_PROVIDER               │ │                │
│   │  │  └─ VITE_API_KEY                   │ │                │
│   │  └────────────────────────────────────┘ │                │
│   └────────────────────────────────────────┘                │
│        │         │         │                                 │
│        │         │         └──► To External AI APIs          │
│        │         │                                            │
│        ├─────────┴──────► Local Knowledge Base               │
│        │                  (responses.js)                      │
│        │                                                      │
│        └──► Error Handling & Fallback Messages               │
│                                                               │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow: User Asks Question

### Scenario 1: Known Topic (in knowledge base)

```
┌─────────────────────────────────────────────────────────────┐
│ User Types: "Explain machine learning"                       │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │  InstructionBox.jsx    │
        │  Normalizes input      │
        └────────┬───────────────┘
                 │
                 ▼
    ┌────────────────────────────────────┐
    │ Search Local Knowledge Base        │
    │ (simulatorResponses array)         │
    └────────┬───────────────────────────┘
             │
             ▼
    ┌──────────────────┐
    │ Match Found? ✓   │
    └────────┬─────────┘
             │
             ▼
    ┌────────────────────────────────────┐
    │ Return Predefined Response         │
    │ ├─ Topic: "Machine Learning"       │
    │ └─ Pre-written answer              │
    └────────┬─────────────────────────────┘
             │
             ▼
    ┌────────────────────────────────────┐
    │ Display in Blue Box                │
    │ - Shows as "Instruction-tuned"     │
    │ - Local response (fast)            │
    └────────────────────────────────────┘
```

### Scenario 2: Unknown Topic (uses AI)

```
┌─────────────────────────────────────────────────────────────┐
│ User Types: "Tell me about blockchain in simple terms"      │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │  InstructionBox.jsx    │
        │  Normalizes input      │
        └────────┬───────────────┘
                 │
                 ▼
    ┌────────────────────────────────────┐
    │ Search Local Knowledge Base        │
    │ (simulatorResponses array)         │
    └────────┬───────────────────────────┘
             │
             ▼
    ┌──────────────────┐
    │ Match Found? ✗   │
    └────────┬─────────┘
             │
             ▼
    ┌────────────────────────────────────┐
    │ Call AI Service                    │
    │ (aiService.js)                     │
    └────────┬─────────────────────────────┘
             │
             ▼
    ┌────────────────────────────────────┐
    │ Check .env.local for:              │
    │ ├─ VITE_AI_PROVIDER                │
    │ └─ VITE_API_KEY                    │
    └────────┬─────────────────────────────┘
             │
      ┌──────┴──────┬──────────┐
      │             │          │
      ▼             ▼          ▼
   OpenAI        Gemini    HuggingFace
   API Call      API Call   API Call
      │             │          │
      └──────┬──────┴──────────┘
             │
             ▼
    ┌────────────────────────────────┐
    │ API Response Received          │
    │ "Blockchain is a distributed..." │
    └────────┬─────────────────────────┘
             │
             ▼
    ┌────────────────────────────────────┐
    │ Display in Blue Box                │
    │ - Shows as "AI Generated Response" │
    │ - Mark indicates AI-generated      │
    │ - Real-time AI response           │
    └────────────────────────────────────┘
```

## Chatbox Data Flow

```
                    ┌──────────────────┐
                    │ User Types Query │
                    └────────┬─────────┘
                             │
                    ┌────────▼──────────┐
                    │  Press Enter or   │
                    │  Click Send       │
                    └────────┬──────────┘
                             │
              ┌──────────────▼──────────────┐
              │ Add User Message to Chat    │
              │ Display in Message History  │
              └──────────────┬──────────────┘
                             │
                    ┌────────▼──────────┐
                    │ Show Loading...   │
                    │ (Animated dots)   │
                    └────────┬──────────┘
                             │
                    ┌────────▼──────────────────────┐
                    │ Call callAI(userMessage)      │
                    │ from aiService.js             │
                    └────────┬─────────────────────┘
                             │
              ┌──────────────▼──────────────┐
              │ Route to Provider:          │
              │ ├─ OpenAI API               │
              │ ├─ Gemini API               │
              │ └─ HuggingFace API          │
              └──────────────┬──────────────┘
                             │
                    ┌────────▼──────────────┐
                    │ Receive AI Response   │
                    │ (text string)         │
                    └────────┬──────────────┘
                             │
              ┌──────────────▼──────────────┐
              │ Add AI Message to Chat      │
              │ - Auto-scroll to bottom     │
              │ - Show timestamp           │
              │ - Message styling (AI box)  │
              └──────────────┬──────────────┘
                             │
                    ┌────────▼──────────────┐
                    │ User can continue     │
                    │ asking questions      │
                    │ Chat history preserved│
                    └───────────────────────┘
```

## Component Hierarchy

```
App.jsx
├── Navbar.jsx
│   └── Navigation Links (including "Chatbox")
│
├── Hero.jsx
│   └── Landing section
│
├── InstructionBox.jsx (UPDATED)
│   └── Uses aiService.js for unknown topics
│       └── Imports callAI from aiService
│
├── Chatbox.jsx (NEW)
│   └── Uses aiService.js for all responses
│       └── Imports callAI from aiService
│
├── HowItWorks.jsx
│   └── Educational content
│
├── Comparison.jsx
│   └── Local vs AI comparison
│
├── Dataset.jsx
│   └── Shows training data
│
├── About.jsx
│   └── About section
│
└── Footer.jsx
    └── Footer content
```

## AI Service Module Architecture

```
aiService.js
│
├── Environment Variables
│   ├── VITE_AI_PROVIDER (openai|gemini|huggingface)
│   └── VITE_API_KEY (user's API key)
│
├── Main Export Function
│   └── callAI(prompt)
│       │
│       ├─ Check if API_KEY exists
│       ├─ Route to appropriate provider
│       │  ├── callOpenAI(prompt)
│       │  ├── callGemini(prompt)
│       │  └── callHuggingFace(prompt)
│       ├─ Catch errors
│       └── Return response or fallback message
│
├── Provider-Specific Functions
│   │
│   ├── callOpenAI(prompt)
│   │   ├─ Endpoint: api.openai.com/v1/chat/completions
│   │   ├─ Model: gpt-3.5-turbo
│   │   ├─ System: "You are helpful AI..."
│   │   └─ Return: text response
│   │
│   ├── callGemini(prompt)
│   │   ├─ Endpoint: generativelanguage.googleapis.com
│   │   ├─ Model: gemini-pro
│   │   └─ Return: text response
│   │
│   └── callHuggingFace(prompt)
│       ├─ Endpoint: api-inference.huggingface.co
│       ├─ Model: mistralai/Mistral-7B
│       └─ Return: text response
│
└── Fallback Function
    └── getDefaultResponse(prompt)
        └─ Returns helpful instructions if API unavailable
```

## Request/Response Flow for API Calls

```
┌─────────────────────────────────────────────────────────────┐
│ BROWSER (Frontend)                                          │
│                                                              │
│ ┌────────────────────────────────────────────────────────┐  │
│ │ JavaScript Code (aiService.js)                         │  │
│ │ - Builds request                                       │  │
│ │ - Sets headers                                         │  │
│ │ - Includes API key                                     │  │
│ └─────────────────┬──────────────────────────────────────┘  │
└──────────────────┼─────────────────────────────────────────┘
                   │
                   │ HTTP POST Request
                   │ Headers: Authorization: Bearer API_KEY
                   │ Body: { model: ..., messages: [...] }
                   │
    ┌──────────────┴────────────────┐
    │                               │
    ▼                               ▼
 OpenAI API                    Google/HuggingFace API
 Validates key                 Validates key
 Processes prompt              Processes prompt
 Generates response            Generates response
    │                               │
    │ HTTP 200 OK                   │ HTTP 200 OK
    │ { choices: [...] }            │ { candidates: [...] }
    │                               │
    └──────────────┬────────────────┘
                   │
                   │ Response received
                   │
    ┌──────────────▼─────────────────────┐
    │ Parse JSON response                │
    │ Extract text content               │
    │ Return to React component          │
    └──────────────┬─────────────────────┘
                   │
    ┌──────────────▼──────────────────────────────┐
    │ React Component (Chatbox/InstructionBox)    │
    │ - Update state with response                │
    │ - Re-render with AI message                 │
    │ - Display to user                           │
    └────────────────────────────────────────────┘
```

## Error Handling Flow

```
┌─────────────────┐
│ API Call Made   │
└────────┬────────┘
         │
         ▼
    ┌─────────────────────┐
    │ Try-Catch Block     │
    └────────┬────────────┘
             │
    ┌────────▼──────────┐
    │ Response OK?      │
    └─┬──────────────┬──┘
      │              │
     YES             NO
      │              │
      │        ┌─────▼────────────────┐
      │        │ Catch Error          │
      │        │ - Log to console     │
      │        │ - Throw new Error    │
      │        └──────┬───────────────┘
      │               │
      │        ┌──────▼────────────────┐
      │        │ Component Catches     │
      │        │ - Set error state     │
      │        │ - Show error message  │
      │        │ - Provide fallback    │
      │        └──────┬───────────────┘
      │               │
      │        ┌──────▼────────────────────┐
      │        │ User Sees:                │
      │        │ "API unavailable,         │
      │        │  please configure..."     │
      │        └───────────────────────────┘
      │
      └─────────┐
                │
        ┌───────▼────────────────────┐
        │ Parse & Extract Response   │
        │ Return to Component        │
        └───────┬────────────────────┘
                │
        ┌───────▼────────────────────┐
        │ Update React State         │
        │ Component Re-renders       │
        │ Show AI Response to User   │
        └────────────────────────────┘
```

---

This architecture ensures:

- ✅ Clean separation of concerns
- ✅ Reusable AI service layer
- ✅ Flexible provider switching
- ✅ Robust error handling
- ✅ Easy testing and maintenance
- ✅ Scalable for future features
