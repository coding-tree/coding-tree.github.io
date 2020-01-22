import React, {useState, useEffect} from 'react';
import Lottie from 'react-lottie';

function Bird({bird, setVisibility}) {
  const animations = {
    INITIAL: 'initial',
    HOVERON: 'hoverOn',
    HOVEROFF: 'hoverOff',
  };
  const [animation, setAnimation] = useState(animations.INITIAL);

  const [initial, setInitial] = useState(null);
  const [hoverOn, setHoverOn] = useState(null);
  const [hoverOff, setHoverOff] = useState(null);

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
