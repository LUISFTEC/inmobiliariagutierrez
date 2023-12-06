import React from 'react';
import '../styles/Inicio.css'; // Asegúrate de crear este archivo CSS
import horizontalImage from '../img/horisontal.png';
import verticalImage from '../img/vertical.png';


function Inicio() {
    return (
        <div>
            <header className="header-container">
                <div className="top-row">
                    <div className="header-background">
                        <div className="header-content">
                            <h1>Academia de Trading <br />Aprende con los Mejores</h1>
                            <p>
                                Explora el emocionante mundo del trading con nosotros.<br />
                                Ya seas un principiante en busca de conocimientos básicos <br />
                                o un trader experimentado en busca de estrategias avanzadas,<br />
                                estamos aquí para guiarte. Únete a nuestra comunidad y potencia <br />
                                tus habilidades en el mercado financiero.
                            </p>
                            <button>Ver Cursos</button>
                            <button>Empieza Ya</button>
                        </div>
                    </div>
                    <img src={verticalImage} alt="Descripción de la imagen" className="rectangle-box" />
                </div>
                <div className="bottom-row">
                <img src={horizontalImage} alt="Descripción de la imagen" className="rectangle-box1" />
                </div>
                
            </header>



            <section>
                <h2>Nuestros Cursos</h2>
                <p>Descubre una amplia gama de cursos diseñados para traders de todos los niveles.</p>
                <button>Ver Cursos</button>
            </section>
            <section>
                <h2>Nuestros Instructores</h2>
                <p>Conoce a nuestros expertos instructores en trading y benefíciate de su experiencia.</p>
            </section>
            <section>
                <h2>Preguntas Frecuentes</h2>
                <p>Encuentra respuestas a las preguntas más comunes en nuestra sección de preguntas frecuentes.</p>
                <button>Contacto</button>
            </section>
        </div>
    );
}

export default Inicio;
