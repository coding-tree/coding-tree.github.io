import React, {lazy} from 'react';

const Navigation = lazy(() => import('./Navigation'));
const NavigationMobile = lazy(() => import('./NavigationMobile'));

function Header({rwd, children}) {
  const {isLargeDesktop, isDesktop} = rwd;
  return (
    <header>
      <div className="logo-container">
        {isLargeDesktop || isDesktop ? <Navigation></Navigation> : <NavigationMobile></NavigationMobile>}
        {children}
      </div>
    </header>
  );
}

export default Header;
