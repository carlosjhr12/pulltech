import React from 'react'
import './Card.scss'
import Icon from '../Images/magnifying-glass.svg'

export const Card = ({name, originalPrice, descount, available, finalPrice, img}) => {

  return (
	<div className='card'>
		<div className="image-info">
			<img src={img} alt="Imagen Producto" />
			<p>{available}</p>
		</div>
		<div className="description-info">
			<div className="product-container">
				<h3 className='product-name'>{name}</h3>
				<p className='free-shipping'>Free Shipping</p>
			</div>
			<div className="price-container">
				<div className="price">
					<p className='final-price'>{`$${finalPrice.toFixed(2)}`}</p>
					<p className="descount">{`${descount}%`}</p>
					<p className="original-price">{originalPrice}</p>
				</div>
				<div className="addSeller">
					<img src={Icon} alt="Add seller" />
				</div>
			</div>
			<button>
				<img src={Icon} alt="Add seller" />
				<p>Buy Now</p>
			</button>
		</div>
	</div>
  )
}
