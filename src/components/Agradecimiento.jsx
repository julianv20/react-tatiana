import React from 'react';
import { Formulario } from './Formulario';
import { GiLovers } from 'react-icons/gi';

export const Agradecimiento = ({ nextPage }) => {
  return (
    <div className="contenedor">
      <div>
        <h1>Mi amor</h1>
        <p>
          Angie Tatiana Venegas David, te puedo asegurar que desde el primer
          momento que te vi me enamoré, te amo desde hace tanto y se me hace
          increíble que este amor no se acabe al contrario sigue creciendo. Te
          amo con todo mi corazón y en mi siempre encontrarás refugio, amor y
          siempre te apoyaré en todo lo que pueda. Gracias por brindarme tanta
          feliciad, FELIZ CUMPLEAÑOS MI AMOR. Atentamente el amor de tu vida.
          Aprieta el siguiente icono
        </p>
      </div>
      {/* <Formulario nextPage={nextPage} /> */}
      <div className="iconSlice" onClick={() => nextPage('amor')}>
        {' '}
        <GiLovers className="corazon" />{' '}
      </div>
    </div>
  );
};
