import React from 'react';

import { Formulario } from './Formulario';
export const Saludo = ({ nextPage, error }) => {
  return (
    <div className="contenedor">
      <div>
        <h1>Mi amor</h1>
        <p>
          Por donde empezar, hemos vivido tantas cosas; tanto felices como
          tristes, hemos tenido discusiones pero es maravilloso que siempre hay
          un día nuevo en el que llega ese mensaje de “¿buenos días mi amor,
          como amaneciste? ” Espero que ese simple pero tan especial mensaje
          nunca deje de llegar. Si quieres continuar escribe el año en el que
          nos conocimos y dale al corazon.
        </p>
      </div>
      <Formulario nextPage={nextPage} /> {error != '' ? error : ''}
    </div>
  );
};
