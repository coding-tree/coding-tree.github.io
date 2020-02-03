import React from 'react';
import Lottie from 'react-lottie';
import * as background2K from './background-2k.json';

const Background = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: background2K.default,
  };
  return <Lottie isClickToPauseDisabled={true} speed={1} options={options}></Lottie>;
};

export default Background;
