import './Testimonials.css'
import maria from '../assets/images/maria.png'
import carlos from '../assets/images/carlos.png'
import imagenContador from '../assets/images/tarjeta-contador.png'
import imagenBarras from '../assets/images/imagen-barras.png'
import { useEffect, useRef, useState } from 'react'

const testimonialsData = [
  {
    id: 1,
    image: maria,
    name: 'María García',
    role: 'Profesora de Yoga',
    text: 'Nunca imaginé que una sesión pudiera traerme tanta paz. Sentí como si me quitaran un peso de encima y desde entonces duermo mejor y me siento más tranquila cada día.'
  },
  {
    id: 2,
    image: carlos,
    name: 'Carlos Méndez',
    role: 'Contador',
    text: 'Al principio tenía dudas, pero después de la primera sesión noté mi mente más clara y menos estrés en el trabajo. Recomiendo esta experiencia a todos.'
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
