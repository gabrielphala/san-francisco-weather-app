import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';

const getWeatherData = async () : Promise<any> => {
  const res = await fetch('http://api.weather.gov/gridpoints/MTR/84,105/forecast', {
    method: 'GET'
  })

  return await res.json()
}

const celsius = (f: number) => (f - 32) * 5/9;
const dec = (num: number) => num.toFixed(1)

const selectPeriod = (index: number, data: any) => {
  for (let i = 0; i < data.properties.periods.length; i++) {
    const item = data.properties.periods[i];
    
    if (item.number == index) return item;
  }

  return null;
}

function Home() {
  const [weatherData, setWeatherData] = useState(null) as any;

  useEffect(() => {
    (async () => {
      let data = await getWeatherData();

      let params = new URLSearchParams(location.search)
      
      setWeatherData(selectPeriod(parseInt(params.get('i') as string), data));
    })()
  }, []);

  return (
    weatherData ?
    <div className="weather">
      <div className="weather__title">
        <h1 style={{ display: 'flex', alignItems: 'center' }}>
          <svg style={{ width: '2.5rem', height: '2.5rem', marginRight: '1rem' }}>
            <use href="#globe"></use>
          </svg>
         <span> Globe<span className='light'>Weather</span></span>
        </h1>
        <p>Weather in San Francisco</p>
      </div>
      <div className="weather__main">
        <div className="weather__now weather__now__item">
          <div className="weather__now__item__icon" style={{ backgroundImage: `url('${weatherData.icon}')` }}></div>
          
          <div style={{ margin: '2rem 0' }}>
            <h4>{weatherData.name}</h4>
            <h4>{weatherData.shortForecast}</h4>
          </div>

          <h1>{dec(celsius(weatherData.temperature))}C</h1>
          <h4>{dec(weatherData.dewpoint.value)}C</h4>
        </div>
        <div className="weather__details" style={{marginTop: '2rem'}}>
          <Link to="/">
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <svg style={{ width: '2.5rem', height: '2.5rem', marginRight: '1rem' }}>
                <use href="#back"></use>
              </svg>
              <span>Back</span>
            </p>
          </Link>
          <h1>San Francisco</h1>
          <p>Stay ahead of the weather</p>
          <div className="weather__details__main" style={{marginTop: '2rem'}}>
            <p><strong>Summary</strong></p>
            <p style={{maxWidth: '50rem'}}>{weatherData.detailedForecast}</p>

            <p style={{marginTop: '2rem', maxWidth: '20rem'}}><strong>Temperature:</strong> {dec(celsius(weatherData.temperature))}C</p>
            <p><strong>Dew point:</strong> {dec(weatherData.dewpoint.value)}</p>
            <p><strong>Humidity:</strong> {dec(weatherData.relativeHumidity.value)}</p>
            <p><strong>Wind speed:</strong> {weatherData.windSpeed}</p>
            <p><strong>Wind direction:</strong> {weatherData.windDirection}</p>
          </div>
        </div>
      </div>
    </div>
      : 
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>
  )
}

export default Home
