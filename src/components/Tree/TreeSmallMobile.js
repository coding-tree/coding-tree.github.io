import React from 'react';
import Lottie from 'react-lottie';

import * as treeSmallMobile from './tree-smallMobile.json';

function TreeSmallMobile() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: treeSmallMobile.default,
  };
  return (
    <Lottie
      style={{position: 'absolute', top: '0px', height: 'initial', zIndex: '-1'}}
      isClickToPauseDisabled={true}
      speed={1}
      options={options}></Lottie>
  );
}

export default TreeSmallMobile;
