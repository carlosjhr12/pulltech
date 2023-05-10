import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Card } from './Card';
import './Cards.scss'

export const Cards = () => {

	const [productsToShow, setProductsToShow] = useState(6)
	const { product } = useFetch('https://fakestoreapi.com/products');
	const percent = 10;

	return (
		<main className='main'>
			<div className="cards">
				{
					product.map(prod => (
						<Card
							key={prod.id}
							name={prod.title}
							originalPrice={prod.price}
							descount={percent}
							available="Available in stock"
							finalPrice={prod.price-prod.price/percent}
							img={prod.image}
						/>
					))
				}
			</div>
		</main>
	)
}
