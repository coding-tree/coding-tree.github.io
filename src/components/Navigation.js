import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation({children}) {
  const disableLink = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <nav id="desktop">
        <div className="left">
          <NavLink exact strict to="/">
            Strona główna
          </NavLink>
          <NavLink className="disabled" onClick={(e) => disableLink(e)} exact strict to="/galeria">
            Galeria
          </NavLink>
        </div>
        <h1>
          <img src="/logo_homepage.svg" alt="" />
        </h1>
        <div className="right">
          <NavLink exact strict to="/o-nas">
            Członkowie
          </NavLink>
          <NavLink exact strict to="/kontakt">
            Kontakt
          </NavLink>
        </div>
      </nav>
      {children}
    </>
  );
}

export default Navigation;
