import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from 'react-router-dom'
import PaisListado from './PaisListado'

export default function BasicExample() {
	return (
		<Router>
			<div>
				<h2>Listado Paises Totales Casos Covid</h2>
				<ul>
					<li>
						<Link to="/">Inicio</Link>
					</li>
				</ul>

				<hr />

				{/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
				<Switch>
					<Route exact path="/">
						<PaisListado />
					</Route>
					<Route path="/historico/:id" children={<Child />} />
				</Switch>
			</div>
		</Router>
	)
}

// You can think of these components as "pages"
// in your app.

function Inicio() {
	return (
		<div>
			<h2>Inicio</h2>
		</div>
	)
}

function Historico() {
	return (
		<div>
			<h2>Listado histórico</h2>
		</div>
	)
}
function Child() {
	// We can use the `useParams` hook here to access
	// the dynamic pieces of the URL.
	let { id } = useParams()

	return (
		<div>
			<h3>ID: {id}</h3>
		</div>
	)
}
