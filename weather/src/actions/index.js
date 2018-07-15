import axios from 'axios';

// OpenWeatherMap
const API_KEY = '1fd2cbc184287216813f4ccfd8044535';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


const NEWYORK_DATA_API = 'https://rawgit.com/CruiseAndy/708d29f8e09e72ae7ff78c988ddd6f72/raw/f04484d64a0a68068daa0d0acb2d282fd790ff1a/NewYork.json';
const TAIWAN_DATA_API = 'https://rawgit.com/CruiseAndy/5beddecfc3e733bef627819950bdbcc6/raw/246766737af94a1c287fd31068dec1bd131d7943/Taiwan.json';
const LONDAN_DATA_API = 'https://rawgit.com/CruiseAndy/dc8e0f4c3cfc66edb984646c7c0c341e/raw/3529594f472b751ff40c40d5c9dbbac9dedbb0d7/Londan.json';
const WEATHER_DATA_API = [NEWYORK_DATA_API, TAIWAN_DATA_API, LONDAN_DATA_API];

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    // const url = `${ROOT_URL}&q=${city},us`;

    const url = WEATHER_DATA_API.shift();

    console.log(`url = ${url}`);
    const request = axios.get(url);

    console.log('Request:', request);

    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}