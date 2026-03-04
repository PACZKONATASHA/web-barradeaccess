import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    closeMenu()
    const element = document.querySelector(targetId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <div className="nav__logo">
          <span className="nav__logo-text">Barra de Acces</span>
        </div>
        
        <button 
          className={`nav__toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav__menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav__item">
            <a href="#que-es" className="nav__link" onClick={(e) => handleNavClick(e, '#que-es')}>¿Qué es?</a>
          </li>
          <li className="nav__item">
            <a href="#beneficios" className="nav__link" onClick={(e) => handleNavClick(e, '#beneficios')}>Beneficios</a>
          </li>
          <li className="nav__item">
            <a href="#testimonios" className="nav__link" onClick={(e) => handleNavClick(e, '#testimonios')}>Testimonios</a>
          </li>
          <li className="nav__item">
            <a href="#agenda" className="nav__link" onClick={(e) => handleNavClick(e, '#agenda')}>Agenda</a>
          </li>
          <li className="nav__item">
            <a href="#ubicacion" className="nav__link nav__link--cta" onClick={(e) => handleNavClick(e, '#ubicacion')}>Ubicación</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
