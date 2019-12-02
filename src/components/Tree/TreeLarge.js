import React from 'react';
import Lottie from 'react-lottie';

import * as treeLarge from './tree-large.json';

function TreeLarge() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: treeLarge.default,
  };
  return (
    <Lottie
      style={{position: 'absolute', top: '0px', height: 'initial', zIndex: '-1'}}
      isClickToPauseDisabled={true}
      speed={1}
      options={options}></Lottie>
  );
}

export default TreeLarge;
