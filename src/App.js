import './App.css';
import { MenuHeader } from './components/MenuHeader';
import { Cards } from './components/Cards';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([])

  return (
    <div className="App">
      <MenuHeader />
      <Cards />
    </div>
  );
}

export default App;
