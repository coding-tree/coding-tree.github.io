import React, {lazy, forwardRef} from 'react';

const Background = lazy(() => import('./Background'));
const BackgroundLarge = lazy(() => import('./BackgroundLarge'));
const BackgroundMedium = lazy(() => import('./BackgroundMedium'));

const BackgroundContainer = forwardRef(({rwd}, ref) => {
  const {isLargeDesktop, isDesktop, isTablet, isMobile, isSmallMobile} = rwd;
  return (
    <div className="background">
      {isLargeDesktop && <Background ref={ref}></Background>}
      {isDesktop && <BackgroundLarge ref={ref}></BackgroundLarge>}
      {isTablet && <BackgroundMedium ref={ref}></BackgroundMedium>}
      {isMobile && <BackgroundLarge ref={ref}></BackgroundLarge>}
      {isSmallMobile && <BackgroundLarge ref={ref}></BackgroundLarge>}
    </div>
  );
});

export default BackgroundContainer;
