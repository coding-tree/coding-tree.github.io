import React, {createContext, useState} from 'react';

export const ThemeContext = createContext('light');

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');
  const [dateTime, setDateTime] = useState('day');

  return <ThemeContext.Provider value={{theme, setTheme, dateTime, setDateTime}}>{children}</ThemeContext.Provider>;
};
