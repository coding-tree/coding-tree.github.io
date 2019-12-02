import React, {lazy} from 'react';

const TreeLarge = lazy(() => import('./TreeLarge'));
const TreeDesktop = lazy(() => import('./TreeDesktop'));
const TreeMedium = lazy(() => import('./TreeMedium'));
const TreeMobile = lazy(() => import('./TreeMobile'));
const TreeSmallMobile = lazy(() => import('./TreeSmallMobile'));

function TreeContainer({rwd}) {
  const {isLargeDesktop, isDesktop, isTablet, isMobile, isSmallMobile} = rwd;
  return (
    <React.Fragment>
      {isLargeDesktop && <TreeLarge></TreeLarge>}
      {isDesktop && <TreeDesktop></TreeDesktop>}
      {isTablet && <TreeMedium></TreeMedium>}
      {isMobile && <TreeMobile></TreeMobile>}
      {isSmallMobile && <TreeSmallMobile></TreeSmallMobile>}
    </React.Fragment>
  );
}

export default TreeContainer;
