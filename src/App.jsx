import React from 'react';
import { getWeatherData } from './apiCalls';
import { useState, useEffect } from 'react';
import Temperature from './components/Temperature';
import WeatherIcon from './components/WeatherIcon';
import Description from './components/Description';

const App = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState({
    temperature: null,
    description: null,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getWeatherData();
        setLocation(data.location.name);
        setWeather({
          temperature: data.current.temp_c,
          description: data.current.condition.text,
        });
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className='h-screen flex justify-center items-center text-left'>
      <div className='flex justify-between items-center border-2 rounded-lg pt-2 pb-1 px-3 shadow-lg sm:max-w-lg max-w-full'>
        {!error && !loading && (
          <>
            <Temperature temperature={weather.temperature} />
            <WeatherIcon description={weather.description} />
            <Description
              location={location}
              description={weather.description}
              temperature={weather.temperature}
            />
          </>
        )}
        {error && (
          <div>
            We got some problems with the weather widget at the moment...
          </div>
        )}
        {loading && !error && <div>Retriving weather data...</div>}
      </div>
    </div>
  );
};

export default App;
