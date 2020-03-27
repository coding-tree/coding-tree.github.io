import React from 'react';
import Lottie from 'react-lottie';

import * as backgroundMedium from './background-medium.json';

const Background = () => {
  const backgroundOptions = {
    loop: true,
    autoplay: true,
    animationData: backgroundMedium.default,
  };

  return <Lottie isClickToPauseDisabled={true} speed={1} options={backgroundOptions}></Lottie>;
};

export default Background;
