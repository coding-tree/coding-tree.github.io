import React, {useEffect, useMemo, useContext} from 'react';
import {DayContext} from '../contexts/DayContext';

export const withTimeOfDay = WrappedComponent => {
  return props => {
    const [dateTime, setDateTime] = useContext(DayContext);
    const getTimeFromLocalStorage = () => localStorage.getItem('timeOfDay');
    const memory = useMemo(() => getTimeFromLocalStorage(), [getTimeFromLocalStorage]);

    useEffect(() => {
      (dateTime === 'day' || dateTime === 'night') && setDateTime(memory || 'day');
    });

    const changeTimeOfDay = () => {
      setDateTime(prevTime => {
        const newDateTime = prevTime === 'day' ? 'dayToNight' : 'nightToDay';
        const localTime = prevTime === 'day' ? 'night' : 'day';
        localStorage.setItem('timeOfDay', localTime);
        return newDateTime;
      });
    };

    return (
      <WrappedComponent {...props} dateTime={dateTime} setDateTime={setDateTime} changeTimeOfDay={changeTimeOfDay} />
    );
  };
};
