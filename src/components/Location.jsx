import './Location.css';

function Location() {
  // Coordenadas de Lanus Oeste, Hector Noya 3018
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.1234567890!2d-58.414444!3d-34.756667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7a7a7a7a7a7%3A0x0!2sH%C3%A9ctor%20Noya%203018%2C%20Lan%C3%BAs!5e0!3m2!1ses!2sar!4v1620000000000";
  
  const handleGetDirections = () => {
    // Abre Google Maps con la ubicación
    window.open('https://www.google.com/maps/dir//Hector+Noya+3018,+Lanus+Oeste,+Argentina', '_blank');
  };

  return (
    <section className="location" id="ubicacion">
      <div className="container">
        <header className="section__header">
          <span className="section__subtitle">✧ Encuéntranos ✧</span>
          <h2 className="section__title">Ubicación</h2>
        </header>

        <div className="location__content">
          <div className="location__map-wrapper">
            <iframe
              src={mapSrc}
              className="location__map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Barras de Access"
            ></iframe>
          </div>

          <div className="location__info">
            <div className="location__address">
              <div className="location__icon">📍</div>
              <div>
                <p className="location__address-text">Lanus Oeste, Buenos Aires</p>
                <p className="location__address-detail">Hector Noya 3018</p>
              </div>
            </div>

            <button 
              className="location__btn"
              onClick={handleGetDirections}
            >
              <span className="btn-icon">🗺️</span>
              Cómo llegar desde tu ubicación
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
