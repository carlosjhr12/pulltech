import { Card } from './Card';
import './Cards.scss'

export const Cards = ({products}) => {
	const percent = 10;

	return (
		<main className='main'>
			<div className="cards">
				{
					products.map(prod => (
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
