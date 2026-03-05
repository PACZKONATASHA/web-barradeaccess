import './Hero.css'
import heroImg from '../assets/images/mi-hero.png'
import { useState, useEffect, useRef } from 'react'

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    // Animación de entrada
    setIsLoaded(true)

    // Efecto parallax con mouse (solo desktop)
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return
      
      const rect = heroRef.current?.getBoundingClientRect()
      if (!rect) return
      
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      
      setMousePosition({ x: x * 20, y: y * 20 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollTo = (e, targetId) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  // Generar partículas de energía
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div 
      key={i} 
      className={`hero__particle hero__particle--${(i % 5) + 1}`}
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${8 + Math.random() * 7}s`
      }}
    />
  ))

  return (
    <section 
      className={`hero ${isLoaded ? 'hero--loaded' : ''}`} 
      id="inicio" 
      ref={heroRef}
    >
      {/* Imagen de fondo con efecto parallax */}
      <div 
        className="hero__background"
        style={{ 
          backgroundImage: `url(${heroImg})`,
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`
        }}
      />
      
      {/* Overlay con gradiente */}
      <div className="hero__overlay"></div>
      
      {/* Partículas flotantes */}
      <div className="hero__particles">
        {particles}
      </div>
      
      {/* Efecto de luz suave */}
      <div className="hero__glow"></div>
      
      {/* Contenido */}
      <div className="hero__content container">
        <span className="hero__subtitle">Bienvenido a tu espacio de paz</span>
        <h1 className="hero__title">Descubre la Armonía Interior</h1>
        <p className="hero__description">
          Una técnica suave que libera las limitaciones de cuerpo y mente, 
          abriendo las puertas a la paz, la claridad y el bienestar profundo.
        </p>
        <a href="#agenda" className="btn btn--primary" onClick={(e) => scrollTo(e, '#agenda')}>
          Agenda tu Sesión
        </a>
      </div>
      <button 
        className="hero__scroll" 
        onClick={(e) => scrollTo(e, '#que-es')}
        aria-label="Descubre más"
      >
        <span>Descubre más</span>
        <div className="hero__scroll-arrow"></div>
      </button>
    </section>
  )
}

export default Hero
