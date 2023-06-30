import { Card } from './Card';
import './Cards.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchAllProducts } from '../features/slices/productSlice';

export const Cards = ({products, onClickHandler}) => {
	const dispatch = useDispatch();
	const percent = 10;
	// const productsState = useSelector(state => state.product);
  	// console.log('productsState', productsState);

	// console.log('fetchAllProducts', fetchAllProducts)

	// useEffect(()=>{
	// 	// setRenderedProducts(products);
	// 	dispatch(fetchAllProducts())
	// },[]);

	return (
		<main className='main'>
			<div className="cards">
				{
					products.map(prod => (
						<div key={prod.id} onClick={() => onClickHandler(prod.id)}>
							<Card								
								name={prod.title}
								originalPrice={prod.price}
								descount={percent}
								available="Available in stock"
								finalPrice={prod.price-prod.price/percent}
								img={prod.image}
							/>
						</div>
					))
				}
			</div>
		</main>
	)
}
