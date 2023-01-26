const fetchWeather = require("./indexCopy.js");

class WeatherClient {

  constructor() {

  }

  fetchWeatherData(x){
    return fetchWeather(x);
    
  }

}


module.exports = WeatherClient;
