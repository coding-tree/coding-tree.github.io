import React, {useState} from 'react';
import Lottie from 'react-lottie';

import * as initial from './white_bird.json';
import * as hoverOn from './white_bird_hover_on.json';
import * as hoverOff from './white_bird_hover_off.json';

function Bird({setVisibility, right = 'initial', left = 'initial'}) {
  const animations = {
    INITIAL: 'initial',
    HOVERON: 'hoverOn',
    HOVEROFF: 'hoverOff',
  };
  const [animation, setAnimation] = useState(animations.INITIAL);

  const data = {
    initial,
    hoverOn,
    hoverOff,
  };

  const options = {
    loop: animation === animations.INITIAL,
    autoplay: true,
    animationData: data[animation].default,
  };

  return (
    <div
      onMouseOver={() => {
        setVisibility(true);
        setAnimation(animations.HOVERON);
      }}
      onMouseLeave={() => {
        setVisibility(false);
        setAnimation(animations.HOVEROFF);
      }}
      style={{position: 'absolute', height: '100%', width: '100%'}}>
      <Lottie
        style={{width: '100%', height: '100%', cursor: 'pointer'}}
        isClickToPauseDisabled={true}
        speed={1}
        eventListeners={[
          {
            eventName: 'complete',
            callback: () => animation === animations.HOVEROFF && setAnimation(animations.INITIAL),
          },
        ]}
        options={options}></Lottie>
    </div>
  );
}

export default Bird;
