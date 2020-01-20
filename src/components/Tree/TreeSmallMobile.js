import React from 'react';
import Lottie from 'react-lottie';

import * as treeSmallMobile from './tree-smallMobile.json';

function TreeSmallMobile({styles}) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: treeSmallMobile.default,
  };
  return <Lottie style={styles} isClickToPauseDisabled={true} speed={1} options={options}></Lottie>;
}

export default TreeSmallMobile;
