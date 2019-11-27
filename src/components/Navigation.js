import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation({documentWidth}) {
  console.log(documentWidth);
  return (
    <nav>
      <ul>
        <h1>
          <img src="/logo.svg" alt="" />
        </h1>
        <li>
          <NavLink exact strict to="/">
            {documentWidth < 896 ? <i className="fas fa-home"></i> : 'Strona główna'}
          </NavLink>
        </li>
        <li>
          <NavLink exact strict to="/o-nas">
            {documentWidth < 896 ? <i className="fas fa-users"></i> : 'O nas'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
