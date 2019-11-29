import React, {forwardRef} from 'react';
import Lottie from 'react-lottie';

import * as background from './background.json';
// import * as backgroundLarge from './background-large.json';
// import * as backgroundMedium from './background-medium.json';
// import * as backgroundMobile from './background-mobile.json';
// import * as backgroundSmallMobile from './background-smallMobile.json';

const Background = forwardRef((props, ref) => {
  const backgroundOptions = {
    loop: true,
    autoplay: true,
    animationData: background.default,
  };
  console.log(ref);

  return <Lottie ref={ref} isClickToPauseDisabled={true} speed={1} options={backgroundOptions}></Lottie>;
});

export default Background;
