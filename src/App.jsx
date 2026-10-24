import Navbar from './Component/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Stats from './Sections/Stats'
import Dishes from './Sections/Dishes'
import Features from './Sections/Features'
import Timing from './Sections/Timing'
import BookingProcess from './Sections/BookingProcess'
import Footer from './Sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Dishes />
        <Features />
        <Timing />
        <BookingProcess />
      </main>
      <Footer />
    </>
  )
}
