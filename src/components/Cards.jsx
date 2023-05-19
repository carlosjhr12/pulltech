import { Card } from './Card';
import './Cards.scss'

export const Cards = ({products, onClickHandler}) => {
	const percent = 10;

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
