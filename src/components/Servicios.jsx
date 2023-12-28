import React from "react";
import { images } from '../utils/importImages';
import '../styles/servicios.css';

const Servicios = () => {
    return (
        <div className="servicios">
            <h2>Nuestros Servicios</h2>
            <p>Descubre nuestros servicios especializados en trading en Academia Legan. Potenciamos tu éxito en el emocionante mundo de las inversiones con soluciones personalizadas y expertas.</p>

            <div className="servicio-contenedor">
                {/* Repite este bloque para cada servicio */}
                <div className="servicio">
                    <img src={images['perfillaptop.jpg']} alt="Descripción de la Imagen" />

                    <div className="texto-con-boton">
                        <h3>Cursos en línea</h3>
                        <span className="boton-flecha"><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className="servicio">
                    <img src={images['4.png']} alt="Descripción de la Imagen" />

                    <div className="texto-con-boton">
                        <h3>Asesoría personalizada</h3>
                        <span className="boton-flecha"><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className="servicio">
                    <img src={images['5.png']} alt="Descripción de la Imagen" />

                    <div className="texto-con-boton">
                        <h3>Análisis de mercado</h3>
                        <span className="boton-flecha"><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className="servicio">
                    <img src={images['6.png']} alt="Descripción de la Imagen" />

                    <div className="texto-con-boton">
                        <h3>Desarrollo Web Personalizado</h3>
                        <span className="boton-flecha"><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className="servicio">
                    <img src={images['7.png']} alt="Descripción de la Imagen" />

                    <div className="texto-con-boton">
                        <h3>Plataforma de membresía</h3>
                        <span className="boton-flecha"><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className="servicio">
                    <img src={images['8.png']} alt="Descripción de la Imagen" />

                    <div className="texto-con-boton">
                        <h3>Seminarios web en vivo</h3>
                        <span className="boton-flecha"><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
                {/* ... otros servicios */}
            </div>
        </div>
    );
}

export default Servicios;
