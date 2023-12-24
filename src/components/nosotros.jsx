import React from 'react';
import '../styles/acercanosotros.css';
import '../styles/recorridonosotros.css';

export default function App() {
  return (
    <div>
      <div className="photo-text-container">
        <h2 className="title">Acerca de Nosotros</h2>
      </div>
      <section id="acerca-nosotros" className="section padding">
        <div className="container">
          <div className="body row padding-bottom">
            <article className="col-md-4 col-6 text-center">
              <div className="numero">1</div>
              <div className="texto">
                <p>
                  IBO comenzó siendo un proyecto de consultoría y emprendimiento de <b>marketing digital</b> a mediados del 2013
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">2</div>
              <div className="texto">
                <p>
                  Nuestros primeros servicios fueron de <b>consultoría digital</b>, <b>auditoría digital</b> y <b>desarrollo de páginas web</b>
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">3</div>
              <div className="texto">
                <p>
                  Con el tiempo, lo hemos diversificado creando un <b>servicio integral 360°</b>.
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">6</div>
              <div className="texto">
                <p>
                  Ahora, no sólo nos dedicamos a <b>proyectos digitales</b> para emprendedores o pymes, sino que también asesoramos a grandes empresas.
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">5</div>
              <div className="texto">
                <p>
                  En 8 meses, nos convertimos en una de las <a href="https://ibo.pe"><b>mejores agencias de marketing digital en Lima</b></a>.
                </p>
              </div>
            </article>

            <article className="col-md-4 col-6 text-center">
              <div className="numero">4</div>
              <div className="texto">
                <p>
                  A inicios del 2018, decidimos darle un nuevo enfoque a IBO, logrando tener una <b>transformación digital</b>.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

    </div>
  );
}
