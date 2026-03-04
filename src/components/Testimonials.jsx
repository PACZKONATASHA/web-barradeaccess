import './Testimonials.css'
import imagen2 from '../assets/images/imagen-2.png'
import imagen3 from '../assets/images/imagen-3.png'
import imagenBarras from '../assets/images/imagen-barras.png'
import { useEffect, useRef, useState } from 'react'

const testimonialsData = [
  {
    id: 1,
    image: imagen2,
    name: 'María García',
    role: 'Profesora de Yoga',
    text: '"Desde la primera sesión sentí una paz que no había experimentado en años. Las Barras de Access me ayudaron a soltar cargas emocionales que venía arrastrando. Ahora duermo mejor y me siento más conectada conmigo misma."'
  },
  {
    id: 2,
    image: imagen3,
    name: 'Carlos Méndez',
    role: 'Empresario',
    text: '"Era escéptico al principio, pero decidí probar. La claridad mental que obtuve después de las sesiones me ayudó a tomar decisiones importantes en mi negocio. Mi nivel de estrés bajó notablemente."'
  },
  {
    id: 3,
    image: imagenBarras,
    name: 'Laura Fernández',
    role: 'Terapeuta Holística',
    text: '"Las Barras de Access transformaron mi vida personal y profesional. Ahora las incorporo en mis terapias y mis pacientes experimentan cambios profundos. Es una herramienta poderosa de sanación."'
  }
]

function TestimonialCard({ image, name, role, text, isLeft, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={cardRef}
      className={`testimonial__card ${isLeft ? 'testimonial__card--left' : 'testimonial__card--right'} ${isVisible ? 'testimonial__card--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="testimonial__image-container">
        <img src={image} alt={name} loading="lazy" />
        <div className="testimonial__image-ring"></div>
      </div>
      <div className="testimonial__content">
        <p className="testimonial__text">{text}</p>
        <div className="testimonial__author">
          <span className="testimonial__name">{name}</span>
          <span className="testimonial__role">{role}</span>
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">
      <div className="container">
        <div className="section__header">
          <span className="section__subtitle">Testimonios</span>
          <h2 className="section__title">Experiencias Compartidas</h2>
          <p className="section__description">
            Descubre lo que nuestros clientes dicen sobre su experiencia con las Barras de Access.
          </p>
        </div>
        <div className="testimonials__grid">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              {...testimonial}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
