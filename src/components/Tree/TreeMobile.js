import React from 'react';
import Lottie from 'react-lottie';

import * as treeMobile from './tree-mobile.json';

function TreeMobile() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: treeMobile.default,
  };
  return (
    <Lottie
      style={{position: 'absolute', top: '0px', height: 'initial', zIndex: '-1'}}
      isClickToPauseDisabled={true}
      speed={1}
      options={options}></Lottie>
  );
}

export default TreeMobile;
