import React from 'react';
import Lottie from 'react-lottie';

import * as treeLarge from './tree-large.json';

function TreeLarge({styles}) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: treeLarge.default,
  };
  return <Lottie style={styles} isClickToPauseDisabled={true} speed={1} options={options}></Lottie>;
}

export default TreeLarge;
