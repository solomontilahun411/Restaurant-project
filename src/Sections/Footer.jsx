import { Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, site } from '../data/data'

export default function Footer() {
  return (
    <footer className="px-auto mt-40 border-t border-line py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{site.name}<span className="text-gold">.</span></p>
          <p className="mt-3 max-w-xs text-muted">{site.tagline}</p>
        </div>
        <ul className="space-y-3 text-muted">
          <li className="flex items-center gap-3"><MapPin className="size-4 text-gold" />{site.address}</li>
          <li className="flex items-center gap-3"><Phone className="size-4 text-gold" /><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>
          <li className="flex items-center gap-3"><Mail className="size-4 text-gold" /><a href={`mailto:${site.email}`}>{site.email}</a></li>
        </ul>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted md:justify-end">
          {navLinks.map((l) => <a key={l.name} href={l.href} className="hover:text-gold">{l.name}</a>)}
          <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">Instagram</a>
          <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-gold">Facebook</a>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl text-sm text-muted/70">© {site.year} {site.name}. All rights reserved.</p>
    </footer>
  )
}
