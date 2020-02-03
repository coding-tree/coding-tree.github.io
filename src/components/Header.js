import React, {lazy} from 'react';

const Navigation = lazy(() => import('./Navigation'));
const NavigationMobile = lazy(() => import('./NavigationMobile'));

function Header({rwd, children}) {
  const {is2K, isLargeDesktop, isDesktop} = rwd;
  return (
    <header>
      <div className="logo-container">
        {is2K || isLargeDesktop || isDesktop ? <Navigation></Navigation> : <NavigationMobile></NavigationMobile>}
        {children}
      </div>
    </header>
  );
}

export default Header;
