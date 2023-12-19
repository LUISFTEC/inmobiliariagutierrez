import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src="./assets/logo.png" alt="Logo Academia Legan" />
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>

      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/inicio"><i className="fas fa-home"></i> Inicio</Link></li>
        <li><Link to="/nosotros"><i className="fas fa-users"></i> Nosotros</Link></li>
        <li><Link to="/cursos"><i className="fas fa-book-open"></i> Cursos</Link></li>
        <li><Link to="/servicios"><i className="fas fa-cogs"></i> Servicios</Link></li>
        <li><Link to="/vip"><i className="fas fa-star"></i> VIP</Link></li>
        <li><Link to="/iniciar-sesion"><i className="fas fa-sign-in-alt"></i> Iniciar Sesión</Link></li>
        <li><Link to="/registrarse" className={`register-btn ${isMenuOpen ? 'centered' : ''}`}>Registrarse</Link></li>
        <li className="close-icon" onClick={toggleMenu}>
          <i className="fas fa-times"></i> {/* Icono "X" */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
