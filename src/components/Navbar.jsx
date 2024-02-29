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
        <li><Link to="/promociones" onClick={() => setIsMenuOpen(false)}><i className="fas fa-tags"></i> PROMOCIONES</Link></li>
        <li><Link to="/servicios" onClick={() => setIsMenuOpen(false)}><i className="fas fa-cogs"></i> Servicios</Link></li>
        <li><Link to="/contacto" onClick={() => setIsMenuOpen(false)}><i className="fas fa-address-book"></i> Contacto</Link></li>
        <li><a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a></li>
        <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
        <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
        <button className="close-icon" onClick={toggleMenu}>
          <i className="fas fa-times"></i> {/* Icono "X" */}
        </button>

      </ul>
    </nav>
  );
}

export default Navbar;
