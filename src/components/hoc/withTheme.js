import React, {useContext, useEffect, useMemo, useCallback} from 'react';
import {lightTheme, darkTheme} from '../themes';
import {ThemeContext} from '../contexts/ThemeContext';

export const withTheme = (WrappedComponent) => {
  return (props) => {
    const {theme, setTheme} = useContext(ThemeContext);
    const getMotiveFromLocalStorage = useCallback(() => localStorage.getItem('theme'), []);
    const motives = {
      lightTheme: lightTheme,
      darkTheme: darkTheme,
    };
    const memory = useMemo(() => getMotiveFromLocalStorage(), [getMotiveFromLocalStorage]);

    useEffect(() => {
      setTheme(memory || 'lightTheme');
    }, [memory, setTheme]);

    const changeMotive = () => {
      setTheme((theme) => {
        const newTheme = theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
        localStorage.setItem('theme', newTheme);
        return newTheme;
      });
    };

    return <WrappedComponent {...props} changeMotive={changeMotive} theme={theme} motive={motives[theme]} />;
  };
};
