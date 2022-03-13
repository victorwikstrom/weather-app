import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getWeatherIcon } from '../helpers';

function WeatherIcon(weatherIconProps) {
  const { description } = weatherIconProps;
  const [icon, setIcon] = useState('👾');

  console.log(weatherIconProps);

  useEffect(() => {
    setIcon(getWeatherIcon(description));
  }, [weatherIconProps]);

  return (
    <div>
      <div className='text-7xl sm:text-[6rem]'>{icon}</div>
    </div>
  );
}

WeatherIcon.propTypes = {
  weather: PropTypes.string,
};

export default WeatherIcon;
