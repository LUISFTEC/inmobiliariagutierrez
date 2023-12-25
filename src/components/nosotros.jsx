import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/acercanosotros.css';
import '../styles/recorridonosotros.css';
import '../styles/nosotroscontenido.css';
import '../styles/nuestroequipo.css';
import MiembroEquipo from './MiembroEquipo'; // Asegúrate de que la ruta sea correcta
import { images } from '../utils/importImages';

export default function App() {
  return (
    <div>
      <div className="photo-text-container">
        <h2 className="title">
          <span>A</span><span>c</span><span>e</span><span>r</span><span>c</span><span>a</span>
          {' '}<span>d</span><span>e</span>{' '}
          <span>N</span><span>o</span><span>s</span><span>o</span><span>t</span><span>r</span><span>o</span><span>s</span>
        </h2>
      </div>

      <section id="acerca-nosotros" className="section padding">
        <div className="container">
          <div className="body row padding-bottom">
            <article className="col-md-4 col-6 text-center">
              <div className="numero">1</div>
              <div className="texto">
                <p>
                  En un tranquilo pueblo de Cajamarca, Perú, **dos hermanos** crecieron rodeados de la sencillez y la calidez de su hogar.
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">2</div>
              <div className="texto">
                <p>
                  Después de completar sus estudios, tomaron una audaz decisión: mudarse a la bulliciosa capital, Lima.
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">3</div>
              <div className="texto">
                <p>
                  En Lima, estos hermanos se aventuraron en el mundo del trading, un territorio desconocido para ellos al principio.
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">4</div>
              <div className="texto">
                <p>
                  Fue su **hermana**, una mujer apasionada por las finanzas, quien les inspiró y les mostró el potencial del trading.
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">5</div>
              <div className="texto">
                <p>
                  Con determinación y aprendizaje constante, estos hermanos han logrado construir una exitosa carrera en el mundo del trading.
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">6</div>
              <div className="texto">
                <p>
                  Hoy en día, comparten sus conocimientos a través de cursos y se han convertido en referentes en el campo financiero en Lima.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="acerca-nosotros1" className="section padding1">
        <div className="container1">
          <div className="body row padding-bottom">
            <article className="col-md-12 text-center">
              <h2>Expertos en trading, optimizando inversiones y análisis de mercado.</h2>
              <div className="split-columns">
                <div className="column">
                  <p><FontAwesomeIcon icon={faThumbsUp} /> Nos especializamos en trading, elevando las estrategias de inversión para nuestros clientes.</p>
                  <p><FontAwesomeIcon icon={faThumbsUp} /> Nos especializamos en hacer crecer los proyectos de cada cliente, mejorando su imagen de marca en medios digitales y creando grandes comunidades en redes sociales.</p>
                  <p><FontAwesomeIcon icon={faThumbsUp} /> Somos especialistas digitales por excelencia, enfocándonos en tener resultados rápidos y efectivos.</p>
                </div>
                <div className="column">
                  <p><FontAwesomeIcon icon={faThumbsUp} />Pioneros en trading, transformamos la gestión de inversiones y el análisis de mercados.</p>
                  <p><FontAwesomeIcon icon={faThumbsUp} />Innovamos en trading, mejorando tácticas de inversión y análisis de mercado para clientes.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="nuestro-equipo">
        <div className="container">
          <h2 className="titulo-equipo">Nuestro Equipo</h2>
          <div className="miembros-equipo">
            {/* Aquí irían tus componentes MiembroEquipo con sus respectivas props */}
            <MiembroEquipo imagen={images['perfiljorge.jpg']} nombre="Jorge Vigo" especialidad="CEO" />
            <MiembroEquipo imagen={images['perfildenis.jpg']} nombre="Denis Vigo" especialidad="CEO" />
            <MiembroEquipo imagen={images['redactorseo.png']} nombre="Carlos Martínez" especialidad="Redactor SEO" />
            <MiembroEquipo imagen={images['directoradecuentas.png']} nombre="María Rodríguez" especialidad="Directora de Cuentas" />
            <MiembroEquipo imagen={images['SocialMediaManager.png']} nombre="David Johnson" especialidad="Social Media Manager" />
            <MiembroEquipo imagen={images['AsistentedeMarketing.png']} nombre="Priya Patel" especialidad="Asistente de Marketing" />
            <MiembroEquipo imagen={images['DiseñadorWeb.png']} nombre="Hiroshi Tanaka" especialidad="Diseñador Web" />
            <MiembroEquipo imagen={images['Trader.png']} nombre="Leila Khalid" especialidad="Trader" />
                      

            {/* Repite el componente MiembroEquipo por cada miembro del equipo */}
          </div>
        </div>
      </section>


    </div>
  );
}
