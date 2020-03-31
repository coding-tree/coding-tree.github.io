import React, {useContext, useEffect, useMemo} from 'react';
import {lightTheme, darkTheme} from '../themes';
import {ThemeContext} from '../contexts/ThemeContext';

export const withTheme = WrappedComponent => {
  return props => {
    const [theme, setTheme] = useContext(ThemeContext);
    const getMotiveFromLocalStorage = () => localStorage.getItem('theme');
    const motives = {
      lightTheme: lightTheme,
      darkTheme: darkTheme,
    };
    const memory = useMemo(() => getMotiveFromLocalStorage(), [getMotiveFromLocalStorage]);

    useEffect(() => {
      setTheme(memory || 'lightTheme');
    }, []);

    const changeMotive = () => {
      setTheme(theme => {
        const newTheme = theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
        localStorage.setItem('theme', newTheme);
        return newTheme;
      });
    };

    return <WrappedComponent {...props} changeMotive={changeMotive} theme={theme} motive={motives[theme]} />;
  };
};
