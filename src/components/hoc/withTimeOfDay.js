import React, {useEffect, useMemo, useContext, useCallback} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

export const withTimeOfDay = (WrappedComponent) => {
  return (props) => {
    const {dateTime, setDateTime} = useContext(ThemeContext);
    const local = localStorage.getItem('timeOfDay');
    const getTimeFromLocalStorage = useCallback(() => local, [local]);
    const memory = useMemo(() => getTimeFromLocalStorage(), [getTimeFromLocalStorage]);

    useEffect(() => {
      (dateTime === 'day' || dateTime === 'night') && setDateTime(memory || 'day');
    }, [dateTime, memory, setDateTime]);

    const changeTimeOfDay = () => {
      setDateTime((prevTime) => {
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
