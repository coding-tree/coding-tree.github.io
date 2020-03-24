import React from "react";
import Lottie from "react-lottie";
import * as day from "./day.json";
import * as night from "./night.json";
import * as dayToNight from "./day-to-night.json";
import * as nightToDay from "./night-to-day.json";

import { string, func } from "prop-types";

const DayNight = ({ dateTime, setDateTime }) => {
  const background = {
    day,
    night,
    dayToNight,
    nightToDay
  };

  const options = {
    loop: dateTime === "day" || dateTime === "night",
    autoplay: true,
    viewBox: "",
    animationData: dateTime && background[dateTime].default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="background">
      <Lottie
        isClickToPauseDisabled={true}
        speed={1}
        options={options}
        eventListeners={[
          {
            eventName: "complete",
            callback: () =>
              setDateTime(prevState => {
                return prevState === "dayToNight" ? "night" : "day";
              })
          }
        ]}
      ></Lottie>
    </div>
  );
};

DayNight.propTypes = {
  dateTime: string,
  setDateTime: func.isRequired
};

export default DayNight;
