import React from 'react';
import { getDate, getThermometerIcon } from '../helpers';

const Header = ({ city, temperature }) => {
  const currentDate = getDate();

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
            src={getThermometerIcon(temperature)}
            alt='temperature'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
