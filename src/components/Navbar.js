import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src="/assets/logo.png" alt="Logo Academia Legan" />
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>

      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="/inicio"><i className="fas fa-home"></i> Inicio</a></li>
        <li><a href="/nosotros"><i className="fas fa-users"></i> Nosotros</a></li>
        <li><a href="/cursos"><i className="fas fa-book-open"></i> Cursos</a></li>
        <li><a href="/servicios"><i className="fas fa-cogs"></i> Servicios</a></li>
        <li><a href="/vip"><i className="fas fa-star"></i> VIP</a></li>
        <li><a href="/iniciar-sesion"><i className="fas fa-sign-in-alt"></i> Iniciar Sesión</a></li>
        <li><a href="/registrarse" className={`register-btn ${isMenuOpen ? 'centered' : ''}`}>Registrarse</a></li>
        <li className="close-icon" onClick={toggleMenu}>
          <i className="fas fa-times"></i> {/* Icono "X" */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
