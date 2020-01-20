import React from 'react';
import Lottie from 'react-lottie';

import * as treeDesktop from './tree-desktop.json';

function TreeDesktop({styles}) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: treeDesktop.default,
  };
  return <Lottie style={styles} isClickToPauseDisabled={true} speed={1} options={options}></Lottie>;
}

export default TreeDesktop;
