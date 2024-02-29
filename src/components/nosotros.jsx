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
                  Nacimiento de GUTIERREZ T.E.: Fundada con la visión de ofrecer propiedades de calidad y servicios inmobiliarios excepcionales.
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">2</div>
              <div className="texto">
                <p>
                  Enfoque en la Excelencia: Nos dedicamos a construir hogares que reflejen estándares superiores de diseño y funcionalidad.
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">3</div>
              <div className="texto">
                <p>
                  Compromiso con la Calidad: Valoramos la confianza y la transparencia en nuestras relaciones con los clientes.
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">4</div>
              <div className="texto">
                <p>
                  Excelencia en cada Etapa: Nuestra dedicación a la excelencia se refleja en cada etapa del proceso, desde la planificación hasta la entrega final del proyecto.
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">5</div>
              <div className="texto">
                <p>
                  Liderazgo e Innovación: Nos comprometemos a seguir siendo líderes en el mercado inmobiliario, ofreciendo soluciones innovadoras.
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">6</div>
              <div className="texto">
                <p>
                  Contribución a las Comunidades: Nos esforzamos por contribuir al crecimiento de las comunidades que servimos.
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
              <h2>Innovadores en construcción e inmobiliaria, creando hogares para tu futuro.</h2>
              <div className="split-columns">
                <div className="column">
                  <p><FontAwesomeIcon icon={faThumbsUp} /> Nos dedicamos a construir hogares modernos y funcionales, adaptados a las necesidades de nuestros clientes.</p>
                  <p><FontAwesomeIcon icon={faThumbsUp} /> Trabajamos para hacer realidad tus proyectos inmobiliarios, ofreciendo soluciones creativas y personalizadas.</p>
                  <p><FontAwesomeIcon icon={faThumbsUp} /> Innovamos en el sector inmobiliario, utilizando tecnologías avanzadas y métodos de construcción eficientes.</p>
                </div>
                <div className="column">
                  <p><FontAwesomeIcon icon={faThumbsUp} />Estamos revolucionando el mercado inmobiliario con ideas frescas y enfoques innovadores.</p>
                  <p><FontAwesomeIcon icon={faThumbsUp} />Nos esforzamos por mejorar continuamente, aprendiendo de cada proyecto y adaptándonos a las nuevas tendencias.</p>
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
            <MiembroEquipo imagen={images['kim.jpg']} nombre="Kymberly GT" especialidad="CEO" />
            <MiembroEquipo imagen={images['kimi.jpg']} nombre="Kymberly GT" especialidad="CEO" />
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
