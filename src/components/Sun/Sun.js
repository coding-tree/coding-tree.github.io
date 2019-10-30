import React from 'react';
import Lottie from 'react-lottie';
import * as animation from './background.json';

export default function Sun() {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    animationData: animation.default,
    rendererSettings: {
      // preserveAspectRatio: 'xMidYMid slice',
      className: 'sun',
    },
  };

  return <Lottie isClickToPauseDisabled={true} speed={1} options={bodymovinOptions}></Lottie>;
}
