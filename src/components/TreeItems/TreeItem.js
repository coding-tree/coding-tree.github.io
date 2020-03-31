import React, {useState, lazy} from 'react';
import {useSpring, animated} from 'react-spring';
import {easeCubicInOut} from 'd3-ease';
import {string, node, bool, oneOfType, arrayOf} from 'prop-types';

const TreeItemModal = lazy(() => import('./TreeItemModal'));
const Bird = lazy(() => import('../Birds'));

function TreeItem({title, children, className = 'left', bird, id = bird + '-bird', largeDevice, birdType}) {
  const [isVisible, setVisibility] = useState(false);

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
    <div className="bird-container" id={id}>
      <Bird
        className={className}
        birdType={birdType}
        largeDevice={largeDevice}
        bird={bird}
        setVisibility={setVisibility}></Bird>

      {largeDevice ? (
        <animated.div style={containerAnimation} className={'hover-container ' + className}>
          <animated.div style={descAnimation} className={'hover-description ' + className}>
            <h3>{title}</h3>
            <p>{children}</p>
          </animated.div>
        </animated.div>
      ) : (
        <TreeItemModal title={title} visibility={isVisible} setVisibility={setVisibility}>
          {children}
        </TreeItemModal>
      )}
    </div>
  );
}

TreeItem.propTypes = {
  title: string.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
  className: string,
  bird: string.isRequired,
  id: string,
  largeDevice: bool.isRequired,
  birdType: string,
};

export default TreeItem;
