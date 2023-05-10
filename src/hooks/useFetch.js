import { useState, useEffect } from 'react'

export function useFetch(url) {
	const [product, setProduct] = useState([])
	// console.log('product', product);

	// const urlApi = 'https://fakestoreapi.com/products'; // Get all products
	// const urlApi = 'https://fakestoreapi.com/products/1'; // Get a single product
	// const urlApi = 'https://fakestoreapi.com/products?limit=5'; // Limit results
	// const urlApi = 'https://fakestoreapi.com/products?sort=desc'; // Sort results 'desc' or 'asc'
	// const urlApi = 'https://fakestoreapi.com/products/categories'; // Get all categories
	// const urlApi = 'https://fakestoreapi.com/products/category/jewelery'; // Get products in a specific category
	// const urlApi = 'https://fakestoreapi.com/products?sort=desc'; // Sort results 'desc' or 'asc'

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setProduct(data))
			.catch(err => console.log(err))
	}, []);

	return { product };

}
