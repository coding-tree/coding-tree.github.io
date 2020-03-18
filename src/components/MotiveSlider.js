import React from 'react';
import {lightTheme, darkTheme} from './themes';
import {object, func, string} from 'prop-types';

const MotiveSlider = ({title, motive, toggleMotive, setDateTime, dateTime}) => {
  const changeMotive = () => {
    const newTheme = motive === lightTheme ? darkTheme : lightTheme;
    const newDateTime = dateTime === 'day' ? 'dayToNight' : 'nightToDay';
    setDateTime(newDateTime);
    return toggleMotive(newTheme);
  };

  return (
    <div>
      <div
        onClick={() => dateTime !== 'dayToNight' && dateTime !== 'nightToDay' && changeMotive()}
        className="slider-background">
        <button style={{marginLeft: motive === lightTheme ? '2px' : '22px'}} className="slider-button"></button>
      </div>
      <input hidden type="checkbox" />
      <h5>{title}</h5>
    </div>
  );
};

MotiveSlider.propTypes = {
  title: string.isRequired,
  motive: object.isRequired,
  toggleMotive: func.isRequired,
  setDateTime: func.isRequired,
  dateTime: string.isRequired,
};

export default MotiveSlider;
