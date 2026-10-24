import { Star } from 'lucide-react'
import { useState } from 'react'
import { Animated } from '../Component/Animated'
import { site, testimonial } from '../data/data'

const field = 'w-full rounded-xl border border-line bg-panel px-4 py-3 outline-none transition focus:border-gold'

export default function BookingProcess() {
  const [f, setF] = useState({ name: '', phone: '', date: '', time: '', guests: '2', notes: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  // Sends the request to your WhatsApp. Swap for an email/API call if you prefer.
  const submit = (e) => {
    e.preventDefault()
    const msg = `Hello ${site.name}, I'd like to book a table.\nName: ${f.name}\nPhone: ${f.phone}\nDate: ${f.date}\nTime: ${f.time}\nGuests: ${f.guests}\nNotes: ${f.notes || '-'}`
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="reserve" className="px-auto mt-40">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
        <div>
          <Animated><p className="eyebrow">Reservations</p></Animated>
          <Animated><h2 className="mt-5 text-4xl font-light text-balance md:text-5xl">Reserve your table</h2></Animated>
          <Animated delay={0.2} className="mt-12">
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-gold text-gold" />)}</div>
            <p className="mt-4 max-w-sm font-serif text-xl italic text-muted">“{testimonial.quote}”</p>
            <p className="mt-4 text-sm">{testimonial.author} <span className="text-muted">· {testimonial.role}</span></p>
          </Animated>
        </div>

        <Animated y={60}>
          <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-line bg-panel/50 p-6 sm:grid-cols-2 md:p-8">
            <input required placeholder="Your name" value={f.name} onChange={set('name')} className={field} />
            <input required type="tel" placeholder="Phone number" value={f.phone} onChange={set('phone')} className={field} />
            <input required type="date" value={f.date} onChange={set('date')} className={field} />
            <input required type="time" value={f.time} onChange={set('time')} className={field} />
            <select value={f.guests} onChange={set('guests')} className={`${field} sm:col-span-2`}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}
            </select>
            <textarea rows={3} placeholder="Special requests (optional)" value={f.notes} onChange={set('notes')} className={`${field} sm:col-span-2`} />
            <button type="submit" className="btn-gold sm:col-span-2">Send reservation request</button>
          </form>
        </Animated>
      </div>
    </section>
  )
}
