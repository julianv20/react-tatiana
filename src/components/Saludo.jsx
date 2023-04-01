import React from 'react';

import { Formulario } from './Formulario';
export const Saludo = ({ nextPage, error }) => {
  return (
    <div className="contenedor">
      <div>
        <h1>Saludo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          odio doloremque perferendis deleniti! Eum impedit ipsum eveniet
          accusantium blanditiis mollitia molestias, minima consequuntur et
          expedita. Ut eligendi accusamus facere tempore.
        </p>
      </div>
      <Formulario nextPage={nextPage} /> {error != '' ? error : ''}
    </div>
  );
};
