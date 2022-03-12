import React from 'react';
import { useState, useEffect } from 'react';
import { getTemperatureText, getWeatherIcon } from '../helpers';
import PropTypes from 'prop-types';

const Weather = (weatherProps) => {
  const { temperature, description } = weatherProps;
  const [weatherDescription, setWeatherDescription] = useState('');
  const [icon, setIcon] = useState('#');

  useEffect(() => {
    const createWeatherDesc = () => {
      if (temperature) {
        const temperatureText = getTemperatureText(temperature);
        const weatherText = description.toLowerCase();
        return temperatureText + ' ' + weatherText + ' right now!';
      } else {
        return 'Retriving data...';
      }
    };
    const createWeatherIcon = () => {
      if (description) {
        return getWeatherIcon(description);
      } else {
        return '#';
      }
    };
    setWeatherDescription(createWeatherDesc());
    setIcon(createWeatherIcon());
  }, [temperature, description]);

  return (
    <div className='flex flex-col flex-1 items-center mt-4'>
      <img className='w-2/3 min-w-[128px]' src={icon} alt='weather icon' />
      <div className='sm:text-lg mt-6 text-center sm:max-w-[75%]'>
        {weatherDescription}
      </div>
    </div>
  );
};

Weather.propTypes = {
  weather: {
    temperature: PropTypes.number,
    description: PropTypes.string,
  },
};

export default Weather;
