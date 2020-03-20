import React from "react";
import { lightTheme, darkTheme } from "./themes";
import { object, func, string } from "prop-types";

const MotiveSlider = ({
  title,
  motive,
  toggleMotive,
  setDateTime,
  dateTime
}) => {
  const changeMotive = () => {
    const newTheme = motive === lightTheme ? darkTheme : lightTheme;
    const newDateTime = dateTime === "day" ? "dayToNight" : "nightToDay";
    setDateTime(newDateTime);
    return toggleMotive(newTheme);
  };

  return (
    <div className="motive-slider">
      <div
        onClick={() =>
          dateTime !== "dayToNight" &&
          dateTime !== "nightToDay" &&
          changeMotive()
        }
        className="slider-background"
      >
        <i className="fas fa-sun sun"></i>
        <i className="fas fa-moon moon"></i>
        <button
          style={{ marginLeft: motive === lightTheme ? "6px" : "30px" }}
          className="slider-button"
        ></button>
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
  dateTime: string.isRequired
};

export default MotiveSlider;
