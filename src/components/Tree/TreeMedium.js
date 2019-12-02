import React from 'react';
import Lottie from 'react-lottie';

import * as treeMedium from './tree-medium.json';

function TreeMedium() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: treeMedium.default,
  };
  return (
    <Lottie
      style={{position: 'absolute', top: '0px', height: 'initial', zIndex: '-1'}}
      isClickToPauseDisabled={true}
      speed={1}
      options={options}></Lottie>
  );
}

export default TreeMedium;
