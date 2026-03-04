import './Benefits.css'
import imagen2 from '../assets/images/imagen-2.png'
import imagen3 from '../assets/images/imagen-3.png'
import imagenBarras from '../assets/images/imagen-barras.png'
import imgAcces from '../assets/images/img-de-acces.png'
import { useEffect, useRef, useState } from 'react'

const benefitsData = [
  {
    id: 1,
    image: imagen2,
    title: 'Paz Mental y Relajación',
    text: 'Reduce significativamente el estrés, la ansiedad y el ruido mental constante. Las Barras de Access permiten que tu mente encuentre un espacio de calma profunda, liberando tensiones acumuladas.',
    highlight: 'Siente cómo la tranquilidad invade cada parte de tu ser.'
  },
  {
    id: 2,
    image: imagen3,
    title: 'Mejor Calidad de Sueño',
    text: 'Experimentarás una mejora notable en la calidad de tu descanso. Muchas personas reportan dormir más profundamente y despertar con mayor energía y claridad mental.',
    highlight: 'Despierta renovado y lleno de vitalidad cada mañana.'
  },
  {
    id: 3,
    image: imagenBarras,
    title: 'Claridad Mental y Creatividad',
    text: 'Al liberar las limitaciones almacenadas, tu mente se abre a nuevas posibilidades. La toma de decisiones se vuelve más fluida y las ideas creativas fluyen con mayor facilidad.',
    highlight: 'Descubre el potencial ilimitado de tu mente.'
  },
  {
    id: 4,
    image: imgAcces,
    title: 'Bienestar Integral',
    text: 'Las Barras de Access promueven un equilibrio entre cuerpo, mente y espíritu. Notarás una mayor conexión contigo mismo y una perspectiva más positiva ante la vida.',
    highlight: 'Reconéctate con tu verdadera esencia.'
  }
]

function BenefitRow({ image, title, text, highlight, isReversed, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const rowRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (rowRef.current) {
      observer.observe(rowRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={rowRef}
      className={`benefit__row ${isReversed ? 'benefit__row--reversed' : ''} ${isVisible ? 'benefit__row--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="benefit__image-wrapper">
        <div className="benefit__image-glow"></div>
        <img src={image} alt={title} loading="lazy" />
        <div className="benefit__image-overlay"></div>
      </div>
      <div className="benefit__text-wrapper">
        <h3 className="benefit__title">{title}</h3>
        <p className="benefit__text">{text}</p>
        <p className="benefit__highlight">{highlight}</p>
      </div>
    </div>
  )
}

function Benefits() {
  return (
    <section className="benefits" id="beneficios">
      <div className="container">
        <div className="section__header">
          <span className="section__subtitle">Beneficios</span>
          <h2 className="section__title">Lo que puedes experimentar</h2>
          <p className="section__description">
            Cada sesión de Barras de Access es única y los beneficios pueden variar.
          </p>
        </div>
        <div className="benefits__content">
          {benefitsData.map((benefit, index) => (
            <BenefitRow 
              key={benefit.id} 
              {...benefit} 
              isReversed={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
