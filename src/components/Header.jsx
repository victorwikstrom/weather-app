import React from 'react';
import { getDate, getThermometerIcon } from '../helpers';
import PropTypes from 'prop-types';

const Header = (headerProps) => {
  const { city, temperature } = headerProps;
  const currentDate = getDate();
  const thermometerIcon = getThermometerIcon(temperature);

  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex flex-col items-start'>
        <div className='text-2xl md:text-3xl mb-1'>{city}</div>
        <div className='text-md'>{currentDate}</div>
      </div>
      <div>
        <div className='flex items-center md:ml-16 mb-2 -mr-4'>
          <div className='flex -mr-2'>
            <div className='text-4xl md:text-5xl'>{temperature}</div>
            <div className='text-2xl'>°</div>
          </div>
          <img
            className='h-16 w-auto'
            src={thermometerIcon}
            alt='temperature'
          />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  weather: {
    city: PropTypes.string,
    temperature: PropTypes.number,
  },
};

export default Header;
