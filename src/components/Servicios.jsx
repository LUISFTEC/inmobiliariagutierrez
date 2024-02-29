import React from "react";
import { images } from '../utils/importImages';
import '../styles/servicios.css';

const Servicios = () => {
    return (
        <div className="servicios">
            <h2>Nuestros Servicios</h2>
            <p>Descubre la amplia gama de servicios especializados que ofrecemos en Constructora e Inmobiliaria GUTIERREZ T.E. Nos especializamos en brindar soluciones personalizadas y expertas en el ámbito de la construcción y los bienes raíces, garantizando el éxito de tus proyectos. Desde la planificación y desarrollo hasta la venta de inmuebles, estamos aquí para cubrir todas tus necesidades con profesionalismo y compromiso.</p>



            <div className="servicio-contenedor">
                {/* Repite este bloque para cada servicio */}
                <div className="servicio">
                    <img src={images['kimi.jpg']} alt="Descripción de la Imagen" />

                    <div className="texto-con-boton">
                        <h3>Desarrollo de Proyectos</h3>
                        <span className="boton-flecha"><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className="servicio">
                    <img src={images['kimi.jpg']} alt="Descripción de la Imagen" />

                    <div className="texto-con-boton">
                        <h3>Gestión de Inmuebles</h3>
                        <span className="boton-flecha"><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className="servicio">
                    <img src={images['kimi.jpg']} alt="Descripción de la Imagen" />

                    <div className="texto-con-boton">
                        <h3>Consultoría Inmobiliaria</h3>
                        <span className="boton-flecha"><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className="servicio">
                    <img src={images['kimi.jpg']} alt="Descripción de la Imagen" />

                    <div className="texto-con-boton">
                        <h3>Arquitectura y Diseño</h3>
                        <span className="boton-flecha"><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className="servicio">
                    <img src={images['kimi.jpg']} alt="Descripción de la Imagen" />

                    <div className="texto-con-boton">
                        <h3>Construcción residencial</h3>
                        <span className="boton-flecha"><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className="servicio">
                    <img src={images['kimi.jpg']} alt="Descripción de la Imagen" />

                    <div className="texto-con-boton">
                        <h3>Construcción Urbana</h3>
                        <span className="boton-flecha"><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
                {/* ... otros servicios */}
            </div>
        </div>
    );
}

export default Servicios;
