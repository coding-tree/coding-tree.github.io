import React from 'react';
import Lottie from 'react-lottie';
import * as backgroundLarge from './background-large.json';

const Background = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: backgroundLarge.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie isClickToPauseDisabled={true} speed={1} options={options}></Lottie>;
};

export default Background;
