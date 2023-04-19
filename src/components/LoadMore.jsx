import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import './LoadMore.scss';

export const LoadMore = ({entereDeMiClick}) => {

	// const datos = "Esta es los datos del componente Padre al componente Hijo."

  return (
	<div className='load-more'>
		{/* <button onClick={() => hijoAPadre(datos)}>Load more</button> */}
		<button onClick={()=>{entereDeMiClick()}}>Load more</button>
	</div>
  )
}
