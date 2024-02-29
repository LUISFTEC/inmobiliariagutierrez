import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import logo from '../img/logo.png'; // Asegúrate de que la ruta sea correcta


export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Conéctate con nosotros en las redes sociales:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/InmobiliariaGutierrez.T' className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://twitter.com/' className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='https://www.instagram.com/inmobiliaria_gutierrez_/' className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://www.tiktok.com/' className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon color='secondary' fab icon='tiktok' />
          </a>

        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={logo} alt="inmobiliaria gutierrez" className='me-3' style={{ maxWidth: '100%', height: 'auto' }} />
              </h6>
              <p>
                Inmobiliaria GUTIERREZ T.E., tu socio en el desarrollo de proyectos inmobiliarios.
                Confía en nuestro equipo de profesionales para garantizar el éxito en tus inversiones.
              </p>

            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
              <p>
                <a href='#!' className='text-reset'>
                Proyectos 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Arrendamientos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Ventas Inmuebles
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Consultoría
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Enlaces Rapidos</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Tutoriales
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Análisis de Mercado
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Estrategias
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Herramientas
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Perú Trujillo, s 0000, PE
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 xxx x67 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 xxx 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>



      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Derechos reservados:
        <a className='text-reset fw-bold' href='tu-sitio-web'>
          Inmobiliaria Gutierrez
        </a>
      </div>

    </MDBFooter>
  );
}