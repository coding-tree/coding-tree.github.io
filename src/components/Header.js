import React, {lazy} from 'react';

const Navigation = lazy(() => import('./Navigation'));
const NavigationMobile = lazy(() => import('./NavigationMobile'));

function Header({isDesktop, children}) {
  return (
    <header>
      <div className="logo-container">
        {isDesktop ? <Navigation></Navigation> : <NavigationMobile></NavigationMobile>}
        {children}
      </div>
    </header>
  );
}

export default Header;
