import React from 'react';
import Lottie from 'react-lottie';

import * as backgroundDesktop from './background-desktop.json';

const BackgroundDesktop = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: backgroundDesktop.default,
  };

  return <Lottie isClickToPauseDisabled={true} speed={1} options={options}></Lottie>;
};

export default BackgroundDesktop;
