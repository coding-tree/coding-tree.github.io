import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

function TreeButton({title, children, top, left = 'initial', right = 'initial', isLeft = true}) {
  const [isVisible, setVisibility] = useState(false);

  const descAnimation = useSpring({
    width: isVisible ? '420px' : '0px',
    paddingLeft: isVisible ? '20px' : '0px',
    overflow: isLeft ? 'hidden' : '',
    delay: isVisible ? 250 : 0,
  });
  const arrowAnimation = useSpring({
    height: isVisible ? '36px' : '0px',
    opacity: isVisible ? 1 : 0,
    delay: isVisible ? 0 : 700,
    config: {duration: 300},
  });
  const containerAnimation = useSpring({
    zIndex: isVisible ? 100 : 0,
    config: {duration: 500},
  });

  return (
    <animated.div
      style={{top, left, right, transform: !isLeft && 'rotateZ(-180deg)', ...containerAnimation}}
      className="hover-container">
      <React.Fragment>
        <button
          onMouseLeave={() => setVisibility(false)}
          onMouseEnter={() => setVisibility(true)}
          className="hover"></button>
        <animated.div
          style={{...arrowAnimation, transform: isLeft ? 'rotateZ(-135deg)' : 'rotateZ(-45deg)'}}
          className="arrow"></animated.div>
      </React.Fragment>

      <animated.div
        style={{
          ...descAnimation,
          transform: !isLeft && 'rotate(180deg)',
          bottom: !isLeft && '-13px',
          top: !isLeft && 'initial',
        }}
        className="hover-description">
        <h3>{title}</h3>
        <p>{children}</p>
      </animated.div>
    </animated.div>
  );
}

export default TreeButton;
