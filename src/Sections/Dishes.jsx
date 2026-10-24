import { Animated } from '../Component/Animated'
import { dishes, site } from '../data/data'

export default function Dishes() {
  return (
    <section id="menu" className="px-auto mt-40">
      <div className="mb-14 text-center">
        <Animated><p className="eyebrow">Signature menu</p></Animated>
        <Animated><h2 className="mx-auto mt-5 max-w-lg text-4xl font-light text-balance md:text-5xl">Dishes our guests keep ordering</h2></Animated>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 md:grid-cols-4">
        {dishes.map((d, i) => (
          <Animated key={d.title} y={60} delay={(i % 4) * 0.08}
            className="group rounded-3xl border border-line bg-panel p-5 text-center transition hover:-translate-y-1 hover:border-gold">
            <img src={d.img} alt={d.title} className="mx-auto size-32 object-cover transition duration-500 group-hover:rotate-12 group-hover:scale-110 md:size-40" />
            <h3 className="mt-5 text-lg leading-snug">{d.title}</h3>
            <p className="mt-2 text-gold">{d.price} {site.currency}</p>
          </Animated>
        ))}
      </div>
    </section>
  )
}
