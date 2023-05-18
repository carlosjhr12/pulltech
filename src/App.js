import './App.css';
import { MenuHeader } from './components/MenuHeader';
import { Cards } from './components/Cards';
import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';

function App() {
  const url = 'https://fakestoreapi.com/products';
  const { product } = useFetch(url);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  // const [misProductos, setMisProductos] = useState([]);

  const getProductsByCategories = (category) => {
    const urlCategoria = `${url}?category=${category}`;
    setCategoriaSeleccionada(category); // Actualizamos la categoría seleccionada
    return urlCategoria;
  }

  // const urlApi = 'https://fakestoreapi.com/products/category/jewelery'; // Get products in a specific category
  const urlCategoria = `${url}?category=${categoriaSeleccionada}`;
  console.log(urlCategoria)
  useFetch(urlCategoria);

  // useEffect(() => {
  //   if (categoriaSeleccionada) {
  //     const urlCategoria = `${url}?category=${categoriaSeleccionada}`;

  //     fetch(urlCategoria)
  //       .then(res => res.json())
  //       .then(data => setMisProductos(data))
  //       .catch(err => console.log(err));
  //   }
  // }, [categoriaSeleccionada]);

  return (
    <div className="App">
      <MenuHeader getProducts={getProductsByCategories} />
      <Cards products={product} />
    </div>
  );
}

export default App;
