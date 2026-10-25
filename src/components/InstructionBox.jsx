import { useState } from 'react'
import { simulatorResponses } from '../data/responses'
import { callAI } from '../services/aiService'

function InstructionBox() {
  const [instruction, setInstruction] = useState('')
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const generate = async () => {
    const normalized = instruction.trim().toLowerCase()
    if (!normalized) return setResult({ message: 'Please enter an instruction first.' })

    const match = simulatorResponses.find(({ keywords }) =>
      keywords.some((keyword) => normalized.includes(keyword))
    )

    if (match) {
      setResult({ topic: match.topic, message: match.response })
      return
    }

    setIsLoading(true)
    try {
      const aiResponse = await callAI(instruction.trim())
      setResult({
        message: aiResponse,
      })
    } catch (error) {
      console.error('Error calling AI:', error)
      setResult({
        topic: 'Response',
        message: `This instruction is outside the sample dataset. The AI service is currently unavailable. Please configure your API key to enable AI responses.`,
        error: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="simulator" className="scroll-mt-20 border-b border-[#d8d4c9] bg-[#eeece5] py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-6">
        
          <h2 className="text-3xl font-bold tracking-tight text-[#18252b] md:text-4xl">Instruction</h2>
        </div>

        <div className="grid w-full gap-5">
          <div className="w-full rounded-2xl border border-[#d8d4c9] bg-[#fdfcf8] p-5 shadow-sm md:p-8">
            <div className="mb-4 flex items-center justify-between">
              <label htmlFor="instruction" className="text-sm font-bold text-[#263238]">Input</label>
              
            </div>

            <textarea
              id="instruction"
              value={instruction}
              onChange={(event) => setInstruction(event.target.value)}
              placeholder="Example: Explain Artificial Intelligence in simple words"
              rows="1"
              disabled={isLoading}
              className="h-10 w-full resize-y rounded-xl border border-[#d8d4c9] bg-[#f4f2ec] p-2 text-sm leading-5 text-[#263238] outline-none transition placeholder:text-[#9aa39f] focus:border-[#e66b3d] focus:ring-4 focus:ring-[#e66b3d]/10 disabled:opacity-50"
            />

            <button type="button" onClick={generate} disabled={isLoading} className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#18252b] px-5 py-3.5 font-bold text-white transition hover:bg-[#e66b3d] disabled:cursor-not-allowed disabled:opacity-50">
              {isLoading ? (
                <>
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                  Generating...
                </>
              ) : (   
                <>
                  Run instruction <span aria-hidden="true">↗</span>
                </>
              )}
            </button>

            {result && (
              <div className={`mt-6 border-l-4 p-5 ${result.error ? 'border-red-500 bg-red-50' : 'border-indigo-500 bg-indigo-50'}`} role="status">
                <div className="mb-2 flex items-center justify-between gap-4">
                  {result.topic && <span className={`rounded-full px-3 py-1 text-xs font-semibold ${result.error ? 'bg-red-100 text-red-700' : 'bg-white text-indigo-700'}`}>{result.topic}</span>}
                </div>
                <p className={`leading-7 ${result.error ? 'text-red-700' : 'text-slate-700'}`}>{result.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstructionBox