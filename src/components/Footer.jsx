import './Footer.css'
import imagenFooter from '../assets/images/imagen-footer.png'

function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${imagenFooter})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        {/* Frase motivacional */}
        <div className="footer__quote">
          <p className="footer__quote-text">
            "Todo lo que no permites ser, no te permitirá ser"
          </p>
          <span className="footer__quote-author">— Gary Douglas</span>
        </div>
        
        {/* Copyright */}
        <div className="footer__bottom">
          <p className="footer__logo">✧ Barras de Access ✧</p>
          <p className="footer__copyright">&copy; 2025 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
