import { useState } from 'react'

const links = [['Workspace', 'simulator']]

function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="sticky top-0 z-20 border-b border-[#d8d4c9] bg-[#f4f2ec]/90 backdrop-blur-md">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
      <a href="#home" className="flex items-center gap-3 font-bold tracking-tight text-[#18252b]" onClick={() => setOpen(false)}>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#c7f36b] text-sm font-black text-[#18252b] shadow-[3px_3px_0_#18252b]">IT</span>
        <span>instruction<span className="text-[#e66b3d]">.lab</span></span>
      </a>
      <button className="rounded-md p-2 text-[#263238] md:hidden" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>☰</button>
      <div className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-4 border-b border-[#d8d4c9] bg-[#f4f2ec] px-5 py-5 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:px-0 md:py-0`}>
        {links.map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-[#687477] transition hover:text-[#e66b3d]" onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#simulator" className="rounded-lg bg-[#18252b] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#e66b3d]" onClick={() => setOpen(false)}>Open workspace</a>
      </div>
    </nav>
  </header>
}

export default Navbar