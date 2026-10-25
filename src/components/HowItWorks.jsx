const steps = [
  ['01', 'User Instruction', 'The user provides a question or instruction using natural language.'],
  ['02', 'Instruction Processing', 'The system analyzes the instruction and identifies the relevant information.'],
  ['03', 'Response Generation', "The system generates a response designed to follow the user's instruction."],
]

function HowItWorks() {
  return <section id="how-it-works" className="border-y border-slate-200 bg-white py-20"><div className="mx-auto max-w-6xl px-5 md:px-8"><div className="mb-12 max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-indigo-600">The simple loop / 03</p><h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">How It Works</h2><p className="mt-4 leading-7 text-slate-500">Instruction tuning is about making the model’s output more useful, predictable, and aligned with what a person asked for.</p></div><div className="grid gap-5 md:grid-cols-3">{steps.map(([number, title, description]) => <article key={number} className="relative rounded-2xl border border-slate-200 bg-[#f7f8fc] p-6"><span className="text-sm font-bold text-indigo-600">{number}</span><h3 className="mt-12 text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{description}</p></article>)}</div><div className="mt-8 hidden items-center justify-center gap-3 text-sm font-bold text-indigo-600 md:flex"><span>User Instruction</span><span>→</span><span>Instruction Processing</span><span>→</span><span>Response Generation</span></div></div></section>
}
export default HowItWorks