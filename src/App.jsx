import { useState } from 'react';
import { Agradecimiento } from './components/Agradecimiento';
import { Razones } from './components/Razones';
import { Saludo } from './components/Saludo';
import Slice from './components/Slice';

function App() {
  const [value, setvalue] = useState(1);
  const [error, seterror] = useState('');

  const nextPage = (codigo) => {
    seterror('');
    if (codigo == 22 || codigo == 2015 || codigo == 'amor' || codigo == 1) {
      setvalue(codigo);
      seterror('');
    } else {
      seterror('Estas equivocada mi amor');
    }
  };

  return (
    <div className="App">
      {value == 1 ? <Saludo nextPage={nextPage} error={error} /> : ''}
      {value == 2015 ? <Razones nextPage={nextPage} error={error} /> : ''}
      {value == 22 ? <Agradecimiento nextPage={nextPage} error={error} /> : ''}
      {value == 'amor' ? <Slice nextPage={nextPage} /> : ''}
    </div>
  );
}

export default App;

// {value == 2012 ? (
//   <Razones nextPage={nextPage} />
// ) : (
//   <Saludo nextPage={nextPage} />
// )}

// {value == 22 ? (
//   <Agradecimiento nextPage={nextPage} />
// ) : (
//   <Saludo nextPage={nextPage} />
// )}
