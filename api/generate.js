const instructionSystemPrompt = `You are an instruction-following language model in an instruction tuning simulator.
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

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.API_KEY) {
    return response.status(500).json({ error: 'Gemini API key is not configured on Vercel' })
  }

  const prompt = typeof request.body?.prompt === 'string' ? request.body.prompt.trim() : ''
  if (!prompt) {
    return response.status(400).json({ error: 'Prompt is required' })
  }

  let lastError = null

  for (const modelName of GEMINI_MODELS) {
    try {
      const geminiResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${process.env.API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `${instructionSystemPrompt}\n\nNatural-language instruction:\n${prompt}\n\nFollow the instruction and return only the final answer for the user.`,
                  },
                ],
              },
            ],
            generationConfig: { temperature: 0.7, maxOutputTokens: 1800 },
          }),
        },
      )

      const data = await geminiResponse.json().catch(() => ({}))
      if (!geminiResponse.ok) {
        lastError = data.error?.message || `Gemini request failed (${geminiResponse.status})`
        continue
      }

      return response.status(200).json({
        text: data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated',
      })
    } catch (error) {
      lastError = error.message
    }
  }

  return response.status(502).json({ error: lastError || 'Unable to reach Gemini' })
}
