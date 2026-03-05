import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '17:00',
    comments: ''
  })

  // Generar solo días impares de marzo 2026 (sin domingos)
  const oddMarchDays = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]
    .filter(day => {
      // 0 = domingo, 1-6 = lunes a sábado
      const dayOfWeek = new Date(2026, 2, day).getDay();
      return dayOfWeek !== 0; // Excluir domingos
    })
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
          <p className="section__description">Disponibilidad: Lunes a Sábados • 17:00 y 19:00 hs • 2 cupos disponibles</p>
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
                {oddMarchDays.map(day => {
                  const [year, month, dayStr] = day.split('-');
                  const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(dayStr));
                  return (
                    <option key={day} value={day}>
                      {dateObj.toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </option>
                  );
                })}
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
              Reservar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
