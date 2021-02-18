import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'
import { Button } from '@material-ui/core'
import './PaisListado.css'
import AddIcon from '@material-ui/icons/Add'
export default class PaisListado extends React.Component {
	state = {
		paises: [],
	}

	componentDidMount() {
		axios.get(`https://api.covid19api.com/summary`).then((res) => {
			var paises = res.data.Countries
			this.setState({ paises })
		})
	}

	render() {
		return (
			<div style={{ height: '80%', width: '90%' }}>
				<TableContainer component={Paper}>
					<Table
						aria-label="a dense table"
						size="small"
						style={{ width: '90%' }}
					>
						<TableHead>
							<TableRow>
								<TableCell>País</TableCell>
								<TableCell align="right">Total confirmados</TableCell>
								<TableCell align="right">Total Fallecidos</TableCell>
								<TableCell align="right">Total Recuperados</TableCell>
								<TableCell align="right">Acciones</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.state.paises.map((row) => (
								<TableRow key={row.Country}>
									<TableCell component="th" scope="row">
										{row.Country}
									</TableCell>
									<TableCell align="right">{row.TotalConfirmed}</TableCell>
									<TableCell align="right">{row.TotalDeaths}</TableCell>
									<TableCell align="right">{row.TotalRecovered}</TableCell>
									<TableCell align="right">
										<Button
											variant="contained"
											color="primary"
											href="#"
											startIcon={<AddIcon />}
											onClick={() => {
												window.location = 'historico/' + row.Country
											}}
										></Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		)
	}
}
