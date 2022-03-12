import Header from './components/Header';
import Weather from './components/Weather';
import { getLocation, getWeather } from './apiCalls';
import { useState, useEffect } from 'react';

const App = () => {
  const [location, setLocation] = useState('...');
  const [weather, setWeather] = useState({
    temperature: null,
    description: null,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const location = await getLocation();
        const weather = await getWeather(location);
        setLocation(location);
        setWeather({
          temperature: weather.current.temperature,
          description: weather.current.weather_descriptions[0],
        });
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className='h-screen w-full flex justify-center items-center text-left'>
      <div className='w-full sm:max-w-[448px] sm:max-h-[512px] rounded-lg border-gray-light border-2 sm:p-8 p-4'>
        <Header city={location} temperature={weather.temperature} />
        <Weather weather={weather} />
      </div>
    </div>
  );
};

export default App;
