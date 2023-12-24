import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Nosotros from './components/nosotros';
import Footer from './components/Footer';
import Inicio from './components/Inicio'; // Importa el componente Inicio desde el archivo correspondiente
import CourseSection from './components/CourseSection';

import './App.css';

function App() {
    return (
        <Router basename="/academia-legan">
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Inicio />} /> {/* Ruta inicial */}
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/cursos" element={<CourseSection />} />
                    {/* Otras rutas */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
