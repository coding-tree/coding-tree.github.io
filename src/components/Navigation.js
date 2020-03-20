import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav id="desktop">
      <div className="left">
        <NavLink exact strict to="/">
          Strona główna
        </NavLink>
        <NavLink exact strict to="/galeria">
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
  );
}

export default Navigation;
