import React from "react";
import Lottie from "react-lottie";
import * as background2K from "./tree-2K.json";
import * as background2KNight from "./tree-2K-night.json";

const Background = ({ children, dateTime }) => {
  const animations = {
    day: background2K,
    night: background2KNight
  };

  const options = {
    loop: false,
    autoplay: false,
    animationData: animations[dateTime].default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
      <Lottie
        isClickToPauseDisabled={true}
        speed={1}
        options={options}
      ></Lottie>
      {children}
    </div>
  );
};

export default Background;
