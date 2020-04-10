import React from 'react';
import {node} from 'prop-types';

function Header({children}) {
  return (
    <header>
      <div className="logo-container">{children}</div>
    </header>
  );
}

Header.propTypes = {
  children: node.isRequired,
};

export default Header;
