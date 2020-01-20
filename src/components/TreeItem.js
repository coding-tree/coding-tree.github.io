import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import Bird from './Birds/Bird';

function TreeItem({title, children, top, left = 'initial', right = 'initial', isLeft = true}) {
  const [isVisible, setVisibility] = useState(false);

  const descAnimation = useSpring({
    width: isVisible ? '420px' : '0px',
    overflow: isLeft ? 'hidden' : '',
    delay: isVisible ? 0 : 0,
    transform: !isLeft ? 'rotate(180deg)' : 'initial',
    bottom: !isLeft ? '0px' : 'initial',
    border: isVisible ? '4px solid #fff' : '0px solid #fff',
  });
  const containerAnimation = useSpring({
    zIndex: isVisible ? 100 : 0,
    config: {duration: 200},
    left: isLeft ? '170px' : 'initial',
    right: !isLeft ? '170px' : 'initial',
    transform: !isLeft ? 'rotateZ(-180deg)' : 'initial',
  });

  return (
    <div style={{position: 'absolute', top, left, right, width: '10%', height: '10%'}}>
      <Bird setVisibility={setVisibility}></Bird>
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
