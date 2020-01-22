import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import Bird from './Birds/Bird';
import {easeBackInOut, easePolyIn, easeCubicInOut} from 'd3-ease';

function TreeItem({title, children, top, left = 'initial', right = 'initial', isLeft, bird}) {
  const [isVisible, setVisibility] = useState(false);

  isLeft = right === 'initial';

  const descAnimation = useSpring({
    delay: isVisible ? 0 : 0,
    config: {duration: 300, easing: easeCubicInOut},
    transform: !isLeft ? 'rotate(180deg)' : 'initial',
    bottom: !isLeft ? '-30px' : 'initial',
    opacity: isVisible ? 1 : 0,
  });
  const containerAnimation = useSpring({
    zIndex: isVisible ? 100 : 0,
    left: isLeft ? '100%' : 'initial',
    right: !isLeft ? '100%' : 'initial',
    transform: !isLeft ? 'rotateZ(-180deg)' : 'initial',
  });

  return (
    <div className="bird-container" style={{top, left, right}}>
      <Bird bird={bird} setVisibility={setVisibility}></Bird>
      <animated.div style={containerAnimation} className="hover-container">
        <animated.div style={descAnimation} className="hover-description">
          <h3>{title}</h3>
          <p>{children}</p>
        </animated.div>
      </animated.div>
    </div>
  );
}

export default TreeItem;
