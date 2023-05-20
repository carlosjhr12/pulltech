import { useState, useEffect } from 'react'

export function useFetch(url) {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(false)

	// const urlApi = 'https://fakestoreapi.com/products'; // Get all products
	// const urlApi = 'https://fakestoreapi.com/products/1'; // Get a single product
	// const urlApi = 'https://fakestoreapi.com/products?limit=5'; // Limit results
	// const urlApi = 'https://fakestoreapi.com/products?sort=desc'; // Sort results 'desc' or 'asc'
	// const urlApi = 'https://fakestoreapi.com/products/categories'; // Get all categories
	// const urlApi = 'https://fakestoreapi.com/products/category/jewelery'; // Get products in a specific category
	// const urlApi = 'https://fakestoreapi.com/products?sort=desc'; // Sort results 'desc' or 'asc'

	useEffect(() => {
		setLoading(true)

		fetch(url)
			.then(res => res.json())
			.then(data => {
				setLoading(false)
				setProducts(data)
			})
			.catch(err => {
				setLoading(false)
				console.log(err)
			})
	}, [url]);

	return { products, loading };

}
