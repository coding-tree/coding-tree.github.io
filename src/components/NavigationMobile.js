import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

function NavigationMobile() {
  const [isVisible, toggleMenu] = useState(false);
  const styles = isVisible
    ? {
        width: '100%',
        height: '100%',
      }
    : {};
  return (
    <div id="navigation-mobile">
      <h1>
        <img src="/logo.svg" alt="" />
      </h1>
      <button onClick={() => toggleMenu(true)} className="menu">
        <i className="fas fa-ellipsis-v"></i>
      </button>

      <nav style={styles}>
        <h1>
          <img src="/logo.svg" alt="" />
        </h1>
        <button className="close" onClick={() => toggleMenu(false)}>
          <i className="fas fa-times"></i>
        </button>
        <div>
          <NavLink exact strict to="/">
            Strona główna
          </NavLink>

          <NavLink exact strict to="/o-nas">
            Członkowie
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavigationMobile;
