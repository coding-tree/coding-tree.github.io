import React, {lazy} from 'react';
import {node, bool} from 'prop-types';
import {useMedia} from './hooks/useMedia';

const Navigation = lazy(() => import('./Navigation'));
const NavigationMobile = lazy(() => import('./NavigationMobile'));

function Header({children}) {
  const largeDevice = useMedia('(min-width: 896px)');

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
  children: node.isRequired,
};

export default Header;
