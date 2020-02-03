import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

function FaqItem({children, title}) {
  const [isVisible, toggleVisibility] = useState(false);
  const animatedDesc = useSpring({
    maxHeight: isVisible ? '400px' : '0px',
    config: {easing: 'ease-in-out'},
    padding: isVisible ? '10px 0px' : '0px 0px',
  });

  return (
    <div className="faq">
      <div className="container">
        <div onClick={() => toggleVisibility(!isVisible)} className="faq-icon">
          <div>
            <i className="fas fa-circle"></i>
          </div>
          <button className="faq-title" onClick={() => toggleVisibility(!isVisible)}>
            {title}
          </button>
        </div>

        <animated.div className="faq-description" style={animatedDesc}>
          {children}
        </animated.div>
      </div>
    </div>
  );
}

export default FaqItem;
