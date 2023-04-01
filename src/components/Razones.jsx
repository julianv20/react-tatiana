import React from 'react';
import { Formulario } from './Formulario';
export const Razones = ({ nextPage, error }) => {
  return (
    <div className="contenedor">
      <div>
        <h1>Mi amor</h1>
        <p>
          Eres una persona increíble, eres trabajadora, responsable, buena hija,
          una excelente novia y eres hermosa en todos los sentidos. Me
          encantaría que algun dia te pudieras ver con mis ojos para que
          entiendas lo maravillosa que eres, y jamas dudes de tus capacidades y
          de todo lo que puedes lograr. ahora escribe el dia que cumplimos meses
        </p>
      </div>
      <Formulario nextPage={nextPage} />
      {error != '' ? error : ''}
    </div>
  );
};
