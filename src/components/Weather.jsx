import React from 'react';
import { useState, useEffect } from 'react';
import { getTemperatureText, getWeatherIcon } from '../helpers';

const Weather = ({ weather }) => {
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('#');

  useEffect(() => {
    const createWeatherDesc = () => {
      if (weather.temperature) {
        const temperatureText = getTemperatureText(weather.temperature);
        const weatherText = weather.description.toLowerCase();
        return temperatureText + ' ' + weatherText + ' right now!';
      } else {
        return 'Retriving data...';
      }
    };
    const createWeatherIcon = () => {
      if (weather.desc) {
        return getWeatherIcon(weather.desc);
      } else {
        return '#';
      }
    };
    setDescription(createWeatherDesc());
    setIcon(createWeatherIcon());
  }, [weather.temperature, weather.description]);

  return (
    <div className='flex flex-col flex-1 items-center mt-4'>
      <img
        className='w-2/3 min-w-[128px]'
        src={getWeatherIcon(weather.description)}
        alt=''
      />
      <div className='sm:text-lg mt-6 text-center sm:max-w-[75%]'>
        {description}
      </div>
    </div>
  );
};

export default Weather;
