import React, {lazy} from 'react';

const TreeLarge = lazy(() => import('./TreeLarge'));
const TreeDesktop = lazy(() => import('./TreeDesktop'));
const TreeMedium = lazy(() => import('./TreeMedium'));
const TreeMobile = lazy(() => import('./TreeMobile'));
const TreeSmallMobile = lazy(() => import('./TreeSmallMobile'));

function TreeContainer({rwd}) {
  const {isLargeDesktop, isDesktop, isTablet, isMobile, isSmallMobile} = rwd;
  const styles = {position: 'absolute', top: '0px', height: 'initial', zIndex: '-1'};
  return (
    <React.Fragment>
      {isLargeDesktop && <TreeLarge styles={styles}></TreeLarge>}
      {isDesktop && <TreeDesktop styles={styles}></TreeDesktop>}
      {isTablet && <TreeMedium styles={styles}></TreeMedium>}
      {isMobile && <TreeMobile styles={styles}></TreeMobile>}
      {isSmallMobile && <TreeSmallMobile styles={styles}></TreeSmallMobile>}
    </React.Fragment>
  );
}

export default TreeContainer;
