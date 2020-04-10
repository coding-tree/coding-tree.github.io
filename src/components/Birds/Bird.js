import React, {useState, useEffect, useCallback} from 'react';
import Lottie from 'react-lottie';
import {string, func, bool} from 'prop-types';

function Bird({birdType = 'bird', className, setVisibility, largeDevice}) {
  const animations = {
    INITIAL: 'initial',
    HOVERON: 'hoverOn',
    HOVEROFF: 'hoverOff',
  };
  const [animation, setAnimation] = useState(animations.INITIAL);

  const [initial, setInitial] = useState(null);
  const [hoverOn, setHoverOn] = useState(null);
  const [hoverOff, setHoverOff] = useState(null);

  const loadData = useCallback(async () => {
    const [initialData, hoverOnData, hoverOffData] = await Promise.all([
      import(`./${birdType}_initial.json`),
      import(`./${birdType}_hover_on.json`),
      import(`./${birdType}_hover_off.json`),
    ]);

    setInitial(initialData);
    setHoverOn(hoverOnData);
    setHoverOff(hoverOffData);
  }, [birdType]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const data = {
    initial: initial || {},
    hoverOn: hoverOn || {},
    hoverOff: hoverOff || {},
  };

  const options = {
    loop: animation === animations.INITIAL,
    autoplay: true,
    animationData: data[animation].default,
  };

  return (
    <div
      onClick={() => {
        if (!largeDevice) {
          setVisibility(true);
        }
      }}
      onMouseOver={() => {
        if (largeDevice) {
          setVisibility(true);
          setAnimation(animations.HOVERON);
        }
      }}
      onMouseLeave={() => {
        if (largeDevice) {
          setVisibility(false);
          setAnimation(animations.HOVEROFF);
        }
      }}
      className={'bird ' + className}>
      <Lottie
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

Bird.propTypes = {
  birdType: string,
  className: string.isRequired,
  largeDevice: bool.isRequired,
  setVisibility: func.isRequired,
};

export default Bird;
