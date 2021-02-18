import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import PaisListado from './PaisListado'
import Historico from './Historico'
import { Button } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import HomeIcon from '@material-ui/icons/Home'

function App() {
	return (
		<div>
			<Button
				variant="contained"
				color="default"
				startIcon={<HomeIcon />}
				href="../"
			>
				Listado general
			</Button>

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
