import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import '../styles/Navbar.css';
import logo from '../img/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo Academia Legan" />
      </div>

      <button className="hamburger-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>

      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/inicio" onClick={() => setIsMenuOpen(false)}><i className="fas fa-home"></i> Inicio</Link></li>
        <li><Link to="/nosotros" onClick={() => setIsMenuOpen(false)}><i className="fas fa-users"></i> Nosotros</Link></li>
        <li><Link to="/cursos" onClick={() => setIsMenuOpen(false)}><i className="fas fa-book-open"></i> Cursos</Link></li>
        <li><Link to="/servicios" onClick={() => setIsMenuOpen(false)}><i className="fas fa-cogs"></i> Servicios</Link></li>
        <li><Link to="/contacto" onClick={() => setIsMenuOpen(false)}><i className="fas fa-address-book"></i> Contacto</Link></li>
        <li><Link to="/iniciar-sesion" onClick={() => setIsMenuOpen(false)}><i className="fas fa-sign-in-alt"></i> Iniciar Sesión</Link></li>
        <li><Link to="/registrarse" className={`register-btn ${isMenuOpen ? 'centered' : ''}`} onClick={() => setIsMenuOpen(false)}>Registrarse</Link></li>
        <button className="close-icon" onClick={toggleMenu}>
          <i className="fas fa-times"></i> {/* Icono "X" */}
        </button>

      </ul>
    </nav>
  );
}

export default Navbar;
