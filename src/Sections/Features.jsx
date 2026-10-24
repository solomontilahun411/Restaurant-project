import { ChefHat, Heart, Leaf } from 'lucide-react'
import { Animated } from '../Component/Animated'
import { featuresData } from '../data/data'

const icons = { ChefHat, Leaf, Heart }

export default function Features() {
  return (
    <section id="features" className="px-auto mt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div>
          <Animated><p className="eyebrow">What sets us apart</p></Animated>
          <Animated><h2 className="mt-5 text-4xl font-light text-balance md:text-5xl">Crafting memorable dining experiences</h2></Animated>
          <div className="mt-12 space-y-9">
            {featuresData.map((f, i) => {
              const Icon = icons[f.icon]
              return (
                <Animated key={f.title} y={60} delay={i * 0.12} className="flex gap-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line text-gold"><Icon className="size-5" /></span>
                  <div>
                    <h3 className="text-xl">{f.title}</h3>
                    <p className="mt-1 max-w-sm text-muted">{f.description}</p>
                  </div>
                </Animated>
              )
            })}
          </div>
        </div>
        <Animated x={50} y={0}>
          <img src="/assets/chef.png" alt="Our chef" className="mx-auto h-[28rem] w-full max-w-sm rounded-[2rem] object-cover md:ml-auto" />
        </Animated>
      </div>
    </section>
  )
}
