const WeatherClient = require("./weatherClient.js");

class Weather {

  constructor(client) {
    this.weatherData = null;
    this.client = client
}

//   load(place) {
//    this.client.fetchWeatherData(place)
//      .then((data) => {
//       this.weatherData = data;
//      })
// }

load(place) {
  return new Promise((resolve, reject) => {
    this.client.fetchWeatherData(place)
      .then(data => {
        this.weatherData = data;
        resolve();
      })
      .catch(err => reject(err));
  });
}


  getWeatherData() {
    return this.weatherData;
  }


}

module.exports = Weather;