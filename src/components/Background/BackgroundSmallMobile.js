import React from 'react';
import Lottie from 'react-lottie';
import * as backgroundSmallMobile from './background-smallMobile.json';

const Background = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: backgroundSmallMobile.default,
  };
  return <Lottie isClickToPauseDisabled={true} speed={1} options={options}></Lottie>;
};

export default Background;
