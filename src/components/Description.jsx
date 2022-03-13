import React from 'react';
import { useEffect, useState } from 'react';
import { getTemperatureText } from '../helpers';
import PropTypes from 'prop-types';

function Description(descriptionProps) {
  const { location, description, temperature } = descriptionProps;
  const [descriptionText, setDescriptionText] = useState('...');

  useEffect(() => {
    const tempDesc = getTemperatureText(temperature);
    const weatherDesc = description.toLowerCase();
    setDescriptionText(
      tempDesc +
        ' ' +
        (weatherDesc === 'overcast' ? 'gloomy' : weatherDesc) +
        ' in ' +
        location +
        ' right now!'
    );
  }, [descriptionProps]);

  return (
    <div>
      {' '}
      <div className='sm:leading-none max-w-[144px] leading-none sm:text-xl ml-3 py-2 '>
        {descriptionText}
      </div>
    </div>
  );
}

Description.propTypes = {
  location: PropTypes.string,
  description: PropTypes.string,
  temperature: PropTypes.number,
};

export default Description;
