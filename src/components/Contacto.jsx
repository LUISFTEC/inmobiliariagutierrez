import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/contacto.css';



const Contactos = () => {
  // Formspree hook
  const [state, handleSubmit] = useForm("xjvnvvbp"); // Tu ID de Formspree
  const [contacto, setContacto] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
    consentimiento: false
  });
  
  // Aquí agregas el nuevo estado para manejar los errores
  const [errores, setErrores] = useState({});
  const validarFormulario = () => {
    let erroresTemporales = {};
    if (!contacto.nombre.trim()) erroresTemporales.nombre = "El nombre es obligatorio.";
    if (!contacto.email.trim()) erroresTemporales.email = "El email es obligatorio.";
    if (!contacto.asunto.trim()) erroresTemporales.asunto = "El asunto es obligatorio.";
    if (!contacto.mensaje.trim()) erroresTemporales.mensaje = "El mensaje es obligatorio.";
    if (!contacto.consentimiento) erroresTemporales.consentimiento = "Debes aceptar los términos y condiciones.";
  
    setErrores(erroresTemporales);
    return Object.keys(erroresTemporales).length === 0;
  };
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContacto({ ...contacto, [name]: type === 'checkbox' ? checked : value });
  };

  // Nuevo handleSubmit que usa Formspree
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) {
      return; // Detiene el envío si hay errores
    }
    handleSubmit(contacto);
  };

  if (state.succeeded) {
    return (
      <div className="mensaje-exito">
        <p>¡Gracias por tu mensaje!</p>
        <p>Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.</p>
        <h3>Academia Legan</h3>
        <button onClick={() => window.location.reload()}>Enviar otro mensaje</button>

      </div>


    );
  }

  

  return (
    <div className="contactos-container">
      <h2>Contactanos</h2>
      <form onSubmit={handleFormSubmit}>
      <div>
  <label htmlFor="nombre">Nombre:</label>
  <input
    type="text"
    id="nombre"
    name="nombre"
    value={contacto.nombre}
    onChange={handleChange}
  />
  {errores.nombre && <div className="error-message">{errores.nombre}</div>}
</div>

<div>
  <label htmlFor="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    value={contacto.email}
    onChange={handleChange}
  />
  {errores.email && <div className="error-message">{errores.email}</div>}
  <ValidationError
    prefix="Email"
    field="email"
    errors={state.errors}
  />
</div>

<div>
  <label htmlFor="asunto">Asunto:</label>
  <input
    type="text"
    id="asunto"
    name="asunto"
    value={contacto.asunto}
    onChange={handleChange}
  />
  {errores.asunto && <div className="error-message">{errores.asunto}</div>}
</div>

<div>
  <label htmlFor="mensaje">Mensaje:</label>
  <textarea
    id="mensaje"
    name="mensaje"
    value={contacto.mensaje}
    onChange={handleChange}
  ></textarea>
  {errores.mensaje && <div className="error-message">{errores.mensaje}</div>}
</div>

<div className="consentimiento-container">
  <input
    type="checkbox"
    id="consentimiento"
    name="consentimiento"
    checked={contacto.consentimiento}
    onChange={handleChange}
  />
  <label htmlFor="consentimiento">Acepto los términos y condiciones.</label>
  {errores.consentimiento && <div className="error-message">{errores.consentimiento}</div>}
</div>

        <button type="submit" disabled={!contacto.consentimiento || state.submitting}>
          Enviar
        </button>

      </form>
    </div>
  );
};

export default Contactos;
