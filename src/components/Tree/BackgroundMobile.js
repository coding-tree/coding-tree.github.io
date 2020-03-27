import React from 'react';
import Lottie from 'react-lottie';
import * as backgroundMobile from './background-mobile.json';

const Background = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: backgroundMobile.default,
  };
  return <Lottie isClickToPauseDisabled={true} speed={1} options={options}></Lottie>;
};

export default Background;
