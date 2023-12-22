import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import data from "./data"
import './App.css'
import { Link } from 'react-router-dom'

const getWeatherData = async () : Promise<any> => {
  const res = await fetch('http://api.weather.gov/gridpoints/MTR/84,105/forecast', {
    method: 'GET'
  })

  return await res.json()
}

const celsius = (f: number) => (f - 32) * 5/9;
const dec = (num: number) => num.toFixed(1)

function Home() {
  const [weatherData, setWeatherData] = useState(null) as any;
  const [today, setToday] = useState(null) as any;

  useEffect(() => {
    (async () => {
      let data = await getWeatherData();
      
      setWeatherData(data);

      setToday(data.properties.periods[0])
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
          <div className="weather__now__item__icon" style={{ backgroundImage: `url('${today.icon}')` }}></div>
          
          <div style={{ margin: '2rem 0' }}>
            <h4><Link to={`/view?i=${today.number}`}>{today.name}</Link></h4>
            <h4>{today.shortForecast}</h4>
          </div>

          <h1>{dec(celsius(today.temperature))}C</h1>
          <h4>{dec(today.dewpoint.value)}C</h4>
        </div>
        <div className="weather__upcoming">
          <h1>San Francisco this week</h1>
          <p>Stay ahead of the weather</p>
          <div className="weather__upcoming__list">
              { weatherData.properties.periods.map((item: any, i: number) => {
              if (i != 0) return <div key={item.number} className="weather__upcoming__item">
                <div className="weather__upcoming__item__icon" style={{ backgroundImage: `url('${item.icon}')` }}></div>
            
                <div style={{ margin: '.5rem 0' }}>
                  <h4><Link to={`/view?i=${item.number}`}>{item.name}</Link></h4>
                </div>

                <p>{dec(celsius(item.temperature))}C</p>
                {/* <h4>{dec(item.dewpoint.value)}C</h4> */}
              </div>
            }) }
          </div>
        </div>
      </div>
    </div>
    :
    <div className="loading" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span>Loading...</span>
    </div>
  )
}

export default Home
