import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useSpring, animated} from 'react-spring';
import {easeBackInOut} from 'd3-ease';

function NavigationMobile() {
  const [isVisible, toggleMenu] = useState(false);
  const date = new Date().getFullYear();

  const menuAnimation = useSpring({
    width: isVisible ? '100%' : '0%',
    height: isVisible ? '100%' : '0%',
    bottom: isVisible ? '0px' : '35px',
    right: isVisible ? '0px' : '35px',
    borderRadius: isVisible ? '0%' : '100%',
    opacity: isVisible ? 1 : 0,
    zIndex: isVisible ? 999 : 100,
    delay: isVisible ? 0 : 400,
    config: {duration: 500, easing: easeBackInOut},
  });

  const textAnimation = useSpring({
    width: isVisible ? '200px' : '0px',
    opacity: isVisible ? 1 : 0,
    delay: isVisible ? 400 : 0,
  });

  const handleMenuVisibility = () => {
    toggleMenu(prev => !prev);
  };

  return (
    <div id="navigation-mobile">
      <h1>
        <img src="/logo_homepage.svg" alt="" />
      </h1>
      <button onClick={handleMenuVisibility} className="menu">
        <i className={isVisible ? 'fas fa-times' : 'fas fa-ellipsis-v'}></i>
      </button>

      <animated.nav style={menuAnimation}>
        <animated.h1 style={textAnimation}>
          <animated.img style={textAnimation} src="/logo_homepage.svg" alt="" />
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
          <p>Copyright &copy; {date} | Coding Tree </p>
        </animated.footer>
      </animated.nav>
    </div>
  );
}

export default NavigationMobile;
