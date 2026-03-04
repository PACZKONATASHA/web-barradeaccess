import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Parallax from './components/Parallax'
import Contact from './components/Contact'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Testimonials />
        <Parallax />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  )
}

export default App
