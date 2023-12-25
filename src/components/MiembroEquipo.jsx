// MiembroEquipo.jsx

import React from 'react';

const MiembroEquipo = ({ imagen, nombre, especialidad }) => {
  return (
    <div className="miembro-equipo">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{especialidad}</p>
    </div>
  );
};

export default MiembroEquipo;
