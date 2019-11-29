import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useSpring, animated} from 'react-spring';
import * as easings from 'd3-ease';

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

function NavigationMobile() {
  const [isVisible, toggleMenu] = useState(false);
  const body = document.body;
  useEffect(() => {
    isVisible ? disableBodyScroll(body) : enableBodyScroll(body);
  });
  const date = new Date();

  const menuAnimation = useSpring({
    width: isVisible ? '100%' : '0%',
    height: isVisible ? '100%' : '0%',
    bottom: isVisible ? '0px' : '35px',
    right: isVisible ? '0px' : '35px',
    borderRadius: isVisible ? '0%' : '100%',
    opacity: isVisible ? 1 : 0,
    zIndex: isVisible ? 99 : 50,
    delay: isVisible ? 0 : 400,
    config: {duration: 500, easing: easings.easeBackInOut},
  });

  const textAnimation = useSpring({
    width: isVisible ? '200px' : '0px',
    opacity: isVisible ? 1 : 0,
    delay: isVisible ? 400 : 0,
  });

  return (
    <div id="navigation-mobile">
      <h1>
        <img src="/logo.svg" alt="" />
      </h1>
      <button onClick={() => toggleMenu(prev => !prev)} className="menu">
        <i className={isVisible ? 'fas fa-times' : 'fas fa-ellipsis-v'}></i>
      </button>

      <animated.nav style={menuAnimation}>
        <animated.h1 style={textAnimation}>
          <animated.img style={textAnimation} src="/logo.svg" alt="" />
        </animated.h1>
        <animated.div style={textAnimation}>
          <NavLink exact strict to="/">
            Strona główna
          </NavLink>
          <NavLink exact strict to="/o-nas">
            Członkowie
          </NavLink>
        </animated.div>
        <animated.footer style={textAnimation}>
          <p>Copyright &copy; {date.getFullYear()} | Coding Tree </p>
        </animated.footer>
      </animated.nav>
    </div>
  );
}

export default NavigationMobile;
