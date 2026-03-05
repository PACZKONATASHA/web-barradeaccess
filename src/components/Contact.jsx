import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '17:00',
    comments: ''
  })

  // Generar solo días impares de marzo 2026
  const oddMarchDays = Array.from({ length: 31 }, (_, i) => i + 1)
    .filter(day => day % 2 !== 0)
    .map(day => `2026-03-${String(day).padStart(2, '0')}`);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    
    // Construir mensaje para WhatsApp
    const message = `¡Hola! Quiero reservar una sesión de Barras de Access.
    
*Nombre:* ${formData.name || 'No especificado'}
*Fecha preferida:* ${formData.date || 'No especificada'}
*Hora preferida:* ${formData.time || 'No especificada'}
*Comentarios:* ${formData.comments || 'Sin comentarios'}`;

    // Número de WhatsApp
    const phoneNumber = '541151404683';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  }

  return (
    <section className="contact" id="agenda">
      <div className="container">
        <div className="section__header">
          <span className="section__subtitle">Agenda</span>
          <h2 className="section__title">Reserva tu Turno</h2>
          <p className="section__description">Disponibilidad: 17:00 y 19:00 hs • 2 cupos disponibles</p>
        </div>
        <div className="contact__form-wrapper">
          <div className="contact__form-header">
            <h3 className="contact__form-title">Reservar Sesión</h3>
            <button className="contact__close-btn" aria-label="Cerrar">×</button>
          </div>
          <form className="contact__form" onSubmit={handleWhatsAppClick}>
            <div className="form__group">
              <label htmlFor="name" className="form__label">Tu nombre:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form__input" 
                placeholder="Ej: María García"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form__group">
              <label htmlFor="date" className="form__label">Fecha preferida:</label>
              <select
                id="date"
                name="date"
                className="form__input"
                value={formData.date}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un día de Marzo</option>
                {oddMarchDays.map(day => (
                  <option key={day} value={day}>
                    {new Date(day).toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </option>
                ))}
              </select>
            </div>
            <div className="form__group">
              <label htmlFor="time" className="form__label">Hora:</label>
              <select
                id="time"
                name="time"
                className="form__input"
                value={formData.time}
                onChange={handleChange}
              >
                <option value="17:00">17:00 hs</option>
                <option value="19:00">19:00 hs</option>
              </select>
            </div>
            <div className="form__group">
              <label htmlFor="comments" className="form__label">Comentarios (opcional):</label>
              <textarea 
                id="comments" 
                name="comments" 
                className="form__textarea" 
                placeholder="Algún detalle adicional..."
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn--whatsapp">
              <svg className="whatsapp-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Reservar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
