import { MapPin } from 'lucide-react'
import { Animated } from '../Component/Animated'
import { site } from '../data/data'

export default function About() {
  return (
    <section id="about" className="px-auto mt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <Animated scale={0.9} y={0}>
          <img src="/assets/about.png" alt={`Inside ${site.name}`} className="aspect-[4/5] w-full rounded-[2rem] object-cover" />
        </Animated>
        <div>
          <Animated><p className="eyebrow">Our story</p></Animated>
          <Animated><h2 className="mt-5 text-4xl font-light leading-tight text-balance md:text-5xl">{site.aboutTitle}</h2></Animated>
          <Animated delay={0.2}><p className="mt-5 max-w-md text-muted">{site.aboutText}</p></Animated>
          <Animated delay={0.2}>
            <a href={site.mapUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-line bg-panel p-4 transition hover:border-gold">
              <MapPin className="text-gold" />
              <span>
                <span className="block font-medium">{site.address}</span>
                <span className="text-sm text-muted">View on map →</span>
              </span>
            </a>
          </Animated>
        </div>
      </div>
    </section>
  )
}
