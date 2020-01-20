import React from 'react';
import Lottie from 'react-lottie';

import * as treeMobile from './tree-mobile.json';

function TreeMobile({styles}) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: treeMobile.default,
  };
  return <Lottie style={styles} isClickToPauseDisabled={true} speed={1} options={options}></Lottie>;
}

export default TreeMobile;
