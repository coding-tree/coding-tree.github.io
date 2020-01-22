import React from 'react';
import Lottie from 'react-lottie';

import * as treeMedium from './tree-medium.json';

function TreeMedium({styles}) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: treeMedium.default,
  };
  return <Lottie style={styles} isClickToPauseDisabled={true} speed={1} options={options}></Lottie>;
}

export default TreeMedium;
