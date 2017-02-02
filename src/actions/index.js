import axios from 'axios';

const API_KEY  = '66d62265a753c65658a37072f56cf091';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${ API_KEY }`;

export const FETCH_WEATHER ='FETCH_WEATHER';

export function fetchWeather(city) {
	const url     = `${ ROOT_URL }&q=${ city },ph`;
	const request = axios.get( url );

	return {
		type    : FETCH_WEATHER,
		payload : request
	};
}
