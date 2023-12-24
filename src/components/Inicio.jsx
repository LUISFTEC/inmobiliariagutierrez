import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../styles/Inicio.css'; // Asegúrate de crear este archivo CSS
import '../styles/inicioservicios.css';
import '../styles/iniciopregunta.css';
import '../styles/iniciocarrusel.css';
import horizontalImage from '../img/horisontal.png';
import verticalImage from '../img/vertical.png';


function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));


function Inicio() {
    // Configuración para react-slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true, // Habilita el desplazamiento de derecha a izquierda
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div>
            <header className="header-container">
                <div className="top-row">
                    <div className="header-background">
                        <div className="header-content">
                            <h1>Academia de Trading<br />Aprende con los Mejores</h1>
                            <p>
                                Explora el emocionante mundo del trading con nosotros.
                                Ya seas un principiante en busca de conocimientos básicos
                                o un trader experimentado en busca de estrategias avanzadas,
                                estamos aquí para guiarte. Únete a nuestra comunidad y potencia
                                tus habilidades en el mercado financiero.
                            </p>
                            <button className="boton-estandar">Ver Cursos</button>
                            <button className="boton-estandar">Empieza Ya</button>

                        </div>
                    </div>
                    <img src={verticalImage} alt="Descripción de la imagen" className="rectangle-box" />
                </div>
                <div className="bottom-row">
                    <img src={horizontalImage} alt="Descripción de la imagen" className="rectangle-box1" />
                </div>

            </header>

            <section id="proyecto">
                <h3 className="titulo-seccion">Nuestros Servicios</h3>
                <p className="titulo-seccion1">
                    "Descubre nuestros servicios especializados en trading en <strong>Academia Legan</strong>. Potenciamos tu éxito en el emocionante mundo de las inversiones con soluciones personalizadas y expertas."
                </p>

                <div className="fila">
                    <div className="proyecto0">
                        <a href="#">
                            <div className="overlay"></div>
                            <img src={images['perfillaptop.jpg']} alt="Perfil Laptop" />

                            <div className="info">
                                <h4>Academia Legan</h4>
                            </div>
                        </a>
                    </div>
                    <div className="proyecto0">
                        <a href="#">
                            <div className="overlay"></div>
                            <img src={images['perfildenis.jpg']} alt="Perfil Laptop" />
                            <div className="info">
                                <h4>Trading X Denis</h4>
                            </div>
                        </a>
                    </div>
                    <div className="proyecto0">
                        <a href="#">
                            <div className="overlay"></div>
                            <img src={images['perfiljorge.jpg']} alt="Perfil Laptop" />
                            <div className="info">
                                <h4>Trading X Jorge </h4>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="fila">
                    <div className="proyecto0">
                        <a href="#">
                            <div className="overlay"></div>
                            <img src={images['perfillaptop.jpg']} alt="Perfil Laptop" />
                            <div className="info">
                                <h4>Webinars de Trading</h4>            
                            </div>
                        </a>
                    </div>
                    <div className="proyecto0">
                        <a href="#">
                            <div className="overlay"></div>
                            <img src={images['perfillaptop.jpg']} alt="Perfil Laptop" />
                            <div className="info">
                                <h4>Soporte de Trading</h4>
                            </div>
                        </a>
                    </div>
                    <div className="proyecto0">
                        <a href="#">
                            <div className="overlay"></div>
                            <img src={images['perfillaptop.jpg']} alt="Perfil Laptop" />
                            <div className="info">
                                <h4>Fundamentos de Trading</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </section>


            <section id='pregunta'>
                <div className="trading-content">
                    <div className="trading-image">
                        <img src={images['laptop.jpg']} alt="Imagen de trading" />
                    </div>
                    <div className="trading-text">
                        <h2>¿Cómo puede una estrategia digital sólida llevar tus operaciones de trading al siguiente nivel?</h2>
                        <p>En el mundo del trading, cada segundo cuenta. Nuestra agencia de trading digital está aquí para brindarte las herramientas y la visibilidad que necesitas en tu página de inicio.</p>
                        <p>En el mundo del trading, cada segundo cuenta. Nuestra agencia de trading digital está aquí para brindarte las herramientas y la visibilidad que necesitas en tu página de inicio.</p>
                    </div>

                </div>
            </section>

            {/* Sección del carrusel */}
            <section className="slider-container">
                <h2 className="titulo-especifico" >Ellos son algunos de nuestros Alumnos:</h2>
                <Slider {...settings}>
                    <div><img src={images['1.png']} alt="Alumno 1" /></div>
                    <div><img src={images['2.png']} alt="Alumno 2" /></div>
                    <div><img src={images['3.png']} alt="Alumno 3" /></div>
                    <div><img src={images['4.png']} alt="Alumno 4" /></div>
                    <div><img src={images['5.png']} alt="Alumno 5" /></div>
                    <div><img src={images['6.png']} alt="Alumno 6" /></div>
                    <div><img src={images['7.png']} alt="Alumno 7" /></div>
                    <div><img src={images['8.png']} alt="Alumno 8" /></div>
                    <div><img src={images['9.png']} alt="Alumno 9" /></div>
                    <div><img src={images['10.png']} alt="Alumno 10" /></div>

                </Slider>
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
