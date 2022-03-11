import React from 'react';
import temperature from '../assets/temperature.svg';

function Header() {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex flex-col items-start'>
        <div className='text-2xl md:text-3xl mb-1'>Gothenburg</div>
        <div className='text-md'>Tuesday, March 15th</div>
      </div>
      <div>
        <div className='flex items-center md:ml-16 mb-2'>
          <div className='flex'>
            <div className='text-4xl md:text-5xl'>8</div>
            <div className='text-2xl'>°</div>
          </div>
          <img
            className='h-12 ml-2 w-auto'
            src={temperature}
            alt='temperature'
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
