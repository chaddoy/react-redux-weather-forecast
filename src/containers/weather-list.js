import React from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends React.Component {

	renderWeather( { city, list } ) {
		const name         = city.name;
		const temps        = list.map( weather => weather.main.temp );
		const pressure     = list.map( weather => weather.main.pressure );
		const humidity     = list.map( weather => weather.main.humidity );
		const { lon, lat } = city.coord;

		return (
			<tr key={ city.id }>
				<td><GoogleMap lon={ lon } lat={ lat } /></td>
				<td><Chart data={ temps } color="orange" units="K" /></td>
				<td><Chart data={ pressure } color="green" units="hPa" /></td>
				<td><Chart data={ humidity } color="black" units="%" /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map( this.renderWeather ) }
				</tbody>
			</table>
		);
	}

}

function mapStateToProps( { weather } ) {
	return { weather };
}

export default connect( mapStateToProps )( WeatherList );
