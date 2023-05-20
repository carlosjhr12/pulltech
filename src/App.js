import './App.css';
import { MenuHeader } from './components/MenuHeader';
import { Cards } from './components/Cards';
import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import { CircularProgress } from '@mui/material'

function App() {
  const baseUrl = 'https://fakestoreapi.com/products';
  const { products, loading } = useFetch(baseUrl);
  const [renderedProducts, setRenderedProducts] = useState(products);

  useEffect(()=>{
    setRenderedProducts(products);
  },[products]);

  const getProductsByCategories = (category) => {
    if(category === '') {
      setRenderedProducts(products);
      return;
    } 
    const productsByCategory = products.filter(prod => prod.category === category);
    setRenderedProducts(productsByCategory);
    return productsByCategory;
  }

  const getProductById = id => {
    // in this place I have the products ids
    console.log('id', id)
  }

  return (
    <div className="App">
      <MenuHeader getProducts={getProductsByCategories} />
      {
        loading 
          ? <CircularProgress />
          : <Cards products={renderedProducts} onClickHandler={getProductById}/>
      }      
    </div>
  );
}

export default App;
