import './Services.css'
import imagen2 from '../assets/images/imagen-2.png'
import imagen3 from '../assets/images/imagen-3.png'
import imagenBarras from '../assets/images/imagen-barras.png'

const servicesData = [
  {
    id: 1,
    image: imagen2,
    title: 'Sesión Individual',
    text: 'Una hora de conexión profunda donde liberarás tensiones y encontrarás tu centro de paz.',
    duration: '60 minutos',
    featured: false
  },
  {
    id: 2,
    image: imagen3,
    title: 'Sesión Grupal',
    text: 'Comparte la experiencia en un ambiente de armonía colectiva y potencia los resultados.',
    duration: '90 minutos',
    featured: false
  },
  {
    id: 3,
    image: imagenBarras,
    title: 'Curso de Certificación',
    text: 'Aprende la técnica y certifícate como practicante de Barras de Access Consciousness.',
    duration: '1 día completo',
    featured: true
  }
]

function ServiceCard({ image, title, text, duration, featured }) {
  return (
    <div className={`service__card ${featured ? 'service__card--featured' : ''}`}>
      {featured && <span className="service__badge">Popular</span>}
      <div className="service__image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="service__content">
        <h3 className="service__title">{title}</h3>
        <p className="service__text">{text}</p>
        <span className="service__duration">{duration}</span>
      </div>
    </div>
  )
}

function Services() {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="section__header">
          <span className="section__subtitle">Nuestros Servicios</span>
          <h2 className="section__title">Experiencias de Sanación</h2>
        </div>
        <div className="services__grid">
          {servicesData.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
