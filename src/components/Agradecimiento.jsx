import React from 'react';
import { Formulario } from './Formulario';
import { GiLovers } from 'react-icons/gi';

export const Agradecimiento = ({ nextPage }) => {
  return (
    <div className="contenedor">
      <div>
        <h1>Agradecimiento</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          odio doloremque perferendis deleniti! Eum impedit ipsum eveniet
          accusantium blanditiis mollitia molestias, minima consequuntur et
          expedita. Ut eligendi accusamus facere tempore.
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
