import React, {useState, lazy} from 'react';
import {useSpring, animated} from 'react-spring';
import {easeCubicInOut} from 'd3-ease';
import {string, node, bool, oneOfType, arrayOf} from 'prop-types';
import {useMedia} from '../hooks/useMedia';

const BirdModal = lazy(() => import('./BirdModal'));
const Bird = lazy(() => import('../Birds/Bird'));

function BirdContainer({title, children, className = 'left', bird, id, birdType}) {
  const [isVisible, setVisibility] = useState(false);
  const largeDevice = useMedia('(min-width: 896px)');

  const descAnimation = useSpring({
    config: {duration: 300, easing: easeCubicInOut},
    delay: isVisible && 200,
    opacity: isVisible ? 1 : 0,
    willChange: 'opacity',
  });
  const containerAnimation = useSpring({
    config: {duration: 300, easing: easeCubicInOut},
    zIndex: isVisible ? 100 : -5,
    willChange: 'auto',
  });

  return (
    <div className={'bird-container ' + bird} id={id}>
      <Bird className={className} largeDevice={largeDevice} birdType={birdType} setVisibility={setVisibility}></Bird>

      {largeDevice ? (
        <animated.div style={containerAnimation} className={'hover-container ' + className}>
          <animated.div style={descAnimation} className={'hover-description ' + className}>
            <h3>{title}</h3>
            <p>{children}</p>
          </animated.div>
        </animated.div>
      ) : (
        <BirdModal title={title} visibility={isVisible} setVisibility={setVisibility}>
          {children}
        </BirdModal>
      )}
    </div>
  );
}

BirdContainer.propTypes = {
  title: string.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
  className: string,
  bird: string.isRequired,
  id: string,
  birdType: string,
};

export default BirdContainer;
