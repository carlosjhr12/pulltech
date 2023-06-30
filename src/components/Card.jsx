import React from 'react'
import './Card.scss'
import { IconButton, Button } from '@mui/material'
import { AddShoppingCart, ShoppingCart } from '@mui/icons-material'
import { CardContent, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './colorTheme.js'

export const Card = ({name, originalPrice, descount, available, finalPrice, img}) => {

  return (
	<div className='card'>
		<div className="image-info">
			<img src={img} alt="Imagen Producto" />
			<p>{available}</p>
		</div>
		<div className="description-info">
			<CardContent sx={{padding: 0}}>
				<Typography variant="h6" noWrap={true}>
					{name}
				</Typography>
				<Typography variant="p" color="text.secondary">
					Free Shipping
				</Typography>
			</CardContent>
			<div className="price-container">
				<div className="price">
					<p className='final-price'>{`$${finalPrice.toFixed(2)}`}</p>
					<p className="descount">{`${descount}%`}</p>
					<p className="original-price">{originalPrice}</p>
				</div>
				<ThemeProvider theme={theme}>
					<IconButton color='primary' sx={{ borderRadius: 1}}>
						<AddShoppingCart fontSize="small"/>
					</IconButton>
				</ThemeProvider>
			</div>
			<ThemeProvider theme={theme}>
				<Button color='primary' variant="contained" startIcon={<ShoppingCart />}>
					Buy Now
				</Button>
			</ThemeProvider>
		</div>
	</div>
  )
}
