// AI Service Module for Google Gemini
// Configure via VITE_API_KEY in .env.local

const API_PROVIDER = 'gemini'
const API_KEY = import.meta.env.VITE_API_KEY

const INSTRUCTION_SYSTEM_PROMPT = `You are an instruction-following language model in an instruction tuning simulator.
Interpret each user message as a natural-language instruction, not just a topic label.
Follow the requested task, audience, tone, language, length, and output format when they are provided.
For unfamiliar topics, answer using your learned knowledge instead of saying the topic is outside a dataset.
If the request is ambiguous, make a reasonable assumption and state it briefly.
Do not claim certainty about facts you do not know. Be accurate, useful, and detailed.
Unless the user asks for a different length, give a thorough explanation in about three to five short paragraphs. Explain important ideas step by step and include useful examples or context.
Use simple, easy-to-understand language. Explain technical words when needed and write like a helpful person, not like a formal report.
Start with the answer. Avoid canned openings, repeated conclusions, unnecessary headings, and phrases like "As an AI" or "I would be happy to".
Use short paragraphs and only use a list when it genuinely makes the answer easier to read.
Return only the answer, with no commentary about how you generated it.`

const GEMINI_MODELS = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-flash-latest']

export const callAI = async (prompt) => {
  if (!API_KEY) {
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Gemini proxy request failed')
      return data.text
    } catch (error) {
      console.error('Gemini proxy error:', error)
      return getDefaultResponse(prompt)
    }
  }

  try {
    if (API_PROVIDER === 'gemini') {
      return await callGemini(prompt)
    }
    return getDefaultResponse(prompt)
  } catch (error) {
    console.error('AI API Error:', error)
    return getDefaultResponse(prompt)
  }
}

const buildFallbackAnswer = (prompt) => {
  const trimmedPrompt = (prompt || '').trim()
  if (!trimmedPrompt) {
    return 'Please enter an instruction first.'
  }

  const normalizedPrompt = trimmedPrompt.toLowerCase()

  if (normalizedPrompt.includes('hallucination')) {
    return 'An AI hallucination happens when an AI gives an answer that sounds believable but includes information that is wrong, unsupported, or made up. Language models learn patterns in text and use those patterns to create responses; they do not always check each fact against a reliable source. For example, a chatbot might invent a research paper title and describe it as real. A confident tone does not prove that an answer is true. Check important claims using trustworthy sources, especially when they could affect health, money, legal matters, or safety.'
  }

  if (normalizedPrompt.includes('large language model') || normalizedPrompt.includes('llm')) {
    return 'A Large Language Model, or LLM, is an AI program trained on a very large collection of text. It learns patterns in how words and sentences are used, then uses those patterns to create a response when someone gives it a request. An LLM can answer questions, summarize documents, translate text, help draft messages, and assist with some coding tasks. It can sound confident even when it is mistaken, because creating natural-sounding text is not the same as checking facts. Use it as a helpful tool and verify important details with reliable sources.'
  }

  if (normalizedPrompt.includes('natural language processing') || normalizedPrompt.includes('nlp')) {
    return 'Natural Language Processing, or NLP, is a part of AI that helps computers work with human language. It can help a computer understand a written question, turn speech into text, translate a message, find the feeling in a review, or make a long article shorter. NLP is used in chatbots, voice assistants, translation apps, and search tools. Human language can be unclear or use words with more than one meaning, so a computer may sometimes misunderstand it. Clear wording and helpful context make it easier for these tools to respond well.'
  }

  if (normalizedPrompt.includes('chatbot')) {
    return 'A chatbot is a computer program that communicates with people through text or speech. Some chatbots follow a set of written rules, while AI chatbots can use language models to respond to a wider range of messages. They can answer common questions, explain ideas, or guide someone through a task. For example, a travel chatbot might explain how to change a booking. Chatbots can save time, but they may misunderstand a request or give an incorrect answer. Give clear details and check important information rather than assuming every response is correct.'
  }

  if (normalizedPrompt.includes('instruction tuning')) {
    return 'Instruction Tuning is a way of training an AI language model to follow people’s requests more clearly. During training, the model sees many examples that pair an instruction with a useful answer. The requests might ask it to explain an idea, summarize a passage, or write in a certain style. By learning from these pairs, the model gets better at understanding what a user wants and choosing a suitable response. This can make the model more helpful, but it cannot guarantee that every answer will be accurate, so important information should still be checked.'
  }

  return `Your instruction is: “${trimmedPrompt}” A helpful way to approach it is to identify the main goal, the audience, and any format or details requested. Then explain the key idea in clear steps, using everyday words and a relevant example where it helps. Be specific enough to answer the request, but avoid adding unrelated detail. For factual topics, check important claims with reliable sources because an AI-generated response can still contain mistakes.`
}

const getDefaultResponse = (prompt) => buildFallbackAnswer(prompt)

// Google Gemini API integration - Multiple endpoint fallbacks
const callGemini = async (prompt) => {
  let lastError = null

  for (const modelName of GEMINI_MODELS) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${INSTRUCTION_SYSTEM_PROMPT}\n\nNatural-language instruction:\n${prompt}\n\nFollow the instruction and return only the final answer for the user.`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1800,
          },
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
          return data.candidates[0].content.parts[0].text
        }
        return 'No response generated'
      }

      lastError = data.error?.message || `Endpoint failed (${response.status})`
    } catch (error) {
      lastError = error.message
    }
  }

  throw new Error(`Gemini API error: ${lastError || 'No valid Gemini model responded'}`)
}

export default {
  callAI,
}
