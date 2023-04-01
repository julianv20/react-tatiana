import React, { useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';

export const Formulario = ({ nextPage }) => {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const next = () => {
    nextPage(value);
  };

  return (
    <div>
      <input type="text" className="inputSiguiente" onChange={handleChange} />

      <div className="boton" onClick={() => next()}>
        <BsFillHeartFill className="corazon" />
      </div>
    </div>
  );
};
