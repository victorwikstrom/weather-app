import React from 'react';
import sunCloud from '../assets/sun-cloud.svg';

function Weather() {
  return (
    <div className='flex flex-col flex-1 items-center mt-4'>
      <img className='w-2/3 min-w-[128px]' src={sunCloud} alt='' />
      <div className='text-lg mt-6'>Quite chilly, mostly sunny</div>
    </div>
  );
}

export default Weather;
