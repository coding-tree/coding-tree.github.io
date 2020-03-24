import React, { useState, useEffect, useMemo } from "react";
import { lightTheme, darkTheme } from "../themes";

export const withTheme = WrappedComponent => {
  // eslint-disable-next-line react/display-name
  return props => {
    const [theme, setTheme] = useState("lightTheme");
    const getMotiveFromLocalStorage = () => localStorage.getItem("theme");
    const motives = {
      lightTheme: lightTheme,
      darkTheme: darkTheme
    };
    const memory = useMemo(() => getMotiveFromLocalStorage(), [
      getMotiveFromLocalStorage
    ]);

    useEffect(() => {
      setTheme(memory || "lightTheme");
    }, []);

    console.log(motives[theme]);

    const changeMotive = () => {
      setTheme(theme => {
        const newTheme = theme === "lightTheme" ? "darkTheme" : "lightTheme";
        localStorage.setItem("theme", newTheme);
        return newTheme;
      });
    };

    return (
      <WrappedComponent
        {...props}
        changeMotive={changeMotive}
        theme={theme}
        motive={motives[theme]}
      />
    );
  };
};
