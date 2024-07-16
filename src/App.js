import React, { useEffect, useState } from 'react';
import './style.css';
import json from './weather.json';

export default function App() {
  const [apiData, setApiData] = useState({});
  const [inputVal, setInputVal] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const { cities = [] } = json;

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = () => {
    setSubmitted(true);
    let selectedWeather = cities.find((itm) => itm.name === inputVal);
    console.log(selectedWeather);
    setWeatherData(selectedWeather);
  };

  console.log(cities);

  useEffect(() => {
    setApiData(cities);
  }, []);

  return (
    <div>
      <input onChange={(e) => handleInput(e)} />
      <button onClick={handleSubmit}>Submit</button>
      {submitted && inputVal !== '' && (
        <div>
          {weatherData &&
          weatherData.weather &&
          weatherData.weather.length > 0 ? (
            <div>{weatherData.weather[0].description}</div>
          ) : (
            <div>No data found </div>
          )}
        </div>
      )}
    </div>
  );
}
