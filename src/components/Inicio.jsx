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
import videoSrc from '../videos/iniciofondo.mp4';


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
                <div className="video-container">
                    <video autoPlay loop muted className="background-video" preload='auto'>
                        <source src={videoSrc} type="video/mp4" />
                        Tu navegador no soporta videos HTML5.
                    </video>
                </div>
                <div className="top-row">
                    <div className="header-background">
                        <div className="header-content">
                            <h1>Constructora e Inmobiliaria<br />GUTIERREZ T.E</h1>
                            <p>
                                Ofrece un servicio
                                de excelencia garantizada y calidad a
                                toda persona que requiera nuestro
                                portafolio, arrendamiento y venta de
                                inmueble. Fidelizando y aumentando
                                los clientes a través de una entidad
                                rentable, con profesionales a su
                                disposición.
                            </p>
                            <button className="boton-estandar">Ver Propiedades</button>
                            <button className="boton-estandar">Contáctanos</button>

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
                    "Descubre nuestros servicios especializados en construcción y bienes raíces en <strong>GUTIERREZ T.E</strong>. Potenciamos tu éxito en el mercado inmobiliario con soluciones personalizadas y expertas."
                </p>

                <div className="fila">
                    <div className="proyecto0">
                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                            <div className="overlay"></div>
                            <img src={images['proyectos.jpg']} alt="Perfil Laptop" />

                            <div className="info">
                                <h4>Desarrollo de Proyectos</h4>
                            </div>
                        </a>
                    </div>
                    <div className="proyecto0">
                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                            <div className="overlay"></div>
                            <img src={images['gestion.jpg']} alt="Perfil Laptop" />
                            <div className="info">
                                <h4>Gestión de Inmuebles</h4>
                            </div>
                        </a>
                    </div>
                    <div className="proyecto0">
                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                            <div className="overlay"></div>
                            <img src={images['consultoria.jpg']} alt="Perfil Laptop" />
                            <div className="info">
                                <h4>Consultoría Inmobiliaria</h4>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="fila">
                    <div className="proyecto0">
                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                            <div className="overlay"></div>
                            <img src={images['arquitectura.jpg']} alt="Perfil Laptop" />
                            <div className="info">
                                <h4>Arquitectura y Diseño</h4>
                            </div>
                        </a>
                    </div>
                    <div className="proyecto0">
                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                            <div className="overlay"></div>
                            <img src={images['construccion.jpg']} alt="Perfil Laptop" />
                            <div className="info">
                                <h4>Construcción Residencial</h4>
                            </div>
                        </a>
                    </div>
                    <div className="proyecto0">
                        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                            <div className="overlay"></div>
                            <img src={images['comercial.jpg']} alt="Perfil Laptop" />
                            <div className="info">
                                <h4>Construcción Comercial</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </section>


            <section id='pregunta'>
                <div className="trading-content">
                    <div className="trading-image">
                        <img src={images['kimi.jpg']} alt="Imagen de trading" />
                    </div>
                    <div className="trading-text">
                        <h2>MISIÓN</h2>
                        <p>Hacemos de Constructora e Inmobiliaria GUTIERREZ T.E. una empresa con visión de futuro. Nuestro compromiso es brindar lo mejor a nuestros clientes internos y externos, creando ventajas competitivas en un mercado global en constante crecimiento.</p>
                        <p>Nos enfocamos en las nuevas generaciones y trabajamos junto a nuestros clientes para promover la estabilidad, el bienestar y el profesionalismo. Contribuimos al progreso del país, aportando nuestro compromiso y experiencia para impulsar mejoras significativas en la comunidad.</p>
                    </div>

                </div>
            </section>

            {/* Sección del carrusel */}
            <section className="slider-container">
                <h2 className="titulo-especifico">Explora algunos de nuestros Proyectos Destacados:</h2>
                <Slider {...settings}>
                    <div><img src={images['clientes.jpg']} alt="Alumno 1" /></div>
                    <div><img src={images['2.jpg']} alt="Alumno 2" /></div>
                    <div><img src={images['2.jpg']} alt="Alumno 3" /></div>
                    <div><img src={images['2.jpg']} alt="Alumno 4" /></div>
                    <div><img src={images['2.jpg']} alt="Alumno 5" /></div>
                    <div><img src={images['2.jpg']} alt="Alumno 6" /></div>
                    <div><img src={images['2.jpg']} alt="Alumno 7" /></div>
                    <div><img src={images['2.jpg']} alt="Alumno 8" /></div>
                    <div><img src={images['2.jpg']} alt="Alumno 9" /></div>
                    <div><img src={images['2.jpg']} alt="Alumno 10" /></div>

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
