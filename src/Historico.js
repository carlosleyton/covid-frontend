import React, { useState } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { TablePagination } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'
import './PaisListado.css'
import { useParams } from 'react-router-dom'
import { withRouter } from 'react-router'

class Historico extends React.Component {
	// We can use the `useParams` hook here to access
	// the dynamic pieces of the URL.
	constructor(props) {
		super(props)

		this.state = {
			dias: [],
			errorMessage: null,
			pais_nombre: null,
		}
	}

	componentDidMount() {
		const id = this.props.match.params.id
		axios
			.get(`https://api.covid19api.com/country/` + id)
			.then((response) =>
				this.setState({ dias: response.data, pais_nombre: id }),
			)
			.catch((error) => {
				this.setState({ errorMessage: error.message })
				console.error('Se detectó un error: ', error)
			})
	}

	render() {
		const { errorMessage } = this.state
		return (
			<div>
				<h3>Detalle Histórico Pais: {this.state.pais_nombre}</h3>
				<div style={{ height: '80%', width: '95%' }}>
					<TableContainer component={Paper}>
						<Table
							aria-label="a dense table"
							size="small"
							style={{ width: '90%' }}
						>
							<TableHead>
								<TableRow>
									<TableCell align="right">Casos Activos</TableCell>
									<TableCell align="right">Casos Confirmados</TableCell>
									<TableCell align="right">Muertes</TableCell>
									<TableCell align="right">Recuperaciones</TableCell>
									<TableCell align="right">Fecha</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.state.dias.map((row) => (
									<TableRow key={row.Date}>
										<TableCell align="right">{row.Active}</TableCell>
										<TableCell align="right">{row.Confirmed}</TableCell>
										<TableCell align="right">{row.Deaths}</TableCell>
										<TableCell align="right">{row.Recovered}</TableCell>
										<TableCell align="right">{row.Date}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</div>
		)
	}
}
export default withRouter(Historico)
