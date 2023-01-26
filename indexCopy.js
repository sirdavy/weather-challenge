const fetchWeather = (city) => {

const apiKey = require('./apiKey');
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

return fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    return weatherData // console.log(weatherData)
  });

// console.log('Requesting weather data');

}

module.exports = fetchWeather;
