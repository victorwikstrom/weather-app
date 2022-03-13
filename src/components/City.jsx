import React from 'react';
import PropTypes from 'prop-types';

function City(cityProps) {
  const { city } = cityProps;

  return (
    <div>
      <div className='text-4xl leading-none uppercase break-words max-w-[112px]'>
        {city}
      </div>
    </div>
  );
}

City.propTypes = {
  city: PropTypes.string,
};

export default City;
