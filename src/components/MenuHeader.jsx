import React, { useState } from 'react';
import './MenuHeader.scss';
import logo from '../Images/Logo.jpeg';
import magnifyingIcon from '../Images/magnifying-glass.svg';
import allPrincipalIcon from '../Images/Icons/principalMenuAll.svg';
import computersPrincipalIcon from '../Images/Icons/principalMenuComputer.svg';
import telephonePrincipalIcon from '../Images/Icons/principalMenuTelephone.svg';
import accessoriesPrincipalIcon from '../Images/Icons/principalMenuAccessories.svg';
import otherPrincipalIcon from '../Images/Icons/principalMenuOthers.svg';
import ondemandPrincipalIcon from '../Images/Icons/principalMenuOndemand.svg';
import { useFetch } from '../hooks/useFetch';
import { Badge, Drawer, IconButton } from '@mui/material'
import { ShoppingCart  } from '@mui/icons-material';

export const MenuHeader = ({getProducts}) => {
	// const [first, setfirst] = useState(false)
	const myCategories =  ["electronics", "jewelery", "men's clothing", "women's clothing"];
	// const { products } = useFetch(`https://fakestoreapi.com/products/categories`);

  return (
	<header className='header'>
		<div className='header-up'>
			<img className='logo' src={logo} alt="Pulltech" />
			<div className="login">
				<a href="">Sign Up</a>
				<a href="">Login</a>
				<Badge badgeContent={1} color="error">
					<ShoppingCart color="action" />
				</Badge>				
				{/* <Drawer variant="permanent" anchor="right" open={false}>
					<div>pepe</div>
				</Drawer> */}				  
			</div>
		</div>
		<div className="header-down">
			<div className="line"></div>
			<input type="text" placeholder='Buscar' />
		</div>
		<div className="header-icons">
			<div className="principal-icon active">
				<img src={allPrincipalIcon} alt="All Icon" onClick={()=>getProducts('')} />
				<p>ALL</p>
			</div>
			<div className="principal-icon">
				<img src={computersPrincipalIcon} alt="Computers Icon" onClick={()=>getProducts("electronics")} />
				<p>{myCategories[0]}</p>
				{/* <p>COMPUTERS</p> */}
			</div>
			<div className="principal-icon">
				<img src={telephonePrincipalIcon} alt="Telephone Icon" onClick={()=>getProducts("jewelery")} />
				<p>{myCategories[1]}</p>
				{/* <p>TELEPHONE</p> */}
			</div>
			<div className="principal-icon">
				<img src={accessoriesPrincipalIcon} alt="Accessories Icon" onClick={()=>getProducts("men's clothing")} />
				<p>{myCategories[2]}</p>
				{/* <p>ACCESSORIES</p> */}
			</div>
			<div className="principal-icon">
				<img src={otherPrincipalIcon} alt="Other Icon" onClick={()=>getProducts("women's clothing")} />
				<p>{myCategories[3]}</p>
				{/* <p>OTHERS</p> */}
			</div>
			{/* <div className="principal-icon">
				<img src={ondemandPrincipalIcon} alt="Ondemand Icon" />
				<p>ON DEMAND</p>
			</div> */}
		</div>
	</header>
  )
}
