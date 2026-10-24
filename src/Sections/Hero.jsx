import { Star } from 'lucide-react'
import { Animated } from '../Component/Animated'
import { site } from '../data/data'

const avatars = ['/assets/user1.png', '/assets/user2.png', '/assets/user3.png', '/assets/user4.png']
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-auto">
      <div className="absolute inset-0 bg-[url('/assets/heroBanner.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center pt-20 text-center">
        <Animated y={-20}><p className="eyebrow">{site.tagline}</p></Animated>
        <Animated><h1 className="mt-6 text-5xl font-light leading-[1.05] text-balance md:text-7xl">{site.heroTitle}</h1></Animated>
        <Animated delay={0.2}><p className="mt-6 max-w-md text-muted">{site.heroText}</p></Animated>
        <Animated delay={0.3} className="mt-9 flex flex-wrap justify-center gap-4">
          <a href="#reserve" className="btn-gold">Book a table</a>
          <a href="#menu" className="btn-ghost">See the menu</a>
        </Animated>
        <Animated delay={0.4} className="mt-12 flex items-center gap-4">
          <div className="flex -space-x-3">
            {avatars.map((src) => (
              <img key={src} src={src} alt="" className="size-10 rounded-full border-2 border-ink object-cover" />
            ))}
          </div>
          <div className="text-left text-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 fill-gold text-gold" />)}
            </div>
            <p className="text-muted">{site.rating}/5 · {site.ratingNote}</p>
          </div>
        </Animated>
      </div>
    </section>
  )
}
