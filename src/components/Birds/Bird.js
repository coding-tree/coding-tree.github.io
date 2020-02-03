import React, {useState, useEffect} from 'react';
import Lottie from 'react-lottie';

function Bird({bird, setVisibility, rwd}) {
  const animations = {
    INITIAL: 'initial',
    HOVERON: 'hoverOn',
    HOVEROFF: 'hoverOff',
  };
  const [animation, setAnimation] = useState(animations.INITIAL);

  const [initial, setInitial] = useState(null);
  const [hoverOn, setHoverOn] = useState(null);
  const [hoverOff, setHoverOff] = useState(null);

  const {is2K, isLargeDesktop, isDesktop} = rwd;
  const largeDevices = is2K || isLargeDesktop || isDesktop;

  const loadData = async () => {
    const [initialData, hoverOnData, hoverOffData] = await Promise.all([
      import(`./${bird}_bird_initial.json`),
      import(`./${bird}_bird_hover_on.json`),
      import(`./${bird}_bird_hover_off.json`),
    ]);

    setInitial(initialData);
    setHoverOn(hoverOnData);
    setHoverOff(hoverOffData);
  };

  useEffect(() => {
    loadData();
  }, []);

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
        if (!largeDevices) {
          setVisibility(true);
        }
      }}
      onMouseOver={() => {
        if (largeDevices) {
          setVisibility(true);
          setAnimation(animations.HOVERON);
        }
      }}
      onMouseLeave={() => {
        if (largeDevices) {
          setVisibility(false);
          setAnimation(animations.HOVEROFF);
        }
      }}
      className="bird">
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

export default Bird;
