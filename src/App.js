import './App.css';
import { MenuHeader } from './components/MenuHeader';
import { Cards } from './components/Cards';
import { LoadMore } from './components/LoadMore';
import { useState } from 'react';

function App() {
  // const [productsToShow, setProductsToShow] = useState(6)
  const [datos, estableceDatos] = useState('');

  // const hijoAPadre = (datosHijo) => {
  //   estableceDatos(datosHijo);
  //   console.log('estoy en el App.js');
  // }
  const entereDeMiClickFunction = () => {
    
  }

  return (
    <div className="App">
      <MenuHeader />
      <Cards />
      {/* <LoadMore hijoAPadre={hijoAPadre}/> */}
      <LoadMore entereDeMiClick={entereDeMiClickFunction} />
    </div>
  );
}

export default App;
