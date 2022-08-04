export default  function transformWeather(data: any) {
    return {
        city: data.name,
        country: data.sys.country,
        temp: data.main?.temp,
        humidity: data.main?.humidity,
        desc: data.weather[0].description,
        tempFeel: data.main?.feels_like,
        wind: data.wind?.speed
    }
}