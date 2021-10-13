import React, { useState } from 'react'

const Home = () => {
	const [nbClick, setNbClick] = useState(0)

	const handlerClick = (event) => {
		setNbClick(nbClick+1)
	}

	return (<>
		<h1>Home Page</h1>
		<p>Nombre de click: {nbClick}</p>
		<div>
			<button onClick={handlerClick}>Cliquez ici</button>
		</div>
	</>)
}

export default Home