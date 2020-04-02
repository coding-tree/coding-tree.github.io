import React, {createContext, useState} from 'react';

export const DayContext = createContext('light');

export const DayProvider = ({children}) => {
  const [dateTime, setDateTime] = useState('day');

  return <DayContext.Provider value={[dateTime, setDateTime]}>{children}</DayContext.Provider>;
};
