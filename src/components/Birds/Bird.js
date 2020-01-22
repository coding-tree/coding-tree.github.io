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

  const {isLargeDesktop, isDesktop} = rwd;

  const loadData = async () => {
    const [initialData, hoverOnData, hoverOffData] = await Promise.all([
      import(`./${bird}_initial.json`),
      import(`./${bird}_hover_on.json`),
      import(`./${bird}_hover_off.json`),
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
        if (!isLargeDesktop || !isDesktop) {
          setVisibility(true);
        }
      }}
      onMouseOver={() => {
        if (isLargeDesktop || isDesktop) {
          setVisibility(true);
          setAnimation(animations.HOVERON);
        }
      }}
      onMouseLeave={() => {
        if (isLargeDesktop || isDesktop) {
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
