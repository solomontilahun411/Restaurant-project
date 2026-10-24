import { Animated } from '../Component/Animated'
import { pillars } from '../data/data'

export default function Stats() {
  return (
    <section className="px-auto mt-32">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
        {pillars.map((p, i) => (
          <Animated key={p.number} delay={i * 0.1} className="bg-panel p-10">
            <span className="font-serif text-5xl text-gold">{p.number}</span>
            <h3 className="mt-6 text-2xl">{p.title}</h3>
            <p className="mt-3 text-muted">{p.description}</p>
          </Animated>
        ))}
      </div>
    </section>
  )
}
