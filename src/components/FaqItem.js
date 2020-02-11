import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {string} from 'prop-types';

function FaqItem({children, title}) {
  const [isVisible, toggleVisibility] = useState(false);
  const animatedDesc = useSpring({
    maxHeight: isVisible ? '400px' : '0px',
    config: {easing: 'ease-in-out'},
    padding: isVisible ? '10px 0px' : '0px 0px',
  });

  const handleChangeVisibility = () => {
    toggleVisibility(prev => !prev);
  };

  return (
    <div className="faq">
      <div className="container">
        <div onClick={handleChangeVisibility} className="faq-icon">
          <div>
            <i className="fas fa-circle"></i>
          </div>
          <button className="faq-title">{title}</button>
        </div>

        <animated.div className="faq-description" style={animatedDesc}>
          {children}
        </animated.div>
      </div>
    </div>
  );
}

FaqItem.propTypes = {
  children: string.isRequired,
  title: string.isRequired,
};

export default FaqItem;
