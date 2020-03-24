import React, { useState, useEffect, useMemo } from "react";

export const withTimeOfDay = WrappedComponent => {
  // eslint-disable-next-line react/display-name
  return props => {
    const [dateTime, setDateTime] = useState(null);
    const getTimeFromLocalStorage = () => localStorage.getItem("timeOfDay");

    const memory = useMemo(() => getTimeFromLocalStorage(), [
      getTimeFromLocalStorage
    ]);

    useEffect(() => {
      setDateTime(memory || "day");
    }, []);

    const changeTimeOfDay = () => {
      setDateTime(prevTime => {
        const newDateTime = prevTime === "day" ? "dayToNight" : "nightToDay";
        const localTime = prevTime === "day" ? "night" : "day";
        localStorage.setItem("timeOfDay", localTime);
        return newDateTime;
      });
    };

    return (
      <WrappedComponent
        {...props}
        dateTime={dateTime}
        setDateTime={setDateTime}
        changeTimeOfDay={changeTimeOfDay}
      />
    );
  };
};
