import React from 'react';
import PropTypes from 'prop-types';

function Temperature(temperatureProps) {
  const { temperature } = temperatureProps;

  return (
    <div className='flex'>
      <div className='text-7xl sm:text-8xl'>{temperature}</div>
      <div className='text-2xl'>°</div>
    </div>
  );
}

Temperature.propTypes = {
  temperature: PropTypes.number,
};

export default Temperature;
