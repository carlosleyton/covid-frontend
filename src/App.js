import React from 'react'
import './App.css'
import { Link, Route, Switch } from 'react-router-dom'
import PaisListado from './PaisListado'
import Historico from './Historico'

const Home = () => (
	<div>
		<h2>Inicio</h2>
	</div>
)
function App() {
	return (
		<div>
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li>
						<Link to="/">Inicio</Link>
					</li>
				</ul>
			</nav>

			<Switch>
				<Route exact path="/">
					<PaisListado />
				</Route>
				<Route path="/historico/:id" children={<Historico />} />
			</Switch>
		</div>
	)
}

export default App
