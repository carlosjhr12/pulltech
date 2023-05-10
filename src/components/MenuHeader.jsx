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

export const MenuHeader = ({getAll, getComputers, getTelephones, getAccessories, getOthers}) => {
	// const [categories, setCategories] = useState('')
	// const myCategories =  ["electronics", "jewelery", "men's clothing", "women's clothing"];
	const { product } = useFetch(`https://fakestoreapi.com/products/categories`);

  return (
	<header className='header'>
		<div className='header-up'>
			<img className='logo' src={logo} alt="Pulltech" />
			<div className="login">
				<a href="">Sign Up</a>
				<a href="">Login</a>
				<img src={magnifyingIcon} alt="" />
			</div>
		</div>
		<div className="header-down">
			<div className="line"></div>
			<input type="text" placeholder='Buscar' />
		</div>
		<div className="header-icons">
			<div className="principal-icon active">
				<img src={allPrincipalIcon} alt="All Icon" onClick={getAll} />
				<p>ALL</p>
			</div>
			<div className="principal-icon">
				<img src={computersPrincipalIcon} alt="Computers Icon" onClick={getComputers} />
				<p>{product[0]}</p>
				{/* <p>COMPUTERS</p> */}
			</div>
			<div className="principal-icon">
				<img src={telephonePrincipalIcon} alt="Telephone Icon" onClick={getTelephones} />
				<p>{product[1]}</p>
				{/* <p>TELEPHONE</p> */}
			</div>
			<div className="principal-icon">
				<img src={accessoriesPrincipalIcon} alt="Accessories Icon" onClick={getAccessories} />
				<p>{product[2]}</p>
				{/* <p>ACCESSORIES</p> */}
			</div>
			<div className="principal-icon">
				<img src={otherPrincipalIcon} alt="Other Icon" onClick={getOthers} />
				<p>{product[3]}</p>
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
