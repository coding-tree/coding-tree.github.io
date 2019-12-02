import React, {lazy} from 'react';

const BackgroundLarge = lazy(() => import('./BackgroundLarge'));
const BackgroundDesktop = lazy(() => import('./BackgroundDesktop'));
const BackgroundMedium = lazy(() => import('./BackgroundMedium'));
const BackgroundMobile = lazy(() => import('./BackgroundMobile'));
const BackgroundSmallMobile = lazy(() => import('./BackgroundSmallMobile'));

const BackgroundContainer = ({rwd}) => {
  const {isLargeDesktop, isDesktop, isTablet, isMobile, isSmallMobile} = rwd;
  return (
    <div className="background">
      {isLargeDesktop && <BackgroundLarge></BackgroundLarge>}
      {isDesktop && <BackgroundDesktop></BackgroundDesktop>}
      {isTablet && <BackgroundMedium></BackgroundMedium>}
      {isMobile && <BackgroundMobile></BackgroundMobile>}
      {isSmallMobile && <BackgroundSmallMobile></BackgroundSmallMobile>}
    </div>
  );
};

export default BackgroundContainer;
