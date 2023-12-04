import React from 'react';
import './CourseSection.css'; // Asegúrate de crear este archivo CSS

function CourseSection() {
    return (
        <div className="course-section">
            <div className="course-info">
                <h2>Curso de Trading</h2>
                <p className="banner-duration">6h</p>
                <p className="banner-description">Aprende estrategias avanzadas de trading en este curso intensivo<br />
                 diseñado para traders experimentados.</p>
                <button className="course-button">
                    <i className="fas fa-play"></i> Ver Clases
                </button>
            </div>
        </div>
    );
}

export default CourseSection;
