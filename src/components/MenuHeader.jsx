import React from 'react';
import './MenuHeader.scss';
import logo from '../Images/Logo.jpeg';
import Icon from '../Images/magnifying-glass.svg'


export const MenuHeader = () => {
  return (
	<header className='header'>
		<div className='header-up'>
			<img className='logo' src={logo} alt="Pulltech" />
			<div className="login">
				<a href="">Sign Up</a>
				<a href="">Login</a>
				<img src={Icon} alt="" />
			</div>
		</div>
		<div className="header-down">
			<div className="line"></div>
			<input type="text" placeholder='Buscar' />
		</div>
	</header>
  )
}
