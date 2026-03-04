import './Parallax.css'
import parallaxImg from '../assets/images/segunda-barra-acces.png'
import { useEffect, useState, useRef } from 'react'

function Parallax() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    const element = document.querySelector('#contacto')
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  // Partículas flotantes para el parallax
  const particles = Array.from({ length: 15 }, (_, i) => (
    <div 
      key={i} 
      className={`parallax__particle parallax__particle--${(i % 4) + 1}`}
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${10 + Math.random() * 8}s`
      }}
    />
  ))

  return (
    <section 
      className={`parallax ${isVisible ? 'parallax--visible' : ''}`} 
      ref={sectionRef}
    >
      <div 
        className="parallax__background"
        style={{ backgroundImage: `url(${parallaxImg})` }}
      />
      <div className="parallax__overlay"></div>
      <div className="parallax__particles">{particles}</div>
      <div className="parallax__content container">
        <blockquote className="parallax__quote">
          "Todo en la vida viene a mí con facilidad, gozo y gloria"
        </blockquote>
        <p className="parallax__author">— Mantra de Access Consciousness</p>
        <a href="#contacto" className="btn btn--parallax" onClick={handleClick}>
          AGENDA
        </a>
      </div>
    </section>
  )
}

export default Parallax
