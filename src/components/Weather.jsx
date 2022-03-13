import React from 'react';
import { useState, useEffect } from 'react';
import { getTemperatureText, getWeatherIcon } from '../helpers';
import PropTypes from 'prop-types';

const Weather = (weatherProps) => {
  const { temperature, description } = weatherProps;
  const [weatherDescription, setWeatherDescription] =
    useState('Retriving data...');
  const [icon, setIcon] = useState('#');

  useEffect(() => {
    if (temperature) {
      const temperatureText = getTemperatureText(temperature);
      const weatherText = description.toLowerCase();
      setWeatherDescription(
        temperatureText + ' ' + weatherText + ' right now!'
      );
    }

    if (description) {
      setIcon(getWeatherIcon(description));
    }
  }, [weatherProps]);

  return (
    <div className='flex flex-col flex-1 items-center mt-4'>
      <div className='text-8xl sm:text-[8rem] my-4'>{icon}</div>
      <div className='sm:text-lg mt-6 text-center sm:max-w-[75%]'>
        {weatherDescription}
      </div>
    </div>
  );
};

Weather.propTypes = {
  weather: PropTypes.object,
};

export default Weather;
