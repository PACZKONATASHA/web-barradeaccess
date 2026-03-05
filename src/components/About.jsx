import './About.css'
import aboutImg from '../assets/images/img-de-acces.png'
import { useEffect, useRef, useState } from 'react'

function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={`about ${isVisible ? 'about--visible' : ''}`} id="que-es" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="section__subtitle">¿Qué es?</span>
            <h2 className="section__title">Barras de Access Consciousness</h2>
            <p className="about__text">
              Las Barras de Access son 32 puntos en la cabeza que, al ser tocados suavemente, 
              liberan la carga electromagnética de todos los pensamientos, ideas, actitudes, 
              decisiones y creencias que has almacenado a lo largo de tu vida.
            </p>
            <p className="about__text">
              Es como presionar el botón de eliminar en tu computadora: se borran todos 
              esos archivos viejos para que puedas funcionar con mayor claridad y ligereza.
            </p>
            <div className="about__features">
              <div className="about__feature">
                <div className="about__feature-icon">✧</div>
                <span>Sin dolor</span>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon">✧</div>
                <span>Relajante</span>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon">✧</div>
                <span>Transformador</span>
              </div>
            </div>
          </div>
          <div className="about__image">
            <div className="about__image-glow"></div>
            <img src={aboutImg} alt="Sesión de Barras de Access" loading="lazy" />
            <div className="about__image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
