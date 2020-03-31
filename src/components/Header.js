import React, {lazy} from 'react';
import {node, bool} from 'prop-types';

const Navigation = lazy(() => import('./Navigation'));
const NavigationMobile = lazy(() => import('./NavigationMobile'));

function Header({largeDevice, children}) {
  return (
    <header>
      <div className="logo-container">
        {largeDevice ? <Navigation></Navigation> : <NavigationMobile></NavigationMobile>}
        {children}
      </div>
    </header>
  );
}

Header.propTypes = {
  largeDevice: bool.isRequired,
  children: node.isRequired,
};

export default Header;
