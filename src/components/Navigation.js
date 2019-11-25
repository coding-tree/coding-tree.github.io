import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <h1>Coding Tree</h1>
      <ul>
        <li>
          <NavLink exact strict to="/">
            Strona główna
          </NavLink>
        </li>
        <li>
          <NavLink exact strict to="/o-nas">
            O nas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
