import React from 'react';
import * as tree from './tree.json';
import Lottie from 'react-lottie';

export default function Test() {
  const treeOptions = {
    loop: true,
    autoplay: true,
    animationData: tree.default,
    rendererSettings: {
      // className: 'sun',
    },
  };

  return (
    <div>
      <Lottie isClickToPauseDisabled={true} speed={1} options={treeOptions}></Lottie>
    </div>
  );
}
