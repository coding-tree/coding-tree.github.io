import React, {lazy} from 'react';
import {node, bool} from 'prop-types';

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
