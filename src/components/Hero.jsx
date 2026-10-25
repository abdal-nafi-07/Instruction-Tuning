function Hero() {
  return <section id="home" className="relative border-b border-[#d8d4c9] bg-[#f4f2ec]">
    <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 lg:px-8 lg:pb-20 lg:pt-20">
      <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div><p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[#e66b3d]">Instruction tuning workspace / v1.0</p><h1 className="max-w-3xl text-5xl font-bold leading-[.98] tracking-tight text-[#18252b] md:text-7xl">Teach a model<br /><span className="text-[#e66b3d]">how to listen.</span></h1><p className="mt-6 max-w-xl text-lg leading-8 text-[#687477]">A hands-on lab for seeing how examples turn a raw language model into a useful assistant.</p></div>
      </div>
      <div className="grid gap-4 rounded-2xl border border-[#18252b] bg-[#18252b] p-3 shadow-[8px_8px_0_#c7f36b] md:grid-cols-[1.15fr_.85fr] md:p-4">
        <div className="rounded-xl bg-[#26363c] p-6 text-white md:p-8"><div className="mb-12 flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.2em] text-[#c7f36b]">Live session</span><span className="rounded-full border border-white/20 px-3 py-1 text-xs text-[#b5c0bd]">local dataset</span></div><p className="mb-3 text-sm text-[#b5c0bd]">Current objective</p><p className="max-w-lg text-2xl font-semibold leading-9 md:text-3xl">Convert natural language instructions into clear, helpful responses.</p><a href="#simulator" className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#c7f36b] px-5 py-3 font-bold text-[#18252b] transition hover:bg-white">Start tuning <span aria-hidden="true">↗</span></a></div>
        <div className="rounded-xl bg-[#f7f5ef] p-6 md:p-8"><div className="mb-7 flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.2em] text-[#8b9692]">Response preview</span><span className="text-xs font-bold text-[#e66b3d]">02.4s</span></div><div className="space-y-4 text-sm"><div className="border-l-2 border-[#e66b3d] pl-4"><p className="mb-1 text-xs font-bold uppercase text-[#8b9692]">Instruction</p><p className="font-semibold leading-6 text-[#263238]">Explain AI in simple words.</p></div><div className="border-l-2 border-[#c7f36b] pl-4"><p className="mb-1 text-xs font-bold uppercase text-[#8b9692]">Tuned output</p><p className="leading-6 text-[#687477]">AI helps computers do things that usually need human thinking.</p></div></div></div>
      </div>
    </div>
  </section>
}
export default Hero