import { Animated } from '../Component/Animated'
import { site, timingData } from '../data/data'

export default function Timing() {
  return (
    <section id="hours" className="px-auto mt-40">
      <div className="mx-auto flex min-h-[34rem] max-w-5xl items-center overflow-hidden rounded-[2rem] bg-[url('/assets/restro-timing.png')] bg-cover bg-center p-6 md:p-14">
        <Animated className="w-full max-w-sm rounded-3xl border border-line bg-ink/90 p-8 backdrop-blur">
          <p className="eyebrow">Opening hours</p>
          <h2 className="mt-3 text-2xl">Visit {site.name}</h2>
          <ul className="mt-6 divide-y divide-line">
            {timingData.map((t) => (
              <li key={t.day} className="flex justify-between py-3 text-sm">
                <span className="text-muted">{t.day}</span>
                <span className={t.hours === 'Closed' ? 'text-muted/60' : ''}>{t.hours}</span>
              </li>
            ))}
          </ul>
          <a href="#reserve" className="btn-gold mt-8 w-full">Book a table</a>
        </Animated>
      </div>
    </section>
  )
}
