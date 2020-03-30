import React, { useEffect, useState } from "react";
import { func, string } from "prop-types";

const MotiveSlider = ({
  title,
  theme,
  dateTime,
  changeMotive,
  changeTimeOfDay
}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dateTime && setLoading(false);
  }, [dateTime]);

  const changeTheme = () => {
    changeMotive();
    changeTimeOfDay();
  };

  const toggleSlider = () => {
    dateTime !== "dayToNight" &&
      dateTime !== "nightToDay" &&
      dateTime !== "maindayToNight" &&
      dateTime !== "mainnightToDay" &&
      changeTheme();
  };

  const changeClassNames = () =>
    isLoading ? "motive-slider preload" : "motive-slider";

  return (
    <div className={changeClassNames()}>
      <div onClick={toggleSlider} className="slider-background">
        <i className="fas fa-sun sun"></i>
        <i className="fas fa-moon moon"></i>
        <button
          style={{ marginLeft: theme === "lightTheme" ? "6px" : "30px" }}
          className="slider-button"
        ></button>
      </div>

      <h5>{title}</h5>
    </div>
  );
};

MotiveSlider.propTypes = {
  title: string.isRequired,
  theme: string.isRequired,
  setDateTime: func,
  dateTime: string,
  changeMotive: func.isRequired,
  changeTimeOfDay: func.isRequired
};

export default MotiveSlider;
