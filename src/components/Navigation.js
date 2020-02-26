import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation() {
  return (
    <nav id="desktop">
      <div className="left">
        <NavLink exact strict to="/">
          Strona główna
        </NavLink>
      </div>
      <h1>
        <img src="/logo_login.svg" alt="" />
      </h1>
      <div className="right">
        <NavLink exact strict to="/o-nas">
          Członkowie
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
