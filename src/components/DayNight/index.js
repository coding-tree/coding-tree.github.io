import React from "react";
import Lottie from "react-lottie";
import * as mainday from "./main-day.json";
import * as mainnight from "./main-night.json";
import * as maindayToNight from "./main-day-to-night.json";
import * as mainnightToDay from "./main-night-to-day.json";
import * as day from "./day.json";
import * as dayToNight from "./day-to-night.json";
import * as nightToDay from "./night-to-day.json";
import * as night from "./night.json";

import { string, func } from "prop-types";

const DayNight = ({ dateTime = "day", setDateTime }) => {
  const background = {
    mainday,
    mainnight,
    maindayToNight,
    mainnightToDay,
    day,
    night,
    dayToNight,
    nightToDay
  };

  const options = {
    loop:
      dateTime === "day" ||
      dateTime === "night" ||
      dateTime === "mainday" ||
      dateTime === "mainnight",
    autoplay: true,
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
