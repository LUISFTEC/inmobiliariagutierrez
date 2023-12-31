import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTop.css';
import { FaArrowUp } from 'react-icons/fa';

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
    const c = window.scrollY;
    const duration = 500; // Duración en ms
    let start = null;

    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const r = progress / duration;

      const move = c - c * easeOutQuad(r);
      window.scrollTo(0, move);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const easeOutQuad = t => t * (2 - t);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className="scroll-to-top">
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
