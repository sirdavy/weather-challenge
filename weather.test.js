const WeatherClient = require('./weatherClient');
const Weather = require('./weather');

describe('weather class', () => {

  it('loads the weather for Bristol', async () => {
    const client = new WeatherClient();
    const myWeather = new Weather(client);
    await myWeather.load('Bristol')
    expect(myWeather.getWeatherData().name).toEqual('Bristol') 
  });

  it('loads the weather for London', async () => {
    const client = new WeatherClient();
    const myWeather = new Weather(client);
    await myWeather.load('London')
    expect(myWeather.getWeatherData().name).toEqual('London') 
    // console.log(myWeather)
  });


  it("Adds brings weather", (done) => {
    const mockClient = {
      fetchWeatherData: jest.fn(), // This is a jest mock function
    };

    // Set the resolved value of the mock function.
    // We use `mockResolvedValue` and not `mockReturnValue` because this
    // is mocking an asynchronous method, which returns a promise.
    mockClient.fetchWeatherData.mockResolvedValueOnce({
      name: "Makers",
      number: "020 3817 8870",
    });

    const myWeather = new Weather(mockClient);
    myWeather.load('makers').then(() => {
      expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('makers');
      const result = myWeather.getWeatherData()
      expect(result.name).toEqual("Makers");
      expect(result.number).toEqual("020 3817 8870");
      done();

    });
  });







});
