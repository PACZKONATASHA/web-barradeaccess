import './Location.css';

function Location() {
  // Coordenadas de ejemplo - Buenos Aires
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895553!2d-58.38375908477032!3d-34.60373888045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb7e8b4b8f%3A0x8b8b8b8b8b8b8b8b!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar";
  
  const handleGetDirections = () => {
    // Abre Google Maps con la ubicación
    window.open('https://www.google.com/maps/dir//Buenos+Aires,+Argentina', '_blank');
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
                <p className="location__address-text">Buenos Aires, Argentina</p>
                <p className="location__address-detail">Zona Palermo</p>
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
