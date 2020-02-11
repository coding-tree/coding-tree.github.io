import React, {lazy} from 'react';
import {object} from 'prop-types';

const Background2K = lazy(() => import('./Background2K'));
const BackgroundLarge = lazy(() => import('./BackgroundLarge'));
const BackgroundDesktop = lazy(() => import('./BackgroundDesktop'));
const BackgroundMedium = lazy(() => import('./BackgroundMedium'));
const BackgroundMobile = lazy(() => import('./BackgroundMobile'));
const BackgroundSmallMobile = lazy(() => import('./BackgroundSmallMobile'));

const BackgroundContainer = ({rwd}) => {
  const {is2K, isLargeDesktop, isDesktop, isTablet, isMobile, isSmallMobile} = rwd;
  return (
    <div className="background">
      {is2K && <Background2K></Background2K>}
      {isLargeDesktop && <BackgroundLarge></BackgroundLarge>}
      {isDesktop && <BackgroundDesktop></BackgroundDesktop>}
      {isTablet && <BackgroundMedium></BackgroundMedium>}
      {isMobile && <BackgroundMobile></BackgroundMobile>}
      {isSmallMobile && <BackgroundSmallMobile></BackgroundSmallMobile>}
    </div>
  );
};

BackgroundContainer.propTypes = {
  rwd: object.isRequired,
};

export default BackgroundContainer;
