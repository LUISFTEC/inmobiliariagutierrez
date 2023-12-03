import React from 'react';


function Navbar() {
  return (
    <nav>
      <div className="logo">
      <img src="/assets/logo.png" alt="Logo Academia Legan" />
      </div>

      <ul>
        <li><a href="/"><i className="fas fa-home"></i> Inicio</a></li>
        <li><a href="/cursos"><i className="fas fa-book-open"></i> Cursos</a></li>
        <li><a href="/buscar"><i className="fas fa-search"></i> Buscar</a></li>
        <li><a href="/vip"><i className="fas fa-star"></i> VIP</a></li>
        <li><a href="/iniciar-sesion"><i className="fas fa-sign-in-alt"></i> Iniciar Sesión</a></li>
        <li><a href="/registrar" className="register-btn">Registrar</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;
