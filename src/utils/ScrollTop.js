// ScrollToTop.jsx
import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTop.css'; // Importa el archivo CSS
import { FaArrowUp } from 'react-icons/fa'; // Importa el ícono de flecha hacia arriba

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = window.scrollY / 10; // Divide la posición actual en 10 pasos
    const intervalId = setInterval(() => {
      if (window.scrollY > 0) {
        window.scroll(0, window.scrollY - scrollStep);
      } else {
        clearInterval(intervalId);
      }
    }, 50); // Ajusta este valor para cambiar la velocidad del desplazamiento
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className="scroll-to-top">
        <FaArrowUp /> {/* Ícono de flecha hacia arriba */}
      </button>
    )
  );
};

export default ScrollToTop;
