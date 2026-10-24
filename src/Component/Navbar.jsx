import { MenuIcon, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 z-30 w-full px-auto transition-all duration-300 ${scrolled ? 'bg-ink/80 backdrop-blur-md border-b border-line' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
          <a href="#top" className="font-serif text-2xl tracking-tight">
            {site.name}<span className="text-gold">.</span>
          </a>
          <div className="hidden gap-10 text-sm md:flex">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="text-muted transition hover:text-gold">{l.name}</a>
            ))}
          </div>
          <a href="#reserve" className="btn-gold hidden !py-2.5 text-sm md:inline-flex">Book a table</a>
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="rounded-md border border-line p-2 md:hidden">
            <MenuIcon />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-ink/95 backdrop-blur-md transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="font-serif text-3xl transition hover:text-gold">{l.name}</a>
          ))}
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="mt-4 rounded-full border border-line p-3">
            <XIcon />
          </button>
        </div>
      </div>
    </>
  )
}
