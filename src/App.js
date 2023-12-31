import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Nosotros from './components/nosotros';
import Footer from './components/Footer';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio'; // Importa el componente Inicio desde el archivo correspondiente
import CourseSection from './components/CourseSection';
import ScrollToTop from './utils/ScrollTop'; // Asegúrate de que la ruta de importación es correcta


import './App.css';

function App() {
    return (
        <Router >
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Inicio />} /> {/* Ruta inicial */}
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/cursos" element={<CourseSection />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/contacto" element={<Contacto />} />
                    {/* Otras rutas */}
                </Routes>
                <Footer />
                <ScrollToTop/>            

            </div>
        </Router>
    );
}

export default App;
